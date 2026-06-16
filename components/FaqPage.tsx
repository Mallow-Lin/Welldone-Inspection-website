'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import faqItems from '@/data/faq'
import CTAButton from '@/components/CTAButton'
import PageHeader from '@/components/PageHeader'

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className='section max-w-3xl py-12 md:py-16'>
      <PageHeader
        title='Frequently Asked Questions'
        intro='Common questions about NYC special inspections, DOB requirements, and working with WellDone Inspection.'
      />

      <div className='space-y-3'>
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={item.question} className='rounded-lg border border-gray-100 bg-white shadow-soft overflow-hidden'>
              <button
                type='button'
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-oswald font-semibold text-base md:text-lg text-gray-900 hover:bg-gray-50 transition-colors'
                aria-expanded={isOpen}
              >
                {item.question}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`shrink-0 text-brand-teal transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <div className='px-5 pb-5 pt-1 text-base text-gray-700 leading-relaxed'>
                  {item.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className='mt-12 rounded-xl bg-brand-teal text-white p-8 text-center shadow-card'>
        <p className='font-oswald text-lg md:text-xl font-semibold mb-4'>Still have questions?</p>
        <CTAButton href='/contact' variant='primary'>
          Contact Us
        </CTAButton>
      </div>
    </section>
  )
}

export default FaqPage
