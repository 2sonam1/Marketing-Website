import React from 'react'

function Section1() {
    return (
        <div className="pt-20">
            <div className="flex flex-col text-blue">
                <div className="flex flex-wrap justify-center items-center">
                    <img src="sec2_1.png" className="w-20" />
                </div>
                <div className="flex flex-col justify-center items-center md:text-4xl text-xl lg:text-4xl sm:text-2xl font-custom">
                    <p className="flex flex-wrap">Explore. Enroll. Have Fun. Repeat -</p>
                    <p className="flex flex-wrap">here hobby meets happiness</p>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    <div className="flex flex-col justify-center items-center p-10 w-72  text-center font-Nunito">
                        <img src="sec2_2.png" alt="" className="w-16" />
                        <h1 className="flex flex-wrap font-custom justify-center items-center text-center pt-1 pb-1">Learn something new</h1>
                        <div className="flex flex-wrap justify-center items-center">Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography.</div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-10 w-72 text-center font-Nunito">
                        <img src="sec2_3.png" alt="" className="w-16" />
                        <h1 className="flex flex-wrap font-custom justify-center items-center pt-1 pb-1">Skilled & Passionate Teachers</h1>
                        <div className="flex flex-wrap justify-center items-center">We offers Interactive classes by experts who are qualified and trusted.</div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-10 w-72 text-center font-Nunito">
                        <img src="sec2_4.png" alt="" className="w-16" />
                        <h1 className="flex flex-wrap font-custom justify-center items-center pt-1 pb-1">Take classes anytime, anywhere</h1>
                        <div className="flex flex-wrap justify-center items-center">Join sessions at your own convenience and pace, from the comforts of your home.</div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-10 w-72 text-center font-Nunito">
                        <img src="sec2_5.png" alt="" className="w-16" />
                        <h1 className="flex flex-wrap font-custom justify-center items-center pt-1 pb-1">Pay as you go</h1>
                        <div className="flex flex-wrap justify-center items-center">No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
