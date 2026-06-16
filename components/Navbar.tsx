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
  const [navbarStyle, setNavbarStyle] = useState('bg-white text-black pt-8')
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
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarStyle('bg-black bg-opacity-40 text-white py-4')
        setCollapsed(true)
      } else {
        setNavbarStyle('bg-white text-black pt-8')
        setCollapsed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      className={`z-20 fixed w-full py-4 md:px-20 px-10 border-b-2 border-b-gray-400 ${navbarStyle} transition-all duration-500`}
    >
      <div className='flex justify-between items-center'>
        <Link
          href='/'
          className={`${collapsed ? 'scale-[0.8]' : 'scale-100'} duration-500 cursor-pointer bg-transparent border-none p-0`}
          aria-label='Go to homepage'
        >
          <Image src='/images/logos/logo_with_motto.png' alt='WellDone Inspection logo' width={200} height={80} className='md:w-[200px] w-[150px] h-auto' priority />
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
                className={`px-4 duration-100 ${collapsed ? 'text-lg' : 'text-xl'} ${isActive ? 'text-brand-gold' : 'hover:text-brand-gold'}`}
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
          className='md:hidden z-10 py-8 cursor-pointer bg-transparent border-none'
          aria-label={nav ? 'Close menu' : 'Open menu'}
          aria-expanded={nav}
        >
          {!nav ? <FaBars className='size-[20px]' /> : <FaTimes />}
        </button>

        <ul className={!nav ? 'hidden' : 'md:hidden absolute top-12 right-5 w-40 bg-brand-teal flex flex-col justify-center items-center rounded-3xl py-4'}>
          {tabs.map((tab) => (
            <li key={tab.path} className='my-2 text-md text-white cursor-pointer'>
              <Link href={tab.path} onClick={() => setNav(false)}>
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {activeTabIndex === -1 && (
        <div className={`flex justify-center font-bold md:text-xl text-sm overflow-hidden transition-all ${collapsed ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'} duration-300`}>
          Welcome to WellDone Inspection!
        </div>
      )}
    </nav>
  )
}

export default Navbar
