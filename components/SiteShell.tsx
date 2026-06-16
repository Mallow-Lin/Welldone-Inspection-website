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
      <main className='w-full overflow-x-hidden' style={{ paddingTop: navbarHeight }}>
        {children}
      </main>
      <Footer />
      <StickyQuoteButton />
    </>
  )
}

export default SiteShell
