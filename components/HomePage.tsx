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
      <section className='section pb-16 md:pb-20'>
        <Link
          href='/projects'
          className='group mx-auto flex max-w-xl items-center justify-center gap-3 rounded-xl border border-gray-200 px-6 py-4 font-oswald font-medium text-gray-800 hover:border-brand-teal hover:text-brand-teal transition-colors'
        >
          <span className='text-base md:text-lg'>Check out our latest projects</span>
          <FontAwesomeIcon icon={faScrewdriverWrench} className='transition-transform duration-300 group-hover:translate-x-1' />
        </Link>
      </section>
    </div>
  )
}

export default HomePage
