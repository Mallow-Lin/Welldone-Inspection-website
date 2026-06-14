import type { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'
import JsonLd from '@/components/JsonLd'
import { buildBreadcrumbSchema, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'About - WellDone Inspection',
  description:
    'Learn about WellDone Inspection, a NYC DOB-registered Special Inspection Agency led by licensed engineers focused on code-compliant construction oversight.',
  path: '/about',
})

const About = () => {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <AboutPage />
    </>
  )
}

export default About
