import React from 'react'
import { useInView } from 'react-intersection-observer'
import SlideInWrapper from '../../animation-wrappers/SlideInWrapper'
import services from '../../data/services'
import otherServices from '../../data/otherServices'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";


const Service = (props) => {
    const serviceRefs = []
    const inViews = []

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    services.forEach(_ => {
        const { ref: serviceRef, inView: serviceInView } = useInView()
        serviceRefs.push(serviceRef)
        inViews.push(serviceInView)
    })

      useEffect(() => {
        setIsLargeScreen(window.innerWidth >= 768);
      })

    return (
        <div>
            <div className='flex flex-col p-10 overflow-x-hidden' style={{ paddingTop: props.topPadding }}>
                <p className='font-semibold font-aleo md:text-[35px] font-bold text-[20px]'>Services</p>
                <div className='md:flex'>
                <div className='md:w-1/2'>
                    {
                        services.map((service, index) => {
                            return (
                                <div key={index} ref={serviceRefs[index]}>
                                    <SlideInWrapper
                                        className="flex space-x-10 border-t-2 border-gray-400 py-2 w-full" isInView={isLargeScreen ? true : true} direction={index % 2 === 0 ? "left" : "right"}
                                    >
                                        <ServiceCard service={service} />
                                        <div className='flex flex-col justify-center items-start space-y-6 text-[12px] md:text-md lg:text-lg'>
                                            <p>{service.longDescription}</p>
                                            <Link
                                                to={service.link}
                                                className='inline-block border-2 border-black py-[7px] px-[15px] font-roboto hover:bg-[#1b6666] hover:text-[#ecb403] duration-300 text-[12px] md:text-md'
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </SlideInWrapper>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='md:w-1/2'>
                    {
                        otherServices.map((service, index) => {
                            return (
                                <div key={index} ref={serviceRefs[index]}>
                                    <SlideInWrapper
                                        className="flex space-x-10 border-t-2 border-gray-400 py-2" isInView={isLargeScreen ? true : true} direction={index % 2 === 0 ? "left" : "right"}
                                    >
                                        <ServiceCard service={service} />
                                        <div className='flex flex-col justify-center items-start space-y-6 text-[12px] md:text-md lg:text-lg'>
                                            <p>{service.longDescription}</p>
                                            <Link
                                                to={service.link}
                                                className='inline-block border-2 border-black py-[7px] px-[15px] font-roboto hover:bg-[#1b6666] hover:text-[#ecb403] duration-300 text-[12px] md:text-md'
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </SlideInWrapper>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </div>

    )
}

const ServiceCard = ({ service }) => {
    return (
        <div className={`group size-[100px] md:size-[150px] lg:size-[200px] flex-shrink-0 rounded-xl shadow-card overflow-hidden relative duration-[0.8s]
        bg-center bg-no-repeat bg-[length:100%_100%]  hover:bg-left hover:bg-[length:600px]`}
            style={{ backgroundImage: `url(${service.background})`}}>
            <p className='absolute text-[12px] md:text-sm lg:text-xl  font-bold top-0 w-full text-white p-3 bg-black group-hover:bg-transparent'>{service.title}</p>
        </div>
    )
}

export default Service