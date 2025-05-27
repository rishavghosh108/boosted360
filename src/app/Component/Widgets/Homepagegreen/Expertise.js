"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { Expriencebg,Exrinceone,Exrincetwo,Exprienedots,Marketingschool } from "../../../assets/index"

export default function Expertise()  {

    var expertiseslider = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        fade: false,
    };

    return  (
        <div className="container">
            <div className="bg-no-repeat  lg:mt-[95px] pt-[40px] pb-[60px] lg:pb-[90px]" style={{ backgroundImage: `url(${Expriencebg.src})`, }}>
                <Slider  {...expertiseslider} className="expertiseslider">
                  <div className='item'>
                    <div className="w-[146px] h-[146px] rounded-full m-auto">
                        <Image src={Exrinceone} alt="profile" className="rounded-full object-cover" />
                    </div>
                    <div className="m-auto mt-[25px]">
                        <Image src={Exprienedots} alt="dots" className="m-auto" />
                    </div>
                    <div className="mt-[12px]">
                        <h3 className="max-w-[740px] text-[18px] md:text-[20px] lg:text-[40px] font-bold text-black pb-[15px] lg:pb-[31px] leading-[1.25] text-center m-auto">
                        &quot;Boosted 360 enables us to increase our impact without increasing our headcount&quot;
                        </h3>
                        <p className="max-w-[800px] text-[18px] lg:text-[25px] text-black leading-[1.44] text-center m-auto">
                            We really lean on Boosted 360 as an extension of our team, which enables us to increase our impact without increasing our headcount.
                        </p>
                    </div>
                    <div className="mt-[20px] lg:mt-[35px] text-center">
                        <h4 className="text-[20px] font-extrabold text-black">Kim Cooper</h4>
                        <p className="text-[16px] font-bold text-black pt-[10px]">Director of Marketing, Amazon Alexa</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className="w-[146px] h-[146px] rounded-full m-auto">
                        <Image src={Exrincetwo} alt="profile" className="rounded-full object-cover" />
                    </div>
                    <div className="m-auto mt-[25px]">
                        <Image src={Exprienedots} alt="dots" className="m-auto" />
                    </div>
                    <div className="mt-[12px]">
                        <h3 className="max-w-[740px] text-[18px] md:text-[20px] lg:text-[40px] font-bold text-black pb-[15px] lg:pb-[31px] leading-[1.25] text-center m-auto">
                            &quot;Boosted 360 has transformed the way we approach our projects.&quot;
                        </h3>
                        <p className="max-w-[800px] text-[18px] lg:text-[25px] text-black leading-[1.44] text-center m-auto">
                        &quot;Their tools and support have been invaluable in helping us streamline operations and achieve better results.&quot;
                        </p>
                    </div>
                    <div className="mt-[20px] lg:mt-[35px] text-center">
                        <h4 className="text-[20px] font-extrabold text-black">John Doe</h4>
                        <p className="text-[16px] font-bold text-black pt-[10px]">CEO, Tech Innovations Inc.</p>
                    </div>
                  </div>
                  <div className='item'>
                    <div className="w-[146px] h-[146px] rounded-full m-auto">
                        <Image src={Marketingschool} alt="profile" className="rounded-full object-cover" />
                    </div>
                    <div className="m-auto mt-[25px]">
                        <Image src={Exprienedots} alt="dots" className="m-auto" />
                    </div>
                    <div className="testimonial mt-[12px]">
                        <h3 className="max-w-[740px] text-[18px] md:text-[20px] lg:text-[40px] font-bold text-black pb-[15px] lg:pb-[31px] leading-[1.25] text-center m-auto">
                        &quot;The best decision we made was partnering with Boosted 360.&quot;
                        </h3>
                        <p className="max-w-[800px] text-[18px] lg:text-[25px] text-black leading-[1.44] text-center m-auto">
                        &quot;Their platform has helped us scale our business efficiently and effectively.&quot;
                        </p>
                        <div className="mt-[20px] lg:mt-[35px] text-center">
                            <h4 className="text-[20px] font-extrabold text-black">Jane Smith</h4>
                            <p className="text-[16px] font-bold text-black pt-[10px]">COO, Global Solutions</p>
                        </div>
                    </div>
                  </div>
                </Slider>
            </div>
        </div>
    )
}