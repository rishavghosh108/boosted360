import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fintuit,Nasdaq,Amazons,Ubers,Khanacademy,Semrush,Salesforces,Turbotax, } from "../../../assets/index"

export default function WeHave()  {
    return  (
        <div className="logos_background pt-[50px] pb-[40px] relative">
            <div className="we_icon"></div>
            <div className="container">
                <h3 className="text-center text-[18px] md:text-[20px] lg:text-[30px] leading-[1.54] font-bold text-black">We Have Driven Impact At</h3>
            </div>
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-[40px]">
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Fintuit} alt="logo" className="ease_in_out max-w-[100px] md:max-w-[150px] lg:max-w-[200px] max-h-[116px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Nasdaq} alt="logo" className="ease_in_out max-w-[100px]  md:max-w-[150px] lg:max-w-[200px] max-h-[116px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Amazons} alt="logo" className="ease_in_out max-w-[100px] md:max-w-[150px] lg:max-w-[200px] max-h-[116px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Ubers} alt="logo" className="ease_in_out max-w-[100px] md:max-w-[150px] lg:max-w-[200px] max-h-[116px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Khanacademy} alt="logo" className="ease_in_out max-w-[100px] md:max-w-[150px] lg:max-w-[200px] max-h-[116px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Semrush} alt="logo" className="ease_in_out max-w-[100px] md:max-w-[150px] lg:max-w-[200px] max-h-[116px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Salesforces} alt="logo" className="ease_in_out max-w-[100px] md:max-w-[150px] lg:max-w-[200px] max-h-[116px] image-grayscale hover:grayscale-0" />
                    </li>
                    <li className="flex justify-center items-center mb-[25px]">
                        <Image src={Turbotax} alt="logo" className="ease_in_out max-w-[100px] md:max-w-[150px] lg:max-w-[200px] max-h-[116px] image-grayscale hover:grayscale-0" />
                    </li>
                </div>
            </div>
        </div>
    )
}