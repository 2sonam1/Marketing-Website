import React from 'react'
import './Header.css'
import { MdCopyright } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";






function Footer() {
    return (
        <div className="flex flex-col bg-footer">
            <div className='flex flex-wrap  justify-between'>
                <div className="flex flex-col titillium-web-regular text-blue p-8">
                    <h1 className="font-custom">Class Categories</h1>
                    <p className="">Language</p>
                    <p className="">Cooking</p>
                    <p className="">Music</p>
                    <p className="">Arts & Craft</p>
                    <p className="">Yoga</p>
                    <p className="">Academic</p>
                    <p className="">Back to Roots</p>
                    <p className="">Funteresting</p>
                </div>
                <div className="flex flex-col titillium-web-regular text-blue p-8">
                    <h1 className="font-custom">Company</h1>
                    <p className="">About</p>
                    <p className="">Careers</p>
                    <p className="">Blog</p>
                    <p className="">Contact</p>
                    <p className="">Privacy Policy</p>
                    <p className="">Terms and Conditions</p>
                    <p className="">Refund Policy</p>
                </div>
                <div className="flex flex-col titillium-web-regular text-blue p-8">
                    <h1 className="font-custom">Learn</h1>
                    <p className="">All Classes</p>
                </div>
                <div className="flex flex-col titillium-web-regular text-blue p-8">
                    <h1 className="font-custom">Teach</h1>
                    <p className="">Become a Teacher</p>
                </div>
                <div className="flex flex-col titillium-web-regular text-blue p-8">
                    <img src="https://s3-alpha-sig.figma.com/img/1c89/56fc/776d467ef7490ba3dc10dc93775c161d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQTI51yQAdCKBlkV09jReYEj0Y7RrYHziKFshJsiTCaCuAb8goyKiVKkZ4IOAh7xOAE-kJD-4LtOA6QKKykPkI-H25vxMdq-SP8b6nLGvoqNcWGG048X8HrJq6UnIRv1QtXp1Liqa6Vx5umN2B9tkDPHlICzkdXZMwZbvJi1LfFqnU1elQDjTGStT4uUmy9ngMqhzTXphurwJxQksnO7YHYzxVob0cA3162LoDSgIFLxenElzjXVsrCSlLYxCuKU~Ko9pMLy8zYwFuTQiTvczU2RGu3p8eXp8LSsLgPlYVHK6M~h~KaQGZZ1P3p77lbnthWgd7CD4i6ahTxRe2VYgg__"
                        className="w-44"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-wrap justify-evenly text-purple  border-t  border-purple p-2">
                    <p className="flex justify-center items-center"><MdCopyright />Project 2021. All rights reserved.</p>
                    <p className="flex flex-wrap justify-center items-center">Made with <FaHeart className='ml-1 mr-1 text-red-600' />by SimplePlan</p>
                    <p className="flex flex-wrap "><FaFacebookSquare className='ml-2' /><PiInstagramLogoLight className='ml-2' /><FaTwitter className='ml-2' /><FaYoutube className='ml-2' />

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
