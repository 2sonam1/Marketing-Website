import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Section5.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Section5() {
    const totalSlides = 5; // Total number of slides
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex);
    };

    return (
        <div className="flex flex-col">
            <div className="pl-16 pt-10 font-custom text-blue md:text-4xl text-xl lg:text-4xl sm:text-2xl pb-4">Love from community</div>
            <Swiper
                // slidesPerView={3}
                // spaceBetween={30}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                loop={true}
                centeredSlides={true}
                pagination={{ type: 'progressbar' }}
                navigation={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                }}
                onSlideChange={handleSlideChange}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {[...Array(totalSlides).keys()].map((index) => (
                    <SwiperSlide key={index} className=''>
                        <div className={`p-10 ${activeSlideIndex === index ? 'center-slide' : ''} text-lightGray border-superLightBlue border-2 flex flex-col`}>
                            <div className="flex flex-col flex-wrap justify-center items-center">
                                <RiDoubleQuotesL className={`absolute top-4 left-4 size-9 ${activeSlideIndex === index ? 'fill-golden' : ''}`} />
                                <img src={`sec5_${index + 1}.png`} style={{ width: '120px' }} />
                                <h1 className=" Redound text-gray font-custom p-4">Karandeep</h1>
                                <div className="font-Nunito text-base">It is nice to be on an international platform where there are teachers from around the world.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
