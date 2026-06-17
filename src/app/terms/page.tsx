import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import JsonLd from '@/components/JsonLd'
import siteConfig from '@/data/siteConfig'
import { buildBreadcrumbSchema, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Service | WellDone Inspection',
  description:
    'The terms that govern your use of the WellDone Inspection, Inc. website.',
  path: '/terms',
})

const Terms = () => {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ])}
      />
      <LegalPage
        title='Terms of Service'
        lastUpdated='June 2026'
        intro={`These Terms of Service govern your use of the ${siteConfig.companyName} website. By using this site, you agree to these terms.`}
        sections={[
          {
            heading: 'Use of This Website',
            paragraphs: [
              'This website is provided for general informational purposes about our special inspection and engineering services. You agree to use it lawfully and not to interfere with its operation or security.',
            ],
          },
          {
            heading: 'No Professional Engagement',
            paragraphs: [
              'Information on this website is general in nature and does not constitute engineering advice or a contractual offer. A professional engagement begins only when a written agreement or scope of work is executed between you and WellDone Inspection, Inc. Inspection services are performed in accordance with the applicable provisions of the NYC Building Code and the project-specific Statement of Special Inspections.',
            ],
          },
          {
            heading: 'Quotes and Communications',
            paragraphs: [
              'Submitting our contact form or requesting a quote does not create a binding agreement. Quotes are estimates based on the information provided and are subject to confirmation once project scope and documents are reviewed.',
            ],
          },
          {
            heading: 'Intellectual Property',
            paragraphs: [
              'The content, branding, and materials on this website are the property of WellDone Inspection, Inc. and may not be copied or reused without permission.',
            ],
          },
          {
            heading: 'Limitation of Liability',
            paragraphs: [
              'This website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, WellDone Inspection, Inc. is not liable for any damages arising from your use of, or reliance on, information presented on this website.',
            ],
          },
          {
            heading: 'Contact Us',
            paragraphs: [
              `Questions about these terms can be directed to ${siteConfig.email} or ${siteConfig.phone}.`,
            ],
          },
        ]}
      />
    </>
  )
}

export default Terms
