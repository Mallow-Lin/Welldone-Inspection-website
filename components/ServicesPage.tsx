import Link from 'next/link'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import services from '@/data/services'
import otherServices from '@/data/otherServices'
import ImageCard from '@/components/ImageCard'
import CTAButton from '@/components/CTAButton'
import PageHeader from '@/components/PageHeader'
import SectionHeading from '@/components/SectionHeading'

const ServiceCard = ({
  title,
  description,
  background,
  icon,
  link,
  slug,
}: {
  title: string
  description: string
  background?: string
  icon?: IconDefinition
  link: string
  slug?: string
}) => {
  const internalHref = slug ? `/services/${slug}` : null

  return (
    <div className='flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-soft md:gap-5 md:p-5'>
      <ImageCard
        title={title}
        background={background}
        icon={icon}
        className='size-[110px] shrink-0 md:size-[140px]'
        iconClassName='text-3xl md:text-4xl'
      />
      <div className='flex min-w-0 flex-col justify-between gap-4 py-1'>
        <p className='text-sm md:text-base text-gray-700 leading-relaxed'>{description}</p>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
          {internalHref ? (
            <CTAButton href={internalHref} variant='secondary' className='self-start'>
              Learn More
            </CTAButton>
          ) : (
            <CTAButton href='/contact' variant='outline' className='self-start'>
              Contact us for details
            </CTAButton>
          )}
          {!internalHref && link && (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs font-medium text-brand-teal hover:underline'
            >
              DOB form (PDF) ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const ServicesPage = () => {
  return (
    <section className='section py-12 md:py-16'>
      <PageHeader
        title='Services'
        intro={
          <>
            We provide the full range of NYC DOB special inspections and related construction
            compliance support. Explore our detailed{' '}
            <Link href='/services/tr1-special-inspections' className='text-brand-teal hover:underline'>TR1</Link>,{' '}
            <Link href='/services/concrete-testing' className='text-brand-teal hover:underline'>concrete testing</Link>,{' '}
            <Link href='/services/pile-driving-inspections' className='text-brand-teal hover:underline'>pile driving</Link>, and{' '}
            <Link href='/services/energy-code-compliance' className='text-brand-teal hover:underline'>energy code</Link>{' '}
            service pages, or contact us about any service below.
          </>
        }
      />

      <SectionHeading title='Special Inspection Services' />
      <div className='grid gap-5 md:gap-6 lg:grid-cols-2'>
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.longDescription}
            background={service.background}
            icon={service.icon}
            link={service.link}
            slug={service.slug}
          />
        ))}
      </div>

      <div className='mt-12 md:mt-14'>
        <SectionHeading title='Additional Services' />
        <div className='grid gap-5 md:gap-6 lg:grid-cols-2'>
          {otherServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.longDescription}
              background={service.background}
              icon={service.icon}
              link={service.link}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
