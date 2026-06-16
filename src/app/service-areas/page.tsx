import type { Metadata } from 'next'
import ServiceAreasPage from '@/components/ServiceAreasPage'
import JsonLd from '@/components/JsonLd'
import { buildBreadcrumbSchema, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'NYC Service Areas | WellDone Inspection',
  description:
    'Special inspection services across all NYC boroughs—Manhattan, Brooklyn, Queens, Bronx, Staten Island—and select New Jersey projects.',
  path: '/service-areas',
})

const ServiceAreas = () => {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
        ])}
      />
      <ServiceAreasPage />
    </>
  )
}

export default ServiceAreas
