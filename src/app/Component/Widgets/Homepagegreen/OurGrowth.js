"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { BannerBackgroundGreen, RadarLineGlow } from "../../../assets/index";

export default function OurGrowth() {
    const [activeTab, setActiveTab] = useState(1);

    const steps = [
        { id: 1, time: "1-2 hours", title: "Friendly Chat", desc: "We&apos;ll start by talking on the phone to get a sense of what your challenges are right now, what you&apos;ve tried so far, and if we&apos;re the right full-service digital marketing agency for you. No hard selling. Promise.", className: "group relative pl-10 lg:pl-0 cursor-pointer lg:text-center mx-auto lg:max-w-[364px]" },
        { id: 5, time: "Learn and adjust", title: "Continuous Optimization", desc: "Our online marketing team continually monitors your results at every step of the process, then leverages that to get you even more wins.", className: "lg:text-right relative pl-10 lg:pl-0 mt-7 lg:mt-0 lg:absolute lg:top-[270px] cursor-pointer group xl:-left-[330px] lg:-left-[278px] xl:max-w-[320px] lg:max-w-[268px]" },
        { id: 2, time: "1-2 weeks", title: "Opportunities Analysis", desc: "If we think we can help you, we&apos;ll put together Marketing Insights specifically for your company. Running your business through our experienced digital marketing agency analysis, we&apos;ll create an execution plan which maximizes all the opportunities we see for growth and specific KPIs.", className: "text-left mt-7 relative pl-10 lg:pl-0 lg:mt-0 lg:absolute lg:top-[270px] cursor-pointer group xl:-right-[330px] lg:-right-[260px] xl:max-w-[320px] lg:max-w-[250px]" },
        { id: 4, time: "Up to 3 months", title: "Full Rollout", desc: "We&apos;ll roll out our full execution plan, focusing on timely, tactical implementation, and setting up scalable growth opportunities. This frees you up to work on other high impact areas of your business.", className: "lg:text-right mt-7 relative pl-10 lg:pl-0 lg:mt-0 lg:absolute lg:top-[480px] cursor-pointer group xl:-left-[310px] lg:-left-[270px] xl:max-w-[320px] lg:max-w-[280px]" },
        { id: 3, time: "2-4 weeks", title: "Strategy Discussion", desc: "We&apos;ll get you as many quick and early wins as possible, while setting up specific, long-term, scalable digital marketing goals.", className: "text-left mt-7 relative pl-10 lg:pl-0 lg:mt-0 lg:absolute lg:top-[480px] cursor-pointer group xl:-right-[310px] lg:-right-[275px] xl:max-w-[320px] lg:max-w-[270px]" }
    ];

    return (
        <div className="container">
            <div className="bg-cover bg-center rounded-[10px] px-[30px] lg:px-[60px] pt-[30px] lg:pt-[60px] mt-[40px] lg:mt-[70px] mb-[40px] lg:mb-[50px]" style={{ backgroundImage: `url(${BannerBackgroundGreen.src})` }}>
                <div className="pb-[30px] lg:pb-[70px]">
                    <h2 className='text-[30px] lg:text-[56px] lg:text-center xl:text-[65px] font-light text-white'>
                        Our Growth <b className='font-bold'>Methodology</b>
                    </h2>

                    <div className='relative pt-[20px] lg:w-[400px] mx-auto lg:pt-[40px] text-white hidden lg:block'>
                        {steps.map((item) => (
                            <div key={item.id} onMouseEnter={() => setActiveTab(item.id)} className={item.className}>
                                <div className={`w-6 h-6 z-10 absolute top-1 left-0 text-sm text-center flex lg:hidden justify-center items-center font-bold rounded-full bg-[#FBFF00] text-neutral-700`}>
                                    {item.id}
                                </div>
                                <div className="text-xs">{item.time}</div>
                                <div className="text-lg font-semibold">{item.title}</div>
                                <div className={`${activeTab == item.id ? 'opacity-100' : 'lg:opacity-0 group-hover:opacity-100'} text-sm transition-all`}>
                                    {item.desc}
                                </div>
                            </div>
                        ))}

                        <div className='w-[400px] h-[400px] lg:flex hidden justify-center items-center relative mt-5 mx-auto border border-white/60 rounded-full'>
                            {steps.map((item, index) => (
                                <div key={item.id} onMouseEnter={() => setActiveTab(item.id)}
                                    className={`cursor-pointer w-8 h-8 z-10 absolute text-center flex justify-center items-center font-bold rounded-full ${activeTab == item.id ? 'bg-[#FBFF00] text-[#5db947]' : 'text-[#5db947] bg-white'}`}
                                    style={{
                                        top: index === 0 ? "-16px" : index === 1 ? "87px" : index === 2 ? "87px" : index === 3 ? "300px" : "300px",
                                        left: index === 0 ? "50%" : index === 1 ? "12px" : index === 2 ? "auto" : index === 3 ? "20px" : "auto",
                                        right: index === 2 ? "12px" : index === 4 ? "20px" : "auto",
                                        transform: index === 0 ? "translateX(-50%)" : "none"
                                    }}
                                >
                                    {item.id}
                                </div>
                            ))}

                            <div className='w-[330px] z-10 h-[330px] flex justify-center items-center relative mx-auto border border-white/40 rounded-full'>
                                <div className='w-[260px] h-[260px] flex justify-center items-center relative mx-auto border border-white/30 rounded-full'>
                                    <div className='w-[190px] h-[190px] flex justify-center items-center relative mx-auto border border-white/20 rounded-full'>
                                        <div className='w-[100px] h-[100px] flex justify-center bg-white items-center relative mx-auto border rounded-full text-[#5db947] font-bold text-2xl'>
                                            360
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${activeTab == 2 ? 'rotate-[60deg]' : activeTab == 3 ? 'rotate-[130deg]' : activeTab == 4 ? 'rotate-[235deg]' : activeTab == 5 ? 'rotate-[300deg]' : 'rotate-0'} absolute w-full h-full transition-all`}>
                                <Image src={RadarLineGlow} alt="Radar Effect" />
                            </div>
                        </div>

                    </div>
                    <div className="relative pt-[20px] lg:w-[400px] mx-auto lg:pt-[40px] text-white flex flex-col lg:hidden">
                        {steps
                            .sort((a, b) => a.id - b.id)
                            .map((item) => (
                                <div key={item.id} onMouseEnter={() => setActiveTab(item.id)} 
                                    className={`${item.className} lg:static`}>
                                    <div className={`w-6 h-6 z-10 absolute top-1 left-0 text-sm text-center flex lg:hidden justify-center items-center font-bold rounded-full bg-[#FBFF00] text-neutral-700`}>
                                        {item.id}
                                    </div>
                                    <div className="text-xs">{item.time}</div>
                                    <div className="text-lg font-semibold">{item.title}</div>
                                    <div className={`${activeTab == item.id ? 'opacity-100' : 'lg:opacity-0 group-hover:opacity-100'} text-sm transition-all`}>
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
            </div>
        </div>
    );
}