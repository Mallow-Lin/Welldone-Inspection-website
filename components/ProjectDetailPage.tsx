import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import type { ProjectItem } from '@/data/projects'
import CTAButton from '@/components/CTAButton'

type ProjectDetailPageProps = {
  project: ProjectItem
}

const ProjectDetailPage = ({ project }: ProjectDetailPageProps) => {
  return (
    <article className='section max-w-5xl py-12 md:py-16'>
      <Link href='/projects' className='text-brand-teal text-sm hover:underline inline-block'>
        ← All projects
      </Link>

      <h1 className='font-oswald font-semibold text-gray-900 leading-tight tracking-tight text-3xl md:text-4xl mt-4 mb-2'>
        {project.title}
      </h1>
      <p className='text-brand-teal font-semibold mb-8'>{project.description}</p>

      <div className='grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12'>
        <div>
          <div className='relative w-full h-56 md:h-80 rounded-xl overflow-hidden mb-8 shadow-card'>
            {project.background ? (
              <Image
                src={project.background}
                alt={project.title}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 720px'
                priority
              />
            ) : (
              <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-teal via-[#1a6b6b] to-[#124f4f]'>
                {project.icon && (
                  <FontAwesomeIcon icon={project.icon} className='text-brand-gold/90 text-6xl md:text-7xl' />
                )}
              </div>
            )}
          </div>

          <p className='text-base md:text-lg text-gray-700 leading-relaxed'>{project.detail}</p>
        </div>

        <aside className='self-start rounded-xl border border-gray-100 bg-gray-50 p-6 md:p-7 shadow-soft lg:sticky lg:top-28'>
          <h2 className='font-oswald text-xl md:text-2xl font-semibold text-gray-900'>Inspection Scope</h2>
          <span className='mt-3 block h-1 w-12 rounded-full bg-brand-gold' />
          <ul className='mt-5 space-y-3'>
            {project.scope.map((item) => (
              <li key={item} className='flex items-start gap-3 text-base text-gray-700'>
                <FontAwesomeIcon icon={faCheck} className='text-brand-teal mt-1 shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <CTAButton href='/contact' variant='primary' className='mt-7 w-full text-center'>
            Discuss a Similar Project
          </CTAButton>
        </aside>
      </div>
    </article>
  )
}

export default ProjectDetailPage
