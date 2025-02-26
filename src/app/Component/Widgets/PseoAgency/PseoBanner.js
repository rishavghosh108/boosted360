import React from "react";
import Link from "next/link";

export default function PseoBanner()  {

    return  (
        <div className="container">
            <div className="pt-[20px] lg:pt-[30px] pb-[50px] lg:pb-[80px]">
                <h1 className="text-[24px] md:text-[26px] lg:text-[48px] font-bold text-black text-center m-auto max-w-[1190px] leading-[1.21]">pSEO Agency: Transforming Enterprise Online Presence with Automated SEO</h1>
                <Link href="/" className="ease_in_out box-shadow-1 bg-[#5db947] text-[14px] md:text-[20px] font-bold text-white flex w-fit border border-solid border-[#5db947] px-[24px] md:px-[31px] py-[10px] md:py-[14px] m-auto mt-[35px] rounded-[28px]">     
                    Scale SEO Automatically  
                </Link>
            </div>
        </div>
    )
}