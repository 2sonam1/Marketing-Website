import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";


function Section2() {
    const priceInNOK = [1000, 1000, 1199, 1199]
    const priceInINR = [1199, 1199, 1499, 1499]
    const discountedPriceInNOK = [600, 600, 1000, 1000]
    const discountedPriceInINR = [1000, 1000, 1299, 1299]
    const [activeNOK, setActiveNOK] = useState(true)
    const [activeINR, setActiveINR] = useState(false)
    const [items, setItems] = useState(priceInNOK)
    const handleClick = () => {
        if (!activeINR) {
            setItems(priceInINR)
        }
        else {
            setItems(priceInNOK)
        }
        setActiveINR(!activeINR)
        setActiveNOK(!activeNOK)
    }
    return (
        <div className='flex flex-col mb-10'>
            <div className="flex flex-wrap justify-between ">
                <div className="flex flex-col pl-16">
                    <div className="font-custom text-blue md:text-4xl text-xl lg:text-4xl sm:text-2xl pb-4">Discover classes</div>
                    <div className="text-purple lg:text-base md:text-sm sm:text-xs text-xs flex flex-wrap font-Nunito">Choose from a variety of classes from around the world.</div>
                </div>
                <div className="pr-16 pl-16">

                    <button className={`rounded-l-full border border-r-0 sm:pl-4 pl-2 sm:pr-4 pr-2   text-xs sm:text-base ${activeNOK ? 'border-blue bg-blue text-white' : 'border-lightBlue bg-lightBlue'}`} onClick={() => handleClick()}>NOK</button>
                    <button className={`rounded-r-full border  sm:pl-4 pl-2 sm:pr-4 pr-2   text-xs sm:text-base ${activeINR ? 'border-blue bg-blue text-white' : 'border-lightBlue bg-lightBlue'} `} onClick={() => handleClick()}>INR</button>
                </div>
            </div>
            <div className="flex justify-evenly flex-wrap">
                {items.map((item, index) => (
                    <div className={`flex flex-col w-64 p-4 ${index === 0 ? 'pl-4' : ''} ${index === 3 ? 'pr-4' : ''}`}>
                        <img src="sec1_1.png" alt="" className="" />
                        <div className="bg-lightBlue p-3">
                            <p className="text-blue font-Nunito">Language</p>
                            <p className="font-custom">Class name - Lorem ipsum sit elit varsit lectusi sit amet</p>
                            <p className="flex  font-Nunito items-center">by John Doe <AiFillStar className='fill-golden' /> 4.7</p>
                            <p className="font-Nunito">Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...</p>
                        </div>
                        <div className="flex justify-between bg-blue text-white rounded-b-md">
                            <div key={index} className=" p-2 font-Nunito">{activeINR ? <span>&#8377;</span> : 'kr'}{item}</div>
                            <div className="p-2 font-Nunito">Enroll now</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Section2
