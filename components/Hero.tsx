import Image from 'next/image'
import Link from 'next/link'
import siteConfig from '@/data/siteConfig'

const Hero = () => {
  return (
    <section className='relative flex flex-col items-center justify-center bg-brand-teal text-white my-20 md:my-0 md:min-h-[500px] lg:min-h-[600px] px-6 py-12 md:py-16'>
      <div className='absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center' aria-hidden='true'>
        <Image src='/logo.png' alt='' width={400} height={400} className='object-contain' priority />
      </div>
      <div className='relative z-10 flex flex-col items-center text-center max-w-3xl'>
        <span className='inline-block bg-brand-gold text-brand-teal text-xs md:text-sm font-bold px-4 py-1 rounded-full mb-4'>
          {siteConfig.mwbe}
        </span>
        <h1 className='font-oswald text-2xl md:text-4xl lg:text-5xl font-bold mb-3'>
          {siteConfig.tagline}
        </h1>
        <p className='font-aleo text-sm md:text-lg text-gray-200 mb-6'>
          Accurate, code-compliant special inspections for NYC construction projects of all scales.
        </p>
        <div className='flex flex-col sm:flex-row gap-3 mb-8'>
          <Link
            href='/contact'
            className='bg-brand-gold text-brand-teal font-bold px-8 py-3 rounded-lg hover:bg-[#d4a003] transition-colors text-sm md:text-base'
          >
            Request Inspection Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className='border-2 border-brand-gold text-brand-gold font-bold px-8 py-3 rounded-lg hover:bg-brand-gold hover:text-brand-teal transition-colors text-sm md:text-base'
          >
            {siteConfig.phone}
          </a>
        </div>
        <div className='flex flex-wrap justify-center gap-2 md:gap-3'>
          {siteConfig.certifications.map((cert) => (
            <span
              key={cert}
              className='bg-white/10 text-brand-gold text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full border border-brand-gold/30'
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
