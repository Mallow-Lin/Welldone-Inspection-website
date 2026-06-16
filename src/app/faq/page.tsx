import type { Metadata } from 'next'
import FaqPage from '@/components/FaqPage'
import JsonLd from '@/components/JsonLd'
import faqItems from '@/data/faq'
import { buildBreadcrumbSchema, buildFaqSchema, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Special Inspection FAQ | WellDone Inspection NYC',
  description:
    'Answers to common questions about NYC special inspections, TR1 requirements, hiring a DOB inspection agency, and MWBE certification.',
  path: '/faq',
})

const Faq = () => {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ])}
      />
      <JsonLd data={buildFaqSchema(faqItems)} />
      <FaqPage />
    </>
  )
}

export default Faq
