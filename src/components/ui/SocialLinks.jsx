import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function SocialLinks({ links, className = '' }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.icon] || Mail;
        const isExternalLink = link.href.startsWith('http');

        return (
          <a
            key={link.label}
            aria-label={link.label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line/70 bg-surface/80 text-ink transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
            href={link.href}
            rel={isExternalLink ? 'noreferrer' : undefined}
            target={isExternalLink ? '_blank' : undefined}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
