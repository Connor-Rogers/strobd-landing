import { Sparkles, Share2, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const steps = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Set up your site',
    description:
      'Pick your fonts and colors, upload your portfolio, and go live. Most people are set up within an hour.',
  },
  {
    number: '02',
    icon: Share2,
    title: 'Send a gallery link',
    description:
      'Create a project, upload your work, and send clients a private link. They browse, select what they want, and pay right there.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Get paid, files delivered',
    description:
      'Payment clears, files go out automatically. You get notified, your client gets their work. Done.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-background py-20 sm:py-28"
      aria-label="How it works"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center sm:mb-20">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              How it works
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Simple enough to actually use.
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop only) */}
          <div
            className="absolute top-7 left-1/6 right-1/6 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={index * 0.12} className="relative">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  {/* Step number + icon */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/15 bg-muted">
                    <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                    <span className="absolute -top-2.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground">
                      {index + 1}
                    </span>
                  </div>

                  {/* Large background number */}
                  <p
                    className="mb-3 text-[4rem] leading-none font-bold text-muted/60 select-none md:text-[5rem]"
                    aria-hidden="true"
                  >
                    {step.number}
                  </p>

                  <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
