import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/site-shell';
import { StructuredData } from '@/components/structured-data';
import { SITE_ORIGIN } from '@/lib/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default:
      'Welldone Inspection | NYC Special Inspections, Asbestos & Engineering',
    template: '%s | Welldone Inspection',
  },
  description:
    'NYC Special Inspections, Asbestos Surveys / ACP-5, and Engineering Reports & Assessments. Request an inspection or get a project quote from Welldone Inspection.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'Welldone Inspection',
    title: 'Welldone Inspection — NYC Inspection & Engineering Services',
    description:
      'NYC Special Inspections · Asbestos Surveys / ACP-5 · Engineering Reports',
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 907,
        alt: 'Welldone Inspection — NYC Inspection and Engineering Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welldone Inspection — NYC Inspection & Engineering Services',
    description:
      'NYC Special Inspections · Asbestos Surveys / ACP-5 · Engineering Reports',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <StructuredData
          data={{
            '@context': 'https://schema.org',
            '@type': ['ProfessionalService', 'LocalBusiness'],
            '@id': `${SITE_ORIGIN}/#organization`,
            name: 'Welldone Inspection Inc.',
            url: SITE_ORIGIN,
            logo: `${SITE_ORIGIN}/welldone-logo.png`,
            image: `${SITE_ORIGIN}/og.png`,
            telephone: '+1-917-213-1886',
            email: 'welldoneinspect@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '10 Halletts Point',
              addressLocality: 'Queens',
              addressRegion: 'NY',
              postalCode: '11102',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'City',
              name: 'New York City',
            },
          }}
        />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
