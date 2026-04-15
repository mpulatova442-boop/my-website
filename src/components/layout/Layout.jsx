import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="fixed left-0 top-0 z-[70] h-1 bg-gradient-to-r from-accent via-secondary to-accent transition-[width] duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb left-[-12rem] top-12 h-72 w-72 bg-accent/18" />
        <div className="ambient-orb right-[-8rem] top-72 h-80 w-80 bg-secondary/12" />
        <div className="ambient-orb bottom-12 left-1/3 h-64 w-64 bg-accent/10" />
      </div>

      <Navbar />

      <main className="pb-14 pt-24 sm:pt-28">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
