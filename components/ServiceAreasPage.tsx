import serviceAreas from '@/data/serviceAreas'
import CTAButton from '@/components/CTAButton'
import siteConfig from '@/data/siteConfig'

const ServiceAreasPage = () => {
  return (
    <div className='font-aleo pb-16 px-6 max-w-4xl mx-auto'>
      <h1 className='text-[20px] md:text-[35px] font-semibold mt-5 mb-2'>{serviceAreas.headline}</h1>
      <p className='text-sm md:text-lg text-gray-700 mb-8 leading-relaxed'>{serviceAreas.intro}</p>

      <div className='grid md:grid-cols-2 gap-4 mb-10'>
        {serviceAreas.boroughs.map((borough) => (
          <div key={borough.name} className='bg-gray-50 rounded-xl p-5 border-l-4 border-brand-teal'>
            <h2 className='font-oswald text-lg font-bold text-brand-teal mb-2'>{borough.name}</h2>
            <p className='text-sm md:text-base text-gray-700'>{borough.description}</p>
          </div>
        ))}
      </div>

      <section className='mb-10'>
        <h2 className='font-oswald text-xl font-bold text-brand-teal mb-3'>New Jersey</h2>
        <p className='text-sm md:text-base text-gray-700 leading-relaxed'>{serviceAreas.newJersey}</p>
      </section>

      <section className='mb-10'>
        <h2 className='font-oswald text-xl font-bold text-brand-teal mb-3'>Credentials</h2>
        <ul className='space-y-2'>
          {serviceAreas.certifications.map((cert) => (
            <li key={cert} className='text-sm md:text-base text-gray-700 flex items-center'>
              <span className='text-brand-gold mr-2'>✓</span>
              {cert}
            </li>
          ))}
        </ul>
      </section>

      <div className='bg-gray-100 rounded-xl p-6 text-center'>
        <p className='mb-2 font-semibold'>Headquarters: {siteConfig.address.full}</p>
        <p className='text-sm text-gray-600 mb-4'>
          <a href={`tel:${siteConfig.phoneTel}`} className='text-brand-teal hover:underline'>{siteConfig.phone}</a>
          {' · '}
          <a href={`mailto:${siteConfig.email}`} className='text-brand-teal hover:underline'>{siteConfig.email}</a>
        </p>
        <CTAButton href='/contact'>Request an Inspection Quote</CTAButton>
      </div>
    </div>
  )
}

export default ServiceAreasPage
