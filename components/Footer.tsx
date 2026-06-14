import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import siteConfig from '@/data/siteConfig'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center bg-brand-teal lg:mt-5'>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:h-[260px] py-10 md:py-14 px-4 gap-8 md:gap-0'>
        <div className='flex flex-col w-full md:w-[320px] space-y-2 md:mx-10 lg:mx-20 items-center md:items-start text-center md:text-left'>
          <img src='/images/logos/logo_with_motto.png' alt='WellDone Inspection logo' className='w-[200px]' />
          <p className='text-brand-gold font-serif text-[10px] md:text-[12px] lg:text-[15px]'>{siteConfig.mwbe}</p>
        </div>
        <div className='hidden md:block border-[#3f3f3f] border-l-[1px] border-solid h-full' />
        <div className='flex flex-col w-full md:w-[250px] justify-center items-center space-y-2 text-brand-gold md:mx-10 lg:mx-20'>
          <p className='text-[15px] md:text-[20px] lg:text-[30px] font-bold font-oswald'>Services</p>
          <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>TR Inspections</p>
          <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>Engineering</p>
          <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>TPP</p>
          <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>SSP</p>
          <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px] text-center'>Structural Shop Drawings</p>
        </div>
        <div className='hidden md:block border-[#3f3f3f] border-l-[1px] border-solid h-full' />
        <div className='flex flex-col items-center md:items-start space-y-4 text-brand-gold md:mx-10 lg:mx-20'>
          <p className='text-[15px] md:text-[20px] lg:text-[30px] font-bold font-oswald'>Contact</p>
          <div className='flex space-x-2 sm:space-x-4 items-center text-[10px] md:text-[12px] lg:text-[15px]'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p className='font-merriweather'>{siteConfig.address.full}</p>
          </div>
          <div className='flex space-x-2 sm:space-x-4 items-center text-[10px] md:text-[12px] lg:text-[15px]'>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href={`mailto:${siteConfig.email}`} className='font-merriweather hover:underline'>
              {siteConfig.email}
            </a>
          </div>
          <div className='flex space-x-2 sm:space-x-4 items-center text-[10px] md:text-[12px] lg:text-[15px]'>
            <FontAwesomeIcon icon={faPhone} />
            <a href={`tel:${siteConfig.phoneTel}`} className='font-merriweather hover:underline'>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center bg-[#3f3f3f] space-y-2 sm:space-y-0 sm:space-x-4 text-[8px] md:text-[12px] lg:text-[15px] py-2 px-4'>
        <p className='text-white font-semibold'>© 2025 {siteConfig.companyName} All rights reserved.</p>
        <p className='font-medium text-blue-400'>Terms of Service</p>
        <p className='font-medium text-blue-400'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
