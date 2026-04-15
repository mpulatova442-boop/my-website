import { AlertCircle, Loader } from 'lucide-react';
import { cn } from '../../utils/cn';

const toneStyles = {
  loading: 'border-accent/25 bg-accent/10 text-accent',
  error: 'border-secondary/25 bg-secondary/10 text-secondary',
  neutral: 'border-line/70 bg-surface/80 text-ink',
};

export function StatusMessage({ title, description, tone = 'neutral' }) {
  return (
    <div className={cn('panel flex items-start gap-3 px-5 py-4', toneStyles[tone])}>
      {tone === 'loading' ? (
        <Loader className="mt-0.5 animate-spin" size={20} />
      ) : (
        <AlertCircle className="mt-0.5" size={20} />
      )}
      <div>
        <p className="font-semibold text-current">{title}</p>
        {description ? <p className="mt-1 text-sm text-current/85">{description}</p> : null}
      </div>
    </div>
  );
}
