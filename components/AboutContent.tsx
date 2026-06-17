import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faCheck } from '@fortawesome/free-solid-svg-icons'
import siteConfig from '@/data/siteConfig'
import SectionHeading from '@/components/SectionHeading'
import CTAButton from '@/components/CTAButton'

type AboutContentProps = {
  compact?: boolean
  showContactCta?: boolean
}

const whatWeDo = [
  'Structural Steel & Welding Inspections',
  'Concrete Placement & Rebar',
  'Soils, Footings, and Deep Foundations (Piles, Caissons, Helical Piers)',
  'Wood Framing & Shear Walls',
  'EIFS & Fireproofing',
  'Energy Code Compliance Inspections',
  'Excavation and Underpinning Oversight',
]

const FounderCard = ({ compact = false }: { compact?: boolean }) => {
  const { founder } = siteConfig
  return (
    <div className={`flex-none mx-auto md:mx-0 ${compact ? 'w-[200px]' : 'w-[220px]'}`}>
      <div className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft'>
        <img
          src={founder.photo}
          alt={`${founder.name}, ${founder.title} of ${siteConfig.companyName}`}
          className='aspect-square w-full object-cover'
        />
        <div className='p-4 text-center'>
          <p className='font-oswald text-base font-semibold text-gray-900'>{founder.name}</p>
          <p className='text-sm text-brand-teal'>{founder.title}</p>
          {founder.peLicense && (
            <p className='mt-1 text-xs text-gray-500'>NYS P.E. License #{founder.peLicense}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const AboutContent = ({ compact = false, showContactCta = false }: AboutContentProps) => {
  const { founder } = siteConfig

  if (compact) {
    return (
      <section className='section py-12 md:py-16'>
        <SectionHeading title='About Us' />
        <div className='flex flex-col md:flex-row md:items-start gap-8 md:gap-10'>
          <div className='flex-grow'>
            <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
              WellDone Inspection, Inc. is a New York City-based DOB-registered Special Inspection Agency dedicated to delivering accurate, code-compliant, and timely special inspections for construction projects of all scales. As a small business, we pride ourselves on offering the attention to detail, responsiveness, and accountability that larger firms often cannot match.
            </p>
            <p className='mt-4 text-base md:text-lg text-gray-700 leading-relaxed'>
              Founded by {founder.name}, a licensed professional engineer with over 10 years of experience in structural engineering and construction oversight, our mission is simple: support builders, owners, and developers in building safe, durable, and code-compliant structures.
            </p>
          </div>
          <FounderCard compact />
        </div>
        <h3 className='mt-8 font-oswald text-xl md:text-2xl font-semibold text-gray-900'>What We Do</h3>
        <p className='mt-2 text-base md:text-lg text-gray-700 leading-relaxed'>
          We provide third-party Special Inspections as required by the NYC Building Code (Chapter 17), including but not limited to:
        </p>
        <ul className='mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-3'>
          {whatWeDo.map((item) => (
            <li key={item} className='flex items-start gap-3 text-base text-gray-700'>
              <FontAwesomeIcon icon={faCheck} className='text-brand-teal mt-1 shrink-0' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <section className='section py-12 md:py-16'>
      <SectionHeading title='About Us' />
      <div className='flex flex-col md:flex-row md:items-start gap-8 md:gap-12'>
        <div className='flex-grow'>
          <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
            WellDone Inspection, Inc. is a New York City-based DOB-registered Special Inspection Agency dedicated to delivering accurate, code-compliant, and timely special inspections for construction projects of all scales. As a small business, we pride ourselves on offering the attention to detail, responsiveness, and accountability that larger firms often cannot match.
          </p>
          <p className='mt-4 text-base md:text-lg text-gray-700 leading-relaxed'>
            The firm is led by {founder.name}, a licensed professional engineer with over 10 years of experience in structural engineering and construction oversight. When you work with us, you work directly with a licensed P.E.—not a rotating field tech—so you get engineering-level answers when your schedule depends on them.
          </p>
          <ul className='mt-5 flex flex-wrap gap-2'>
            {founder.credentials.map((cred) => (
              <li
                key={cred}
                className='rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700'
              >
                {cred}
              </li>
            ))}
          </ul>
        </div>
        <FounderCard />
      </div>

      <h3 className='mt-10 font-oswald text-xl md:text-2xl font-semibold text-gray-900'>What We Do</h3>
      <p className='mt-2 text-base md:text-lg text-gray-700 leading-relaxed'>
        We provide third-party Special Inspections as required by the NYC Building Code (Chapter 17), including but not limited to:
      </p>
      <ul className='mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-3'>
        {whatWeDo.map((item) => (
          <li key={item} className='flex items-start gap-3 text-base text-gray-700'>
            <FontAwesomeIcon icon={faCheck} className='text-brand-teal mt-1 shrink-0' />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {showContactCta && (
        <div className='mt-10'>
          <CTAButton href='/contact' variant='secondary'>
            <FontAwesomeIcon icon={faComments} className='mr-2' />
            Contact us about your project
          </CTAButton>
        </div>
      )}
    </section>
  )
}

export default AboutContent
