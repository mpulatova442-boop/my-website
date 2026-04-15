import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function ProjectCard({ project }) {
  const liveDemoLink = project.links?.liveDemo;
  const githubLink = project.links?.github;

  return (
    <article className="panel group flex h-full flex-col overflow-hidden">
      <div className="overflow-hidden border-b border-line/70 bg-panel/40">
        <img
          alt={`${project.title} project preview`}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          src={project.image}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {project.category}
          </span>
          <span className="text-sm text-muted">{project.tagline}</span>
        </div>

        <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 flex-1">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-line/70 px-3 py-1 text-xs font-medium text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button icon={<ArrowRight size={16} />} size="sm" to={`/projects/${project.slug}`}>
            Case Study
          </Button>

          {liveDemoLink ? (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-line/70 px-4 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-panel/55"
              href={liveDemoLink}
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          ) : null}

          {githubLink ? (
            <a
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/70 text-ink transition hover:-translate-y-0.5 hover:bg-panel/55"
              href={githubLink}
              rel="noreferrer"
              target="_blank"
            >
              <Github size={17} />
            </a>
          ) : null}
        </div>

        <Link
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
          to={`/projects/${project.slug}`}
        >
          Explore details
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
