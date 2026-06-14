import type { Metadata } from 'next'
import ProjectsPage from '@/components/ProjectsPage'
import JsonLd from '@/components/JsonLd'
import { buildBreadcrumbSchema, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Projects - WellDone Inspection',
  description:
    'Explore recent NYC construction projects supported by WellDone Inspection with special inspections, facade oversight, and quality assurance services.',
  path: '/projects',
})

const Projects = () => {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ])}
      />
      <ProjectsPage />
    </>
  )
}

export default Projects
