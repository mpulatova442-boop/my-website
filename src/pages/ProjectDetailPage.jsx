import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/ui/SEO';
import { StatusMessage } from '../components/ui/StatusMessage';
import { useProject } from '../hooks/useProjects';

export function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const { project, loading, error } = useProject(slug);

  if (loading) {
    return (
      <section className="shell">
        <StatusMessage
          description="Loading the selected case study."
          title="Preparing project details"
          tone="loading"
        />
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="shell">
        <StatusMessage
          description={error || 'This project could not be found.'}
          title="Project unavailable"
          tone="error"
        />
        <div className="mt-6">
          <Button to="/projects" variant="secondary">
            Back to Projects
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO description={project.summary} pathname={`/projects/${project.slug}`} title={project.title} />

      <section className="shell">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
          to="/projects"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr,0.85fr] lg:items-start">
          <div className="panel overflow-hidden">
            <img alt={`${project.title} hero`} className="h-full w-full object-cover" src={project.image} />
          </div>

          <div className="panel px-6 py-7 sm:px-8">
            <span className="section-kicker">{project.category}</span>
            <h1 className="mt-4 text-4xl font-bold text-balance">{project.title}</h1>
            <p className="mt-4 text-lg text-muted">{project.tagline}</p>
            <p className="mt-5">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-line/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={project.links.liveDemo} icon={<ExternalLink size={16} />}>
                Live Demo
              </Button>
              <Button href={project.links.github} icon={<Github size={16} />} variant="secondary">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold">Features</h2>
            <div className="mt-5 space-y-4">
              {project.features.map((feature) => (
                <div key={feature} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel px-6 py-7 sm:px-8">
            <h2 className="text-2xl font-bold">Impact & outcomes</h2>
            <div className="mt-5 space-y-4">
              {project.metrics.map((metric) => (
                <div key={metric} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-kicker">Screenshots</span>
            <h2 className="mt-4 text-3xl font-bold text-balance">A closer look at the interface system.</h2>
          </div>
          <p className="max-w-2xl text-sm">
            Each screen reflects the same core priorities: clear hierarchy, consistent spacing, and responsive layout behavior.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {project.screenshots.map((screenshot) => (
            <div key={screenshot} className="panel overflow-hidden">
              <img alt={`${project.title} screenshot`} className="h-full w-full object-cover" src={screenshot} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
