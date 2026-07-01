import React from 'react';
import { Mail, Code2, Heart } from 'lucide-react';
import { Github, Linkedin } from '@/components/SocialIcons';
import { profile } from '@/data/portfolio';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const Footer: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg text-zinc-50">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 rounded-lg">
              <Code2 className="h-5 w-5 text-white" />
            </span>
            miguelPRG<span className="text-blue-400">.dev</span>
          </div>
          <p className="mt-4 text-sm text-zinc-400 max-w-xs leading-relaxed">
            {profile.role} crafting modern, scalable web experiences. Open to
            new opportunities and collaborations.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-zinc-200 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-zinc-200 mb-4">Connect</h4>
          <div className="flex gap-3">
            {[
              { icon: Github, href: profile.github },
              { icon: Linkedin, href: profile.linkedin },
              { icon: Mail, href: `mailto:${profile.email}` },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-blue-500/50 transition-all"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm text-zinc-500 flex items-center gap-1.5">
          Built with <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />{' '}
          using React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
