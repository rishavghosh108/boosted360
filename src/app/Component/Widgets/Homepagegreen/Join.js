import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { BtnArrow,JoinImage } from "../../../assets/index"
import WorkWthUsModal from "../../Widgets/Modal/WorkWithUs/WorkWthUsModal"

export default function Join()  {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return  (
        <>
            <div className="container">
                <div className="flex flex-wrap pt-[60px] lg:pt-[80px] pb-[60px] lg:pb-[90px]" >
                    <div className="w-full lg:w-[50%] pr-4 lg:text-left text-center">
                        <h2 className="text-[30px] lg:text-[56px] xl:text-[65px] font-bold text-black leading-[1.25]">
                            Join Boosted 360
                        </h2>
                        <p className="w-full lg:max-w-[590px] text-[18px] lg:text-[20px] text-black pt-[20px] lg:pt-[35px] leading-[1.6]">
                            Let us show you how our digital marketing agency can transform your business with results-oriented marketing strategies. Reach out to Boosted 360 today for the best digital marketing solutions tailored to your business&apos;s unique needs!
                        </p>
                        <Link href={'/about-us'} className="ease_in_out box-shadows bg-[#2a2a2a] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#3e3e3e] px-[30px] md:px-[55px] py-[15px] md:py-[20px] mt-[25px] lg:mt-[45px] hover:bg-[#404040] hover:border-[#404040]">
                            Learn More Us 
                            <span className="ml-[10px]">
                                <Image src={BtnArrow} alt="arrow" />
                            </span>
                        </Link>
                    </div>
                    <div className="w-full lg:w-[50%] mt-[30px] lg:mt-0">
                        <Image src={JoinImage} alt="arrow" className='block mx-auto'/>
                    </div>
                </div>
            </div>
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}