import { Project, projects as fallbackProjects } from '@/data/portfolio';

const USERNAME = 'miguelPRG';

const gradients = [
  'from-blue-500/20 to-purple-500/20',
  'from-emerald-500/20 to-teal-500/20',
  'from-violet-500/20 to-fuchsia-500/20',
  'from-orange-500/20 to-amber-500/20',
  'from-rose-500/20 to-pink-500/20',
  'from-cyan-500/20 to-blue-500/20',
];

interface RestRepo {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  languages_url: string;
  fork: boolean;
}

interface PinnedRepo {
  owner: string;
  repo: string;
  link: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
}

interface BerryPinnedRepo {
  author: string;
  name: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
}

function titleCase(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

async function fetchJson<T>(url: string, timeoutMs = 8000): Promise<T> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return (await res.json()) as T;
  } finally {
    clearTimeout(t);
  }
}

async function fetchLanguages(languagesUrl: string): Promise<string[]> {
  try {
    const langs = await fetchJson<Record<string, number>>(languagesUrl, 5000);
    return Object.keys(langs).slice(0, 5);
  } catch {
    return [];
  }
}

function mapRestRepo(repo: RestRepo, index: number, tech: string[]): Project {
  return applyProjectPresentation({
    repository: repo.name,
    title: titleCase(repo.name),
    description:
      repo.description || 'A project built with passion and clean code.',
    tech: tech.length ? tech : repo.language ? [repo.language] : ['Code'],
    github: repo.html_url,
    demo: repo.homepage || undefined,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    gradient: gradients[index % gradients.length],
    featured: index === 0,
  }, repo.name);
}

function applyProjectPresentation(
  project: Project,
  repository: string
): Project {
  const configured = fallbackProjects.find(
    (item) =>
      item.repository.toLocaleLowerCase() === repository.toLocaleLowerCase() ||
      (repository.toLocaleLowerCase() === 'classroomreservation' &&
        item.repository.toLocaleLowerCase() === 'classroomate')
  );

  if (!configured) return project;

  return {
    ...project,
    title: configured.title,
    github: configured.github,
    demo: configured.demo ?? project.demo,
    image: configured.image,
  };
}

async function fetchPinnedRepoList(): Promise<PinnedRepo[]> {
  try {
    const pinned = await fetchJson<BerryPinnedRepo[]>(
      `https://pinned.berrysauce.dev/get/${USERNAME}`
    );

    if (Array.isArray(pinned) && pinned.length > 0) {
      return pinned.map((repo) => ({
        owner: repo.author,
        repo: repo.name,
        link: `https://github.com/${repo.author}/${repo.name}`,
        description: repo.description,
        language: repo.language,
        stars: repo.stars,
        forks: repo.forks,
      }));
    }
  } catch {
    /* try the secondary pinned-repository service */
  }

  const pinned = await fetchJson<PinnedRepo[]>(
    `https://gh-pinned-repos.egoist.dev/?username=${USERNAME}`
  );

  if (Array.isArray(pinned) && pinned.length > 0) {
    return pinned;
  }

  throw new Error('No pinned repos found');
}

/** Get pinned repo names, then enrich them with the official REST API. */
async function fetchPinnedProjects(): Promise<Project[]> {
  const pinned = await fetchPinnedRepoList();

  const detailed = await Promise.all(
    pinned.slice(0, 6).map(async (p, i) => {
      try {
        const repo = await fetchJson<RestRepo>(
          `https://api.github.com/repos/${p.owner}/${p.repo}`
        );
        const tech = await fetchLanguages(repo.languages_url);
        return mapRestRepo(repo, i, tech);
      } catch {
        // Fall back to data from the pinned endpoint itself
        return applyProjectPresentation({
          repository: p.repo,
          title: titleCase(p.repo),
          description: p.description || 'A pinned GitHub project.',
          tech: p.language ? [p.language] : ['Code'],
          github: p.link,
          stars: p.stars ?? 0,
          forks: p.forks ?? 0,
          gradient: gradients[i % gradients.length],
          featured: i === 0,
        }, p.repo);
      }
    })
  );

  return detailed;
}

export interface GithubProjectsResult {
  projects: Project[];
  isLive: boolean;
}

/** Tries live pinned repos, then the last known pinned list. */
export async function getGithubProjects(): Promise<GithubProjectsResult> {
  try {
    const pinned = await fetchPinnedProjects();
    if (pinned.length) return { projects: pinned, isLive: true };
  } catch {
    /* continue to next strategy */
  }

  return { projects: fallbackProjects, isLive: false };
}
