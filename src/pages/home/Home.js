import React from 'react'
import About from './About'
import Qualifications from './Qualifications'
import Services from './Services'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import headerImage from '../../assets/images/headerImage.png'


const Home = (props) => {
    const {
        setActiveTabIndex
    } = props

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={headerImage} className='lg:h-[600px] my-20 md:my-0 mb-5'/>
            </div>

            <About />
            <Qualifications />
            <Services setActiveTabIndex={setActiveTabIndex} />
            <div className='w-full justify-center flex lg:mt-5'>
                <Link
                    onClick={() => {
                        setActiveTabIndex(2)
                        window.scrollTo(0, 0)
                    }}
                    to={`/projects`}
                    className="flex justify-center items-center group space-x-4 w-2/3 sm:w-1/2 hover:w-3/5 hover:text-[#ecb403] border-[3px] px-6 py-3 my-6 font-semibold rounded-xl border-gray-300 hover:border-[#ecb403] hover:bg-[#1b6666] duration-500">
                    <p className='-mr-6 group-hover:mr-0 duration-500 text-[10px] md:text-[15px] lg:text-[18px]'>Check out our latest projects.</p>
                    <FontAwesomeIcon icon={faScrewdriverWrench} className='opacity-0 group-hover:flex group-hover:opacity-100 duration-500' />
                </Link>
            </div>
        </div>
    )
}

export default Home