import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Section6.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function Section6() {
    const totalSlides = 5; // Total number of slides
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex);
    };

    return (
        <div className="">
            <div className="pl-16 pt-20 font-custom text-blue md:text-4xl text-xl lg:text-4xl sm:text-2xl pb-4">Meet our teachers</div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                onSlideChange={handleSlideChange}
                modules={[Pagination, Navigation]}
                className="mySwiper"

            >
                {[...Array(totalSlides).keys()].map((index) => (
                    <SwiperSlide key={index} className={`${activeSlideIndex === index ? 'ml-4' : ''}`} style={{ marginRight: '0px' }}>
                        <div className={` text-lightGray font-custom flex flex-col ${index === activeSlideIndex + 3 ? 'opacity-40' : ''} ${activeSlideIndex > 0 && index === activeSlideIndex - 1 ? 'opacity-0' : ''}`}>
                            <div className="flex flex-col flex-wrap justify-center items-center">
                                <img src={`sec6_${index + 1}.png`} style={{ width: '270px' }} />
                                <h1 className="">Karandeep</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
