import { Globe, Images, CreditCard, Download } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const items = [
  {
    icon: Globe,
    label: 'Branded Sites',
    description: 'Your domain, your brand',
  },
  {
    icon: Images,
    label: 'Client Proofing',
    description: 'Private galleries with feedback',
  },
  {
    icon: CreditCard,
    label: 'Stripe Payments',
    description: 'Sell work, get paid fast',
  },
  {
    icon: Download,
    label: 'File Delivery',
    description: 'Automatic after purchase',
  },
];

export function TrustBar() {
  return (
    <section
      className="border-y border-border bg-background py-14 sm:py-16"
      aria-label="Platform capabilities"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border">
            {items.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 text-center md:px-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-muted">
                  <Icon className="h-4.5 w-4.5 text-brand-muted-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
