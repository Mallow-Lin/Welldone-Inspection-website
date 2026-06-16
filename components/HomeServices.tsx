import Link from 'next/link'
import services from '@/data/services'
import ImageCard from '@/components/ImageCard'
import SectionHeading from '@/components/SectionHeading'
import CTAButton from '@/components/CTAButton'

const HomeServices = () => {
  return (
    <section className='bg-gray-100 py-12 md:py-16'>
      <div className='section'>
        <SectionHeading title='Services' align='center' />
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center'>
          {services.map((service) => {
            const learnMoreHref = service.slug ? `/services/${service.slug}` : '/services'
            return (
              <div key={service.title} className='flex flex-col items-center w-full max-w-[280px]'>
                <Link href={learnMoreHref} className='w-full'>
                  <ImageCard
                    title={service.title}
                    description={service.shortDescription}
                    background={service.background}
                    className='aspect-square w-full'
                    descriptionClassName='text-xs sm:text-sm md:text-base px-2'
                  />
                </Link>
                <CTAButton href={learnMoreHref} variant='outline' className='mt-4'>
                  LEARN MORE
                </CTAButton>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeServices
