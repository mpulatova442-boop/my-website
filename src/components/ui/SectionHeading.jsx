export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <span className="section-kicker">{eyebrow}</span> : null}
      <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4">{description}</p> : null}
    </div>
  );
}
