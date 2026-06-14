import type { Metadata } from 'next'
import ServicesPage from '@/components/ServicesPage'
import JsonLd from '@/components/JsonLd'
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
  professionalServiceSchema,
} from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Services - WellDone Inspection | NYC Special Inspection Agency',
  description:
    'WellDone Inspection offers NYC TR1-TR8 special inspections, concrete sampling, pile driving, energy code compliance, and engineering support for construction projects.',
  path: '/services',
})

const Services = () => {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <JsonLd data={professionalServiceSchema} />
      <ServicesPage />
    </>
  )
}

export default Services
