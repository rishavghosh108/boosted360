"use client"
import { useState } from "react";
import React from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import Link from 'next/link';
import { BtnArrow } from '@/app/assets';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';
import WorkWthUsModal from "../../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal"
import { BgGrain, IserviceBannerOne, Servicebg, ServiceIconone, ServiceIcontwo, ServiceIconthree, downArrow,ServiceIconfour } from "../../assets/index";

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [activeTab, setActiveTab] = useState("tab1");

    const [activeIndex, setActiveIndex] = useState(0);

    // const handleMouseEnter = (index) => {
    //     setActiveIndex(index);
    //     setBackgroundImage(services[index]?.image);
    // };

    const handleMouseLeave = () => {
        setActiveIndex(null);
        setBackgroundImage(services[0]?.image); // Reset to default image when no hover
    };


    // const handleClick = (index) => {
    //     setActiveIndex(activeIndex === index ? null : index);
    // };


    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        setBackgroundImage(services[index]?.image || "");
    };

    // Remove handleMouseLeave so the hover effect persists
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const services = [
        {
            id: 1,
            title: "Comprehensive Expertise",
            description: "With years of experience, we offer in-depth knowledge and insights through detailed website audit services tailored to your unique needs.",
            image: "/images/seo-audit/whychooseus/Comprehensive_Expertise.jpg",
        },
        {
            id: 2,
            title: "Advanced SEO Tools",
            description: "We use cutting-edge tools to perform thorough audits and deliver actionable insights, ensuring optimal SEO performance for your site.",
            image: "/images/seo-audit/whychooseus/Advanced_SEO_Tools.jpg",
        },
        {
            id: 3,
            title: "Tailored Strategies",
            description: "We don’t offer generic audits. Each SEO website audit services are designed specifically for your website, addressing its unique strengths and weaknesses.",
            image: "/images/seo-audit/whychooseus/Tailored_Strategies.jpg",
        },
        {
            id: 4,
            title: "Transparent Reporting",
            description: "Our clear, easy-to-understand SEO audit services’ reports provide actionable insights, allowing you to track the progress of your site’s SEO improvements.",
            image: "/images/seo-audit/whychooseus/Transparent_Reporting.jpg",
        },
    ];


    const [backgroundImage, setBackgroundImage] = useState(services[0]?.image || "");


    return (
        <Layouts>
            <title>On Page SEO Audit Services | Website Audit Services</title>
            <meta name="title" content='On Page SEO Audit Services | Website Audit Services' />
            <meta name="description" content="Improve your site’s SEO with expert audit services! Our on-page SEO audit helps fix errors & maximize traffic. Get your SEO report now!" />


            <div className='pt-6 lg:pt-12 bg-no-repeat' style={{ backgroundImage: `url(${BgGrain.src})`, }}>
                <div className='container'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-start'>
                        <div className="sm:order-none order-2 md:mt-0 mt-5">
                            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-none'>SEO Audit Services: <span className='text-[#5db947]'>Reach Your Website&apos;s Highest Potential</span></h1>
                            <p className='text-lg lg:text-xl font-medium text-black leading-[1.6] pt-5 lg:pt-6'>Our SEO audit services provide comprehensive website analysis to identify opportunities for improvement and boost search engine rankings. Through a detailed SEO website audit, we ensure your site is optimized for maximum visibility, performance, and user experience.</p>
                            <button onClick={openModal} className="ease_in_out box-shadows bg-[#2a2a2a] text-sm font-bold text-white uppercase inline-flex border border-solid border-[#3e3e3e] px-[30px] md:px-[55px] py-[15px] md:py-[20px] my-5 lg:my-8 hover:bg-[#404040] hover:border-[#404040]">
                                Work With Us
                                <span className="ml-[10px]">
                                    <Image src={BtnArrow} alt="arrow" />
                                </span>
                            </button>
                            {/* <div className='grid grid-cols-3 max-w-80 items-center gap-5 pt-5'>
                                <div>
                                    <Image src={'/images/amazon.png'} width={100} height={100} alt="arrow" />
                                </div>
                                <div>
                                    <Image src={'/images/airbnb.png'} width={100} height={100} alt="arrow" />
                                </div>
                                <div>
                                    <Image src={'/images/uber.png'} width={100} height={100} alt="arrow" />
                                </div>
                            </div> */}
                        </div>
                        <div className='relative before:w-full before:block before:pt-[62.5%] sm:ml-3'>
                            <Image src={'/images/seo-audit/SEO_Audit_Services.jpg'} alt="arrow" width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:pb-30 xl:pt-12 md:pt-4 md:pb-16 pt-2 pb-12'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full mb-6'>
                            <h4 className='text-[#5db947] text-base font-bold mb-3'>About The Service</h4>
                            <h3 className='text-3xl lg:text-[56px] xl:text-[65px] font-bold text-black leading-none'>Why SEO</h3>
                        </div>
                        <div className='md:w-1/3 w-full pt-6'>
                            <div className='flex'>
                                <div>
                                    <h4 className='text-4xl lg:text-5xl font-bold leading-none text-[#5db947]'>175+</h4>
                                    <p className='text-base lg:text-lg font-light text-black leading-[1.6]'>Clients Served</p>
                                </div>
                                <div className='border-l border-neutral-400 mx-5'></div>
                                <div>
                                    <h4 className='text-4xl lg:text-5xl font-bold leading-none text-[#5db947]'>75M+</h4>
                                    <p className='text-base lg:text-lg font-light text-black leading-[1.6]'>Revenue Generated</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-2/3 w-full md:mt-0 mt-4 pt-6'>
                            <p className='text-lg lg:text-xl font-light text-black leading-[1.6]'>SEO audit services are essential for identifying and addressing technical issues, poor user experience, and other factors affecting search engine rankings. By performing a detailed on-page SEO audit, we uncover the core issues preventing your site from reaching its full potential. Our audit helps optimize your website&apos;s content, structure, and performance, driving better results for your business and maximizing ROI.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="bg-cover bg-center rounded-[10px] py-[40px] md:px-10 px-5" style={{ backgroundImage: `url(${Servicebg.src})`, }}>
                        <div>
                            <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-bold text-white leading-none mb-3 text-center">
                                Our Approach
                            </h2>
                            <p className="text-base lg:text-lg px-[10px] text-[#bcbcbc] leading-[1.6] text-center">
                                Our proven approach to ecommerce site audit ensures that we find and fix issues that hinder your website&apos;s performance. Here&apos;s how we work:
                            </p>
                        </div>
                        <div className='space-y-3 mt-10'>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ServiceIconone} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Discovery & Research</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>We start by understanding your business, website goals, and audience. This helps us tailor our on-page SEO audit to uncover specific areas needing improvement.</p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ServiceIcontwo} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Strategy Development</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>After identifying key issues, we develop a customized action plan designed to improve search engine rankings and overall website performance.</p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ServiceIconthree} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Execution & Optimization</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>Our team implements changes based on the audit findings, continuously optimizing for better results through technical fixes, content adjustments, and link building.</p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ServiceIconfour} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Reporting & Insights</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>We provide clear, actionable reports that highlight your website&apos;s current performance and the impact of improvements, empowering you to make data-driven decisions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button onClick={openModal} className="ease_in_out bg-[#5db947] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#5db947] px-[30px] md:px-[55px] py-[15px] md:py-[20px] mt-[40px] hover:bg-[#5db947]">
                                Contact now
                                <span className="ml-[10px]">
                                    <Image src={BtnArrow} alt="arrow" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:py-40 md:py-24 py-16'>
                <div className="container">
                    <div>
                        {/* <p className="text-[#5db947] text-base font-bold mb-3 text-center">Our Process</p> */}
                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-bold text-black leading-none text-center">
                            Results We Can Expect
                        </h2>
                    </div>
                    <div className="w-full mx-auto md:mt-10 mt-7">
                        {/* Tab Headers */}
                        <div className="flex lg:justify-center text-center mb-7 border-b border-neutral-200 overflow-x-auto overflow-y-hidden">
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab1" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab1")}>
                                Increased Organic Traffic
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab2" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab2")}>
                                Higher Conversion Rates
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 inline-block shrink-0 ${activeTab === "tab3" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab3")}>
                                Improved Brand Awareness
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab4" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab4")}>
                                Long-Term ROI
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab5" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab5")}>
                                Lead Generation
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="">
                            {activeTab === "tab1" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">01</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Increased Organic Traffic</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">By addressing SEO issues, we improve your website&apos;s visibility, resulting in increased organic traffic from targeted keywords.</p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:ml-3 sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/seo-audit/Increased_Organic_Traffic.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab2" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">02</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Higher Conversion Rates</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">An optimized site leads to higher user engagement and better conversion rates, turning more visitors into paying customers.</p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:ml-3 sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/seo-audit/Higher_Conversion_Rates.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab3" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">03</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Improved Brand Awareness</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">With better search engine rankings, your brand becomes more visible to your target audience, increasing awareness and credibility in your market..</p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:ml-3 sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/seo-audit/Improved_Brand_Awareness.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab4" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">04</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Long-Term ROI</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">By continually improving your site&apos;s SEO health, our audits contribute to sustained growth, delivering long-term ROI with ongoing results.</p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:ml-3 sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/seo-audit/Long_Term_ROI.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab5" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">05</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Lead Generation</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">Our website audit services help you identify and fix lead generation barriers, improving your site&apos;s ability to attract and convert qualified leads.</p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:ml-3 sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/seo-audit/Lead_Generation.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:bg-[linear-gradient(0deg,_rgb(161_221_146)_0%,_rgba(0,_0,_0,_0)_70%)] mb-20">
                <div className='container'>
                    <div className="mb-12">
                        {/* <p className="text-[#5db947] text-base font-bold mb-3 text-center">Here is What We Do</p> */}
                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-bold text-black leading-none text-center">
                            Why Choose Us
                        </h2>
                    </div>
                </div>
                {/* desktop  */}
                <div className="px-4 max-w-[700px] mx-auto xl:max-w-fit xl:block hidden">
                    <div className="xl:border-b-4 border-solid border-[#5db947] xl:divide-x-[1px] divide-[#6abd71] grid xl:grid-cols-4 grid-cols-1 gap-y-1 relative xld-bx" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 0.5s ease-in-out", }}>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`flex flex-col justify-end main-box px-4 xl:py-8 py-5 cursor-pointer xl:h-[460px] overflow-hidden relative ${activeIndex === index ? "xl:bg-black xl:bg-opacity-50 bg-transparent" : "bg-black xl:bg-opacity-25 bg-opacity-5"
                                    }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onClick={() => handleClick(index)}
                            >
                                <div className="flex items-center click-box justify-between">
                                    <div className="flex items-center">
                                        <h3 className="text-3xl lg:text-[56px] xl:text-[65px] font-bold leading-none text-[#5db947]">
                                            {`0${service.id}`}
                                        </h3>
                                        <h4 className="text-xl lg:text-2xl font-bold xl:text-neutral-300 text-neutral-700 leading-[1.6] pl-4">
                                            {service.title}
                                        </h4>
                                    </div>
                                    <div>
                                        <div className={`size-[15px] transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                                            <Image className="size-full object-contain" src={downArrow} alt="downArrow" />
                                        </div>
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className={`my-4 border-t-4 border-solid border-[#5db947] w-full pt-4 ${activeIndex === index ? "block xl:hidden" : "hidden"}`}>
                                    <div className="relative w-full">
                                        <Image src={service.image} alt={`Service-${service.id}`} width={900} height={400} className="w-full object-cover" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className={`content-box mt-2 transition-opacity duration-300 ${activeIndex === index ? "xl:h-auto xl:opacity-100 xl:overflow-visible" : "xl:block hidden xl:h-0 xl:opacity-0 xl:overflow-hidden"
                                    }`}>
                                    <p className="text-lg lg:text-xl font-light xl:text-white text-black leading-[1.6]">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* mobile  */}
                <div className="px-4 max-w-[700px] mx-auto xl:max-w-fit xl:hidden block">
                    <div className="xl:border-b-4 border-solid border-[#5db947] xl:divide-x-[1px] divide-[#6abd71] grid xl:grid-cols-4 grid-cols-1 gap-y-1 relative xld-bx" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 0.5s ease-in-out", }}>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`flex flex-col justify-end main-box px-4 xl:py-8 py-5 cursor-pointer xl:h-[460px] overflow-hidden relative ${activeIndex === index ? "xl:bg-black xl:bg-opacity-50 bg-transparent" : "bg-black xl:bg-opacity-25 bg-opacity-5"
                                    }`}
                                onClick={() => handleClick(index)}
                            >
                                <div className="flex items-center click-box justify-between">
                                    <div className="flex items-center">
                                        <h3 className="text-3xl lg:text-[56px] xl:text-[65px] font-bold leading-none text-[#5db947]">
                                            {`0${service.id}`}
                                        </h3>
                                        <h4 className="text-xl lg:text-2xl font-bold xl:text-neutral-300 text-neutral-700 leading-[1.6] pl-4">
                                            {service.title}
                                        </h4>
                                    </div>
                                    <div>
                                        <div className={`size-[15px] transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                                            <Image className="size-full object-contain" src={downArrow} alt="downArrow" />
                                        </div>
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className={`my-4 border-t-4 border-solid border-[#5db947] w-full pt-4 ${activeIndex === index ? "block xl:hidden" : "hidden"}`}>
                                    <div className="relative w-full">
                                        <Image src={service.image} alt={`Service-${service.id}`} width={900} height={400} className="w-full object-cover" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className={`content-box mt-2 transition-opacity duration-300 ${activeIndex === index ? "xl:h-auto xl:opacity-100 xl:overflow-visible" : "xl:block hidden xl:h-0 xl:opacity-0 xl:overflow-hidden"
                                    }`}>
                                    <p className="text-lg lg:text-xl font-light xl:text-white text-black leading-[1.6]">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
            <Growing />
        </Layouts>
    );
};

export default Page;
