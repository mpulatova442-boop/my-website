import { ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';
import { Button } from '../ui/Button';

export function ContactStrip() {
  return (
    <section className="shell mt-20">
      <div className="panel overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
          <div>
            <span className="section-kicker">Next step</span>
            <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">
              Interested in collaborating, mentoring, or discussing cybersecurity and web development?
            </h2>
            <p className="mt-4 max-w-2xl">
              I am always excited to connect with people who value learning, clean work, and meaningful tech projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/contact">Get in Touch</Button>
            <Button href={`mailto:${profile.email}`} icon={<ArrowUpRight size={16} />} variant="secondary">
              Email Directly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
