import { config } from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';

config({ path: new URL('./.env', import.meta.url), quiet: true });

const requiredEnv = [
  'PORT',
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL',
  'CONTACT_TO_EMAIL',
];
const originEnv = process.env.CLIENT_ORIGINS ?? process.env.CLIENT_ORIGIN;
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (!originEnv) {
  missingEnv.push('CLIENT_ORIGINS or CLIENT_ORIGIN');
}

if (missingEnv.length > 0) {
  throw new Error(`Missing variables in server/.env: ${missingEnv.join(', ')}`);
}

const app = express();
const port = Number(process.env.PORT);
let allowedOrigins;

if (!Number.isInteger(port) || port < 1 || port > 65_535) {
  throw new Error('PORT in server/.env must be a valid port number.');
}

try {
  allowedOrigins = originEnv.split(',').map((value) => new URL(value.trim()).origin);
} catch {
  throw new Error(
    'CLIENT_ORIGINS must contain complete URLs, for example http://localhost:3000.',
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

  if (!origin || !allowedOrigins.includes(origin)) {
    console.warn('[contact] Request blocked by CORS', {
      origin: origin ?? 'missing',
      allowedOrigins,
    });
    return response.status(403).json({ error: 'Origin not allowed.' });
  }

  response.setHeader('Access-Control-Allow-Origin', origin);
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

async function sendResendEmail({ to, subject, text, html, replyTo }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to,
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend rejected the message (${response.status}): ${errorBody.slice(0, 1_000)}`);
  }

  return response.json();
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

    // These values belong to Resend and must remain server-side.
    const { CONTACT_TO_EMAIL } = process.env;

    const ownerText = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const ownerHtml = `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
    `;
    const confirmationText = `Hi ${name},\n\nThanks for contacting me. I received your message and will get back to you soon.\n\nYour message:\n${message}`;
    const confirmationHtml = `
      <h2>Thanks for contacting me, ${escapeHtml(name)}!</h2>
      <p>I received your message and will get back to you soon.</p>
      <hr>
      <p><strong>Your message:</strong></p>
      <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
    `;

    console.info('[contact] Sending notification and confirmation through Resend');

    try {
      const [ownerResult, confirmationResult] = await Promise.all([
        sendResendEmail({
          to: [CONTACT_TO_EMAIL],
          replyTo: email,
          subject: `Portfolio message from ${name}`,
          text: ownerText,
          html: ownerHtml,
        }),
        sendResendEmail({
          to: [email],
          replyTo: CONTACT_TO_EMAIL,
          subject: 'Thanks for contacting my portfolio',
          text: confirmationText,
          html: confirmationHtml,
        }),
      ]);

      console.info('[contact] Message sent successfully', {
        ownerMessageId: ownerResult.id,
        confirmationMessageId: confirmationResult.id,
      });
      return response.status(201).json({ ok: true });
    } catch (error) {
      console.error('[contact] Failed to contact Resend', error);
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
