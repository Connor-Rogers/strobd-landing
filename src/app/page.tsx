import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { TrustBar } from '@/components/landing/trust-bar';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Pricing } from '@/components/landing/pricing';
import { FinalCTA } from '@/components/landing/final-cta';
import { Footer } from '@/components/landing/footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://strobd.com/#website',
      url: 'https://strobd.com',
      name: 'Strobd',
      description:
        'The all-in-one platform for creators to publish branded websites, share proofing galleries, accept payments, and deliver digital files.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://strobd.com/#app',
      name: 'Strobd',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Platform for photographers and creative professionals to publish sites, share client proofing galleries, accept payments, and deliver files.',
      offers: [
        {
          '@type': 'Offer',
          name: 'Free',
          price: '0',
          priceCurrency: 'USD',
          description: '3 projects, 1GB storage, Stripe payments, file delivery',
        },
        {
          '@type': 'Offer',
          name: 'Pro',
          price: '19',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '19',
            priceCurrency: 'USD',
            unitText: 'MONTH',
          },
          description: 'Unlimited projects, 100GB storage, custom domain, remove branding',
        },
      ],
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
