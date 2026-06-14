import React from 'react'
import services from '../../data/services'
import { Link } from 'react-router-dom'

const Services = (props) => {
    const { setActiveTabIndex } = props

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100 mt-8'>
            <div className='font-semibold md:text-[50px] font-bold text-[20px] mt-5'>Services</div>
            <div className='flex flex-wrap gap-6 items-center justify-center mt-5'>
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} setActiveTabIndex={setActiveTabIndex} />
                ))}
            </div>
        </div>
    )
}

const ServiceCard = ({ service, setActiveTabIndex }) => {
    return (
        <div
            className='group h-[180px] w-[180px] md:h-[200px] md:w-[200px] lg:h-[260px] lg:w-[260px] bg-[#808080] rounded-xl shadow-card overflow-hidden flex relative justify-center items-center duration-[0.8s] bg-center bg-no-repeat bg-[length:100%_100%] md:hover:bg-left md:hover:bg-[length:600px]'
            style={{ backgroundImage: `url(${service.background})` }}
        >
            <p className='absolute text-[12px] sm:text-sm md:text-sm lg:text-xl font-bold top-0 w-full text-white p-3 bg-black md:group-hover:bg-transparent'>
                {service.title}
            </p>
            <div className='h-[calc(100%-10px)] w-[calc(100%-10px)] rounded-xl duration-500 border-transparent justify-center items-center flex flex-col mt-[30px] md:group-hover:border-[1px] md:group-hover:border-white md:group-hover:border-solid'>
                <p className='text-center justify-center text-[10px] sm:text-[12px] md:text-sm lg:text-xl text-white md:text-transparent md:group-hover:text-white duration-500 px-1'>
                    {service.shortDescription}
                </p>
                <Link
                    onClick={() => {
                        setActiveTabIndex(1)
                        window.scrollTo(0, 0)
                    }}
                    to='/services'
                    className='py-[10px] px-[20px] mt-[10px] font-roboto text-white border-white border-[1px] text-[13px] md:opacity-0 md:group-hover:opacity-100 hover:bg-[#1b6666] hover:text-[#ecb403] duration-300'
                >
                    LEARN MORE
                </Link>
            </div>
        </div>
    )
}

export default Services
