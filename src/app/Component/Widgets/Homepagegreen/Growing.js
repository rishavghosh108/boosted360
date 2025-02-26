"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { BtnArrow,BannerBackgroundGreen,GrowingImage } from "../../../assets/index"
import WorkWthUsModal from "../../Widgets/Modal/WorkWithUs/WorkWthUsModal"

export default function Growing()  {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return  (
        <>
            <div className="relative z-10 mb-[-100px]">
                <div className="container">
                    <div className="bg-cover bg-center rounded-[10px] px-[30px] lg:px-[60px] pt-[30px] lg:pt-[60px] pb-[30px] lg:pb-[50px]" style={{ backgroundImage: `url(${BannerBackgroundGreen.src})`, }}>
                        <div>
                            <Image src={GrowingImage} alt="Growing-Image" className="m-auto w-[56%]" />
                            <h2 className="text-[22px] lg:text-[36px] font-medium max-w-[550px] leading-[1.5] text-[#f8f8f8] m-auto text-center pt-[20px]">Let&#39;s Create Long-Lasting Growth Together</h2>
                            <button onClick={openModal} className="ease_in_out box-shadows bg-[#2a2a2a] text-[14px] md:text-[15px] font-bold text-white uppercase flex items-center w-fit border border-solid border-[#3e3e3e] px-[30px] md:px-[55px] py-[15px] md:py-[20px] m-auto mt-[25px] lg:mt-[45px] hover:bg-[#404040] hover:border-[#404040]">
                                Work With Us 
                                <span className="ml-[10px]">
                                    <Image src={BtnArrow} alt="arrow" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}