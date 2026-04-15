import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../../data/profile';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const linkBaseClasses =
  'rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-panel/60 hover:text-ink';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.hash, location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="shell pt-4">
        <div className="panel flex items-center justify-between px-4 py-3 sm:px-5">
          <Link className="group inline-flex items-center gap-3" to="/">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-surface transition group-hover:scale-105 dark:bg-surface dark:text-ink">
              AM
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{profile.name}</p>
              <p className="text-xs text-muted">{profile.role}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    linkBaseClasses,
                    isActive && 'bg-ink text-surface hover:bg-ink hover:text-surface dark:bg-accent dark:text-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link className={linkBaseClasses} to="/#featured-work">
              Highlights
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button size="sm" to="/contact">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line/70 bg-surface/80 text-ink"
              onClick={() => setIsOpen((currentValue) => !currentValue)}
              type="button"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="panel mt-3 flex flex-col gap-2 px-4 py-4 lg:hidden">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(linkBaseClasses, 'px-4 py-3', isActive && 'bg-ink text-surface dark:bg-accent dark:text-ink')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link className={cn(linkBaseClasses, 'px-4 py-3')} to="/#featured-work">
              Highlights
            </Link>
            <Button className="mt-2 w-full justify-center" to="/contact">
              Start a Project
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
