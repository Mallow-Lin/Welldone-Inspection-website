import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faAward, faUserTie, faClock } from '@fortawesome/free-solid-svg-icons'
import projects from '@/data/projects'
import SectionHeading from '@/components/SectionHeading'

const trustStats = [
  { icon: faShieldHalved, label: 'DOB-Registered', sub: 'Special Inspection Agency' },
  { icon: faAward, label: 'MWBE-Certified', sub: 'Minority & Women-owned' },
  { icon: faUserTie, label: 'Direct P.E. Access', sub: 'Work with a licensed engineer' },
  { icon: faClock, label: '10+ Years', sub: 'Structural & inspection experience' },
]

const Testimonials = () => {
  return (
    <section className='section py-12 md:py-16'>
      <SectionHeading title='Trusted Across NYC' />
      <p className='-mt-4 mb-8 max-w-3xl text-base md:text-lg text-gray-600 leading-relaxed'>
        From supertall towers to landmark institutions, builders and owners rely on WellDone
        Inspection for accurate, code-compliant Chapter 17 inspections.
      </p>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {trustStats.map((stat) => (
          <div key={stat.label} className='rounded-xl border border-gray-100 bg-white p-5 shadow-soft text-center'>
            <FontAwesomeIcon icon={stat.icon} className='text-brand-teal text-2xl md:text-3xl' />
            <p className='mt-3 font-oswald text-base md:text-lg font-semibold text-gray-900 leading-tight'>{stat.label}</p>
            <p className='mt-1 text-xs md:text-sm text-gray-600 leading-snug'>{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className='mt-10'>
        <h3 className='font-oswald text-lg md:text-xl font-semibold text-gray-900 mb-4'>Selected projects</h3>
        <div className='flex flex-wrap gap-3'>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className='rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand-teal hover:text-brand-teal'
            >
              {project.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
