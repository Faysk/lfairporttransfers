import '@/styles/globals.css';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import Footer from '../components/Footer';
import { business } from '@/lib/contact';

const bodyFont = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const displayFont = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['600', '700'],
});

const siteUrl = business.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'LF Airport Transfers | Private Chauffeur & Airport Transfers London',
    template: '%s | LF Airport Transfers',
  },
  description:
    'Premium private chauffeur and airport transfer service in London. Book Mercedes EQS, E-Class and V-Class transfers for Heathrow, Gatwick, London City, Luton and Stansted.',
  keywords: [
    'London chauffeur service',
    'private chauffeur London',
    'airport transfers London',
    'Heathrow chauffeur',
    'Gatwick chauffeur transfer',
    'London City Airport transfer',
    'Mercedes chauffeur London',
    'executive airport transfer London',
    'V-Class airport transfer',
    'private driver London',
  ],
  applicationName: 'LF Airport Transfers',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'LF Airport Transfers',
    title: 'LF Airport Transfers | Private Chauffeur & Airport Transfers London',
    description:
      'Luxury Mercedes chauffeur transfers across London airports, hotels and private addresses.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'LF Airport Transfers private chauffeur service in London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LF Airport Transfers',
    description: 'Private chauffeur and airport transfer service in London.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070706',
  colorScheme: 'dark',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LF Airport Transfers',
  url: siteUrl,
  email: business.email,
  telephone: business.phoneDisplay,
  foundingDate: '2022-10',
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'UK Company Number',
    value: business.companyNumber,
  },
  sameAs: [business.linkedin],
  image: `${siteUrl}/opengraph-image`,
  priceRange: '£££',
  areaServed: [
    'London',
    'Heathrow Airport',
    'Gatwick Airport',
    'London City Airport',
    'Luton Airport',
    'Stansted Airport',
  ],
  serviceType: [
    'Private chauffeur service',
    'Airport transfers',
    'Corporate chauffeur',
    'Hourly chauffeur hire',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressCountry: 'GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
