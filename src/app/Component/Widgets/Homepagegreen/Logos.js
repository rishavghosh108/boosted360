'use client'
import React from "react";
import Image from "next/image";
import { sliderInLogonnjdvd, sliderInLogovbg, sliderInLogoOne, sliderInLogoTwo, sliderInLogoThree, sliderInLogorei, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogojjjd, sliderInLogocxml } from "../../../assets/index"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

export default function Logos() {

    const imgData = [sliderInLogovbg, sliderInLogoOne, sliderInLogojjjd, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogorei, sliderInLogolop, sliderInLogoafr, sliderInLogocxml, sliderInLogonnjdvd, sliderInLogondg
    ]
    console.log(imgData)
    return (
        <div className="container">
            {/* <ul className="flex flex-wrap lg:flex-nowrap justify-center items-center px-[30px] py-[35px] bg-[#fff] rounded-b-[10px]">
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogovbg} alt="logo" className="w-[70px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogoOne} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogojjjd} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogoThree} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogoTwo} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogoTdffe} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogorei} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogolop} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogoafr} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogocxml} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogonnjdvd} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
                <li className="md:p-4 p-3">
                    <Image src={sliderInLogondg} alt="logo" className="w-[100px] block mx-auto ease_in_out image-grayscale hover:grayscale-0" />
                </li>
            </ul> */}

            <div className="bg-white px-[15px] sm:px-[25px] py-[15px] sm:py-[30px] homepageimgslider">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={12}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1300,
                        disableOnInteraction: false
                    }}
                    speed={600}
                    loop={true}
                    breakpoints={{
                        1025: {
                            slidesPerView: 12
                        },
                        768: {
                            slidesPerView: 8
                        },
                        580: {
                            slidesPerView: 5
                        },
                        0: {
                            slidesPerView: 4
                        }
                    }}

                >
                    {imgData.map((item, key) => (
                        <SwiperSlide key={key} className="flex items-center">
                            <div className="md:p-4 p-3 w-[66px] sm:w-[92px]">
                                <Image className="size-full object-contain filter grayscale hover:grayscale-0" src={item} alt={item} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}