import React from 'react';
import { motion } from '@/lib/motion';
import { Layout, Server, Wrench, Boxes } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const icons = [Layout, Server, Wrench, Boxes];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 px-6 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-mono text-purple-400 tracking-widest uppercase">
            Tech Stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-zinc-50">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, ci) => {
            const Icon = icons[ci];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-colors hover:border-purple-500/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </span>
                  <h3 className="text-lg font-bold text-zinc-50">
                    {cat.category}
                  </h3>
                </div>

                <p className="min-h-12 text-sm leading-relaxed text-zinc-400 mb-6">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: 0.15 + si * 0.06 }}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-300 transition-colors group-hover:border-white/15 group-hover:bg-white/[0.07]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
