import { ContactStrip } from '../components/sections/ContactStrip';
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection';
import { HeroSection } from '../components/sections/HeroSection';
import { HomeHighlightsSection } from '../components/sections/HomeHighlightsSection';
import { SEO } from '../components/ui/SEO';
import { useProjects } from '../hooks/useProjects';

export function HomePage() {
  const { projects, loading, error } = useProjects({ featuredOnly: true });

  return (
    <>
      <SEO
        description="Munisa Polatova is a first-year IDU University student majoring in Cybersecurity and building a growing frontend portfolio."
        pathname="/"
        title="Home"
      />
      <HeroSection />
      <HomeHighlightsSection />
      <FeaturedProjectsSection error={error} loading={loading} projects={projects} />
      <ContactStrip />
    </>
  );
}
