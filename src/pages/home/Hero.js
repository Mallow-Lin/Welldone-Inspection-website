import React from 'react'
import { Link } from 'react-router-dom'
import siteConfig from '../../data/siteConfig'

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center bg-[#1b6666] text-white my-20 md:my-0 md:min-h-[500px] lg:min-h-[600px] px-6 py-12 md:py-16">
            <div
                className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain pointer-events-none"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logo.png)` }}
                aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
                <span className="inline-block bg-[#ecb403] text-[#1b6666] text-xs md:text-sm font-bold px-4 py-1 rounded-full mb-4">
                    {siteConfig.mwbe}
                </span>
                <h1 className="font-oswald text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
                    {siteConfig.tagline}
                </h1>
                <p className="font-aleo text-sm md:text-lg text-gray-200 mb-6">
                    Accurate, code-compliant special inspections for NYC construction projects of all scales.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <Link
                        to="/contact"
                        className="bg-[#ecb403] text-[#1b6666] font-bold px-8 py-3 rounded-lg hover:bg-[#d4a003] transition-colors text-sm md:text-base"
                    >
                        Request Inspection Quote
                    </Link>
                    <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="border-2 border-[#ecb403] text-[#ecb403] font-bold px-8 py-3 rounded-lg hover:bg-[#ecb403] hover:text-[#1b6666] transition-colors text-sm md:text-base"
                    >
                        {siteConfig.phone}
                    </a>
                </div>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    {siteConfig.certifications.map((cert) => (
                        <span
                            key={cert}
                            className="bg-white/10 text-[#ecb403] text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full border border-[#ecb403]/30"
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
