import React from 'react'

function Section4() {
    return (
        <div className="flex flex-col">
            <div className="pl-16 font-custom text-blue md:text-4xl text-xl lg:text-4xl sm:text-2xl pb-4">Six reasons to choose our class</div>
            <div className='flex flex-wrap justify-evenly font-Nunito'>
                <div className="flex flex-col p-14 w-96">
                    <img src="sec4_1.png" alt="" className="w-20" />
                    <p className="">Interactive live online classes at your convenient time slots</p>
                </div>
                <div className="flex flex-col p-14 w-96">
                    <img src="sec4_2.png" alt="" className="w-20" />
                    <p className="">Learning from passionate, talented and trusted teachers</p>
                </div>
                <div className="flex flex-col p-14 w-96">
                    <img src="sec4_3.png" alt="" className="w-20" />
                    <p className="">Cross country sharing of interesting and unique hobbies from across the world</p>
                </div>
                <div className="flex flex-col p-14 w-96">
                    <img src="sec4_4.png" alt="" className="w-20" />
                    <p className="">Age no bar for enroling into your cherished hobby or activity classes</p>
                </div>
                <div className="flex flex-col p-14 w-96">
                    <img src="sec4_5.png" alt="" className="w-20" />
                    <p className="">Transparent and structured fee payment options</p>
                </div>
                <div className="flex flex-col p-14 w-96">
                    <img src="sec4_6.png" alt="" className="w-20" />
                    <p className="">Contributing to the revival and nurturing of traditional art forms</p>
                </div>

            </div>
        </div>
    )
}

export default Section4
