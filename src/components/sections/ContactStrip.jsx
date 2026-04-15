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
              Need a portfolio-worthy frontend experience for your brand or product?
            </h2>
            <p className="mt-4 max-w-2xl">
              I help teams shape clear narratives, scalable UI patterns, and responsive builds that feel finished from day one.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/contact">Start a Conversation</Button>
            <Button href={`mailto:${profile.email}`} icon={<ArrowUpRight size={16} />} variant="secondary">
              Email Directly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
