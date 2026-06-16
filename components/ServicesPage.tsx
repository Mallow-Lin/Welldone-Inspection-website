import Link from 'next/link'
import services from '@/data/services'
import otherServices from '@/data/otherServices'
import ImageCard from '@/components/ImageCard'
import CTAButton from '@/components/CTAButton'

const ServiceRow = ({
  title,
  description,
  background,
  link,
  slug,
  reverse,
}: {
  title: string
  description: string
  background: string
  link: string
  slug?: string
  reverse: boolean
}) => {
  const internalHref = slug ? `/services/${slug}` : null

  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} space-x-4 md:space-x-10 border-t-2 border-gray-400 py-4 w-full`}>
      <div className={reverse ? 'mr-4 md:mr-10' : ''}>
        <ImageCard
          title={title}
          background={background}
          className='size-[100px] md:size-[150px] lg:size-[200px] flex-shrink-0'
        />
      </div>
      <div className='flex flex-col justify-center items-start space-y-6 text-[12px] md:text-md lg:text-lg'>
        <p>{description}</p>
        {internalHref ? (
          <CTAButton href={internalHref} className='text-[12px] md:text-md'>
            Learn More
          </CTAButton>
        ) : link ? (
          <CTAButton href={link} className='text-[12px] md:text-md'>
            DOB Form
          </CTAButton>
        ) : (
          <CTAButton href='/contact' className='text-[12px] md:text-md'>
            Contact us for details
          </CTAButton>
        )}
      </div>
    </div>
  )
}

const ServicesPage = () => {
  return (
    <div className='flex flex-col p-10 overflow-x-hidden'>
      <p className='font-semibold font-aleo md:text-[35px] font-bold text-[20px]'>Services</p>
      <p className='text-sm text-gray-600 mb-4'>
        Explore our{' '}
        <Link href='/services/tr1-special-inspections' className='text-brand-teal hover:underline'>TR1</Link>,{' '}
        <Link href='/services/concrete-testing' className='text-brand-teal hover:underline'>concrete testing</Link>,{' '}
        <Link href='/services/pile-driving-inspections' className='text-brand-teal hover:underline'>pile driving</Link>, and{' '}
        <Link href='/services/energy-code-compliance' className='text-brand-teal hover:underline'>energy code</Link>{' '}
        service pages for details.
      </p>
      <div className='md:flex md:space-x-5'>
        <div className='md:w-1/2'>
          {services.map((service, index) => (
            <ServiceRow
              key={service.title}
              title={service.title}
              description={service.longDescription}
              background={service.background}
              link={service.link}
              slug={service.slug}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
        <div className='md:w-1/2'>
          {otherServices.map((service, index) => (
            <ServiceRow
              key={service.title}
              title={service.title}
              description={service.longDescription}
              background={service.background}
              link={service.link}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
