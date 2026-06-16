import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import serviceAreas from '@/data/serviceAreas'
import CTAButton from '@/components/CTAButton'
import SectionHeading from '@/components/SectionHeading'
import PageHeader from '@/components/PageHeader'
import siteConfig from '@/data/siteConfig'

const ServiceAreasPage = () => {
  return (
    <section className='section py-12 md:py-16'>
      <PageHeader title={serviceAreas.headline} intro={serviceAreas.intro} />

      <div className='grid md:grid-cols-2 gap-5 mb-12'>
        {serviceAreas.boroughs.map((borough) => (
          <div key={borough.name} className='rounded-xl border border-gray-100 bg-white p-5 shadow-soft border-l-4 border-l-brand-teal'>
            <h3 className='font-oswald text-lg font-semibold text-brand-teal mb-2'>{borough.name}</h3>
            <p className='text-base text-gray-700 leading-relaxed'>{borough.description}</p>
          </div>
        ))}
      </div>

      <section className='mb-12'>
        <SectionHeading title='New Jersey' />
        <p className='text-base text-gray-700 leading-relaxed'>{serviceAreas.newJersey}</p>
      </section>

      <section className='mb-12'>
        <SectionHeading title='Credentials' />
        <ul className='grid sm:grid-cols-2 gap-x-8 gap-y-3'>
          {serviceAreas.certifications.map((cert) => (
            <li key={cert} className='flex items-start gap-3 text-base text-gray-700'>
              <FontAwesomeIcon icon={faCheck} className='text-brand-teal mt-1 shrink-0' />
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className='rounded-xl border border-gray-100 bg-gray-50 p-6 md:p-8 shadow-soft text-center'>
        <p className='font-oswald text-lg font-semibold text-gray-900 mb-2'>Headquarters: {siteConfig.address.full}</p>
        <p className='text-sm text-gray-600 mb-5'>
          <a href={`tel:${siteConfig.phoneTel}`} className='text-brand-teal hover:underline'>{siteConfig.phone}</a>
          {' · '}
          <a href={`mailto:${siteConfig.email}`} className='text-brand-teal hover:underline'>{siteConfig.email}</a>
        </p>
        <CTAButton href='/contact' variant='primary'>Request an Inspection Quote</CTAButton>
      </div>
    </section>
  )
}

export default ServiceAreasPage
