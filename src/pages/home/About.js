import React from 'react'
import mottoLogo from '../../assets/images/logo_with_motto.png'
import logo_no_motto from '../../assets/images/logo_no_motto.png'

const About = () => {
    return (
        <div className='flex flex-col md:mt-5 px-5 md:px-10 lg:px-40'>
            <div className='flex flex-row'>
                <div className='flex flex-col justify-between flex-grow lg:mt-5'>
                    <div className='flex items-center'>
                        <p className='md:text-[35px] font-bold text-[20px]'>About Us</p>
                        <hr className='border-1 border-black flex-grow mx-4'></hr>
                    </div>
                    <h2 className='font-serif md:text-[20px] text-[15px] mt-3 mb-3'>
                        <p className="">WellDone Inspection, Inc. is a New York City–based DOB-registered Special Inspection Agency dedicated to delivering accurate, code-compliant, and timely special inspections for construction projects of all scales. As a small business, we pride ourselves on offering the attention to detail, responsiveness, and accountability that larger firms often can't match.</p>
                    </h2>
                </div>
                <div className='group relative ml-2 md:ml-5 flex-none size-[100px] md:size-[150px]'>
                    <img src={logo_no_motto} alt='logo' className='absolute w-full h-full object-fill border-2 rounded-3xl bg-white group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] duration-500 z-10' />
                    <div className='bg-white border-4 w-full h-full rounded-3xl flex items-end justify-center p-1
                    ml-[15px] mt-[35px] md:ml-[0px] md:mt-[10px]  md:group-hover:translate-x-[10px] md:group-hover:translate-y-[30px] duration-500'>
                        <p className='font-bold text-[10px] md:text-sm'>James Jiang, P.E., Director</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="mb-3 font-serif text-[15px] md:text-[20px]">Founded by a licensed professional engineer with over 10 years of experience in structural engineering and construction oversight, our mission is simple:
    Support builders, owners, and developers in building safe, durable, and code-compliant structures.</p>
                <p className="mb-3 font-bold text-[20px]">What We Do</p>
                <div className='font-serif text-[15px] md:text-[20px]'>
                    <p>We provide third-party Special Inspections as required by the NYC Building Code (Chapter 17), including but not limited to:</p>
                    <li>Structural Steel & Welding Inspections</li>
                    <li>Concrete Placement & Rebar</li>
                    <li>Soils, Footings, and Deep Foundations (Piles, Caissons, Helical Piers)</li>
                    <li>Wood Framing & Shear Walls</li>
                    <li>EIFS & Fireproofing</li>
                    <li>Excavation and Underpinning Oversight</li>
                </div>
            </div>
            {/* <hr className='border-1 border-black mt-6 mr-3'></hr> */}
        </div>
    )
}

export default About