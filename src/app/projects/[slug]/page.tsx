import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetailPage from '@/components/ProjectDetailPage'
import JsonLd from '@/components/JsonLd'
import { getProject, getAllProjectSlugs } from '@/data/projects'
import { buildBreadcrumbSchema, buildPageMetadata } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () =>
  getAllProjectSlugs().map((slug) => ({ slug }))

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return buildPageMetadata({
    title: `${project.title} | WellDone Inspection Projects`,
    description: `${project.description}. ${project.detail.slice(0, 120)}...`,
    path: `/projects/${slug}`,
  })
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const path = `/projects/${slug}`

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.title, path },
        ])}
      />
      <ProjectDetailPage project={project} />
    </>
  )
}

export default Page
