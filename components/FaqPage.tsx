'use client'

import { useState } from 'react'
import faqItems from '@/data/faq'
import CTAButton from '@/components/CTAButton'

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className='font-aleo pb-16 px-6 max-w-3xl mx-auto'>
      <h1 className='text-[20px] md:text-[35px] font-semibold mt-5 mb-2'>Frequently Asked Questions</h1>
      <p className='text-sm md:text-lg text-gray-600 mb-8'>
        Common questions about NYC special inspections, DOB requirements, and working with WellDone Inspection.
      </p>

      <div className='space-y-3'>
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={item.question} className='border border-gray-200 rounded-lg overflow-hidden'>
              <button
                type='button'
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className='w-full text-left px-4 py-4 bg-gray-50 hover:bg-gray-100 font-semibold text-sm md:text-base flex justify-between items-center'
                aria-expanded={isOpen}
              >
                {item.question}
                <span className='text-brand-teal ml-4'>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className='px-4 py-4 text-sm md:text-base text-gray-700 leading-relaxed'>
                  {item.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className='mt-10 bg-brand-teal text-white rounded-xl p-6 text-center'>
        <p className='font-semibold mb-3'>Still have questions?</p>
        <CTAButton href='/contact' className='bg-white text-brand-teal border-white hover:bg-brand-gold hover:text-brand-teal hover:border-brand-gold'>
          Contact Us
        </CTAButton>
      </div>
    </div>
  )
}

export default FaqPage
