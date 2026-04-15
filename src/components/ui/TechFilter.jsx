import { cn } from '../../utils/cn';

export function TechFilter({ activeTechnology, technologies, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((technology) => (
        <button
          key={technology}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-semibold transition',
            activeTechnology === technology
              ? 'border-ink bg-ink text-surface dark:border-accent dark:bg-accent dark:text-ink'
              : 'border-line/70 bg-surface/80 text-muted hover:border-accent/40 hover:text-ink',
          )}
          onClick={() => onSelect(technology)}
          type="button"
        >
          {technology}
        </button>
      ))}
    </div>
  );
}
