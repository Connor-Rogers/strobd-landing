import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from './scroll-reveal';
import { SIGNUP_URL } from '@/lib/constants';

export function FinalCTA() {
  return (
    <section
      className="grain relative overflow-hidden py-24 sm:py-32"
      aria-label="Get started"
      style={{
        background:
          'linear-gradient(135deg, oklch(0.11 0.012 265) 0%, oklch(0.08 0.01 280) 50%, oklch(0.12 0.014 250) 100%)',
      }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.30 0.06 75 / 0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/35 uppercase">
            Get started
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your work deserves a <span className="text-brand">better home.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            Free to start. Takes about an hour to set up. No credit card needed.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="active:scale-[0.97] min-w-52 bg-brand text-brand-foreground font-semibold hover:bg-brand/90 transition-all duration-200 h-12 px-8 text-sm tracking-wide animate-amber-glow group"
            >
              <a href={SIGNUP_URL} className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
