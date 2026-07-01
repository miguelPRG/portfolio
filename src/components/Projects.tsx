import React from 'react';
import { motion } from '@/lib/motion';
import {
  Star,
  GitFork,
  ExternalLink,
  ArrowUpRight,
  Globe,
  Loader2,
} from 'lucide-react';
import { Github } from '@/components/SocialIcons';
import { useGithubProjects } from '@/hooks/useGithubProjects';

const SkeletonCard: React.FC = () => (
  <div className="rounded-2xl border border-white/10 bg-zinc-900/40 overflow-hidden animate-pulse">
    <div className="h-40 bg-white/5" />
    <div className="p-6 space-y-3">
      <div className="h-5 w-2/3 bg-white/10 rounded" />
      <div className="h-3 w-full bg-white/5 rounded" />
      <div className="h-3 w-5/6 bg-white/5 rounded" />
      <div className="flex gap-2 pt-2">
        <div className="h-6 w-16 bg-white/5 rounded-md" />
        <div className="h-6 w-16 bg-white/5 rounded-md" />
      </div>
      <div className="h-px bg-white/10 my-2" />
      <div className="flex justify-between">
        <div className="h-4 w-20 bg-white/5 rounded" />
        <div className="h-4 w-12 bg-white/5 rounded" />
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const { projects, loading, isLive } = useGithubProjects();

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-mono text-blue-400 tracking-widest uppercase">
            Featured Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-zinc-50">
            Pinned Projects
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            A selection of my pinned GitHub repositories showcasing full-stack
            craftsmanship across the modern web.
          </p>

          <div className="mt-5 flex items-center justify-center">
            {loading ? (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-zinc-400">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                Fetching live data from GitHub…
              </span>
            ) : isLive ? (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live data from GitHub API
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-amber-500/30 bg-amber-500/10 text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Showing cached project data
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : projects.map((p, i) => (
                <motion.div
                  key={`${p.title}-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`group relative rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm overflow-hidden ${
                    p.featured ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div
                    className={`h-48 bg-linear-to-br ${p.gradient} relative flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px]" />
                    <div className="relative z-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                      <Github className="h-12 w-12 text-white/40 group-hover:scale-110 transition-transform" />
                      {!p.image && (
                        <div>
                          <p className="text-sm font-semibold text-white/85">
                            {p.title}
                          </p>
                          <p className="mt-1 text-xs font-mono text-white/45">
                            {p.tech.slice(0, 3).join(' · ')}
                          </p>
                        </div>
                      )}
                    </div>
                    {p.image && (
                      <img
                        src={p.image}
                        alt={`Screenshot of ${p.title}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 p-2 rounded-lg bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                      aria-label={`Open ${p.title} on GitHub`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-zinc-50">{p.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed min-h-15">
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-zinc-400 text-sm">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-amber-400" /> {p.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" /> {p.forks}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300"
                          >
                            Demo <Globe className="h-3.5 w-3.5" />
                          </a>
                        )}
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300"
                        >
                          Code <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/miguelPRG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10 transition-colors font-medium"
          >
            <Github className="h-5 w-5" /> See all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
