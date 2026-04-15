import { Button } from '../components/ui/Button';
import { SEO } from '../components/ui/SEO';

export function NotFoundPage() {
  return (
    <>
      <SEO
        description="The page you were looking for could not be found."
        pathname="/404"
        title="Page not found"
      />

      <section className="shell">
        <div className="panel px-6 py-12 text-center sm:px-10">
          <span className="section-kicker">404</span>
          <h1 className="mt-4 text-4xl font-bold text-balance sm:text-5xl">The page you&apos;re looking for isn&apos;t here.</h1>
          <p className="mx-auto mt-4 max-w-2xl">
            The route may have changed, or the link may be outdated. You can head back home or jump straight into the portfolio work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/">Go Home</Button>
            <Button to="/projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
