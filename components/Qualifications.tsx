import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faAward } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from '@/components/SectionHeading'
import siteConfig from '@/data/siteConfig'

const qualifications = [
  'NY / NJ State Licensed P.E. with Structural and Geotechnical Background',
  'AWS Certified Welding Inspector',
  'ICC Master of Special Inspection',
  'ICC Certified Concrete, Masonry, Welding, Bolting, Mechanical',
  'ACI Concrete Certified Inspector / Technician',
  'LEED AP',
  'PMI Project Management Professionals',
]

const Qualifications = () => {
  const { credentials } = siteConfig.founder
  return (
    <section className='section py-12 md:py-16'>
      <SectionHeading title='Licenses & Qualifications' />

      <h3 className='font-oswald text-lg md:text-xl font-semibold text-gray-900'>
        Licenses &amp; Certifications
      </h3>
      <ul className='mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-4'>
        {credentials.map((item) => (
          <li
            key={item}
            className='flex items-start gap-3 rounded-lg border border-brand-teal/20 bg-brand-teal/5 px-4 py-3 shadow-soft'
          >
            <FontAwesomeIcon icon={faAward} className='text-brand-teal mt-1 shrink-0' />
            <span className='text-base font-medium text-gray-800 leading-relaxed'>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className='mt-10 font-oswald text-lg md:text-xl font-semibold text-gray-900'>
        Technical Qualifications
      </h3>
      <ul className='mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-4'>
        {qualifications.map((item) => (
          <li
            key={item}
            className='flex items-start gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-soft'
          >
            <FontAwesomeIcon icon={faCertificate} className='text-brand-gold mt-1 shrink-0' />
            <span className='text-base text-gray-700 leading-relaxed'>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Qualifications
