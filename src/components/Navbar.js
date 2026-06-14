import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import mottoLogo from '../assets/images/logo_with_motto.png'
import siteConfig from '../data/siteConfig'

const tabs = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
]

const Navbar = (props) => {
    const {
        setNavbarHeight,
        activeTabIndex,
        setActiveTabIndex,
    } = props

    const navbarRef = useRef(null)
    const tabsRef = useRef([])

    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)
    const [navbarStyle, setNavbarStyle] = useState('bg-white text-black pt-8')
    const [collapsed, setCollapsed] = useState(false)
    const [nav, setNav] = useState(false)

    const toggleNav = () => setNav(!nav)
    const navigator = useNavigate()

    const setTabPosition = (activeTabIdx) => {
        const currentTab = tabsRef.current[activeTabIdx]
        setTabUnderlineWidth(currentTab?.clientWidth ?? 0)
        setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarStyle('bg-black bg-opacity-40 text-white py-4')
            setCollapsed(true)
        } else {
            setNavbarStyle('bg-white text-black pt-8')
            setCollapsed(false)
        }
    }

    useEffect(() => {
        setTabPosition(activeTabIndex)
    }, [activeTabIndex])

    useEffect(() => {
        const timer = setTimeout(() => {
            setTabPosition(activeTabIndex)
        }, 510)
        return () => clearTimeout(timer)
    }, [collapsed, activeTabIndex])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight)
        }
    }, [setNavbarHeight])

    const handleLogoClick = () => {
        setActiveTabIndex(null)
        navigator('/')
        window.scrollTo(0, 0)
    }

    const handleTabClick = (index) => {
        setActiveTabIndex(index)
        window.scrollTo(0, 0)
    }

    return (
        <nav ref={navbarRef} className={`z-20 fixed w-full py-4 md:px-20 px-10 border-b-2 border-b-gray-400 ${navbarStyle} transition-all duration-500`}>
            <div className='flex justify-between items-center'>
                <button
                    type='button'
                    className={`${collapsed ? 'scale-[0.8]' : 'scale-100'} duration-500 cursor-pointer bg-transparent border-none p-0`}
                    onClick={handleLogoClick}
                    aria-label='Go to homepage'
                >
                    <img src={mottoLogo} alt='WellDone Inspection logo' className='md:w-[200px] w-[150px]' />
                </button>

                <div className='hidden md:flex w-[550px] items-center h-12 font-semibold duration-500 relative'>
                    <span
                        className='absolute top-0 bottom-0 -z-10 flex overflow-hidden rounded-xl bg-[#1b6666] duration-300'
                        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                    />
                    {tabs.map((tab, index) => {
                        const isActive = activeTabIndex === index
                        return (
                            <Link
                                key={tab.path}
                                ref={(elem) => { tabsRef.current[index] = elem }}
                                to={tab.path}
                                onClick={() => handleTabClick(index)}
                                className={`px-4 duration-100 ${collapsed ? 'text-lg' : 'text-xl'} ${isActive ? 'text-[#ecb403]' : 'hover:text-[#ecb403]'}`}
                            >
                                {tab.label}
                            </Link>
                        )
                    })}
                </div>

                <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className='md:hidden text-sm font-bold text-[#1b6666] mr-3'
                    aria-label={`Call ${siteConfig.phone}`}
                >
                    Call
                </a>

                <button
                    type='button'
                    onClick={toggleNav}
                    className='md:hidden z-10 py-8 cursor-pointer bg-transparent border-none'
                    aria-label={nav ? 'Close menu' : 'Open menu'}
                    aria-expanded={nav}
                >
                    {!nav ? <FaBars className='size-[20px]' /> : <FaTimes />}
                </button>

                <ul className={!nav ? 'hidden' : 'md:hidden absolute top-12 right-5 w-40 bg-[#1b6666] flex flex-col justify-center items-center rounded-3xl py-4'}>
                    {tabs.map((tab, index) => (
                        <li key={tab.path} className='my-2 text-md text-white cursor-pointer'>
                            <Link
                                onClick={() => {
                                    handleTabClick(index)
                                    toggleNav()
                                }}
                                to={tab.path}
                            >
                                {tab.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {activeTabIndex === null && (
                <div className={`flex justify-center font-bold md:text-xl text-sm overflow-hidden transition-all ${collapsed ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'} duration-300`}>
                    Welcome to WellDone Inspection!
                </div>
            )}
        </nav>
    )
}

export default Navbar
