import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

function ApertureO() {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[0.75em] w-[0.75em] shrink-0 translate-y-[0.1em]"
      style={{ margin: '0 0.03em' }}
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="14" cy="14" r="3.5" fill="currentColor" opacity="0.3" />
      <path
        d="M14 5v3M14 20v3M5 14h3M20 14h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function StrobdLogo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        'flex items-center font-sans font-bold tracking-tight leading-none select-none text-xl',
        className
      )}
      aria-label="Strobd"
      role="img"
    >
      {'Str'}<ApertureO />{'bd'}
    </span>
  );
}

export function StrobdIcon({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Strobd"
      className={cn('h-7 w-7', className)}
    >
      {/* Stylized aperture "o" */}
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="14" r="3.5" fill="currentColor" opacity="0.35" />
      {/* Aperture blades */}
      <path
        d="M14 5v3M14 20v3M5 14h3M20 14h3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M8.2 8.2l2.1 2.1M17.7 17.7l2.1 2.1M8.2 19.8l2.1-2.1M17.7 10.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
