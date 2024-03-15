import './Header.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    return (
        <>

            <div className={`fixed z-20 w-full p-6 sm:p-4 flex justify-between items-center text-blue ${dropDown ? 'bg-lightBlue' : 'bg-white'}`}>
                <div className="sm:pl-12 pl-2">
                    <Link to='#' className='font-Nunito font-bold text-sm sm:text-2xl sm:pr-10 pr-1'>
                        Logo
                    </Link>
                    <button onClick={() => { setIsOpen(!isOpen); setDropDown(!dropDown) }} className='titillium-web-semibold text-xs sm:text-lg'>
                        <div className="font-Nunito font-bold flex justify-start items-center ">
                            CATEGORIES
                            {isOpen ? <FaChevronUp className='size-2 sm:size-4' /> : <FaChevronDown className='size-2 sm:size-4' />}
                        </div>
                    </button>
                    {
                        dropDown && (
                            <div className="absolute flex flex-wrap justify-between items-center z-20 w-full  left-0 sm:top-20 pl-28 top-16 bg-lightBlue ">
                                <div className="flex flex-col font-custom">
                                    <p className="">Language</p>
                                    <p className="">Cooking</p>
                                    <p className="">Music</p>
                                    <p className="">Arts & Craft</p>
                                    <p className="">Yoga</p>
                                    <p className="">Academic</p>
                                    <p className="">Back to Roots</p>
                                    <p className="">Funteresting</p>
                                </div>
                                <div className="p-12 pr-28" >
                                    <img src="header.png" alt="" className="w-64" />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="flex flex-wrap sm:pr-12 pr-2">
                    <Link to='#' className='font-Nunito font-bold sm:m-4 text-xs sm:text-base flex justify-center items-center '>
                        TEACH
                    </Link>
                    <div className="text-gray flex justify-center items-center sm:mr-2">|</div>
                    <button className='font-Nunito font-bold  sm:m-2 border rounded-full  text-blue  sm:pl-4 pl-2 sm:pr-4 pr-2  text-xs sm:text-base'>LOGIN</button>
                    <button className='font-Nunito font-bold  sm:m-2 border rounded-full bg-blue text-white p-1 sm:pl-4 pl-2 sm:pr-4 pr-2  text-xs sm:text-base'>SIGNUP</button>

                </div>

            </div>
        </>
    )
}

export default Header
