import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

type AboutContentProps = {
  compact?: boolean
  showContactCta?: boolean
}

const AboutContent = ({ compact = false, showContactCta = false }: AboutContentProps) => {
  if (compact) {
    return (
      <div className='flex flex-col md:mt-5 px-5 md:px-10 lg:px-40'>
        <div className='flex flex-row'>
          <div className='flex flex-col justify-between flex-grow lg:mt-5'>
            <div className='flex items-center'>
              <p className='md:text-[35px] font-bold text-[20px]'>About Us</p>
              <hr className='border-1 border-black flex-grow mx-4' />
            </div>
            <h2 className='font-serif md:text-[20px] text-[15px] mt-3 mb-3'>
              <p>WellDone Inspection, Inc. is a New York City-based DOB-registered Special Inspection Agency dedicated to delivering accurate, code-compliant, and timely special inspections for construction projects of all scales. As a small business, we pride ourselves on offering the attention to detail, responsiveness, and accountability that larger firms often cannot match.</p>
            </h2>
          </div>
          <div className='group relative ml-2 md:ml-5 flex-none size-[100px] md:size-[150px]'>
            <img src='/images/logos/logo_no_motto.png' alt='WellDone Inspection logo' className='absolute w-full h-full object-fill border-2 rounded-3xl bg-white group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] duration-500 z-10' />
            <div className='bg-white border-4 w-full h-full rounded-3xl flex items-end justify-center p-1 ml-[15px] mt-[35px] md:ml-[0px] md:mt-[10px] md:group-hover:translate-x-[10px] md:group-hover:translate-y-[30px] duration-500'>
              <p className='font-bold text-[10px] md:text-sm'>James Jiang, P.E., Director</p>
            </div>
          </div>
        </div>
        <div>
          <p className='mb-3 font-serif text-[15px] md:text-[20px]'>
            Founded by a licensed professional engineer with over 10 years of experience in structural engineering and construction oversight, our mission is simple: support builders, owners, and developers in building safe, durable, and code-compliant structures.
          </p>
          <p className='mb-3 font-bold text-[20px]'>What We Do</p>
          <div className='font-serif text-[15px] md:text-[20px]'>
            <p>We provide third-party Special Inspections as required by the NYC Building Code (Chapter 17), including but not limited to:</p>
            <li>Structural Steel & Welding Inspections</li>
            <li>Concrete Placement & Rebar</li>
            <li>Soils, Footings, and Deep Foundations (Piles, Caissons, Helical Piers)</li>
            <li>Wood Framing & Shear Walls</li>
            <li>EIFS & Fireproofing</li>
            <li>Excavation and Underpinning Oversight</li>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='justify-center flex pb-10 overflow-x-hidden'>
      <div className='flex flex-col items-center w-screen'>
        <p className='text-[20px] md:text-[35px] font-semibold font-aleo'>About Us</p>
        <div className='flex flex-col w-[90%] md:w-2/3 rounded-3xl py-10 items-center bg-gray-200'>
          <div className='lg:flex sm:space-x-4 items-center sm:px-4'>
            <div className='flex flex-col relative items-center group'>
              <img src='/images/logos/logo_no_motto.png' alt='WellDone Inspection logo' className='object-contain group-hover:scale-75 group-hover:-mt-10 duration-500 w-[100px] sm:w-[200px] lg:w-full' />
            </div>
            <div>
              <div className='flex flex-col p-4 space-y-2 text-[15px] md:text-md lg:text-xl font-aleo'>
                <p className='mt-3 mb-3'>WellDone Inspection, Inc. is a New York City-based DOB-registered Special Inspection Agency dedicated to delivering accurate, code-compliant, and timely special inspections for construction projects of all scales. As a small business, we pride ourselves on offering the attention to detail, responsiveness, and accountability that larger firms often cannot match.</p>
                <p className='mt-3 mb-3'>Founded by a licensed professional engineer with over 10 years of experience in structural engineering and construction oversight, our mission is simple: Support builders, owners, and developers in building safe, durable, and code-compliant structures.</p>
                <p className='font-bold'>What We Do</p>
                <p>We provide third-party Special Inspections as required by the NYC Building Code (Chapter 17), including but not limited to:</p>
                <li>Structural Steel & Welding Inspections</li>
                <li>Concrete Placement & Rebar</li>
                <li>Soils, Footings, and Deep Foundations (Piles, Caissons, Helical Piers)</li>
                <li>Wood Framing & Shear Walls</li>
                <li>EIFS & Fireproofing</li>
                <li>Energy Code Compliance Inspections</li>
                <li>Excavation and Underpinning Oversight</li>
              </div>
            </div>
          </div>
          {showContactCta && (
            <div className='w-full flex justify-center'>
              <Link
                href='/contact'
                className='flex justify-center items-center group space-x-4 w-4/5 lg:w-1/2 hover:w-3/5 hover:text-brand-gold text-[15px] md:text-md lg:text-xl border-[3px] px-6 py-3 mt-6 font-semibold rounded-xl border-white hover:border-brand-gold hover:bg-brand-teal duration-500'
              >
                <p className='-mr-6 group-hover:mr-0 duration-500'>We are easy to find. Let us know your needs.</p>
                <FontAwesomeIcon icon={faComments} className='opacity-0 group-hover:flex group-hover:opacity-100 duration-500' />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutContent
