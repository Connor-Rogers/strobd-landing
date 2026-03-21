import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function StrobdLogo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Strobd"
      className={cn('h-7 w-auto', className)}
    >
      {/* S */}
      <path
        d="M2 18.5c0 0 2.5 2.5 6 2.5s5.5-1.5 5.5-3.5c0-2-1.5-3-4.5-4-3-1-5-2.5-5-5C4 6 6.5 4 10 4s5.5 2 5.5 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* t */}
      <path d="M20 4v16M16.5 9.5h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* r */}
      <path
        d="M26 20V9.5M26 13c1-2.5 3-4 5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Stylized aperture "o" */}
      <circle cx="42" cy="14.5" r="5.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="42" cy="14.5" r="2" fill="currentColor" opacity="0.3" />
      {/* Aperture blades */}
      <path
        d="M42 9v2M42 18v2M36.5 14.5h2M45.5 14.5h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* b */}
      <path
        d="M51 4v16M51 14.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* d */}
      <path
        d="M72 4v16M72 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
