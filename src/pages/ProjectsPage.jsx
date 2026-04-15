import { useEffect, useState } from 'react';
import { ProjectCard } from '../components/ui/ProjectCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEO } from '../components/ui/SEO';
import { StatusMessage } from '../components/ui/StatusMessage';
import { TechFilter } from '../components/ui/TechFilter';
import { useProjects } from '../hooks/useProjects';
import { filterProjectsByTechnology, getTechnologyFilters } from '../utils/projectHelpers';

export function ProjectsPage() {
  const { projects, loading, error } = useProjects();
  const [activeTechnology, setActiveTechnology] = useState('All');
  const technologies = getTechnologyFilters(projects);
  const filteredProjects = filterProjectsByTechnology(projects, activeTechnology);

  useEffect(() => {
    if (!technologies.includes(activeTechnology)) {
      setActiveTechnology('All');
    }
  }, [activeTechnology, technologies]);

  return (
    <>
      <SEO
        description="Browse portfolio projects by Munisa Polatova, focused on frontend practice, responsive design, and continuous technical growth."
        pathname="/projects"
        title="Projects"
      />

      <section className="shell">
        <SectionHeading
          description="Each project reflects a different part of my learning journey: building interfaces, exploring visual identity, and practicing backend fundamentals in Java."
          eyebrow="Projects"
          title="Projects carried forward from my earlier portfolio and expanded into clearer case studies."
        />

        <div className="mt-8 panel px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Filter by technology</p>
              <p className="mt-2 text-sm text-muted">
                Explore the portfolio by the tools and focus areas used in each project.
              </p>
            </div>
            <TechFilter
              activeTechnology={activeTechnology}
              onSelect={setActiveTechnology}
              technologies={technologies}
            />
          </div>
        </div>

        <div className="mt-10">
          {loading ? (
            <StatusMessage
              description="Loading the complete portfolio collection."
              title="Fetching project data"
              tone="loading"
            />
          ) : null}

          {!loading && error ? (
            <StatusMessage description={error} title="Unable to load projects" tone="error" />
          ) : null}

          {!loading && !error && !filteredProjects.length ? (
            <StatusMessage
              description="Try a different technology filter to see more case studies."
              title="No projects match that filter yet"
            />
          ) : null}

          {!loading && !error && filteredProjects.length ? (
            <div className="grid gap-6 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
