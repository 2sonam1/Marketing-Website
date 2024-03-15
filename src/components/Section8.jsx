import React from 'react'
import { FaSquareFull } from "react-icons/fa";

function Section8() {
    return (
        <div className='flex flex-wrap justify-center items-center pt-20'>
            <img src="sec8_1.png" alt="" className="sm:w-2/5 w-96" />
            <div className="flex flex-col justify-center font-Nunito text-blue lg:w-96 md:w-72 sm:w-64 w-60 p-2">
                <h1 className="font-custom md:text-4xl text-xl lg:text-4xl sm:text-2xl text-blue ">Become a certified teacher</h1>
                <p className="pt-4">We only have the best and trusted teachers from the globe. Join us if you have the skill and passion to share it.</p>
                <div className="pl-6">
                    <ul style={{ listStyleType: "square", color: '#FFB051', fontSize: '30px' }}>
                        <li className=''><p className="text-blue text-sm flex justify-start">Make your own schedule</p></li>
                        <li><p className="text-blue text-sm">Teach students on an international platform</p></li>
                        <li><p className="text-blue text-sm">Become part of an international community of passionate educators</p></li>
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default Section8
