'use client'

import Link from 'next/link'

const StickyQuoteButton = () => {
  return (
    <Link
      href='/contact'
      className='md:hidden fixed bottom-4 right-4 z-30 bg-brand-gold text-brand-teal font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-[#d4a003] transition-colors'
      aria-label='Request an inspection quote'
    >
      Get a Quote
    </Link>
  )
}

export default StickyQuoteButton
