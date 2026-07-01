import React from 'react';
import { motion } from '@/lib/motion';
import { Mail, ArrowDown, MapPin } from 'lucide-react';
import { Github, Linkedin } from '@/components/SocialIcons';
import { profile } from '@/data/portfolio';
import TypingEffect from './TypingEffect';

const Hero: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-50 leading-tight">
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="mt-4 text-2xl sm:text-3xl font-semibold text-zinc-300 h-10">
            <TypingEffect words={profile.typingRoles} />
          </div>

          <p className="mt-6 text-lg text-zinc-400 max-w-lg leading-relaxed">
            {profile.bio}
          </p>

          <div className="mt-6 flex items-center gap-2 text-zinc-400">
            <MapPin className="h-4 w-4" /> {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('projects')}
              className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-shadow"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="px-7 py-3 rounded-xl font-semibold text-zinc-100 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>

          <div className="mt-8 flex gap-3">
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
                className="p-3 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="p-1.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-zinc-950"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('projects')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-zinc-300"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
};

export default Hero;
