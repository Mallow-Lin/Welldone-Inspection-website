import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import JsonLd from '@/components/JsonLd'
import { getServiceLanding, getAllServiceLandingSlugs } from '@/data/serviceLandings'
import { buildBreadcrumbSchema, buildPageMetadata, buildServiceSchema } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () =>
  getAllServiceLandingSlugs().map((slug) => ({ slug }))

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const landing = getServiceLanding(slug)
  if (!landing) return {}

  return buildPageMetadata({
    title: landing.metaTitle,
    description: landing.metaDescription,
    path: `/services/${slug}`,
  })
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const landing = getServiceLanding(slug)
  if (!landing) notFound()

  const path = `/services/${slug}`

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: landing.title, path },
        ])}
      />
      <JsonLd
        data={buildServiceSchema({
          title: landing.title,
          description: landing.summary,
          path,
        })}
      />
      <ServiceLandingPage landing={landing} />
    </>
  )
}

export default Page
