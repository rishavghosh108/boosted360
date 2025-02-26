import React from "react";
import Image from "next/image";
import { sliderInLogonnjdvd,sliderInLogovbg,sliderInLogoOne,sliderInLogoTwo,sliderInLogoThree,sliderInLogorei,sliderInLogoTdffe,sliderInLogolop,sliderInLogoafr,sliderInLogondg,sliderInLogojjjd,sliderInLogocxml } from "../../../assets/index"

export default function Logos()  {
    return  (
        <div className="container">
            <ul className="flex flex-wrap lg:flex-nowrap justify-center items-center px-[30px] py-[35px] bg-[#fff] rounded-b-[10px]">
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
            </ul>
        </div>
    )
}