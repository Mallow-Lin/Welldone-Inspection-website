import SectionHeading from '@/components/SectionHeading'

const testimonials = [
  {
    quote: 'WellDone Inspection provided thorough, timely inspections on our project. Their responsiveness and attention to detail made coordination seamless.',
    author: 'General Contractor',
    project: 'NYC Commercial Build',
  },
]

const Testimonials = () => {
  return (
    <section className='section py-12 md:py-16'>
      <SectionHeading title='What Clients Say' />
      <div className='grid gap-6 max-w-3xl mx-auto'>
        {testimonials.map((t, i) => (
          <blockquote key={i} className='relative bg-white rounded-xl p-8 shadow-soft border border-gray-100'>
            <span aria-hidden='true' className='absolute top-4 left-6 font-merriweather text-6xl leading-none text-brand-gold/30 select-none'>&ldquo;</span>
            <p className='relative font-merriweather text-lg md:text-xl italic text-gray-700 leading-relaxed mb-4'>{t.quote}</p>
            <footer className='text-sm text-brand-teal font-semibold'>
              {t.author} &middot; {t.project}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
