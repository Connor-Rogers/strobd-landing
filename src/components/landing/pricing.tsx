import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from './scroll-reveal';
import { SIGNUP_URL } from '@/lib/constants';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Good for getting started. No commitment.',
    cta: 'Start for Free',
    popular: false,
    features: [
      '3 projects',
      '1 GB storage',
      'Branded portfolio site',
      'Client proofing galleries',
      'Stripe payments',
      'File delivery',
      'Strobd branding shown',
    ],
    note: '10% platform fee on sales',
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For anyone doing this seriously. Your brand, no compromises.',
    cta: 'Go Pro',
    popular: true,
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Remove Strobd branding',
      'Custom domain',
      'Priority support',
      'Client proofing galleries',
      'Stripe payments',
      'File delivery',
    ],
    note: '10% platform fee on sales',
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-primary py-20 sm:py-28"
      aria-label="Pricing"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground/40 uppercase">
              Pricing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Start free. Upgrade when it makes sense.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/50">
              Two plans. No surprises.
            </p>
          </div>
        </ScrollReveal>

        {/* Plans */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-transform duration-300 ${
                  plan.popular
                    ? 'border-primary-foreground/25 bg-primary-foreground/8 hover:scale-[1.02]'
                    : 'border-primary-foreground/10 bg-primary-foreground/4 hover:scale-[1.01]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary-foreground text-primary text-xs font-semibold px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Plan name & price */}
                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold tracking-[0.12em] text-primary-foreground/50 uppercase">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold tracking-tight text-primary-foreground">
                      {plan.price}
                    </span>
                    <span className="text-sm text-primary-foreground/40">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/50">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-primary-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    asChild
                    className={`w-full active:scale-[0.97] transition-all duration-200 ${
                      plan.popular
                        ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                        : 'bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/15 hover:bg-primary-foreground/15'
                    }`}
                  >
                    <a href={SIGNUP_URL}>{plan.cta}</a>
                  </Button>
                  <p className="mt-3 text-center text-xs text-primary-foreground/30">{plan.note}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
