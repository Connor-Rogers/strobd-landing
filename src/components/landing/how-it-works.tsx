import { Sparkles, Share2, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const steps = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Create your space',
    description:
      'Set up your Strobd workspace in minutes. Configure your site, upload your portfolio, and make it yours with custom fonts, colors, and your domain.',
  },
  {
    number: '02',
    icon: Share2,
    title: 'Share & collaborate',
    description:
      'Invite clients to private galleries. Let them review, select, and approve work. Set your pricing and collect payment — all through one clean link.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Deliver & get paid',
    description:
      "Files land in your client's hands automatically the moment payment clears. No follow-ups. No manual sending. Just happy clients and money in your account.",
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
              Simple by design
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Up and running in three steps.
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop only) */}
          <div
            className="absolute top-7 left-1/6 right-1/6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={index * 0.12} className="relative">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  {/* Step number + icon */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-muted">
                    <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                    <span className="absolute -top-2.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
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
