import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RightImg } from "../../../assets/index"

export default function FeaturedCase()  {

    return  (
        <div className="container">
            <div className="pt-[60px] md:pt-[90px]">
                <h3 className="text-[26px] md:text-[30px] lg:text-[36px] text-[#5db947] font-bold mb-[10px] md:mb-[20px] text-center leading-[120%]">Featured Case Study: Winedeals</h3>
                <h4 className="text-[30px] md:text-[32px] lg:text-[48px] text-black font-bold mb-[20px] text-center leading-[120%]">Enhancing Blog Performance by 268% with AI</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-[40px] md:pt-[64px]">
                <div>
                    <h2 className="text-[20px] lg:text-[30px] font-bold text-black mb-[20px] lg:mb-[30px]">
                        Objectives
                    </h2>
                    <p className="max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        The primary goal was to enhance blog performance by focusing on articles with low click-through rates (CTR), aiming to increase visibility and engagement.
                    </p>
                    <h2 className="text-[20px] lg:text-[30px] font-bold text-black my-[20px] lg:my-[30px]">
                        Challenges
                    </h2>
                    <p className="max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        Winedeals faced several challenges including fierce competition, limited initial funding, a steep digital marketing learning curve, high customer acquisition costs, difficulties in building consumer trust online, and the need for differentiation in a saturated market.
                    </p>
                    <h2 className="text-[20px] lg:text-[30px] font-bold text-black my-[20px] lg:my-[30px]">
                        Process
                    </h2>
                    <p className="max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        The process involved using Google Search Console data to identify blogs with low CTRs as candidates for AI-assisted content optimization. ChatGPT, coupled with specifically tailored client prompts, was used to build out SEO-optimized content, targeting improvements in blog performance.
                    </p>
                </div>
                <div className="py-[30px] md:py-0">
                    <Image src={RightImg} alt="RightImg" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-[40px] md:pt-[80px]">
                <div>
                    <h2 className="text-[20px] lg:text-[30px] font-bold text-black mb-[20px] lg:mb-[30px]">
                        Results
                    </h2>
                    <p className="max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        Within six months, 23 blogs were optimized leading to significant improvements: a 268% increase in clicks, average CTR improvement from 0.48% to 1.08%, and an average position improvement of 11.7%, moving up 4 positions in search results.
                    </p>
                </div>
                <div>
                    <h2 className="text-[20px] lg:text-[30px] font-bold text-black my-[20px] lg:my-[30px]">
                        Learnings
                    </h2>
                    <p className="max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        The initiative revealed not all pages improved; some performed worse, potentially due to seasonality and different data comparison timeframes. The key takeaway is the vast opportunity in optimizing low CTR pages, where AI-assisted content enhancements can expedite optimizations, enrich user content, and boost website traffic.
                    </p>
                </div>
            </div>
        </div>
    )
}