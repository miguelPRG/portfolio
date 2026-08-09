import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, Lock } from 'lucide-react';
import { motion } from '@/lib/motion';
import { launchedProjects } from '@/data/portfolio';

const LaunchedProjects: React.FC = () => (
  <section id="products" className="relative px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <span className="font-mono text-sm uppercase tracking-widest text-emerald-400">
          Real-world work
        </span>
        <h2 className="mt-3 text-3xl font-bold text-zinc-50 sm:text-4xl">
          Launched Products
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          Products I have taken from an idea to a working release, built around
          real users and real operational needs.
        </p>
      </motion.div>

      <div className="space-y-8">
        {launchedProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm lg:grid lg:grid-cols-[1.35fr_1fr]"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block min-h-64 overflow-hidden bg-zinc-900 lg:min-h-105"
              aria-label={`Open the ${project.title} live demo`}
            >
              <img
                src={project.image}
                alt={`${project.title} product dashboard`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-transparent" />
            </a>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {project.status}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                  <Lock className="h-3.5 w-3.5" /> Private source code
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-zinc-50 sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 border-l-2 border-emerald-500/50 pl-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                  <BriefcaseBusiness className="h-4 w-4 text-emerald-400" /> My contribution
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {project.contribution}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Explore live demo <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-zinc-500">
        Source code and selected implementation details are private to protect
        intellectual property and user data.
      </p>
    </div>
  </section>
);

export default LaunchedProjects;
