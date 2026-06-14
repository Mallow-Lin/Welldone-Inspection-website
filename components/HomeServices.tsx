import Link from 'next/link'
import services from '@/data/services'
import ImageCard from '@/components/ImageCard'

const HomeServices = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 mt-8'>
      <div className='font-semibold md:text-[50px] font-bold text-[20px] mt-5'>Services</div>
      <div className='flex flex-wrap gap-6 items-center justify-center mt-5'>
        {services.map((service) => (
          <div key={service.title} className='flex flex-col items-center'>
            <Link href='/services'>
              <ImageCard
                title={service.title}
                description={service.shortDescription}
                background={service.background}
                className='h-[180px] w-[180px] md:h-[200px] md:w-[200px] lg:h-[260px] lg:w-[260px]'
                descriptionClassName='text-[10px] sm:text-[12px] md:text-sm lg:text-xl px-1'
              />
            </Link>
            <Link
              href='/services'
              className='py-[10px] px-[20px] mt-3 mb-2 font-roboto text-brand-teal border-brand-teal border-[1px] text-[13px] hover:bg-brand-teal hover:text-brand-gold duration-300'
            >
              LEARN MORE
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeServices
