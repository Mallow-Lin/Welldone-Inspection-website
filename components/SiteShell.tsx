'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyQuoteButton from '@/components/StickyQuoteButton'

type SiteShellProps = {
  children: React.ReactNode
}

const SiteShell = ({ children }: SiteShellProps) => {
  const [navbarHeight, setNavbarHeight] = useState(0)

  return (
    <>
      <Navbar setNavbarHeight={setNavbarHeight} />
      <main className='flex justify-center overflow-x-hidden'>
        <div className='w-[90%] shadow-2xl' style={{ paddingTop: navbarHeight }}>
          {children}
        </div>
      </main>
      <Footer />
      <StickyQuoteButton />
    </>
  )
}

export default SiteShell
