"use client"

import React, { useState } from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import { BgGrain, BtnArrow, sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd, CtaSmall, abtBnnr, abtWwa, Servicebg, consultationStrategyDevelopmentop, ServiceIconone, ServiceIconthree, ServiceIcontwo, WebsAlyticsNitoring,abtWwatwo } from '@/app/assets';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';
import Link from 'next/link';
import WorkWthUsModal from "../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal"
import Companies from '../Component/Widgets/Homepagegreen/Companies';
const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Layouts>
            <title>About Us - Boosted360</title>
            <meta name="title" content='About Us - Boosted360' />
            <meta name="description" content="Learn more about Boosted360! We are a results-driven digital marketing agency committed to helping businesses grow. Discover our story today!" />


            <div className='py-6 lg:py-12 bg-center bg-no-repeat' style={{ backgroundImage: `url(${BgGrain.src})`, }}>
                <div className='container'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5'>
                        <div className='sm:order-none order-2'>
                            <p className='text-xl font-bold text-[#5db947]'>
                                About Us
                            </p>
                            <h1 className='text-3xl lg:text-[40px] pt-2 xl:text-[50px] font-bold text-black leading-none'>
                                Drive Your Success with Innovative Digital Marketing Solutions
                            </h1>
                            <p className='text-lg lg:text-xl font-medium text-black leading-[1.6] pt-5'>
                                Let us handle your digital presence - with creative campaigns, effective strategies, Boosted visibility, and seamless results.
                            </p>
                            <button onClick={openModal} className="ease_in_out box-shadows bg-[#2a2a2a] text-sm font-bold text-white uppercase inline-flex border border-solid border-[#3e3e3e] px-[25px] md:px-[45px] py-[15px] md:py-[15px] mt-5 lg:mt-10 hover:bg-[#404040] hover:border-[#404040]">
                                Work With Us
                                <span className="ml-[10px]">
                                    <Image src={BtnArrow} alt="arrow" />
                                </span>
                            </button>

                        </div>
                        <div className='relative before:w-full before:block lg:pl-10 before:pt-[62.5%]'>
                            <Image src={abtBnnr} alt="arrow" width="538" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="sm:py-[40px] py-8 lg:mt-[50px]">
                    <div className='bg-white md:p-10 p-4 rounded-lg flex flex-col-reverse sm:grid sm:grid-cols-2 gap-y-6 '>
                        <div className='border-r flex-1 pr-2 sm:mt-0 mt-5'>
                            <div>
                                <h2 className="text-[30px] lg:text-[50px] xl:text-[55px] font-bold pb-2">
                                    Who We Are
                                </h2>
                            </div>
                            <p className="text-[15px] lg:text-[18px] px-[10px] m-auto leading-[24px] font-light">
                                We are a team of dynamic digital marketers and creative problem-solvers, specializing in data-driven strategies that fuel your brand&#39;s growth. With a deep understanding of the latest trends in SEO, content marketing, and paid media, we deliver measurable results that directly impact your business performance. Our approach is rooted in delivering user-centric, ROI-focused solutions that are tailored to each client&#39;s unique needs.
                            </p>
                            <p className="text-[15px] lg:text-[18px] px-[10px] m-auto leading-[24px] font-light">
                                Our goal is simple: to empower businesses by offering high-performing digital marketing strategies that connect with your audience, grow your online presence, and increase conversions. We thrive on innovation, and we&#39;re passionate about crafting bespoke strategies that stand out in today&#39;s competitive digital world.
                            </p>
                        </div>
                        <div className='relative before:w-full before:block lg:pr-10 before:pt-[62.5%] sm:ml-8 ml-0'>
                            <Image src={abtWwa} alt="arrow" width="538" height="351" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' />
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-2 grid-cols-1 lg:pt-24 pt-10 gap-5'>

                        <div className='relative before:w-full before:block lg:pr-10 before:pt-[62.5%]'>
                            <Image src={abtWwatwo} alt="arrow" width="538" height="351" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' />
                        </div>

                        <div>
                            <div className='pb-6'>
                                <span className='flex items-center'>
                                    <Image src={CtaSmall} alt='cta-small' />
                                    <span className='pl-[18px] text-xl font-bold'>Proven Success Across Industries:  </span>
                                </span>
                                <p className='pl-[30px] pt-1'>
                                    We&#39;ve successfully worked across various industries, tailoring strategies that drive results for businesses of all sizes.
                                </p>
                            </div>

                            <div className='pb-6'>
                                <span className='flex items-center'>
                                    <Image src={CtaSmall} alt='cta-small' />
                                    <span className='pl-[18px] text-xl font-bold'>Data-Driven Strategy:  </span>
                                </span>
                                <p className='pl-[30px] pt-1'>
                                    Our decisions are based on data, ensuring every action we take is backed by insights and real-world results.
                                </p>
                            </div>

                            <div className='pb-6'>
                                <span className='flex items-center'>
                                    <Image src={CtaSmall} alt='cta-small' />
                                    <span className='pl-[18px] text-xl font-bold'>Tailored Solutions:  </span>
                                </span>
                                <p className='pl-[30px] pt-1'>
                                    We understand that each business is different, which is why we tailor our strategies to suit your goals and audience.
                                </p>
                            </div>


                            <div className='pb-6'>
                                <span className='flex items-center'>
                                    <Image src={CtaSmall} alt='cta-small' />
                                    <span className='pl-[18px] text-xl font-bold'>Commitment to Excellence:  </span>
                                </span>
                                <p className='pl-[30px] pt-1'>
                                    We&#39;re committed to achieving the best results for our clients by providing industry-leading marketing strategies and ongoing optimization.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="bg-cover bg-center rounded-[10px] py-[40px] md:mt-[85px] mt-5 sm:mt-12" style={{ backgroundImage: `url(${Servicebg.src})`, }}>
                    <div>
                        <h2 className="text-[30px] lg:text-[50px] xl:text-[55px] font-bold text-white leading-[1.25] text-center">
                            Our Approach
                        </h2>
                        <p className="text-[14px] lg:text-[16px] px-[10px] m-auto text-[#bcbcbc] leading-[1.6] text-center max-w-[1113px]">
                            Digital marketing is more than just a service to us - it&#39;s our passion. Our aim is to help businesses scale by using the most up-to-date, impactful strategies that guarantee the highest return on investment.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center pt-[20px] lg:pt-[30px] px-[10px] md:px-[30px] lg:px-[40px]">
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={ServiceIconone} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">SEO & Content Marketing</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px]">Our experienced SEO and content team will craft a strategy designed to drive conversions, increase organic traffic, and enhance brand visibility across search engines.</p>
                                {/* <Link href="#" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link> */}
                            </div>
                        </div>
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={ServiceIcontwo} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">PPC Advertising & Paid Media</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px]">From Google Ads to social media campaigns, we run highly-targeted paid media campaigns that maximize your budget and drive traffic where it counts</p>
                                {/* <Link href="#" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link> */}
                            </div>
                        </div>
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={ServiceIconthree} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">Social Media Marketing & Strategy</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px]">We build strategic social media campaigns to engage your audience, strengthen brand loyalty, and increase conversions across multiple platforms such as Facebook, Instagram, LinkedIn, and others.</p>
                                {/* <Link href="#" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link> */}
                            </div>
                        </div>
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={WebsAlyticsNitoring} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto object-contain" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">Website Analytics & Performance Monitoring</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px]">Our team constantly monitors your website&#39;s performance, optimizing for conversions and tracking KPIs to ensure your marketing strategies are effective.</p>
                                {/* <Link href="#" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link> */}
                            </div>
                        </div>
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={consultationStrategyDevelopmentop} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto object-contain" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">Consultation & Strategy Development</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px]">We work closely with you to understand your objectives and provide clear, actionable digital marketing strategies that will elevate your business.</p>
                                {/* <Link href="#" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link> */}
                            </div>
                        </div>

                    </div>
                    <div className="text-center">
                        <button onClick={openModal} className="ease_in_out bg-[#5db947] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#5db947] px-[30px] md:px-[55px] py-[15px] md:py-[20px] mt-[40px] hover:bg-[#5db947]">
                            Work With Us
                            <span className="ml-[10px]">
                                <Image src={BtnArrow} alt="arrow" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-3 text-center items-center pb-10 pt-5'>
                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            810%
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Growth in organic blog sessions
                        </p>
                    </div>

                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            400X
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Blog-attributed product signups
                        </p>
                    </div>

                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            4M
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Blog-attributed ARR (yes, million)
                        </p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="pb-[20px] lg:pb-[30px] pt-[20px] lg:pt-[80px]">

                    <h2 className="lg:text-5xl md:text-4xl text-3xl capitalize font-light text-neutral-800 w-full text-center">
                        How We Work
                    </h2>

                    <p className='text-xl pt-4 font-light max-w-3xl mx-auto text-center'>
                        Our process is built on research and strategy. We start by understanding your business, audience, and competitors, then create a tailored plan to give you a competitive edge.
                    </p>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 gap-3 pt-5 lg:pb-20 md:pb-16 pb-10'>
                    <div className='bg-white border py-5 px-5'>
                        <p className='text-neutral-300 text-4xl font-light'>
                            1
                        </p>
                        <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
                            Research & Strategy Development
                        </h2>
                        <p className='text-neutral-700 font-light text-base pt-5'>
                            We assess your digital presence, analyze your audience and competitors, and craft a custom strategy to meet your objectives.
                        </p>
                    </div>

                    <div className='bg-white border py-5 px-5'>
                        <p className='text-neutral-300 text-4xl font-light'>
                            2
                        </p>
                        <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
                            Execution & Optimization
                        </h2>
                        <p className='text-neutral-700 font-light text-base pt-5'>
                            We implement the strategy with precision, using top tools and tactics to ensure every campaign drives results.
                        </p>
                    </div>

                    <div className='bg-white border py-5 px-5'>
                        <p className='text-neutral-300 text-4xl font-light'>
                            3
                        </p>
                        <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
                            Analysis & Reporting
                        </h2>
                        <p className='text-neutral-700 font-light text-base pt-5'>
                            We track campaign performance and provide detailed reports with actionable insights to continuously refine and improve.
                        </p>
                    </div>

                    <div className='bg-white border py-5 px-5'>
                        <p className='text-neutral-300 text-4xl font-light'>
                            4
                        </p>
                        <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
                            Continuous Improvement
                        </h2>
                        <p className='text-neutral-700 font-light text-base pt-5'>
                            We proactively identify opportunities to adjust strategies and optimize for long-term growth.
                        </p>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="bg-cover bg-center border-t border-neutral-200 md:py-[60px] pb-10 pt-10 mt-0 lg:mb-[40px]">
                    {/* <div>
                        <h2 className="text-[16px] lg:text-[20px] xl:text-[25px] font-semibold text-neutral-800 leading-[1.25] text-center">
                            Companies We&apos;ve Helped Grow
                        </h2>

                    </div>
                    <ul className="flex flex-wrap items-center justify-center pt-[20px] lg:pt-[30px]">
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogoOne} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogoThree} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogoTwo} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogoTdffe} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogolop} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogoafr} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogondg} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogocxml} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogorei} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogovbg} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogojjjd} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogomasla} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogodff} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                        <li className="p-4 m-1 bg-white">
                            <Image src={sliderInLogonnjdvd} alt="logo" className="w-[100px] object-contain grayscale" />
                        </li>
                    </ul> */}
                    <Companies />
                </div>
            </div>

            <Growing />
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
        </Layouts>
    );
};

export default Page;
