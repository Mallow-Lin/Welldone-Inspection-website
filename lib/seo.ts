import type { Metadata } from 'next'
import siteConfig from '@/data/siteConfig'

export const metadataBase = new URL(siteConfig.url)

type MetadataInput = {
  title: string
  description: string
  path: string
}

export const buildPageMetadata = ({ title, description, path }: MetadataInput): Metadata => {
  const canonical = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
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
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.companyName,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  },
  image: `${siteConfig.url}/logo.png`,
}

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.companyName,
  serviceType: 'NYC Special Inspections and Engineering Services',
  areaServed: 'New York City',
  provider: {
    '@type': 'Organization',
    name: siteConfig.companyName,
    url: siteConfig.url,
  },
}

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.path === '/' ? siteConfig.url : `${siteConfig.url}${item.path}`,
  })),
})
