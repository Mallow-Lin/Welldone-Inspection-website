import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/site-shell';
import { SITE_ORIGIN, IS_PREVIEW } from '@/lib/site';

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
      'WellDone Inspection | NYC Special Inspections, Asbestos & Engineering',
    template: '%s | WellDone Inspection',
  },
  description:
    'NYC Special Inspections, Asbestos Surveys / ACP-5, and Engineering Reports & Assessments. Request an inspection or get a project quote from WellDone Inspection.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: 'WellDone Inspection',
    title: 'WellDone Inspection — NYC Inspection & Engineering Services',
    description:
      'NYC Special Inspections · Asbestos Surveys / ACP-5 · Engineering Reports',
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 907,
        alt: 'WellDone Inspection — NYC Inspection and Engineering Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WellDone Inspection — NYC Inspection & Engineering Services',
    description:
      'NYC Special Inspections · Asbestos Surveys / ACP-5 · Engineering Reports',
    images: ['/og.png'],
  },
  robots: { index: !IS_PREVIEW, follow: !IS_PREVIEW },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'WellDone Inspection, Inc.',
              url: SITE_ORIGIN,
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
              areaServed: 'New York City',
            }).replace(/</g, '\\u003c'),
          }}
        />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
