import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Numbers()  {

    return  (
        <div className="container">
            <div className="flex justify-center flex-wrap pt-[40px] md:pt-[64px]">
                <div className="px-[8px] md:px-[15px] pb-[15px] md:pb-0">
                    <h2 className="text-[36px] md:text-[46px] lg:text-[76px] text-[#5db947] font-medium mb-[10px] text-center">+268%</h2>
                    <p className="text-[20px] md:text-[24px] lg:text-[32px] text-black text-center">clicks</p>
                </div>
                <div className="px-[8px] md:px-[15px] pb-[15px] md:pb-0">
                    <h2 className="text-[36px] md:text-[46px] lg:text-[76px] text-[#5db947] font-medium mb-[10px] text-center">+0.6%</h2>
                    <p className="text-[20px] md:text-[24px] lg:text-[32px] text-black text-center">CTR improvement</p>
                </div>
                <div className="px-[8px] md:px-[15px] pb-[15px] md:pb-0">
                    <h2 className="text-[36px] md:text-[46px] lg:text-[76px] text-[#5db947] font-medium mb-[10px] text-center">+11.7%</h2>
                    <p className="text-[20px] md:text-[24px] lg:text-[32px] text-black text-center">position improvement</p>
                </div>
            </div>
        </div>
    )
}