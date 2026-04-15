export function SkillBar({ level, name }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <span className="text-sm font-medium text-muted">{level}%</span>
      </div>
      <div className="h-3 rounded-full bg-panel/70">
        <div
          aria-hidden="true"
          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
