import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';

export function HeroSection() {
  return (
    <section className="shell">
      <div className="panel relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div className="ambient-orb right-0 top-0 h-48 w-48 bg-secondary/15" />
        <div className="ambient-orb bottom-0 left-1/4 h-56 w-56 bg-accent/15" />

        <div className="relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div>
            <span className="section-kicker">Student portfolio</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold text-balance sm:text-5xl xl:text-6xl">
              {profile.name}
              <span className="block text-accent">{profile.role}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg">
              {profile.shortIntro}
            </p>
            <p className="mt-4 max-w-2xl">
              {profile.longIntro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button icon={<ArrowRight size={16} />} size="lg" to="/projects">
                View Projects
              </Button>
              <Button size="lg" to="/contact" variant="secondary">
                Contact Me
              </Button>
              <Button icon={<ArrowDownRight size={16} />} size="lg" to="/#projects" variant="ghost">
                Jump to Projects
              </Button>
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted">Based in</p>
                <p className="mt-2 text-lg font-semibold text-ink">{profile.location}</p>
              </div>
              <SocialLinks links={profile.socials} />
            </div>
          </div>

          <div className="grid gap-5">
            <div className="panel-muted relative overflow-hidden p-5">
              <img
                alt={`${profile.name} portfolio photo`}
                className="h-[320px] w-full rounded-[24px] object-cover"
                src="/images/profile-photo.jpg"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-line/70 bg-surface/88 px-5 py-4 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Current focus</p>
                <p className="mt-2 text-sm text-muted">
                  Cybersecurity fundamentals, frontend practice, and building clean responsive web experiences.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="panel-muted px-4 py-5">
                  <p className="text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="mt-2 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
