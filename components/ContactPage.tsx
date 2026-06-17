'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import siteConfig from '@/data/siteConfig'
import PageHeader from '@/components/PageHeader'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const PROJECT_TYPES = [
  'TR1 Special Inspections',
  'Concrete Testing (TR2)',
  'Pile Driving / Foundations (TR5)',
  'Energy Code (TR8)',
  'Engineering / Other',
  'Not sure yet',
]

const CONTACT_METHODS = ['Email', 'Phone', 'Either']

const ContactPage = () => {
  return (
    <section className='section py-12 md:py-16'>
      <PageHeader title='Contact Us' intro='Get support anytime via email or phone' />
      <div className='grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12'>
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  )
}

const ContactDetails = () => {
  const { founder } = siteConfig
  return (
    <aside className='rounded-xl border border-gray-100 bg-gray-50 p-6 md:p-8 shadow-soft'>
      <div className='mb-6 flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-soft'>
        <img
          src={founder.photoContact}
          alt={`${founder.name}, ${founder.title} of ${siteConfig.companyName}`}
          className='h-16 w-16 flex-none rounded-full object-cover object-top'
        />
        <div>
          <p className='text-xs font-medium uppercase tracking-wide text-gray-500'>Work directly with</p>
          <p className='font-oswald text-base font-semibold text-gray-900'>{founder.name}</p>
          <p className='text-sm text-brand-teal'>{founder.title}</p>
        </div>
      </div>
      <h2 className='font-oswald text-xl md:text-2xl font-semibold text-gray-900'>
        We are easy to find—let us know your needs
      </h2>

      <div className='mt-6 space-y-6 text-base text-gray-700'>
        <div className='flex items-start gap-3'>
          <FontAwesomeIcon icon={faLocationDot} className='mt-1 shrink-0 text-brand-teal' />
          <div>
            <h3 className='font-oswald text-base font-semibold text-gray-900'>Headquarters</h3>
            <p className='mt-1 leading-relaxed'>{siteConfig.address.street}</p>
            <p className='leading-relaxed'>{siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.zip}</p>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <FontAwesomeIcon icon={faEnvelope} className='mt-1 shrink-0 text-brand-teal' />
          <div>
            <h3 className='font-oswald text-base font-semibold text-gray-900'>Email</h3>
            <a href={`mailto:${siteConfig.email}`} className='mt-1 inline-block text-brand-teal hover:underline'>
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <FontAwesomeIcon icon={faPhone} className='mt-1 shrink-0 text-brand-teal' />
          <div>
            <h3 className='font-oswald text-base font-semibold text-gray-900'>Phone</h3>
            <a href={`tel:${siteConfig.phoneTel}`} className='mt-1 inline-block text-brand-teal hover:underline'>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <p className='mt-6 border-t border-gray-200 pt-6 text-sm leading-relaxed text-gray-600'>
        If you&apos;re a current or past client and have feedback for us, we want to hear from you. Please leave us a message or review here and let us know how we are doing!
      </p>
    </aside>
  )
}

const inputClasses =
  'w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-base text-gray-900 placeholder:text-gray-400 transition-colors focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30 disabled:opacity-50'

const labelClasses = 'mb-1.5 block font-roboto text-sm font-medium text-gray-700'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    contact_method: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const updateData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      return
    }

    setStatus('loading')

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.currentTarget, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          project_type: '',
          contact_method: '',
          message: '',
        })
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <form
      className='rounded-xl border border-gray-100 bg-white p-6 md:p-8 shadow-card'
      onSubmit={handleSubmit}
    >
      <div className='grid gap-5 sm:grid-cols-2'>
        <div>
          <label htmlFor='name' className={labelClasses}>
            Name <span className='text-red-500'>*</span>
          </label>
          <input
            id='name'
            placeholder='Jane Doe'
            name='name'
            type='text'
            value={formData.name}
            onChange={updateData}
            required
            disabled={status === 'loading'}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor='email' className={labelClasses}>
            Email <span className='text-red-500'>*</span>
          </label>
          <input
            id='email'
            placeholder='you@company.com'
            name='email'
            type='email'
            value={formData.email}
            onChange={updateData}
            required
            disabled={status === 'loading'}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor='phone' className={labelClasses}>
            Phone <span className='text-red-500'>*</span>
          </label>
          <input
            id='phone'
            placeholder='(917) 000-0000'
            name='phone'
            type='tel'
            value={formData.phone}
            onChange={updateData}
            required
            disabled={status === 'loading'}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor='project_type' className={labelClasses}>
            Project type <span className='text-red-500'>*</span>
          </label>
          <select
            id='project_type'
            name='project_type'
            value={formData.project_type}
            onChange={updateData}
            required
            disabled={status === 'loading'}
            className={`${inputClasses} ${formData.project_type === '' ? 'text-gray-400' : ''}`}
          >
            <option value=''>Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className='text-gray-900'>{type}</option>
            ))}
          </select>
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor='contact_method' className={labelClasses}>
            Preferred contact method <span className='text-red-500'>*</span>
          </label>
          <select
            id='contact_method'
            name='contact_method'
            value={formData.contact_method}
            onChange={updateData}
            required
            disabled={status === 'loading'}
            className={`${inputClasses} ${formData.contact_method === '' ? 'text-gray-400' : ''}`}
          >
            <option value=''>Select a contact method</option>
            {CONTACT_METHODS.map((method) => (
              <option key={method} value={method} className='text-gray-900'>{method}</option>
            ))}
          </select>
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor='message' className={labelClasses}>
            Message <span className='text-red-500'>*</span>
          </label>
          <textarea
            id='message'
            rows={4}
            placeholder='Message (include project address if known)'
            name='message'
            value={formData.message}
            onChange={updateData}
            required
            disabled={status === 'loading'}
            className={inputClasses}
          />
        </div>
      </div>

      {status === 'success' && (
        <p className='mt-5 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700' role='status'>
          Thank you! We received your message and will respond within 24 hours. For urgent inspections, call {siteConfig.phone}.
        </p>
      )}
      {status === 'error' && (
        <p className='mt-5 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700' role='alert'>
          Something went wrong. Please call us at {siteConfig.phone} or email {siteConfig.email}.
        </p>
      )}

      <button
        type='submit'
        disabled={status === 'loading'}
        className='mt-6 inline-block w-full rounded font-roboto font-medium tracking-wide text-base py-3 px-8 transition-colors duration-300 bg-brand-gold text-brand-teal border-2 border-transparent hover:bg-[#d4a003] disabled:opacity-50 sm:w-auto'
      >
        {status === 'loading' ? 'Sending...' : 'Submit'}
      </button>
    </form>
  )
}

export default ContactPage
