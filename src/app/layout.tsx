import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { ScrollRestore } from '@/components/scroll-restore';
import './globals.css';

const brandSans = Plus_Jakarta_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const brandMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://strobd.com'),
  title: {
    default: 'Strobd — Publish, Proof, Get Paid, Deliver',
    template: '%s | Strobd',
  },
  description:
    'Build your site, share client galleries, get paid, and deliver files. Strobd is the platform photographers and creators use to run their whole client workflow.',
  keywords: [
    'creator platform',
    'photography proofing',
    'client gallery',
    'branded website',
    'file delivery',
    'creator payments',
    'portfolio site',
    'digital download',
  ],
  authors: [{ name: 'Strobd' }],
  creator: 'Strobd',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://strobd.com',
    siteName: 'Strobd',
    title: 'Strobd — Publish, Proof, Get Paid, Deliver',
    description:
      'The all-in-one platform for creators to publish branded websites, share proofing galleries with clients, accept payments, and deliver digital files.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Strobd — Creator Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strobd — Publish, Proof, Get Paid, Deliver',
    description:
      'The all-in-one platform for creators to publish branded websites, share proofing galleries with clients, accept payments, and deliver digital files.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${brandSans.variable} ${brandMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollRestore />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
