import React from 'react'
import mottoLogo from '../assets/images/logo_with_motto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import services from '../data/services';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    const {
        setActiveTabIndex
    } = props

    return (
        <div className='flex flex-col justify-center bg-[#1b6666] lg:mt-5'>
            <div className='flex justify-center items-center h-[200px] lg:h-[260px] py-14'>
                <div className='flex flex-col w-[320px] space-y-2 mx-2 md:mx-10 lg:mx-20'>
                    <img src={mottoLogo} alt='logo' className='w-[200px]' />
                    <p className='text-[#ecb403] font-serif  text-[10px] md:text-[12px] lg:text-[15px]'>We are MWBE - certified Minority and Women-owned Business Enterprise.</p>
                </div>
                <div className='border-[#3f3f3f] border-l-[1px] border-solid h-full'></div>
                <div className='flex flex-col w-[250px] justify-center items-center space-y-2 text-[#ecb403] mx-2 md:mx-10 lg:mx-20'>
                    <p className='text-[15px] md:text-[20px] lg:text-[30px] font-bold font-oswald'>Services</p>
                    {/* {
                        services.map((service, index) => {
                            return (
                                <Link
                                    key={index}
                                    onClick={() => {
                                        setActiveTabIndex(1)
                                        window.scrollTo(0, 0)
                                    }}
                                    to={"/services"}
                                    className='text-[18px] font-aleo'
                                >
                                    {service.name}
                                </Link>
                            )
                        })
                    } */}
                      <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>TR Inspections</p>
                      <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>Engineering</p>
                      <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>TPP</p>
                      <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>SSP</p>
                      <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px] text-center'>Structural Shop Drawings</p>
                </div>
                <div className='border-[#3f3f3f] border-l-[1px] border-solid h-full'></div>
                <div className='flex flex-col items-start space-y-4 text-[#ecb403] mx-2 md:mx-10 lg:mx-20'>
                    <p className='text-[15px] md:text-[20px] lg:text-[30px]  font-bold font-oswald'>Contact</p>
                    <div className='flex space-x-2 sm:space-x-4 items-center text-[10px] md:text-[12px] lg:text-[15px]'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p className='font-merriweather text-[10px] md:text-[12px] lg:text-[15px]'>10 Hallets Point, Astoria, NY, 11102</p>
                    </div>
                    <div className='flex space-x-2 sm:space-x-4 items-center text-[10px] md:text-[12px] lg:text-[15px]'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p className='text-[10px] md:text-[12px] lg:text-[15px] font-merriweather'>welldoneinspect@gmail.com</p>
                    </div>
                    <div className='flex space-x-2 sm:space-x-4 items-center text-[10px] md:text-[12px] lg:text-[15px]'>
                        <FontAwesomeIcon icon={faPhone} />
                        <p className='text-[10px] md:text-[12px] lg:text-[15px] font-merriweather'>(917) 213-1886</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center bg-[#3f3f3f] space-x-4 text-[8px] md:text-[12px] lg:text-[15px] py-2'>
                <p className='text-white font-semibold'>@ 2025 WellDone Inspection, Inc. All rights reserved.</p>
                <p className='font-medium text-blue-400'>Terms of Service</p>
                <p className='font-medium text-blue-400'> Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer