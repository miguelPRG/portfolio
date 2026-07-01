import { config } from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';

config({ path: new URL('./.env', import.meta.url), quiet: true });

const requiredEnv = [
  'PORT',
  'CLIENT_ORIGIN',
  'BREVO_API_KEY',
  'CONTACT_TO_EMAIL',
];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  throw new Error(`Missing variables in server/.env: ${missingEnv.join(', ')}`);
}

const app = express();
const port = Number(process.env.PORT);
let allowedOrigin;

if (!Number.isInteger(port) || port < 1 || port > 65_535) {
  throw new Error('PORT in server/.env must be a valid port number.');
}

try {
  allowedOrigin = new URL(process.env.CLIENT_ORIGIN).origin;
} catch {
  throw new Error(
    'CLIENT_ORIGIN must be a complete URL, for example http://localhost:3000.',
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(254),
  message: z.string().trim().min(10).max(5_000),
});

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1_000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages. Please try again later.' },
});

function checkCors(request, response, next) {
  const origin = request.get('origin');

  if (origin !== allowedOrigin) {
    console.warn('[contact] Request blocked by CORS', {
      origin: origin ?? 'missing',
      allowedOrigin,
    });
    return response.status(403).json({ error: 'Origin not allowed.' });
  }

  response.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Vary', 'Origin');

  if (request.method === 'OPTIONS') {
    return response.sendStatus(204);
  }

  next();
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

if (process.env.TRUST_PROXY) {
  app.set('trust proxy', Number(process.env.TRUST_PROXY));
}

app.disable('x-powered-by');
app.use(express.json({ limit: '10kb' }));

app.get('/api/hello', checkCors, (_request, response) => {
  response.json({ message: 'Hello World!' });
});

app.options('/api/contact', checkCors);
app.post(
  '/api/contact',
  checkCors,
  contactLimiter,
  async (request, response) => {
    const parsed = contactSchema.safeParse(request.body);

    if (!parsed.success) {
      console.warn('[contact] Invalid form data', {
        issues: parsed.error.issues.map(({ path, message }) => ({
          field: path.join('.'),
          message,
        })),
      });
      return response.status(400).json({ error: 'Invalid form data.' });
    }

    // These values come from the contact form.
    const { name, email, message } = parsed.data;

    // These values belong to Brevo and must remain server-side.
    const { BREVO_API_KEY, CONTACT_TO_EMAIL } = process.env;

    console.info('[contact] Sending message through Brevo');

    try {
      const brevoResponse = await fetch(
        'https://api.brevo.com/v3/smtp/email',
        {
          method: 'POST',
          headers: {
            'api-key': BREVO_API_KEY,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            sender: {
              name: 'Portfolio',
              email: CONTACT_TO_EMAIL,
            },
            to: [{ email: CONTACT_TO_EMAIL }],
            // Replies go to the visitor who submitted the form.
            replyTo: { name, email },
            subject: `Portfolio message from ${name}`,
            textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            htmlContent: `
              <h2>New portfolio message</h2>
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
            `,
          }),
        },
      );

      if (!brevoResponse.ok) {
        const errorBody = await brevoResponse.text();
        console.error('[contact] Brevo rejected the message', {
          status: brevoResponse.status,
          response: errorBody.slice(0, 1_000),
        });
        return response.status(502).json({ error: 'Could not send message.' });
      }

      console.info('[contact] Message sent successfully', {
        status: brevoResponse.status,
      });
      return response.status(201).json({ ok: true });
    } catch (error) {
      console.error('[contact] Failed to contact Brevo', error);
      return response.status(502).json({ error: 'Could not send message.' });
    }
  },
);

app.listen(port, (error) => {
  if (error) {
    console.error(`Could not start email API on port ${port}:`, error.message);
    process.exitCode = 1;
    return;
  }

  console.log(`Email API running at http://localhost:${port}`);
});
