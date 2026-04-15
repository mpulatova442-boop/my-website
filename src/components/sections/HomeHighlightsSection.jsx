import { homeHighlights } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export function HomeHighlightsSection() {
  return (
    <section className="shell mt-20">
      <SectionHeading
        description="This portfolio is not only about visuals. It also shows how I learn, solve problems, and turn new knowledge into real projects."
        eyebrow="What I bring"
        title="A growing portfolio built around curiosity, consistency, and practical learning."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {homeHighlights.map((highlight, index) => (
          <article key={highlight.title} className="panel px-6 py-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-surface dark:bg-accent dark:text-ink">
              0{index + 1}
            </div>
            <h3 className="mt-5 text-2xl font-bold">{highlight.title}</h3>
            <p className="mt-3">{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
