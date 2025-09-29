import React from 'react'
import Logo from '../../assets/images/logo_no_motto.png'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import SlideInWrapper from '../../animation-wrappers/SlideInWrapper.js'
import { Link } from 'react-router-dom';

const About = (props) => {
    const {
        setActiveTabIndex
    } = props

    const { ref: blockRef, inView: blockInView } = useInView({})

    return (
        <div className='justify-center flex pb-10 overflow-x-hidden' style={{ paddingTop: props.topPadding }}>
            <div ref={blockRef}
                className={`flex flex-col items-center w-screen`} >
                <SlideInWrapper isInView={blockInView} direction="top">
                    <p className={`text-[20px] md:text-[35px] font-semibold font-aleo`}>About Us</p>
                </SlideInWrapper>
                <div className='flex flex-col w-[90%] md:w-2/3 rounded-3xl py-10 items-center bg-gray-200'>
                    <div className='lg:flex sm:space-x-4 items-center sm:px-4'>
                        <SlideInWrapper className="flex flex-col relative items-center group" isInView={blockInView} direction="left">
                            <img src={Logo} className='object-contain group-hover:scale-75 group-hover:-mt-10 duration-500 w-[100px] sm:w-[200px] lg:w-full'></img>
                            {/* <p className='opacity-0 group-hover:opacity-100 group-hover:-mt-10 duration-500'>Text placeholder describing image</p> */}
                        </SlideInWrapper>
                        <SlideInWrapper isInView={blockInView} direction="right">
                            <div className="flex flex-col p-4 space-y-2 text-[15px] md:text-md lg:text-xl font-aleo">
                                <p className="mt-3 mb-3">WellDone Inspection, Inc. is a New York City–based DOB-registered Special Inspection Agency dedicated to delivering accurate, code-compliant, and timely special inspections for construction projects of all scales. As a small business, we pride ourselves on offering the attention to detail, responsiveness, and accountability that larger firms often can't match.</p>
                                <p className="mt-3 mb-3">Founded by a licensed professional engineer with over 10 years of experience in structural engineering and construction oversight, our mission is simple:
                                    Support builders, owners, and developers in building safe, durable, and code-compliant structures.</p>

                                <p className="font-bold">What We Do</p>
                                <p>We provide third-party Special Inspections as required by the NYC Building Code (Chapter 17), including but not limited to:</p>
                                    <li>Structural Steel & Welding Inspections</li>
                                    <li>Concrete Placement & Rebar</li>
                                    <li>Soils, Footings, and Deep Foundations (Piles, Caissons, Helical Piers)</li>
                                    <li>Wood Framing & Shear Walls</li>
                                    <li>EIFS & Fireproofing</li>
                                    <li>Energy Code Compliance Inspections</li>
                                    <li>Excavation and Underpinning Oversight</li>
                            </div>
                        </SlideInWrapper>
                    </div>
                    <SlideInWrapper className="w-full flex justify-center" isInView={blockInView} direction="bottom">
                        <Link
                            onClick={() => {
                                setActiveTabIndex(3)
                                window.scrollTo(0, 0)
                            }}
                            to={`/contact`}
                            className="flex justify-center items-center group space-x-4 w-4/5 lg:w-1/2 hover:w-3/5 hover:text-[#ecb403] text-[15px] md:text-md lg:text-xl border-[3px] px-6 py-3 mt-6 font-semibold rounded-xl border-white hover:border-[#ecb403] hover:bg-[#1b6666] duration-500">
                            <p className='-mr-6 group-hover:mr-0 duration-500'>We are easy to find. Let us know your needs.</p>
                            <FontAwesomeIcon icon={faComments} className='opacity-0 group-hover:flex group-hover:opacity-100 duration-500' />
                        </Link>
                    </SlideInWrapper>
                </div>
            </div>
        </div>
    )
}

export default About