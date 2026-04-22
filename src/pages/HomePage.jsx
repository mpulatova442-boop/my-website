import { ContactStrip } from '../components/sections/ContactStrip';
import { HeroSection } from '../components/sections/HeroSection';
import { HomeHighlightsSection } from '../components/sections/HomeHighlightsSection';
import { SEO } from '../components/ui/SEO';

export function HomePage() {
  return (
    <>
      <SEO
        description="Munisa Polatova is a first-year IDU University student majoring in Cybersecurity and building a growing frontend portfolio."
        pathname="/"
        title="Home"
      />
      <HeroSection />
      <HomeHighlightsSection />
      <ContactStrip />
    </>
  );
}
