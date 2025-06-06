'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Servicebg, sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd, Companies15, Companies16, Companies17, Companies18, Companies19, sliderInLogoThree0, sliderInLogoThree1, sliderInLogoThree2, sliderInLogoThree3, sliderInLogoThree4, } from "../../../assets/index"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { delay } from "lodash";

export default function Companies() {
    const imgData = [
        sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd
    ]
    return (
        <div className="container">
            <div className="bg-cover bg-center rounded-[10px] py-[40px] mt-0 lg:mt-[20px]" style={{ backgroundImage: `url(${Servicebg.src})`, }}>
                <div>
                    <h2 className="text-[16px] lg:text-[20px] xl:text-[30px] font-bold text-white/80 leading-[1.25] text-center">
                        Companies We&apos;ve Helped Grow
                    </h2>
                </div>
                <ul className=" hidden md:flex flex-wrap items-center justify-center pt-[20px] lg:pt-[30px] sm:px-[30px] px-4 lg:px-[40px]">
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogoOne} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogoThree} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogoTwo} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogoTdffe} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogolop} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogoafr} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogondg} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogocxml} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogorei} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogovbg} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogojjjd} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogomasla} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogodff} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                    <li className="p-4 m-1 bg-white">
                        <Image src={sliderInLogonnjdvd} alt="logo" className="hover:filter-none w-[100px] h-[50px] object-contain grayscale" />
                    </li>
                </ul>

                <div className="md:hidden block sm:px-[30px] px-4 pt-[20px]">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={6}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1300,
                            disableOnInteraction: false
                        }
                        }
                        speed={600}
                        breakpoints={{
                            580:{slidesPerView:6},
                            0:{slidesPerView:4}
                        }}
                    >
                        {imgData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-2 m-1 bg-white">
                                    <Image className="size-full object-contain hover:filter-none w-[100px] h-[50px] grayscale" src={item} alt={item} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}