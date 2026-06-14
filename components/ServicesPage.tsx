import services from '@/data/services'
import otherServices from '@/data/otherServices'
import ImageCard from '@/components/ImageCard'
import CTAButton from '@/components/CTAButton'

const ServiceRow = ({
  title,
  description,
  background,
  link,
  reverse,
}: {
  title: string
  description: string
  background: string
  link: string
  reverse: boolean
}) => {
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
        {link ? (
          <CTAButton href={link} className='text-[12px] md:text-md'>
            Learn More
          </CTAButton>
        ) : (
          <span className='inline-block border-2 border-gray-400 text-gray-500 py-[7px] px-[15px] text-[12px] md:text-md'>
            Contact us for details
          </span>
        )}
      </div>
    </div>
  )
}

const ServicesPage = () => {
  return (
    <div className='flex flex-col p-10 overflow-x-hidden'>
      <p className='font-semibold font-aleo md:text-[35px] font-bold text-[20px]'>Services</p>
      <div className='md:flex md:space-x-5'>
        <div className='md:w-1/2'>
          {services.map((service, index) => (
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
