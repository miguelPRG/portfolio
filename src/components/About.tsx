import React from 'react';
import { motion } from '@/lib/motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { timeline } from '@/data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-mono text-blue-400 tracking-widest uppercase">
            My Journey
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-zinc-50">
            About Me
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I'm a full-stack developer who believes great software is built at
            the intersection of clean architecture, thoughtful UX, and
            relentless attention to detail. I thrive on shipping products that
            make a real impact.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isEducation = item.title.includes('Degree');
              const Icon = isEducation ? GraduationCap : Briefcase;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 ring-4 ring-zinc-950">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                  </div>

                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
                      <span className="text-xs font-mono text-blue-400">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="text-sm text-purple-300">{item.org}</p>
                      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
