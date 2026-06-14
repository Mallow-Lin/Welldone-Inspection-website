import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import Hero from '@/components/Hero'
import AboutContent from '@/components/AboutContent'
import Qualifications from '@/components/Qualifications'
import HomeServices from '@/components/HomeServices'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutContent compact />
      <WhyChooseUs />
      <Qualifications />
      <HomeServices />
      <Testimonials />
      <div className='w-full justify-center flex lg:mt-5'>
        <Link
          href='/projects'
          className='flex justify-center items-center group space-x-4 w-2/3 sm:w-1/2 hover:w-3/5 hover:text-brand-gold border-[3px] px-6 py-3 my-6 font-semibold rounded-xl border-gray-300 hover:border-brand-gold hover:bg-brand-teal duration-500'
        >
          <p className='-mr-6 group-hover:mr-0 duration-500 text-[10px] md:text-[15px] lg:text-[18px]'>Check out our latest projects.</p>
          <FontAwesomeIcon icon={faScrewdriverWrench} className='opacity-0 group-hover:flex group-hover:opacity-100 duration-500' />
        </Link>
      </div>
    </div>
  )
}

export default HomePage
