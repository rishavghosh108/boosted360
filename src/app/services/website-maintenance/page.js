"use client"
import { useState } from "react";
import React from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import Link from 'next/link';
import { BtnArrow } from '@/app/assets';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';
import WorkWthUsModal from "../../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal"
import { BgGrain, IserviceBannerOne, Servicebg, ServiceIconone, ServiceIcontwo, ServiceIconthree,downArrow } from "../../assets/index";

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
            title: "Comprehensive Website Support",
            description: "We offer complete website support and maintenance, ensuring your website is always secure and optimized.",
            image: "/images/Digital-Marketing-Strategy.png",
        },
        {
            id: 2,
            title: "Tailored Website Maintenance",
            description: "Our website maintenance packages are customized to meet your specific needs, ensuring cost-effective solutions for your business. Partner with our website maintenance company for continuous support and expert solutions that keep your website in top condition.",
            image: "/images/Search-Engine-Optimization.png",
        },
        {
            id: 3,
            title: "Expert Team",
            description: "Our experienced team provides expert website design and maintenance services to enhance your website’s functionality and performance.",
            image: "/images/image_2025_02_11T11_09_35_485Z.png",
        },
        {
            id: 4,
            title: "Timely Updates and Security",
            description: "With our website development and maintenance services, you will receive timely updates and security measures, keeping your site secure and competitive in the online market.",
            image: "/images/Copywriting-Content-Marketing.png",
        },
    ];


    const [backgroundImage, setBackgroundImage] = useState(services[0]?.image || "");


    return (
        <Layouts>
            <div className='py-6 lg:py-12 bg-no-repeat' style={{ backgroundImage: `url(${BgGrain.src})`, }}>
                <div className='container'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-start'>
                        <div className="sm:order-none order-2 md:mt-0 mt-5 pr-10">
                            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-none'>Reliable Website Maintenance Company for 
                            <span className='text-[#5db947]'> Seamless Performance</span> 
                           </h1>
                            <p className='text-lg lg:text-xl font-medium text-black leading-[1.6] pt-5 lg:pt-6'>As a trusted website maintenance company, we provide comprehensive maintenance services to ensure your website stays up-to-date, secure, and fully functional. </p>
                            <button onClick={openModal} className="ease_in_out box-shadows bg-[#2a2a2a] text-sm font-bold text-white uppercase inline-flex border border-solid border-[#3e3e3e] px-[30px] md:px-[55px] py-[15px] md:py-[20px] my-5 lg:my-8 hover:bg-[#404040] hover:border-[#404040]">
                                Work With Us
                                <span className="ml-[10px]">
                                    <Image src={BtnArrow} alt="arrow" />
                                </span>
                            </button>
                            <div className='grid grid-cols-3 max-w-80 items-center gap-5 pt-5'>
                                <div>
                                    <Image src={'/images/amazon.png'} width={100} height={100} alt="arrow" />
                                </div>
                                <div>
                                    <Image src={'/images/airbnb.png'} width={100} height={100} alt="arrow" />
                                </div>
                                <div>
                                    <Image src={'/images/uber.png'} width={100} height={100} alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <div className='relative before:w-full before:block before:pt-[62.5%]'>
                            <Image src={IserviceBannerOne} alt="arrow" width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:py-36 md:py-24 py-14'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full mb-6'>
                            <h4 className='text-[#5db947] text-base font-bold mb-3'>About The Service</h4>
                            <h3 className='text-3xl lg:text-[56px] xl:text-[65px] font-bold text-black leading-none'>Why Website Maintenance
                            </h3>
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
                            <p className='text-lg lg:text-xl font-light text-black leading-[1.6]'>A well-maintained website is crucial for your business's online success. As a leading company, we offer expert website maintenance services to keep your website running smoothly and efficiently. Our services include regular updates, security patches, performance optimization, and more. Whether you require website maintenance services or a full website support and maintenance package, we ensure your website stays secure, fast, and functional, offering the best user experience possible.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="bg-cover bg-center rounded-[10px] py-[40px] md:px-10 px-5" style={{ backgroundImage: `url(${Servicebg.src})`, }}>
                        <div>
                            <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-bold text-white leading-none mb-3 text-center">
                            Benefits
                            </h2>
                            <p className="text-base lg:text-lg px-[10px] text-[#bcbcbc] leading-[1.6] text-center">
                            WordPress website maintenance services are essential to keeping your online presence secure, up-to-date, and user-friendly.
                            </p>
                        </div>
                        <div className='space-y-3 mt-10'>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ServiceIconone} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Security Updates</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'> Regular updates ensure your website is secure, protecting it from potential threats and vulnerabilities. We handle all necessary patches to keep your site safe.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ServiceIcontwo} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Improved Performance</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>Routine checks and optimizations enhance your website&apos;s speed, ensuring a smooth and efficient browsing experience for your users.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ServiceIconthree} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Content Updates</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'> Our website maintenance services ensure that your site content is always fresh and relevant, reflecting any changes in your products or services.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ServiceIconthree} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>SEO Optimization</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'> Ongoing website maintenance includes SEO updates, ensuring your site remains visible in search engines and continues to drive traffic.
                                    </p>
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
                        Services We Offer
                        </h2>
                    </div>
                    <div className="w-full mx-auto md:mt-10 mt-7">
                        {/* Tab Headers */}
                        <div className="flex lg:justify-center text-center mb-7 border-b border-neutral-200 overflow-auto lg:overflow-visible">
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab1" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab1")}>
                            WordPress Website Maintenance
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab2" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab2")}>
                            Website Security Updates
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 inline-block shrink-0 ${activeTab === "tab3" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab3")}>
                            Website Backup Services
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab4" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab4")}>
                            Content Updates & Changes
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab5" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab5")}>
                            Performance Optimization
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="">
                            {activeTab === "tab1" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">01</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">WordPress Website Maintenance</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">  We specialize in WordPress website support services, offering ongoing updates, security, and performance optimization for your WordPress site.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/work-4.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab2" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">02</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Website Security Updates</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">Our website maintenance company ensures your website stays secure with regular security patches, reducing the risk of hacks and cyber threats.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/SaaS-Marketing-HIGH-ROI.png'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab3" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">03</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Website Backup Services</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We provide regular website backups, ensuring your data is safe and can be quickly restored in case of any issues.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/sddefault1.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab4" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">04</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">	Content Updates & Changes</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">Our team ensures your website content is always up-to-date with the latest information, images, and promotions to engage your visitors.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/SG-Elevate-Your-Search-Presence-by-Outsourcing-Enterprise-SEO.png'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab5" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">05</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">	Performance Optimization</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We conduct regular checks and optimization to improve your website's speed, ensuring fast load times and a seamless user experience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/sddefault1.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
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
                <div className="px-4 max-w-[700px] mx-auto xl:max-w-fit">
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

            </div>
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
            <Growing />
        </Layouts>
    );
};

export default Page;
