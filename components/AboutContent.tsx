import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faCheck } from '@fortawesome/free-solid-svg-icons'
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

const AboutContent = ({ compact = false, showContactCta = false }: AboutContentProps) => {
  if (compact) {
    return (
      <section className='section py-12 md:py-16'>
        <SectionHeading title='About Us' />
        <div className='flex flex-col md:flex-row md:items-start gap-6 md:gap-10'>
          <div className='flex-grow'>
            <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
              WellDone Inspection, Inc. is a New York City-based DOB-registered Special Inspection Agency dedicated to delivering accurate, code-compliant, and timely special inspections for construction projects of all scales. As a small business, we pride ourselves on offering the attention to detail, responsiveness, and accountability that larger firms often cannot match.
            </p>
          </div>
          <div className='group relative mx-auto md:mx-0 flex-none size-[120px] md:size-[150px]'>
            <img src='/images/logos/logo_no_motto.png' alt='WellDone Inspection logo' className='absolute w-full h-full object-fill border border-gray-200 rounded-3xl bg-white group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] duration-500 z-10' />
            <div className='bg-white border-2 border-gray-200 w-full h-full rounded-3xl flex items-end justify-center p-2 ml-[10px] mt-[20px] md:ml-0 md:mt-[8px] md:group-hover:translate-x-[8px] md:group-hover:translate-y-[24px] duration-500'>
              <p className='font-semibold text-xs md:text-sm text-gray-800 text-center'>James Jiang, P.E., Director</p>
            </div>
          </div>
        </div>
        <p className='mt-6 text-base md:text-lg text-gray-700 leading-relaxed'>
          Founded by a licensed professional engineer with over 10 years of experience in structural engineering and construction oversight, our mission is simple: support builders, owners, and developers in building safe, durable, and code-compliant structures.
        </p>
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
        <div className='flex-none mx-auto md:mx-0 flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-soft size-[160px] md:size-[200px]'>
          <img
            src='/images/logos/logo_no_motto.png'
            alt='WellDone Inspection logo'
            className='h-full w-full object-contain'
          />
        </div>
        <div className='flex-grow'>
          <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
            WellDone Inspection, Inc. is a New York City-based DOB-registered Special Inspection Agency dedicated to delivering accurate, code-compliant, and timely special inspections for construction projects of all scales. As a small business, we pride ourselves on offering the attention to detail, responsiveness, and accountability that larger firms often cannot match.
          </p>
          <p className='mt-4 text-base md:text-lg text-gray-700 leading-relaxed'>
            Founded by a licensed professional engineer with over 10 years of experience in structural engineering and construction oversight, our mission is simple: Support builders, owners, and developers in building safe, durable, and code-compliant structures.
          </p>
        </div>
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
            We are easy to find. Let us know your needs.
          </CTAButton>
        </div>
      )}
    </section>
  )
}

export default AboutContent
