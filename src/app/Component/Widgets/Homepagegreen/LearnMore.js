"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WinedealsBg, ProliteLogo1, DownArrow, BgGrainOpacity, BtnArrow, CtaSmall, work1, work4, work3, Companie7, sliderInLogonncsmig, work2, sliderInLogonncssada, Companies5, work6, work5, Companies13, Companies21 } from "../../../assets/index";

export default function LearnMore() {

    const [activeTab, setActiveTab] = useState('Featured');

    const HandelTab = (val) => {
        setActiveTab(val);
    };

    return (
        <div className="container">
            <div className="pb-[20px] lg:pb-[30px] pt-[60px] lg:pt-[110px]">
                <p className="text-[#5db947] text-center">
                    Case Studies
                </p>
                <h2 className="text-[30px] lg:text-[50px] xl:text-[60px] font-light text-neutral-800 leading-[1] w-full text-center">
                    Proven results across diverse industries worldwide
                </h2>

                <div className="flex justify-center pt-4">
                    {/* <button onClick={() => HandelTab('Featured')} className={` ${activeTab == 'Featured' ? 'text-white bg-[#5db947] border-[#5db947]' : 'border-neutral-300 bg-transparent text-neutral-800'} border sm:text-sm text-xs mx-0.5 font-medium transition-all rounded-3xl inline-block sm:px-6 px-4 sm:py-2 py-1.5 hover:text-white hover:bg-[#5db947] hover:border-[#5db947]`}>
                        Featured
                    </button>
                    <button onClick={() => HandelTab('SEO')} className={` ${activeTab == 'SEO' ? 'text-white bg-[#5db947] border-[#5db947]' : 'border-neutral-300 bg-transparent text-neutral-800'} border sm:text-sm text-xs mx-0.5 font-medium transition-all rounded-3xl inline-block sm:px-6 px-4 sm:py-2 py-1.5 hover:text-white hover:bg-[#5db947] hover:border-[#5db947]`}>
                        SEO
                    </button>
                    <button onClick={() => HandelTab('Paid Media')} className={` ${activeTab == 'Paid Media' ? 'text-white bg-[#5db947] border-[#5db947]' : 'border-neutral-300 bg-transparent text-neutral-800'} border font-medium sm:text-sm text-xs mx-0.5 transition-all rounded-3xl inline-block sm:px-6 px-4 sm:py-2 py-1.5 hover:text-white hover:bg-[#5db947] hover:border-[#5db947]`}>
                        Paid Media
                    </button> */}
                    {/* <button onClick={() => HandelTab('CRO')} className={` ${activeTab == 'CRO' ? 'text-white bg-[#5db947] border-[#5db947]' : 'border-neutral-300 bg-transparent text-neutral-800'} border sm:text-sm text-xs mx-0.5 font-medium transition-all rounded-3xl inline-block sm:px-6 px-4 sm:py-2 py-1.5 hover:text-white hover:bg-[#5db947] hover:border-[#5db947]`}>
                        Featured
                    </button> */}
                    <p className={`border sm:text-sm text-xs mx-0.5 font-medium transition-all rounded-3xl inline-block sm:px-6 px-4 sm:py-2 py-1.5`}>
                        Featured
                    </p>

                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <Link href="/case-studies/case-studies-details">
                    <div className="bg-neutral-950 text-white flex flex-col justify-between lg:p-10 p-6 rounded-xl relative lg:h-[340px] h-[250px] overflow-hidden">
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    <span>1.8k/</span><sub className="text-sm pt-[4px]">month</sub>                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Page views
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    66%
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Lead generation
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    10X
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Growth rate
                                </p>
                            </div>
                        </div>
                        {/* <div className="relative z-10">
                            <Image src={sliderInLogonncssada} className="lg:max-w-40 max-w-28 brightness-200" alt='cta-small' />
                        </div> */}
                        <Image className="absolute -rotate-12 lg:top-[100px] lg:left-[250px] top-[50px] left-[100px] lg:w-[500px] w-[300px] rounded" src={work1} alt="Image 1" />

                    </div>
                </Link>
                <Link href="/case-studies/case-studies-details">
                    <div className="bg-neutral-500 text-white flex flex-col justify-between lg:p-10 p-6 rounded-xl relative lg:h-[340px] h-[250px] overflow-hidden">
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    <span>3.2k/</span><sub className="text-sm pt-[4px]">month</sub>
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Page views
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    80%
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Lead generation
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    10X
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Growth rate
                                </p>
                            </div>
                        </div>
                        {/* <div className="relative z-10">
                            <Image src={Companie7} className="lg:max-w-40 max-w-28 brightness-200" alt='cta-small' />   
                        </div> */}
                        <Image className="absolute -rotate-12 lg:top-[100px] lg:left-[250px] top-[50px] left-[100px] lg:w-[500px] w-[300px] rounded" src={work3} alt="Image 1" />

                    </div>
                </Link>
                <Link href="/case-studies/case-studies-details">
                    <div className="bg-[#459231] text-white flex flex-col justify-between lg:p-10 p-6 rounded-xl relative lg:h-[340px] h-[250px] overflow-hidden">
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    <span>5k/</span><sub className="text-sm pt-[4px]">month</sub>
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Page views
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    50%
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Lead generation
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    8X
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Growth rate
                                </p>
                            </div>
                        </div>
                        {/* <div className="relative z-10">
                            <Image src={sliderInLogonncsmig} style={{ filter: 'invert(1) brightness(2)' }} className="lg:max-w-40 max-w-28 brightness-200" alt='cta-small' />
                        </div> */}
                        <Image className="absolute -rotate-12 lg:top-[100px] lg:left-[250px] top-[50px] left-[100px] lg:w-[500px] w-[300px] rounded" src={work2} alt="Image 1" />

                    </div>
                </Link>
                <Link href="/case-studies/case-studies-details">
                    <div className="bg-purple-800 text-white flex flex-col justify-between lg:p-10 p-6 rounded-xl relative lg:h-[340px] h-[250px] overflow-hidden">
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    <span>2.5k/</span><sub className="text-sm pt-[4px]">month</sub>
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Page views
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    75%
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Lead generation
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="text-[30px] lg:text-4xl text-2xl font-bold flex items-center">
                                    8X
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Growth rate
                                </p>
                            </div>
                        </div>
                        {/* <div className="relative z-10">
                            <Image src={Companies5} className="lg:max-w-40 max-w-28 brightness-200" alt='cta-small' />
                        </div> */}
                        <Image className="absolute -rotate-12 lg:top-[100px] lg:left-[250px] top-[50px] left-[100px] lg:w-[500px] w-[300px] rounded" src={work4} alt="Image 1" />

                    </div>
                </Link>

                {/* <Link href="/case-studies/case-studies-details">
                    <div className="bg-neutral-700 text-white flex flex-col justify-between lg:p-10 p-6 rounded-xl relative lg:h-[340px] h-[250px] overflow-hidden">
                        <div className="flex relative z-10">
                            <div className="pr-5 w-36">
                                <h2 className="md:text-4xl text-2xl font-bold">
                                    +17%
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    YoY Conversion Rate
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <Image src={Companies13} className="lg:max-w-40 max-w-28 brightness-200" alt='cta-small' />   
                        </div>
                        <Image className="absolute -rotate-12 lg:top-[100px] lg:left-[250px] top-[50px] left-[100px] lg:w-[500px] w-[300px] rounded" src={work5} alt="Image 1" />
                        
                    </div>
                </Link>
                <Link href="/case-studies/case-studies-details">
                    <div className="bg-teal-700 text-white flex flex-col justify-between lg:p-10 p-6 rounded-xl relative lg:h-[340px] h-[250px] overflow-hidden">
                        <div className="flex relative z-10">
                            <div className="pr-5 w-36">
                                <h2 className="md:text-4xl text-2xl font-bold">
                                    4,212%
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    ROAS
                                </p>
                            </div>
                            <div className="pr-5 w-36">
                                <h2 className="md:text-4xl text-2xl font-bold">
                                    500+
                                </h2>
                                <p className="md:text-sm text-xs text-white">
                                    Email Purchases
                                </p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <Image src={Companies21} className="lg:max-w-40 max-w-28 brightness-200" alt='cta-small' /> 
                        </div>
                        <Image className="absolute -rotate-12 lg:top-[100px] lg:left-[250px] top-[50px] left-[100px] lg:w-[500px] w-[300px] rounded" src={work6} alt="Image 1" />
                        
                    </div>
                </Link> */}
            </div>

            <div className="pt-[27px] text-[20px] leading-[1.6] text-center">
                <Link href="/case-studies" className='mt-[20px] inline-flex border px-5 py-1.5 uppercase items-center text-[15px] font-extrabold text-[#5db947] hover:bg-[#5db947] hover:text-white group'>
                    All Case Studies
                    <span className='ml-[6px]'><Image className="group-hover:filter group-hover:brightness-0 group-hover:invert" src={CtaSmall} alt='cta-small' /></span>
                </Link>
            </div>
        </div>
    )
}