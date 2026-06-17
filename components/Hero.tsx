import Image from 'next/image'
import Link from 'next/link'
import siteConfig from '@/data/siteConfig'

const Hero = () => {
  return (
    <section className='relative flex flex-col items-center justify-center bg-brand-teal text-white min-h-[460px] md:min-h-[540px] lg:min-h-[620px] px-6 py-16 md:py-20'>
      <div className='absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center' aria-hidden='true'>
        <Image src='/logo.png' alt='' width={420} height={420} className='w-[260px] md:w-[420px] h-auto object-contain' priority />
      </div>
      <div className='relative z-10 flex flex-col items-center text-center max-w-3xl'>
        <span className='inline-block bg-brand-gold text-brand-teal text-xs md:text-sm font-semibold tracking-wide px-4 py-1.5 rounded-full mb-6'>
          {siteConfig.mwbe}
        </span>
        <h1 className='font-oswald text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white'>
          {siteConfig.tagline}
        </h1>
        <p className='font-aleo text-base md:text-xl text-gray-100/90 leading-relaxed max-w-2xl mb-8'>
          Accurate, code-compliant special inspections for NYC construction projects of all scales.
        </p>
        <div className='flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto'>
          <Link
            href='/contact'
            className='bg-brand-gold text-brand-teal font-bold px-8 py-3.5 rounded-lg hover:bg-[#d4a003] transition-colors text-sm md:text-base text-center shadow-elevated'
          >
            Request Inspection Quote
          </Link>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className='border-2 border-brand-gold text-brand-gold font-bold px-8 py-3.5 rounded-lg hover:bg-brand-gold hover:text-brand-teal transition-colors text-sm md:text-base text-center'
          >
            {siteConfig.phone}
          </a>
        </div>
        <div className='flex flex-wrap justify-center gap-2 md:gap-2.5'>
          {siteConfig.certifications.map((cert) => (
            <span
              key={cert}
              className='bg-white/15 text-white text-[11px] md:text-xs font-medium px-3 py-1 rounded-full border border-white/30'
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
