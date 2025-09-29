import { FaBars, FaTimes } from 'react-icons/fa';

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import mottoLogo from '../assets/images/logo_with_motto.png'

const tabs = [
    "About", "Services", "Projects", "Contact"
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

    const setTabPosition = (activeTabIdx) => {
        const currentTab = tabsRef.current[activeTabIdx]
        setTabUnderlineWidth(currentTab?.clientWidth ?? 0)
        setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
    }

    const [navbarStyle, setNavbarStyle] = useState('bg-white text-black pt-8');
    const [collapsed, setCollapsed] = useState(false);

    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    }

    const navigator = useNavigate()

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
    }, [collapsed])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight)
        }
    }, [navbarRef.current])

    const handleLogoClick = () => {
        setActiveTabIndex(null)
        navigator('/')
        scrollTo(0, 0)
    }

    return (
        <nav ref={navbarRef} className={`z-20 fixed w-full py-4 md:px-20 px-10 border-b-2 border-b-gray-400 ${navbarStyle} transition-all duration-500`}>
            <div className='flex justify-between items-center'>
                <div
                    className={`${collapsed ? "scale-[0.8]" : "scale-100"} duration-500 cursor-pointer`}
                    onClick={handleLogoClick}
                >
                    <img src={mottoLogo} alt='logo' className="md:w-[200px] w-[150px] right-0"/>

                </div>
                {/* Desktop menu */}
                <div className={`hidden md:flex w-[550px] items-center h-12  font-semibold duration-500 ${collapsed ? "text-lg" : "text-xl"} relative`}>
                    <span
                        className='absolute top-0 bottom-0 -z-10 flex overflow-hidden dureation-300 rounded-xl bg-[#1b6666] w-full duration-300'
                        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }} />
                    {
                        tabs.map((tab, index) => {
                            const isActive = activeTabIndex === index
                            return (
                                <Link
                                    key={index}
                                    ref={(elem) => tabsRef.current[index] = elem}
                                    to={`/${tab}`}
                                    onClick={_ => {
                                        setActiveTabIndex(index)
                                        window.scrollTo(0, 0)
                                    }}
                                    className={`px-4 duration-100 ${isActive ? "text-[#ecb403]" : "hover:text-[#ecb403]"}`}
                                >
                                    {tab}
                                </Link>
                            )
                        })
                    }
                </div>

                {/* Hamburger */}
                <div onClick={toggleNav} className='md:hidden z-10 py-8 cursor-pointer'>
                    {!nav ? <FaBars className='size-[20px]' /> : <FaTimes />}
                </div>


                {/* Mobile menu */}
                <ul className={!nav ? 'hidden' : 'md:hidden absolute top-12 right-5 w-40 h-70 bg-[#1b6666] flex flex-col justify-center items-center rounded-3xl'}>
                    {
                        tabs.map((tab, index) => {
                            const isActive = activeTabIndex === index
                            return <li key={index} className="my-2 text-md text-white cursor-pointer">
                                <Link onClick={_ => {
                                    toggleNav()
                                    window.scrollTo(0, 0)
                                }} to={`/${tab}`} spy={true} smooth={true} offset={tab.offset} duration={500}> {tab} </Link>
                                </li>
                        })
                    }
                </ul>
            </div>
            {
                activeTabIndex === null && <div className={`flex justify-center font-bold md:text-xl text-sm overflow-hidden transition-all ${collapsed ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'} duration-300`}>
                    Welcome to WellDone Inspection!
                </div>
            }
        </nav>
    )
}

export default Navbar