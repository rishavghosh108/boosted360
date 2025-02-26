"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SGTheQuick,SGElevateYour,SGOurpSEO } from "../../../assets/index"

export default function ExploreMore()  {

    return  (
        <div className="container">
            <div className="bg-[#fafafa] py-0 md:py-[20px] lg:py-[80px]">
                <h2 className="text-[30px] md:text-[34px] lg:text-[60px] text-black font-medium mb-[26px] lg:mb-[48px] text-center">Explore More on This Topic</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-[10px]">
                        <Link href="#" className="flex flex-col h-full relative rounded-t-[15px] bg-white box-shadow-2 rounded-b-[15px]">
                            <div className="blog_image relative rounded-t-[15px] overflow-hidden">
                                <Image src={SGTheQuick} alt="image" />
                            </div>
                            <div className="p-[20px] lg:p-[35px] pb-0 md:pb-[60px] lg:pb-[90px]">
                                <h3 className="text-[20px] lg:text-[22px] text-black font-bold leading-[1.25] text-center">The Quick Guide to Enterprise SaaS SEO</h3>
                                <p className="text-[15px] lg:text-[16px] text-[#666] leading-[1.5] font-medium text-center py-[15px] lg:py-[20px]">With thousands of pages to manage, SEO for enterprise SaaS often seems time-consuming and complicated. But its not the case. Think of enterprise SaaS SEO like building a house: It…</p>
                                <div className="text-[16px] lg:text-[18px] text-black leading-[40px] lg:leading-[45px] relative md:absolute bottom-[25px] left-0 right-0 m-auto border-[3px] border-solid border-[#cfcfcf] rounded-full px-[45px] lg:px-[65px] w-fit ease_in_out hover:border-[#5db947] mt-[36px] md:mt-0">Full Article</div>
                            </div>
                        </Link>
                    </div>
                    <div className="p-[10px]">
                        <Link href="#" className="flex flex-col h-full relative rounded-t-[15px] bg-white box-shadow-2 rounded-b-[15px]">
                            <div className="blog_image relative rounded-t-[15px] overflow-hidden">
                                <Image src={SGElevateYour} alt="image" />
                            </div>
                            <div className="p-[20px] lg:p-[35px] pb-0 md:pb-[60px] lg:pb-[90px]">
                                <h3 className="text-[20px] lg:text-[22px] text-black font-bold leading-[1.25] text-center">The Quick Guide to Enterprise SaaS SEO</h3>
                                <p className="text-[15px] lg:text-[16px] text-[#666] leading-[1.5] font-medium text-center py-[15px] lg:py-[20px]">With thousands of pages to manage, SEO for enterprise SaaS often seems time-consuming and complicated. But its not the case. Think of enterprise SaaS SEO like building a house: It…</p>
                                <div className="text-[16px] lg:text-[18px] text-black leading-[40px] lg:leading-[45px] relative md:absolute bottom-[25px] left-0 right-0 m-auto border-[3px] border-solid border-[#cfcfcf] rounded-full px-[45px] lg:px-[65px] w-fit ease_in_out hover:border-[#5db947] mt-[36px] md:mt-0">Full Article</div>
                            </div>
                        </Link>
                    </div>
                    <div className="p-[10px]">
                        <Link href="#" className="flex flex-col h-full relative rounded-t-[15px] rounded-b-[15px] bg-white box-shadow-2">
                            <div className="blog_image relative rounded-t-[15px] overflow-hidden">
                                <Image src={SGOurpSEO} alt="image" />
                            </div>
                            <div className="p-[20px] lg:p-[35px] pb-0 md:pb-[60px] lg:pb-[90px]">
                                <h3 className="text-[20px] lg:text-[22px] text-black font-bold leading-[1.25] text-center">The Quick Guide to Enterprise SaaS SEO</h3>
                                <p className="text-[15px] lg:text-[16px] text-[#666] leading-[1.5] font-medium text-center py-[15px] lg:py-[20px]">With thousands of pages to manage, SEO for enterprise SaaS often seems time-consuming and complicated. But its not the case. Think of enterprise SaaS SEO like building a house: It…</p>
                                <div className="text-[16px] lg:text-[18px] text-black leading-[40px] lg:leading-[45px] relative md:absolute bottom-[25px] left-0 right-0 m-auto border-[3px] border-solid border-[#cfcfcf] rounded-full px-[45px] lg:px-[65px] w-fit ease_in_out hover:border-[#5db947] mt-[36px] md:mt-0">Full Article</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link href="/" className="ease_in_out box-shadow-1 bg-[#5db947] text-[14px] md:text-[20px] font-bold text-white flex w-fit border border-solid border-[#5db947] px-[24px] md:px-[31px] py-[10px] md:py-[14px] m-auto mt-[30px] md:mt-[50px] rounded-[28px]" >
                    Visit our Blog
                </Link>
            </div>
        </div>
    )
}