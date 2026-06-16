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

        <div className='hidden md:flex w-[550px] items-center h-12 font-semibold duration-500 relative'>
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
                className={`px-4 transition-colors duration-200 ${collapsed ? 'text-base' : 'text-lg'} ${isActive ? 'text-brand-gold' : 'text-gray-700 hover:text-brand-teal'}`}
              >
                {tab.label}
              </Link>
            )
          })}
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

        <ul className={!nav ? 'hidden' : 'md:hidden absolute top-full right-4 mt-2 w-48 bg-brand-teal flex flex-col rounded-2xl py-2 shadow-elevated'}>
          {tabs.map((tab) => (
            <li key={tab.path}>
              <Link
                href={tab.path}
                onClick={() => setNav(false)}
                className='block px-5 py-2.5 text-sm font-semibold text-white hover:text-brand-gold transition-colors'
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {activeTabIndex === -1 && (
        <div className={`flex justify-center font-oswald font-medium tracking-wide text-brand-teal md:text-lg text-sm overflow-hidden transition-all ${collapsed ? 'max-h-0 opacity-0 mt-0' : 'max-h-20 opacity-100 mt-1'} duration-300`}>
          Welcome to WellDone Inspection!
        </div>
      )}
    </nav>
  )
}

export default Navbar
