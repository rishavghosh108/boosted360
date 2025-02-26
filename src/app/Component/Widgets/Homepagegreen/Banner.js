"use client"

import React, { useState } from 'react';

import Image from "next/image";
import Slider from "react-slick";
import { BtnArrow,BannerBackgroundGreen,Exrinceone, Exrincetwo } from "../../../assets/index"
import WorkWthUsModal from "../../Widgets/Modal/WorkWithUs/WorkWthUsModal"

export default function Banner()  {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    var expertiseslider = {
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        fade: false,
    };

    return  (
        <>
            <div className="container">
                <div className="flex bg-cover bg-center rounded-t-[10px] px-[30px] lg:px-[60px] pt-[30px] lg:pt-[60px] pb-[30px] lg:pb-[50px]" style={{ backgroundImage: `url(${BannerBackgroundGreen.src})`, }}>
                    <div className="w-full lg:w-[58%]">
                        <h1 className="text-[30px] lg:text-[56px] xl:text-[67px] font-bold text-white rounded-t-[10px]">
                            <span className="bg-black">
                            Our digital marketing agency  
                            </span>
                            &nbsp;to drive growth
                        </h1>
                        <p className="w-full max-w-[600px] text-[18px] md:text-[20px] xl:text-[26px] font-medium text-[#fff] pt-[15px] lg:pt-[20px] leading-[1.46]">
                            As a leading <span className="text-[#76ff33]">digital marketing agency</span>, we are committed to delivering performance-driven solutions that help your brand not only reach but surpass its growth goals. 
                        </p>
                        <button onClick={openModal} className="ease_in_out box-shadows bg-[#2a2a2a] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#3e3e3e] px-[30px] md:px-[55px] py-[15px] md:py-[20px] mt-[40px] hover:bg-[#404040] hover:border-[#404040]">
                            Work With Us 
                            <span className="ml-[10px]">
                                <Image src={BtnArrow} alt="arrow" />
                            </span>
                        </button>
                    </div>
                    <div className="w-[42%] hidden lg:block">
                        <Slider {...expertiseslider} className="bannerslider">
                            <div className='item'>
                                <div className="w-[146px] h-[146px] rounded-full m-auto">
                                    <Image src={Exrinceone} alt="profile" className="rounded-full object-cover" />
                                </div>
                                <div className="mt-[15px]">
                                    <h3 className="lg:text-[28px] xl:text-[35px] font-bold text-white leading-[1.25] text-center m-auto">
                                        We can count on them to bring new ideas to the table consistently
                                    </h3>
                                </div>
                                <div className="mt-[30px] text-center">
                                    <h4 className="text-[20px] font-extrabold text-white">Jacqueline Foster</h4>
                                    <p className="text-[16px] font-bold text-white pt-[10px]">Demand Generation Marketing, Lever.co</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="w-[146px] h-[146px] rounded-full m-auto">
                                    <Image src={Exrincetwo} alt="profile" className="rounded-full object-cover" />
                                </div>
                                <div className="mt-[15px]">
                                    <h3 className="lg:text-[28px] xl:text-[35px] font-bold text-white leading-[1.25] text-center m-auto">
                                        We can count on them to bring new ideas to the table consistently
                                    </h3>
                                </div>
                                <div className="mt-[30px] text-center">
                                    <h4 className="text-[20px] font-extrabold text-white">Jacqueline Foster</h4>
                                    <p className="text-[16px] font-bold text-white pt-[10px]">Demand Generation Marketing, Lever.co</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="w-[146px] h-[146px] rounded-full m-auto">
                                    <Image src={Exrinceone} alt="profile" className="rounded-full object-cover" />
                                </div>
                                <div className="mt-[15px]">
                                    <h3 className="lg:text-[28px] xl:text-[35px] font-bold text-white leading-[1.25] text-center m-auto">
                                    boosted 360 has transformed the way we approach our projects.
                                    </h3>
                                </div>
                                <div className="mt-[30px] text-center">
                                    <h4 className="text-[20px] font-extrabold text-white">John Doe</h4>
                                    <p className="text-[16px] font-bold text-white pt-[10px]">CEO, Tech Innovations Inc.</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="w-[146px] h-[146px] rounded-full m-auto">
                                    <Image src={Exrincetwo} alt="profile" className="rounded-full object-cover" />
                                </div>
                                <div className="mt-[15px]">
                                    <h3 className="lg:text-[28px] xl:text-[35px] font-bold text-white leading-[1.25] text-center m-auto">
                                    The best decision we made was partnering with boosted 360.
                                    </h3>
                                </div>
                                <div className="mt-[30px] text-center">
                                    <h4 className="text-[20px] font-extrabold text-white">Jane Smith</h4>
                                    <p className="text-[16px] font-bold text-white pt-[10px]">COO, Global Solutions</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}