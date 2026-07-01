import { useState, useEffect } from 'react';
import { Project, projects as fallbackProjects } from '@/data/portfolio';
import { getGithubProjects } from '@/lib/github';

interface State {
  projects: Project[];
  loading: boolean;
  isLive: boolean;
}

export function useGithubProjects(): State {
  const [state, setState] = useState<State>({
    projects: fallbackProjects,
    loading: true,
    isLive: false,
  });

  useEffect(() => {
    let mounted = true;

    getGithubProjects()
      .then((res) => {
        if (mounted)
          setState({
            projects: res.projects,
            loading: false,
            isLive: res.isLive,
          });
      })
      .catch(() => {
        if (mounted)
          setState({
            projects: fallbackProjects,
            loading: false,
            isLive: false,
          });
      });

    return () => {
      mounted = false;
    };
  }, []);

  return state;
}
