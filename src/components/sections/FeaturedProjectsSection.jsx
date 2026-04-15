import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';
import { StatusMessage } from '../ui/StatusMessage';

export function FeaturedProjectsSection({ error, loading, projects }) {
  return (
    <section className="shell mt-20 scroll-mt-28" id="featured-work">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          description="A curated mix of marketing, product, and ecommerce work showing adaptable visual systems and clean React structure."
          eyebrow="Selected work"
          title="Featured projects built for real users, real teams, and real launch conditions."
        />
        <Button icon={<ArrowRight size={16} />} to="/projects" variant="secondary">
          See All Projects
        </Button>
      </div>

      <div className="mt-10">
        {loading ? (
          <StatusMessage
            description="Loading the featured case studies."
            title="Preparing project highlights"
            tone="loading"
          />
        ) : null}

        {!loading && error ? (
          <StatusMessage
            description={error}
            title="There was a problem loading the portfolio"
            tone="error"
          />
        ) : null}

        {!loading && !error ? (
          <div className="grid gap-6 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
