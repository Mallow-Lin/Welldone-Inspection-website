import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import type { ProjectItem } from '@/data/projects'
import CTAButton from '@/components/CTAButton'
import SectionHeading from '@/components/SectionHeading'

type ProjectDetailPageProps = {
  project: ProjectItem
}

const ProjectDetailPage = ({ project }: ProjectDetailPageProps) => {
  return (
    <article className='section max-w-4xl py-12 md:py-16'>
      <Link href='/projects' className='text-brand-teal text-sm hover:underline inline-block'>
        ← All projects
      </Link>

      <h1 className='font-oswald font-semibold text-gray-900 leading-tight tracking-tight text-3xl md:text-4xl mt-4 mb-2'>
        {project.title}
      </h1>
      <p className='text-brand-teal font-semibold mb-6'>{project.description}</p>

      <div className='relative w-full h-56 md:h-80 rounded-xl overflow-hidden mb-8 shadow-card'>
        <Image
          src={project.background}
          alt={project.title}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 896px'
          priority
        />
      </div>

      <p className='text-base md:text-lg text-gray-700 leading-relaxed mb-10'>{project.detail}</p>

      <section className='mb-10'>
        <SectionHeading title='Inspection Scope' />
        <ul className='grid sm:grid-cols-2 gap-x-8 gap-y-3'>
          {project.scope.map((item) => (
            <li key={item} className='flex items-start gap-3 text-base text-gray-700'>
              <FontAwesomeIcon icon={faCheck} className='text-brand-teal mt-1 shrink-0' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <CTAButton href='/contact' variant='primary'>Discuss a Similar Project</CTAButton>
    </article>
  )
}

export default ProjectDetailPage
