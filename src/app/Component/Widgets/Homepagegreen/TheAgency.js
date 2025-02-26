import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { BtnArrow,BgGrain } from "../../../assets/index";

import AgencyAccordian from "../Homepagegreen/AgencyAccordian";
import WorkWthUsModal from "../../Widgets/Modal/WorkWithUs/WorkWthUsModal"

export default function TheAgency() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return  (
        <>
            <div className="container">
                <div className="flex flex-wrap bg-auto bg-center bg-no-repeat pt-[20px] lg:pt-[55px]" style={{ backgroundImage: `url(${BgGrain.src})`, }}>
                    <div className="w-full lg:w-[50%] pt-[26px]">
                        <h2 className="text-[30px] lg:text-[56px] xl:text-[65px] font-bold text-[#000] rounded-t-[10px]">The Marketing Partner Your Entire Team Will Appreciate</h2>
                        <p className="w-full max-w-[698px] text-[18px] lg:text-[20px] font-normal text-[#000] pt-[20px] lg:pt-[50px] leading-[1.6]">Our <strong>digital marketing services</strong> at Boosted 360, is known for driving and converting high-quality traffic across various channels. With our expertise, you’ll continuously hit (and even exceed) your revenue targets. From SEO to paid advertising, we handle everything to ensure your marketing strategy is efficient, cost-effective, and results-driven.</p>
                        <button onClick={openModal} className="ease_in_out box-shadows bg-[#2a2a2a] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#3e3e3e] px-[30px] md:px-[55px] py-[15px] md:py-[20px] mt-[25px] lg:mt-[40px] hover:bg-[#404040] hover:border-[#404040]">
                            Work With Us 
                            <span className="ml-[10px]">
                                <Image src={BtnArrow} alt="arrow" />
                            </span>
                        </button>
                    </div>
                    <div className="w-full lg:w-[50%] pt-[45px]">
                        <div className="w-full lg:max-w-[520px] ml-auto">
                            <AgencyAccordian />
                        </div>
                    </div>
                </div>
            </div>
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}