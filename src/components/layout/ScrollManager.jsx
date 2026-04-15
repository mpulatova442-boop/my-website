import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = window.setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);

      return () => {
        window.clearTimeout(timer);
      };
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return undefined;
  }, [location.hash, location.pathname]);

  return null;
}
