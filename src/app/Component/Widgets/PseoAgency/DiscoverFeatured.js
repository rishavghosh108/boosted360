import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Servicebg,Hosts } from "../../../assets/index"
import { FaStar } from "react-icons/fa";


export default function DiscoverFeatured()  {
    return  (
        <div className="container">
            <div className="pt-[10px] md:pt-[30px]">
                <h2 className="text-[30px] md:text-[40px] lg:text-[50px] text-black font-bold text-center leading-[1.32] max-w-[900px] m-auto">Discover Featured Podcast Episode</h2>
            </div>
            <div className="bg-cover bg-center rounded-[10px] p-[10px] md:p-[20px] lg:p-[50px] mt-[20px] lg:mt-[50px]" style={{ backgroundImage: `url(${Servicebg.src})`, }}>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[38%] bg-[#292929] rounded-[10px] overflow-hidden">
                        <div className="relative">
                            <Image src={Hosts} alt="Servicebg" className="w-full lg:w-auto" />
                        </div>
                        <div className="flex justify-center items-center py-[16px] lg:py-[24px]">
                            <div className="flex items-center profile_star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-[11px] text-white pl-[6px]">4.6 • 1.1K RATINGS</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[62%] pt-[20px] lg:pt-0 pl-0 lg:pl-[60px] pr-0 lg:pr-[50px]">
                        <h3 className="text-[22px] md:text-[26px] lg:text-[34px] text-white font-bold mb-[16px] leading-[31px] md:leading-[41px]">
                            AI is Nothing But Stolen Clicks, Google&apos;s War Against Publishers, Google&apos;s Revenue Playbook & more
                        </h3>
                        <p className="text-[16px] text-white mb-[20px] leading-[30px] md:leading-[32px]">
                            In episode #2678, explore the impact of AI on organic search traffic with Neil Patel, Eric Siu, Kasim Aslam, and Ralph Burns. They delve into the rise of AI-generated content and potential to hijack clicks and divert high-value traffic. While Google&apos;s Search Generative Experience (SGE) aims to provide context and citations, they debate whether unsophisticated buyers will actively seek out the original source. Neil Patel shares examples of Google continually driving more clicks to websites but acknowledges the potential impact of AI on website traffic. Tune in to delve into the intricate relationship between AI, SEO, and website traffic.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}