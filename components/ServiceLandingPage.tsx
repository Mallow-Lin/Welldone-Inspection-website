import Image from 'next/image'
import Link from 'next/link'
import type { ServiceLanding } from '@/data/serviceLandings'
import siteConfig from '@/data/siteConfig'
import CTAButton from '@/components/CTAButton'

type ServiceLandingPageProps = {
  landing: ServiceLanding
}

const ServiceLandingPage = ({ landing }: ServiceLandingPageProps) => {
  return (
    <article className='font-aleo pb-16'>
      <header className='relative bg-brand-teal text-white px-6 py-12 md:py-16'>
        <div className='max-w-4xl mx-auto'>
          <p className='text-brand-gold text-sm font-semibold mb-2'>
            NYC DOB {landing.dobForm} ·{' '}
            <a href={landing.dobLink} className='underline hover:text-white' target='_blank' rel='noopener noreferrer'>
              Official form reference
            </a>
          </p>
          <h1 className='font-oswald text-2xl md:text-4xl font-bold mb-4'>{landing.title}</h1>
          <p className='text-gray-200 text-sm md:text-lg'>{landing.summary}</p>
        </div>
      </header>

      <div className='max-w-4xl mx-auto px-6 py-10'>
        <div className='relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-10'>
          <Image
            src={landing.heroImage}
            alt={landing.title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 896px'
            priority
          />
        </div>

        {landing.sections.map((section) => (
          <section key={section.heading} className='mb-8'>
            <h2 className='font-oswald text-xl md:text-2xl font-bold text-brand-teal mb-3'>{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className='text-gray-700 text-sm md:text-base mb-3 leading-relaxed'>
                {p}
              </p>
            ))}
          </section>
        ))}

        <section className='mb-10'>
          <h2 className='font-oswald text-xl md:text-2xl font-bold text-brand-teal mb-3'>Capabilities</h2>
          <ul className='grid sm:grid-cols-2 gap-2'>
            {landing.capabilities.map((item) => (
              <li key={item} className='flex items-start text-sm md:text-base text-gray-700'>
                <span className='text-brand-gold mr-2'>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className='bg-gray-100 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div>
            <h2 className='font-oswald text-lg md:text-xl font-bold mb-1'>Request a quote for this service</h2>
            <p className='text-sm text-gray-600'>We respond within 24 hours. Call {siteConfig.phone} for urgent inspections.</p>
          </div>
          <div className='flex flex-col sm:flex-row gap-3'>
            <CTAButton href='/contact' className='text-center'>Get a Quote</CTAButton>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className='inline-block text-center border-2 border-brand-teal text-brand-teal py-[7px] px-[15px] font-roboto hover:bg-brand-teal hover:text-brand-gold duration-300 text-sm'
            >
              Call Now
            </a>
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
