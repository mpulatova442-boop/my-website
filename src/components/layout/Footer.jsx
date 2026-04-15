import { ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';

export function Footer() {
  return (
    <footer className="shell pb-8 pt-6">
      <div className="panel overflow-hidden px-6 py-8 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <span className="section-kicker">Let&apos;s build something thoughtful</span>
            <h2 className="mt-4 max-w-xl text-3xl font-bold text-balance sm:text-4xl">
              Learning cybersecurity, building interfaces, and growing one project at a time.
            </h2>
            <p className="mt-4 max-w-2xl">
              {profile.availability}
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <Button to="/projects" variant="secondary">
                View Portfolio
              </Button>
              <Button href={`mailto:${profile.email}`} icon={<ArrowUpRight size={16} />}>
                {profile.email}
              </Button>
            </div>
            <SocialLinks links={profile.socials} />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line/70 pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. Built with React, Tailwind, and careful attention to detail.</p>
          <button
            className="inline-flex items-center gap-2 text-ink transition hover:text-accent"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            type="button"
          >
            Back to top
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
