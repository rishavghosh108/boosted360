import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EricSiu } from "../../../assets/index"

export default function Whois()  {

    return  (
        <div className="container">
            <div className="flex flex-wrap my-[40px] pt-0 md:pt-[35px]">
                <div className="w-full md:w-[35%]">
                    <Image src={EricSiu} alt="EricSiu" />
                </div>
                <div className="w-full md:w-[65%] pt-[30px] md:pt-0 pl-0 md:pl-[20px] lg:pl-[95px]">
                    <h2 className="text-[24px] md:text-[26px] lg:text-[32px] font-bold text-black mb-[20px] md:mb-[30px] lg:mb-[50px]">
                        Who is Eric Siu?
                    </h2>
                    <p className="text-[17px] lg:text-[19px] text-[#666] leading-[140%] mt-[20px] lg:mt-[35px] text-left">
                        Eric Siu is the founder of digital marketing agency Boosted 360. He also hosts two podcasts: Marketing School & Leveling Up, which get over 2.1M monthly downloads combined. Over the years, Eric has helped companies such as Amazon, Uber, Airbnb, and Salesforce acquire more customers.
                    </p>
                    <p className="text-[17px] lg:text-[19px] text-[#666] leading-[140%] mt-[20px] lg:mt-[35px] text-left">
                        Eric hosts a marketing mastermind where 100 of the best in media, marketing, and business get together twice a year in Miami and Beverly Hills. He is also the author of Leveling Up: How to Master the Game of Life.
                    </p>
                    <p className="text-[17px] lg:text-[19px] text-[#666] leading-[140%] mt-[20px] lg:mt-[35px] text-left">
                        He also speaks around the world on marketing, SaaS, and SEO. Eric is also an investor in companies such as Eight Sleep, Levels, Fountain Health, Synthesis, and more. Finally, Eric is a member of communities such as YPO and TED.
                    </p>
                </div>
            </div>
        </div>
    )
}