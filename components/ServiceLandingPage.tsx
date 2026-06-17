import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import type { ServiceLanding } from '@/data/serviceLandings'
import siteConfig from '@/data/siteConfig'
import CTAButton from '@/components/CTAButton'

type ServiceLandingPageProps = {
  landing: ServiceLanding
}

const ServiceLandingPage = ({ landing }: ServiceLandingPageProps) => {
  return (
    <article className='pb-16'>
      <header className='relative bg-brand-teal text-white py-12 md:py-16'>
        <div className='section max-w-4xl'>
          <p className='text-brand-gold text-sm font-semibold mb-2'>
            NYC DOB {landing.dobForm} ·{' '}
            <a href={landing.dobLink} className='underline hover:text-white' target='_blank' rel='noopener noreferrer'>
              Official form reference
            </a>
          </p>
          <h1 className='font-oswald text-3xl md:text-4xl font-bold mb-4 text-white'>{landing.title}</h1>
          <p className='text-gray-100/90 text-base md:text-lg leading-relaxed'>{landing.summary}</p>
        </div>
      </header>

      <div className='section max-w-4xl py-10 md:py-12'>
        <div className='relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-10 shadow-card'>
          {landing.heroImage ? (
            <Image
              src={landing.heroImage}
              alt={landing.title}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 896px'
              priority
            />
          ) : (
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-teal via-[#1a6b6b] to-[#124f4f]'>
              <FontAwesomeIcon icon={landing.heroIcon ?? faCheck} className='text-brand-gold/90 text-6xl md:text-7xl' />
            </div>
          )}
        </div>

        {landing.sections.map((section) => (
          <section key={section.heading} className='mb-8'>
            <h2 className='font-oswald text-xl md:text-2xl font-semibold text-brand-teal mb-3'>{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className='text-base text-gray-700 mb-3 leading-relaxed'>
                {p}
              </p>
            ))}
          </section>
        ))}

        <section className='mb-10'>
          <h2 className='font-oswald text-xl md:text-2xl font-semibold text-brand-teal mb-4'>Capabilities</h2>
          <ul className='grid sm:grid-cols-2 gap-x-8 gap-y-3'>
            {landing.capabilities.map((item) => (
              <li key={item} className='flex items-start gap-3 text-base text-gray-700'>
                <FontAwesomeIcon icon={faCheck} className='text-brand-teal mt-1 shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className='rounded-xl border border-gray-100 bg-gray-50 p-6 md:p-8 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5'>
          <div>
            <h2 className='font-oswald text-lg md:text-xl font-semibold text-gray-900 mb-1'>Request a quote for this service</h2>
            <p className='text-sm text-gray-600'>We respond within 24 hours. Call {siteConfig.phone} for urgent inspections.</p>
          </div>
          <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
            <CTAButton href='/contact' variant='primary' className='text-center'>Get a Quote</CTAButton>
            <CTAButton href={`tel:${siteConfig.phoneTel}`} variant='outline' className='text-center'>Call Now</CTAButton>
          </div>
        </div>

        <p className='mt-8 text-sm text-gray-500'>
          <Link href='/services' className='text-brand-teal hover:underline'>← All services</Link>
          {' · '}
          <Link href='/faq' className='text-brand-teal hover:underline'>FAQ</Link>
        </p>
      </div>
    </article>
  )
}

export default ServiceLandingPage
