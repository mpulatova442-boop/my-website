import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line/70 bg-surface/80 text-ink hover:-translate-y-0.5 hover:bg-panel/60"
      onClick={toggleTheme}
      type="button"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
