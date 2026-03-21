import { Globe, Images, CreditCard, Download, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import { SIGNUP_URL } from '@/lib/constants';

const features = [
  {
    icon: Globe,
    eyebrow: '01 — Publish',
    title: 'Your brand. Your site. Live in minutes.',
    description:
      'Build a polished, professional website that looks like it took weeks — in minutes. Choose your fonts, colors, and layout. Add your portfolio, about page, and contact form. Go live on your own domain.',
    highlights: ['Custom domain support', 'Fully configurable layout', 'Mobile-optimized'],
    visual: 'site-builder',
  },
  {
    icon: Images,
    eyebrow: '02 — Proof',
    title: 'Private galleries your clients will love.',
    description:
      'Send password-protected galleries to clients with a link. They can browse, favorite, comment, and select the images they want — all in a clean, branded experience you control.',
    highlights: ['Invite-only access', 'Client favorites & comments', 'Watermark protection'],
    visual: 'proofing',
  },
  {
    icon: CreditCard,
    eyebrow: '03 — Get Paid',
    title: 'Accept payments without the hassle.',
    description:
      "Sell digital downloads, print packages, or gallery access directly through your site. Stripe-powered checkout means payments land in your account — no awkward invoicing or payment links.",
    highlights: ['Stripe checkout', 'Per-image or per-gallery pricing', 'Direct payouts'],
    visual: 'payments',
  },
  {
    icon: Download,
    eyebrow: '04 — Deliver',
    title: 'Files delivered automatically after purchase.',
    description:
      "Once a client pays, they get immediate, secure access to their files. No more manually sending download links or chasing clients down. It all happens automatically — you just sit back.",
    highlights: ['Instant access after payment', 'Secure signed URLs', 'ZIP download support'],
    visual: 'delivery',
  },
];

const visualGradients: Record<string, string> = {
  'site-builder':
    'from-[oklch(0.22_0.02_250)] via-[oklch(0.18_0.015_260)] to-[oklch(0.14_0.01_265)]',
  proofing: 'from-[oklch(0.20_0.018_270)] via-[oklch(0.16_0.012_260)] to-[oklch(0.13_0.01_265)]',
  payments: 'from-[oklch(0.18_0.015_255)] via-[oklch(0.15_0.012_265)] to-[oklch(0.12_0.008_270)]',
  delivery: 'from-[oklch(0.22_0.016_260)] via-[oklch(0.17_0.012_255)] to-[oklch(0.14_0.01_265)]',
};

function FeatureVisual({ type, icon: Icon }: { type: string; icon: typeof Globe }) {
  return (
    <div
      className={`relative flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${visualGradients[type]} border border-white/8 md:h-80 lg:h-96`}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Center icon */}
      <div className="relative flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm">
          <Icon className="h-7 w-7 text-white/60" strokeWidth={1.25} />
        </div>
        {/* Mock UI lines */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-2 w-28 rounded-full bg-white/15" />
          <div className="h-2 w-20 rounded-full bg-white/8" />
          <div className="h-2 w-24 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="bg-primary py-20 sm:py-28"
      aria-label="Features"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center sm:mb-20">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground/40 uppercase">
              Everything you need
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              One platform. Four superpowers.
            </h2>
          </div>
        </ScrollReveal>

        {/* Feature rows */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            const Icon = feature.icon;

            return (
              <div
                key={feature.eyebrow}
                className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
                  isReversed ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <ScrollReveal
                  className="w-full md:w-1/2"
                  direction={isReversed ? 'right' : 'left'}
                  delay={0}
                >
                  <FeatureVisual type={feature.visual} icon={Icon} />
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal
                  className="w-full md:w-1/2"
                  direction={isReversed ? 'left' : 'right'}
                  delay={0.1}
                >
                  <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground/35 uppercase">
                    {feature.eyebrow}
                  </p>
                  <h3 className="mb-4 text-2xl font-bold leading-snug tracking-tight text-primary-foreground sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-primary-foreground/55">
                    {feature.description}
                  </p>
                  <ul className="mb-8 flex flex-col gap-2">
                    {feature.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-primary-foreground/65"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground/30" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/70 transition-colors hover:text-primary-foreground group"
                  >
                    Try it free
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
