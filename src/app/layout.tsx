import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import SiteShell from '@/components/SiteShell'
import JsonLd from '@/components/JsonLd'
import siteConfig from '@/data/siteConfig'
import { localBusinessSchema, metadataBase } from '@/lib/seo'
import { fontVariables } from '@/lib/fonts'

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export const metadata: Metadata = {
  metadataBase,
  title: 'NYC Special Inspection Agency | WellDone Inspection',
  description:
    'NYC DOB-registered Special Inspection Agency. TR1-TR8 inspections, concrete testing, pile driving, energy code compliance. MWBE-certified.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NYC Special Inspection Agency | WellDone Inspection',
    description:
      'NYC DOB-registered Special Inspection Agency. TR1-TR8 inspections, concrete testing, pile driving, energy code compliance. MWBE-certified.',
    url: siteConfig.url,
    siteName: siteConfig.companyName,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/logo.png`,
        width: 512,
        height: 512,
        alt: `${siteConfig.companyName} logo`,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={fontVariables}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        <JsonLd data={localBusinessSchema} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
