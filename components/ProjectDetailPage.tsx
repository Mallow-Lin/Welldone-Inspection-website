import Image from 'next/image'
import Link from 'next/link'
import type { ProjectItem } from '@/data/projects'
import CTAButton from '@/components/CTAButton'

type ProjectDetailPageProps = {
  project: ProjectItem
}

const ProjectDetailPage = ({ project }: ProjectDetailPageProps) => {
  return (
    <article className='font-aleo pb-16 px-6 max-w-4xl mx-auto'>
      <Link href='/projects' className='text-brand-teal text-sm hover:underline mt-5 inline-block'>
        ← All projects
      </Link>

      <h1 className='text-[20px] md:text-[35px] font-semibold mt-4 mb-2'>{project.title}</h1>
      <p className='text-brand-teal font-semibold mb-6'>{project.description}</p>

      <div className='relative w-full h-56 md:h-80 rounded-xl overflow-hidden mb-8'>
        <Image
          src={project.background}
          alt={project.title}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 896px'
          priority
        />
      </div>

      <p className='text-sm md:text-lg text-gray-700 leading-relaxed mb-8'>{project.detail}</p>

      <section className='mb-10'>
        <h2 className='font-oswald text-xl font-bold text-brand-teal mb-3'>Inspection Scope</h2>
        <ul className='space-y-2'>
          {project.scope.map((item) => (
            <li key={item} className='text-sm md:text-base text-gray-700 flex items-start'>
              <span className='text-brand-gold mr-2'>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CTAButton href='/contact'>Discuss a Similar Project</CTAButton>
    </article>
  )
}

export default ProjectDetailPage
