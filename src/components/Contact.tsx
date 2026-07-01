import React, { useState } from 'react';
import { motion } from '@/lib/motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Github, Linkedin } from '@/components/SocialIcons';
import { profile } from '@/data/portfolio';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent!', {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch {
      toast.error('Something went wrong', {
        description: 'Please try again or email me directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition';

  return (
    <section id="contact" className="relative py-24 px-6 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-mono text-purple-400 tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-zinc-50">
            Let's Work Together
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: Github, label: 'GitHub', value: '@miguelPRG', href: profile.github },
              { icon: Linkedin, label: 'LinkedIn', value: 'miguelPRG', href: profile.linkedin },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-zinc-900/40 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <span className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                  <c.icon className="h-5 w-5 text-blue-400" />
                </span>
                <div>
                  <p className="text-xs text-zinc-500">{c.label}</p>
                  <p className="text-sm text-zinc-200 font-medium">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-3 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 space-y-4"
          >
            <div>
              <input placeholder="Your name" className={inputCls} {...register('name')} />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Your email"
                type="email"
                className={inputCls}
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
            <div>
              <textarea
                placeholder="Your message"
                rows={5}
                className={`${inputCls} resize-none`}
                {...register('message')}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/25 disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
