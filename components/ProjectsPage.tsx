import Link from 'next/link'
import projects from '@/data/projects'
import ImageCard from '@/components/ImageCard'
import PageHeader from '@/components/PageHeader'

const ProjectsPage = () => {
  return (
    <section className='section py-12 md:py-16'>
      <PageHeader title='Our Projects' />
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-8'>
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className='group flex flex-col'>
            <ImageCard
              title={project.title}
              description={project.description}
              background={project.background}
              className='aspect-[3/4] w-full'
              descriptionClassName='text-sm md:text-base'
            />
            <p className='text-center text-brand-teal text-sm mt-3 font-semibold group-hover:underline'>
              View project →
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
