import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-ink text-surface hover:-translate-y-0.5 hover:shadow-soft dark:bg-accent dark:text-ink dark:hover:bg-accent/90',
  secondary:
    'border border-line/70 bg-surface/80 text-ink hover:-translate-y-0.5 hover:bg-panel/55',
  ghost: 'bg-transparent text-ink hover:bg-panel/55',
};

const sizes = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm',
};

export function Button({
  children,
  className,
  href,
  icon,
  size = 'md',
  to,
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const sharedClassName = cn(
    'inline-flex items-center gap-2 rounded-full font-semibold transition duration-300',
    variants[variant],
    sizes[size],
    className,
  );

  if (to) {
    return (
      <Link className={sharedClassName} to={to} {...props}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  if (href) {
    const isExternalLink = href.startsWith('http');

    return (
      <a
        className={sharedClassName}
        href={href}
        rel={isExternalLink ? 'noreferrer' : undefined}
        target={isExternalLink ? '_blank' : undefined}
        {...props}
      >
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <button className={sharedClassName} type={type} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
