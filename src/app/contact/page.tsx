import type { Metadata } from 'next'
import ContactPage from '@/components/ContactPage'
import JsonLd from '@/components/JsonLd'
import { buildBreadcrumbSchema, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact - WellDone Inspection',
  description:
    'Contact WellDone Inspection for NYC special inspection quotes and project support. Reach us by phone, email, or submit the online form.',
  path: '/contact',
})

const Contact = () => {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <ContactPage />
    </>
  )
}

export default Contact
