import Link from 'next/link'
import services from '@/data/services'
import otherServices from '@/data/otherServices'
import ImageCard from '@/components/ImageCard'
import CTAButton from '@/components/CTAButton'
import PageHeader from '@/components/PageHeader'

const ServiceCard = ({
  title,
  description,
  background,
  link,
  slug,
}: {
  title: string
  description: string
  background: string
  link: string
  slug?: string
}) => {
  const internalHref = slug ? `/services/${slug}` : null

  return (
    <div className='flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-soft md:gap-5 md:p-5'>
      <ImageCard
        title={title}
        background={background}
        className='size-[110px] shrink-0 md:size-[140px]'
      />
      <div className='flex min-w-0 flex-col justify-between gap-4 py-1'>
        <p className='text-sm md:text-base text-gray-700 leading-relaxed'>{description}</p>
        {internalHref ? (
          <CTAButton href={internalHref} variant='secondary' className='self-start'>
            Learn More
          </CTAButton>
        ) : link ? (
          <CTAButton href={link} variant='outline' className='self-start'>
            DOB Form
          </CTAButton>
        ) : (
          <CTAButton href='/contact' variant='outline' className='self-start'>
            Contact us for details
          </CTAButton>
        )}
      </div>
    </div>
  )
}

const ServicesPage = () => {
  const allServices = [...services, ...otherServices]

  return (
    <section className='section py-12 md:py-16'>
      <PageHeader
        title='Services'
        intro={
          <>
            Explore our{' '}
            <Link href='/services/tr1-special-inspections' className='text-brand-teal hover:underline'>TR1</Link>,{' '}
            <Link href='/services/concrete-testing' className='text-brand-teal hover:underline'>concrete testing</Link>,{' '}
            <Link href='/services/pile-driving-inspections' className='text-brand-teal hover:underline'>pile driving</Link>, and{' '}
            <Link href='/services/energy-code-compliance' className='text-brand-teal hover:underline'>energy code</Link>{' '}
            service pages for details.
          </>
        }
      />
      <div className='grid gap-5 md:gap-6 lg:grid-cols-2'>
        {allServices.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.longDescription}
            background={service.background}
            link={service.link}
            slug={service.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
