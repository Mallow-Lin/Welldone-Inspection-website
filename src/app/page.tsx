import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import JsonLd from '@/components/JsonLd'
import { buildBreadcrumbSchema, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'WellDone Inspection | NYC Special Inspection Agency',
  description:
    'WellDone Inspection is a NYC DOB-registered Special Inspection Agency offering TR1-TR8 inspections, concrete testing, pile driving oversight, and energy code compliance.',
  path: '/',
})

const Home = () => {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }])} />
      <HomePage />
    </>
  )
}

export default Home
