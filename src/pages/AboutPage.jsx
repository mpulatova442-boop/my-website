import { Briefcase, GraduationCap, MapPin, Star } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEO } from '../components/ui/SEO';
import { SkillBar } from '../components/ui/SkillBar';
import { TimelineCard } from '../components/ui/TimelineCard';
import { education, experience, profile } from '../data/profile';

export function AboutPage() {
  return (
    <>
      <SEO
        description="Learn more about Avery Morgan's background, skills, experience, and frontend product design approach."
        pathname="/about"
        title="About"
      />

      <section className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
          <div className="panel px-6 py-8 sm:px-8">
            <SectionHeading
              description="I enjoy the kind of frontend work that blends product thinking with visual precision: layout systems, component architecture, and interfaces that feel excellent to use."
              eyebrow="About me"
              title="Frontend developer with a product eye and a strong bias for clean execution."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div className="panel-muted px-4 py-4">
                <MapPin className="text-accent" size={18} />
                <p className="mt-3 text-sm font-semibold text-ink">Location</p>
                <p className="mt-1 text-sm">{profile.location}</p>
              </div>
              <div className="panel-muted px-4 py-4">
                <Briefcase className="text-accent" size={18} />
                <p className="mt-3 text-sm font-semibold text-ink">Focus</p>
                <p className="mt-1 text-sm">React products, design systems, premium marketing sites</p>
              </div>
              <div className="panel-muted px-4 py-4">
                <Star className="text-accent" size={18} />
                <p className="mt-3 text-sm font-semibold text-ink">Approach</p>
                <p className="mt-1 text-sm">Accessible, responsive, launch-ready, and visually distinct</p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold">Quick profile</h2>
                <div className="mt-4 space-y-3">
                  {profile.quickFacts.map((fact) => (
                    <div key={fact} className="flex gap-3 text-sm text-muted">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold">Core values</h2>
                <div className="mt-4 space-y-3">
                  {profile.values.map((value) => (
                    <div key={value} className="flex gap-3 text-sm text-muted">
                      <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel overflow-hidden p-4">
              <img
                alt="Avery Morgan workspace illustration"
                className="h-[300px] w-full rounded-[24px] object-cover"
                src="/images/profile-workspace.svg"
              />
            </div>

            <div className="panel px-6 py-6">
              <h2 className="text-2xl font-bold">Education</h2>
              <div className="mt-5 space-y-4">
                {education.map((item) => (
                  <div key={item.title} className="panel-muted px-5 py-5">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="text-accent" size={18} />
                      <div>
                        <h3 className="font-semibold text-ink">{item.title}</h3>
                        <p className="text-sm text-muted">{item.institution}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-medium text-accent">{item.period}</p>
                    <p className="mt-3 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="panel px-6 py-8 sm:px-8">
            <SectionHeading
              description="A mix of hard engineering and design collaboration skills, shaped by shipping across marketing, product, and ecommerce environments."
              eyebrow="Skills"
              title="Technical strengths and day-to-day collaboration skills."
            />

            <div className="mt-8 space-y-6">
              {profile.skills.map((skill) => (
                <SkillBar key={skill.name} level={skill.level} name={skill.name} />
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {profile.skillGroups.map((group) => (
              <article key={group.title} className="panel px-6 py-6">
                <h3 className="text-xl font-bold capitalize">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line/70 bg-surface/70 px-3 py-2 text-sm font-medium text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <SectionHeading
          description="Experience across product-minded teams, creative agencies, and frontend systems that need to remain maintainable under real timelines."
          eyebrow="Experience"
          title="A timeline of recent work and growth."
        />

        <div className="mt-10 grid gap-5">
          {experience.map((item) => (
            <TimelineCard
              key={`${item.company}-${item.role}`}
              bullets={item.achievements}
              description={item.summary}
              period={item.period}
              subtitle={item.company}
              title={item.role}
            />
          ))}
        </div>
      </section>
    </>
  );
}
