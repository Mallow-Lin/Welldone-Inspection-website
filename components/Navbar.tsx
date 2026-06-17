'use client'

import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import siteConfig from '@/data/siteConfig'

const tabs = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Service Areas', path: '/service-areas' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

type NavbarProps = {
  setNavbarHeight: (height: number) => void
}

const Navbar = ({ setNavbarHeight }: NavbarProps) => {
  const pathname = usePathname()
  const navbarRef = useRef<HTMLElement | null>(null)
  const tabsRef = useRef<Array<HTMLAnchorElement | null>>([])
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [nav, setNav] = useState(false)

  const activeTabIndex = useMemo(() => {
    if (pathname === '/') return -1
    return tabs.findIndex(
      (tab) => pathname === tab.path || pathname.startsWith(`${tab.path}/`),
    )
  }, [pathname])

  const setTabPosition = (activeTabIdx: number) => {
    if (activeTabIdx < 0) {
      setTabUnderlineWidth(0)
      setTabUnderlineLeft(0)
      return
    }

    const currentTab = tabsRef.current[activeTabIdx]
    setTabUnderlineWidth(currentTab?.clientWidth ?? 0)
    setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
  }

  useEffect(() => {
    let frame = 0
    const handleScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 50
        setScrolled(isScrolled)
        setCollapsed(isScrolled)
        frame = 0
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    setTabPosition(activeTabIndex)
  }, [activeTabIndex, collapsed])

  useEffect(() => {
    if (!navbarRef.current) {
      return
    }

    const observer = new ResizeObserver(() => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight)
      }
    })

    observer.observe(navbarRef.current)
    setNavbarHeight(navbarRef.current.offsetHeight)

    return () => observer.disconnect()
  }, [setNavbarHeight])

  return (
    <nav
      ref={navbarRef}
      className={`z-20 fixed w-full md:px-20 px-6 sm:px-10 bg-white text-gray-900 border-b transition-all duration-300 ease-out ${
        scrolled ? 'py-2 shadow-soft border-gray-200' : 'py-4 border-gray-100'
      }`}
    >
      <div className='flex justify-between items-center'>
        <Link
          href='/'
          className={`origin-left ${collapsed ? 'scale-95' : 'scale-100'} transition-transform duration-300 ease-out cursor-pointer bg-transparent border-none p-0`}
          aria-label='Go to homepage'
        >
          <Image src='/images/logos/logo_with_motto.png' alt='WellDone Inspection logo' width={200} height={80} className='md:w-[190px] w-[150px] h-auto' priority />
        </Link>

        <div className='hidden md:flex items-center gap-2 lg:gap-4'>
          <div className='flex items-center h-12 font-semibold duration-500 relative'>
            <span
              className='absolute top-0 bottom-0 -z-10 flex overflow-hidden rounded-xl bg-brand-teal duration-300'
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            />
            {tabs.map((tab, index) => {
              const isActive = activeTabIndex === index
              return (
                <Link
                  key={tab.path}
                  ref={(elem) => {
                    tabsRef.current[index] = elem
                  }}
                  href={tab.path}
                  className={`whitespace-nowrap px-2.5 lg:px-3 transition-colors duration-200 ${collapsed ? 'text-sm lg:text-base' : 'text-base lg:text-lg'} ${isActive ? 'text-brand-gold' : 'text-gray-700 hover:text-brand-teal'}`}
                >
                  {tab.label}
                </Link>
              )
            })}
          </div>

          <div className='hidden lg:flex items-center gap-3 pl-2 border-l border-gray-200'>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className='text-sm font-bold text-brand-teal hover:text-brand-gold transition-colors whitespace-nowrap'
              aria-label={`Call ${siteConfig.phone}`}
            >
              {siteConfig.phone}
            </a>
            <Link
              href='/contact'
              className='rounded-lg bg-brand-gold px-4 py-2 text-sm font-bold text-brand-teal hover:bg-[#d4a003] transition-colors whitespace-nowrap'
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <a
          href={`tel:${siteConfig.phoneTel}`}
          className='md:hidden text-sm font-bold text-brand-teal mr-3'
          aria-label={`Call ${siteConfig.phone}`}
        >
          Call
        </a>

        <button
          type='button'
          onClick={() => setNav((prev) => !prev)}
          className='md:hidden z-10 p-2 -mr-2 text-brand-teal cursor-pointer bg-transparent border-none'
          aria-label={nav ? 'Close menu' : 'Open menu'}
          aria-expanded={nav}
        >
          {!nav ? <FaBars className='size-[20px]' /> : <FaTimes />}
        </button>

        {nav && (
          <button
            type='button'
            aria-label='Close menu'
            onClick={() => setNav(false)}
            className='md:hidden fixed inset-0 z-[5] bg-black/40 cursor-default border-none'
          />
        )}

        <ul className={!nav ? 'hidden' : 'md:hidden absolute top-full right-4 mt-3 w-60 bg-white border border-gray-100 flex flex-col rounded-2xl py-2 shadow-elevated z-10'}>
          {tabs.map((tab) => {
            const isActive = pathname === tab.path || pathname.startsWith(`${tab.path}/`)
            return (
              <li key={tab.path}>
                <Link
                  href={tab.path}
                  onClick={() => setNav(false)}
                  className={`block px-5 py-3 text-base font-semibold transition-colors ${isActive ? 'text-brand-gold' : 'text-gray-800 hover:bg-gray-50 hover:text-brand-teal'}`}
                >
                  {tab.label}
                </Link>
              </li>
            )
          })}
          <li className='mt-1 px-3 pt-2 border-t border-gray-100'>
            <Link
              href='/contact'
              onClick={() => setNav(false)}
              className='block rounded-lg bg-brand-gold px-5 py-3 text-center text-base font-bold text-brand-teal hover:bg-[#d4a003] transition-colors'
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
