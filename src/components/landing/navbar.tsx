'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { StrobdLogo } from '@/components/brand/logo';
import { Button } from '@/components/ui/button';
import { SIGNUP_URL, LOGIN_URL } from '@/lib/constants';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from '@/components/brand/motion';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = scrollY > 40;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{ height: '64px' }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Strobd home">
          <StrobdLogo
            className={cn(
              'transition-colors duration-300',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
          />
        </Link>

        {/* Desktop nav links — absolutely centered */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200',
                isScrolled
                  ? 'text-muted-foreground hover:text-brand'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={LOGIN_URL}
            className={cn(
              'text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-200',
              isScrolled
                ? 'text-muted-foreground hover:text-foreground'
                : 'text-white/70 hover:text-white'
            )}
          >
            Sign In
          </a>
          <Button
            asChild
            size="sm"
            className={cn(
              'transition-all duration-300 active:scale-[0.97]',
              isScrolled
                ? 'bg-brand text-brand-foreground hover:bg-brand/90'
                : 'bg-brand text-brand-foreground hover:bg-brand/90'
            )}
          >
            <a href={SIGNUP_URL}>Get Started</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn(
            'flex items-center justify-center rounded-md p-2 transition-colors md:hidden',
            isScrolled ? 'text-foreground' : 'text-white'
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-b border-border/60 bg-background/95 px-4 pb-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
                <a
                  href={LOGIN_URL}
                  className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Sign In
                </a>
                <Button asChild className="active:scale-[0.97]">
                  <a href={SIGNUP_URL}>Get Started Free</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
