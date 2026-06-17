import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import JsonLd from '@/components/JsonLd'
import siteConfig from '@/data/siteConfig'
import { buildBreadcrumbSchema, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy | WellDone Inspection',
  description:
    'How WellDone Inspection, Inc. collects, uses, and protects information submitted through this website and our contact form.',
  path: '/privacy',
})

const Privacy = () => {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ])}
      />
      <LegalPage
        title='Privacy Policy'
        lastUpdated='June 2026'
        intro={`This Privacy Policy explains how ${siteConfig.companyName} ("we," "us," or "our") handles information collected through this website.`}
        sections={[
          {
            heading: 'Information We Collect',
            paragraphs: [
              'When you submit our contact form, we collect the information you provide—typically your name, email address, phone number, project type, preferred contact method, and any message details such as a project address. We only ask for information needed to respond to your inquiry and prepare an inspection quote.',
              'We may also collect standard, non-identifying analytics data (such as pages visited and general location) to understand how the site is used and improve it.',
            ],
          },
          {
            heading: 'How We Use Your Information',
            paragraphs: [
              'We use the information you submit solely to respond to your request, provide quotes, coordinate inspections, and communicate with you about your project. We do not sell your personal information.',
            ],
          },
          {
            heading: 'Service Providers',
            paragraphs: [
              'Contact form submissions are delivered to us using a third-party email delivery service, and website analytics may be provided by a third-party analytics provider. These providers process data only as needed to deliver their services.',
            ],
          },
          {
            heading: 'Data Retention',
            paragraphs: [
              'We retain inquiry information for as long as needed to respond to your request and maintain our business records, after which it may be deleted.',
            ],
          },
          {
            heading: 'Your Choices',
            paragraphs: [
              'You may request that we update or delete the contact information you submitted by emailing us. You can also choose not to submit the contact form and instead reach us directly by phone or email.',
            ],
          },
          {
            heading: 'Contact Us',
            paragraphs: [
              `If you have questions about this Privacy Policy, contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
            ],
          },
        ]}
      />
    </>
  )
}

export default Privacy
