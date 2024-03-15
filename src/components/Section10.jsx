import React from 'react'
import './Header.css'

function Section10() {
    return (
        <div className='bg-orange m-20 p-10 rounded-full flex flex-col justify-center items-center'>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-wrap text-white font-custom text-4xl">Start learning new skills today and</div>
                <div className="flex flex-wrap text-white font-custom text-4xl">pursue your passion </div>
            </div>
            <div className="text-white font-Nunito p-4">Join the community of global learners and start exploring today.</div>
            <div className="flex flex-wrap">
                <button className="border font-Nunito text-white border-white rounded-full p-2 pl-10 pr-10">Enter your email</button>
                <button className="bg-white font-Nunito rounded-full text-orange p-2">GET STARTED</button>
            </div>
        </div>
    )
}

export default Section10
