import Link from 'next/link';
import { StrobdLogo } from '@/components/brand/logo';
import { APP_URL, SIGNUP_URL, LOGIN_URL } from '@/lib/constants';

const footerLinks = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Get Started', href: SIGNUP_URL },
    ],
  },
  {
    heading: 'Account',
    links: [
      { label: 'Sign In', href: LOGIN_URL },
      { label: 'Create Account', href: SIGNUP_URL },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Privacy Policy', href: `${APP_URL}/privacy` },
      { label: 'Terms of Service', href: `${APP_URL}/terms` },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" aria-label="Strobd home">
              <StrobdLogo className="text-base text-foreground" />
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              The all-in-one platform for creators to publish, proof, get paid, and deliver.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
                {group.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Strobd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for photographers &amp; creative professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
