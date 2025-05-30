import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebookblueprint,Googleanalytics,Googlepartner,Microsoftpartner } from "../../../assets/index"

export default function OurCreds()  {
    return  (
        <div className="pt-[10px] md:pt-[48px] pb-[20px] md:pb-[40px] bg-[#f7f7f7]">
            <div className="container">
                <h3 className="text-center text-[24px] lg:text-[30px] leading-[1.54] font-bold text-black">Our Creds</h3>
            </div>
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 pt-[40px]">
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Facebookblueprint} alt="logo" className="ease_in_out max-w-[100px] lg:max-w-[140px] max-h-[130px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Googleanalytics} alt="logo" className="ease_in_out max-w-[100px] lg:max-w-[140px] max-h-[130px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Googlepartner} alt="logo" className="ease_in_out max-w-[100px] lg:max-w-[140px] max-h-[130px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Microsoftpartner} alt="logo" className="ease_in_out max-w-[100px] lg:max-w-[140px] max-h-[130px] image-grayscale hover:grayscale-0" />
                    </li>
                </div>
            </div>
        </div>
    )
}