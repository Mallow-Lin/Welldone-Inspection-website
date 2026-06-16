import SectionHeading from '@/components/SectionHeading'

const reasons = [
  {
    title: 'Direct PE Access',
    description: 'Work directly with James Jiang, P.E. - not a call center. Get engineering-level answers when you need them.',
  },
  {
    title: 'Responsive & Accountable',
    description: 'As a small business, we offer the attention to detail and fast turnaround that larger firms often cannot match.',
  },
  {
    title: 'DOB-Registered Agency',
    description: 'Fully registered with NYC DOB for TR1-TR8 special inspections, concrete testing, pile driving, and energy code compliance.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className='bg-gray-50 py-12 md:py-16'>
      <div className='section'>
        <SectionHeading title='Why Choose Us' />
        <div className='grid md:grid-cols-3 gap-6'>
          {reasons.map((reason) => (
            <div key={reason.title} className='bg-white rounded-xl p-6 shadow-soft border-t-2 border-brand-teal'>
              <h3 className='font-oswald font-semibold text-brand-teal text-lg md:text-xl mb-2'>{reason.title}</h3>
              <p className='text-base text-gray-700 leading-relaxed'>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
