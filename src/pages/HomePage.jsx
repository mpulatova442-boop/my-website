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
        description="Avery Morgan is a frontend developer and UX engineer building polished, responsive React experiences."
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
