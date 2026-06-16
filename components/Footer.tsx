import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import siteConfig from '@/data/siteConfig'

const Footer = () => {
  return (
    <footer className='bg-brand-teal text-white'>
      <div className='mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 md:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12'>
          <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <Image src='/images/logos/logo_with_motto.png' alt='WellDone Inspection logo' width={200} height={80} className='w-[180px] h-auto' />
            <p className='mt-3 text-brand-gold font-merriweather text-sm leading-relaxed max-w-[260px]'>{siteConfig.mwbe}</p>
          </div>

          <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h2 className='font-oswald text-xl font-semibold text-brand-gold mb-4'>Services</h2>
            <ul className='space-y-2.5'>
              <li><Link href='/services/tr1-special-inspections' className='font-merriweather text-sm text-gray-100 hover:text-brand-gold transition-colors'>TR1 Inspections</Link></li>
              <li><Link href='/services/concrete-testing' className='font-merriweather text-sm text-gray-100 hover:text-brand-gold transition-colors'>Concrete Testing</Link></li>
              <li><Link href='/faq' className='font-merriweather text-sm text-gray-100 hover:text-brand-gold transition-colors'>FAQ</Link></li>
              <li><Link href='/service-areas' className='font-merriweather text-sm text-gray-100 hover:text-brand-gold transition-colors'>Service Areas</Link></li>
            </ul>
          </div>

          <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h2 className='font-oswald text-xl font-semibold text-brand-gold mb-4'>Contact</h2>
            <ul className='space-y-3 text-sm'>
              <li className='flex items-start gap-3 justify-center sm:justify-start'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='text-brand-gold mt-1 shrink-0' />
                <span className='font-merriweather text-gray-100'>{siteConfig.address.full}</span>
              </li>
              <li className='flex items-center gap-3 justify-center sm:justify-start'>
                <FontAwesomeIcon icon={faEnvelope} className='text-brand-gold shrink-0' />
                <a href={`mailto:${siteConfig.email}`} className='font-merriweather text-gray-100 hover:text-brand-gold transition-colors break-all'>
                  {siteConfig.email}
                </a>
              </li>
              <li className='flex items-center gap-3 justify-center sm:justify-start'>
                <FontAwesomeIcon icon={faPhone} className='text-brand-gold shrink-0' />
                <a href={`tel:${siteConfig.phoneTel}`} className='font-merriweather text-gray-100 hover:text-brand-gold transition-colors'>
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-200'>
          <p>© 2025 {siteConfig.companyName} All rights reserved.</p>
          <div className='flex items-center gap-5'>
            <Link href='#' className='hover:text-brand-gold transition-colors'>Terms of Service</Link>
            <Link href='#' className='hover:text-brand-gold transition-colors'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
