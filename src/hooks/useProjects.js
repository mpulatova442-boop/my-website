import { useEffect, useState } from 'react';
import projectData from '../data/projects.json';

const LOAD_DELAY_MS = 140;

export function useProjects(options = {}) {
  const { featuredOnly = false } = options;
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const loadProjects = async () => {
      setLoading(true);
      setError('');

      try {
        await new Promise((resolve) => {
          timeoutId = window.setTimeout(resolve, LOAD_DELAY_MS);
        });

        if (!isMounted) {
          return;
        }

        setProjects(featuredOnly ? projectData.filter((project) => project.featured) : projectData);
      } catch (loadError) {
        if (isMounted) {
          setError('Unable to load projects right now. Please try again.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
    };
  }, [featuredOnly]);

  return { projects, loading, error };
}

export function useProject(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const loadProject = async () => {
      setLoading(true);
      setError('');

      try {
        await new Promise((resolve) => {
          timeoutId = window.setTimeout(resolve, LOAD_DELAY_MS);
        });

        if (!isMounted) {
          return;
        }

        const matchedProject = projectData.find((item) => item.slug === slug);

        if (!matchedProject) {
          setError('Project not found.');
          setProject(null);
          return;
        }

        setProject(matchedProject);
      } catch (loadError) {
        if (isMounted) {
          setError('Unable to load the project details right now.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProject();

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
    };
  }, [slug]);

  return { project, loading, error };
}
