'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import siteConfig from '@/data/siteConfig'

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
    <div className='pb-10 min-h-screen items-center flex flex-col font-aleo mt-5'>
      <h1 className='text-[20px] md:text-[35px] font-semibold leading-[4rem]'>Contact Us</h1>
      <p className='text-sm md:text-xl text-gray-600'>Get support anytime via email or phone</p>
      <div className='sm:flex items-center justify-center w-[80%] py-6'>
        <ContactForm />
        <div className='hidden sm:block my-2 h-auto border-[#beb5b5] border-l-2 mx-10' />
        <div className='flex flex-col text-[#6b6a6a] max-w-[600px] mt-6 sm:mt-0'>
          <h2 className='text-black font-bold text-[15px] lg:text-[22px] mb-3'>We are easy to find—let us know your needs</h2>
          <div className='mb-4'>
            <h3 className='text-black text-[15px] lg:text-[18px] font-semibold mb-1'>Headquarters</h3>
            <p className='text-[15px] lg:text-[18px]'>{siteConfig.address.street}</p>
            <p className='text-[15px] lg:text-[18px]'>{siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.zip}</p>
          </div>
          <div className='mb-6'>
            <h3 className='text-black text-[15px] lg:text-[18px] font-semibold mb-1'>Contacts</h3>
            <p className='text-[15px] lg:text-[18px]'>
              Email:{' '}
              <a href={`mailto:${siteConfig.email}`} className='text-brand-teal hover:underline'>
                {siteConfig.email}
              </a>
            </p>
            <p className='text-[15px] lg:text-[18px]'>
              Phone:{' '}
              <a href={`tel:${siteConfig.phoneTel}`} className='text-brand-teal hover:underline'>
                {siteConfig.phone}
              </a>
            </p>
          </div>
          <p className='text-[15px] lg:text-[18px]'>If you&apos;re a current or past client and have feedback for us, we want to hear from you. Please leave us a message or review here and let us know how we are doing!</p>
        </div>
      </div>
    </div>
  )
}

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
    <form className='flex flex-col max-w-[400px] w-full' onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <label htmlFor='name' className='sr-only'>Name</label>
        <input
          id='name'
          placeholder='Name'
          name='name'
          type='text'
          value={formData.name}
          onChange={updateData}
          required
          disabled={status === 'loading'}
          className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300 disabled:opacity-50'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='email' className='sr-only'>Email</label>
        <input
          id='email'
          placeholder='Email'
          name='email'
          type='email'
          value={formData.email}
          onChange={updateData}
          required
          disabled={status === 'loading'}
          className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300 disabled:opacity-50'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='phone' className='sr-only'>Phone</label>
        <input
          id='phone'
          placeholder='Phone'
          name='phone'
          type='tel'
          value={formData.phone}
          onChange={updateData}
          required
          disabled={status === 'loading'}
          className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300 disabled:opacity-50'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='project_type' className='sr-only'>Project type</label>
        <select
          id='project_type'
          name='project_type'
          value={formData.project_type}
          onChange={updateData}
          required
          disabled={status === 'loading'}
          className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300 disabled:opacity-50 text-gray-700'
        >
          <option value=''>Project type</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className='flex flex-col'>
        <label htmlFor='contact_method' className='sr-only'>Preferred contact method</label>
        <select
          id='contact_method'
          name='contact_method'
          value={formData.contact_method}
          onChange={updateData}
          required
          disabled={status === 'loading'}
          className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300 disabled:opacity-50 text-gray-700'
        >
          <option value=''>Preferred contact method</option>
          {CONTACT_METHODS.map((method) => (
            <option key={method} value={method}>{method}</option>
          ))}
        </select>
      </div>
      <div className='flex flex-col'>
        <label htmlFor='message' className='sr-only'>Message</label>
        <textarea
          id='message'
          rows={3}
          placeholder='Message (include project address if known)'
          name='message'
          value={formData.message}
          onChange={updateData}
          required
          disabled={status === 'loading'}
          className='bg-gray-100 p-3 my-3 rounded-md border border-gray-300 disabled:opacity-50'
        />
      </div>

      {status === 'success' && (
        <p className='text-green-700 bg-green-50 border border-green-200 rounded-md p-3 mb-3 text-sm' role='status'>
          Thank you! We received your message and will respond within 24 hours. For urgent inspections, call {siteConfig.phone}.
        </p>
      )}
      {status === 'error' && (
        <p className='text-red-700 bg-red-50 border border-red-200 rounded-md p-3 mb-3 text-sm' role='alert'>
          Something went wrong. Please call us at {siteConfig.phone} or email {siteConfig.email}.
        </p>
      )}

      <button
        type='submit'
        disabled={status === 'loading'}
        className='self-start border-2 border-black py-[7px] px-20 font-roboto bg-brand-teal text-brand-gold rounded-md text-[20px] md:text-[35px] font-semibold disabled:opacity-50'
      >
        {status === 'loading' ? 'Sending...' : 'Submit'}
      </button>
    </form>
  )
}

export default ContactPage
