import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CtaSmall } from "../../../assets/index"

export default function WeRank()  {
    return  (
        <div className="container">
            <div className="flex flex-wrap justify-center items-center pt-[60px] lg:pt-[70px]">
                <div className="w-full lg:w-[25%]">
                    <div className="bg-[#5db947] mx-auto flex justify-center lg:text-6xl text-4xl font-semibold items-center text-white lg:w-60 lg:h-60 w-36 h-36 rounded-full">
                        360
                    </div>
                </div>
                <div className="w-full lg:w-[75%] pt-[25px] lg:p-0">
                    <h2 className="text-center lg:text-left text-[30px] lg:text-[50px] xl:text-[60px] font-bold text-black leading-[1]">
                        Let us implement innovative <span className="text-[#5db947]">digital marketing solutions</span> that will help you scale faster and more efficiently.
                    </h2>
                    <p className="text-[20px] xl:text-[25px] mt-[20px] text-center lg:text-left lg:mt-0 text-black leading-[1.4] md:leading-[2.48] block md:flex items-center justify-center lg:justify-start">
                        We&apos;ll bring innovative strategies to help you scale faster.
                        {/* <Link href="#" className="flex justify-center pl-[10px] text-[#5db947] font-bold hover:underline">
                            Work With Us 
                            <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                        </Link> */}
                    </p>
                </div>
            </div>
        </div>
    )
}