export function TimelineCard({ bullets = [], description, period, subtitle, title }) {
  return (
    <article className="panel-muted px-5 py-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-1 text-sm font-semibold text-accent">{subtitle}</p>
        </div>
        <span className="rounded-full border border-line/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {period}
        </span>
      </div>

      <p className="mt-4">{description}</p>

      {bullets.length ? (
        <ul className="mt-4 space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm text-muted">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
