"use client"
import { useState } from "react";
import React from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import Link from 'next/link';
import { BtnArrow } from '@/app/assets';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';
import WorkWthUsModal from "../../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal"
import { BgGrain, IserviceBannerOne, Servicebg, ServiceIconone, ServiceIcontwo, ServiceIconthree, downArrow, EnhancedUserExperience, ScalableSolutions, CustomizableDashboards, SEOOptimization } from "../../assets/index";

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
            title: "Skill in SaaS Solutions",
            description: "We specialize in SaaS website design services and development, ensuring your product is both visually stunning and functional.",
            image: "/images/saas-design/whychooseus/Skill_SaaS_Solutions.jpg",
        },
        {
            id: 2,
            title: "Complete SaaS Development",
            description: "From SaaS web design to full-stack development, our SaaS development company offers comprehensive services for building robust SaaS products.",
            image: "/images/saas-design/whychooseus/Complete_SaaS_Development.jpg",
        },
        {
            id: 3,
            title: "Tailored Designs",
            description: "Our SaaSUX designers work closely with you to create a customized design that fits your unique business needs and enhances the user experience.",
            image: "/images/saas-design/whychooseus/Tailored_Designs.jpg",
        },
        {
            id: 4,
            title: "Proven Success",
            description: "Clients who choose our SaaS design services see significant improvements in user engagement, retention, and business growth thanks to our expert solutions.",
            image: "/images/saas-design/whychooseus/Proven_Success.jpg",
        },
    ];


    const [backgroundImage, setBackgroundImage] = useState(services[0]?.image || "");


    return (
        <Layouts>
            <title>SaaS Design Services | SaaS Development Services</title>
            <meta name="title" content='SaaS Design Services | SaaS Development Services' />
            <meta name="description" content="Optimize your SaaS product with custom SaaS design services! Our SaaS development services enhance usability and performance. Start your project today!" />


            <div className='pt-6 lg:pt-12 bg-no-repeat' style={{ backgroundImage: `url(${BgGrain.src})`, }}>
                <div className='container'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-start'>
                        <div className="sm:order-none order-2 md:mt-0 mt-5 pr-10">
                            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-none'>SaaS
                                <span className='text-[#5db947]'> Design & Development Services </span></h1>
                            <p className='text-lg lg:text-xl font-medium text-black leading-[1.6] pt-5 lg:pt-6'>As a leading SaaS design services provider, we specialize in creating custom, scalable, and user-friendly SaaS solutions that help your business grow. Our SaaS development services are tailored to meet your specific needs, ensuring that your software solution is functional, efficient, and delivers exceptional user experiences.</p>
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
                        <div className='relative before:w-full before:block before:pt-[62.5%]'>
                            <Image src={'/images/saas-design/SaaS_Design.jpg'} alt="arrow" width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='xl:pb-30 xl:pt-12 md:pt-4 md:pb-16 pt-2 pb-12'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='w-full mb-6'>
                            <h4 className='text-[#5db947] text-base font-bold mb-3'>About The Service</h4>
                            <h3 className='text-3xl lg:text-[56px] xl:text-[65px] font-bold text-black leading-none'>Why SaaS Design
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
                            <p className='text-lg lg:text-xl font-light text-black leading-[1.6]'>Building a successful SaaS product requires an intuitive, well-structured design paired with robust development. Our SaaS development services focus on crafting solutions that not only meet your business goals but also provide an exceptional experience for your users. Whether it&apos;s SaaS website development or SaaS dashboard design, we ensure that your product is easy to use, aesthetically pleasing, and efficient. We are a trusted SaaS web design company with a team of skilled SaaS web designers and SaaSUX designers who understand the nuances of SaaS business models.</p>
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
                                A well-designed SaaS platform can increase user engagement, improve retention rates, and drive business growth.
                            </p>
                        </div>
                        <div className='space-y-3 mt-10'>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={EnhancedUserExperience} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Enhanced User Experience</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>With a user-centered approach to SaaSUX design, we ensure your product is easy to navigate, reducing friction and improving customer satisfaction.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ScalableSolutions} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Scalable Solutions</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>Our SaaS web design services are built to scale, ensuring your product grows with your business and adapts to changing needs.

                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={CustomizableDashboards} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Customizable Dashboards</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'> We offer SaaS dashboard design services that provide users with clear, actionable insights, enhancing decision-making and overall product engagement.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={SEOOptimization} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>SEO Optimization</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>We integrate SEO best practices into our SaaS website design, improving visibility and ensuring your SaaS product is easily discoverable by potential users.
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
                                Custom SaaS Web Design
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab2" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab2")}>
                                SaaS Development Service
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 inline-block shrink-0 ${activeTab === "tab3" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab3")}>
                                SaaS Website Design
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab4" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab4")}>
                                SaaS Dashboard Design
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab5" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab5")}>
                                Support & Maintenance
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="">
                            {activeTab === "tab1" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">01</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Custom SaaS Web Design</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We create visually appealing, user-friendly SaaS web design solutions that reflect your brand identity and meet your business objectives.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/saas-design/Custom_SaaS_Web_Design.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab2" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">02</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">SaaS Development Service</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">From back-end development to front-end design, our SaaS development agency provides complete solutions to help your product reach its full potential.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/saas-design/SaaS_Development_Service.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab3" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">03</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">SaaS Website Design</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We design responsive, high-performance websites tailored to showcase your SaaS product and drive user engagement.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/saas-design/SaaS_Website_Design.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab4" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">04</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1"> SaaS Dashboard Design</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We specialize in creating clear, intuitive dashboards that provide users with easy access to key data, improving the overall SaaS experience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/saas-design/SaaS_Dashboard_Design.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
                                    </div>
                                </div>
                            }
                            {activeTab === "tab5" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">05</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Support & Maintenance</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We provide continuous support to ensure your SaaS platform remains up-to-date, secure, and optimized for performance.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='relative before:w-full before:block before:pt-[62.5%] sm:w-5/12 w-full sm:mt-0 mt-4'>
                                        <Image src={'/images/saas-design/Support_Maintenance.jpg'} width="610" height="650" className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover' alt="arrow" />
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
