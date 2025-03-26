"use client"
import { useState } from "react";
import React from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import Link from 'next/link';
import { BtnArrow } from '@/app/assets';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';
import WorkWthUsModal from "../../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal"
import { BgGrain, IserviceBannerOne, Servicebg, ServiceIconone, ServiceIcontwo, ServiceIconthree, downArrow,ImprovedUserEngagement,IncreasedConversions,Mobileresponsivedesign,TailoredSolutions } from "../../assets/index";

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
            title: "Expertise in UIUX Design",
            description: "As a top UIUX design company, we specialize in creating intuitive and visually stunning interfaces that meet both user needs and business goals.",
            image: "/images/Digital-Marketing-Strategy.png",
        },
        {
            id: 2,
            title: "Comprehensive UIUX Services",
            description: "From research and prototyping to final design and development, our UIUX design agency offers end-to-end solutions to create seamless digital experiences.",
            image: "/images/Search-Engine-Optimization.png",
        },
        {
            id: 3,
            title: "Custom Solutions",
            description: "Our UI design company works closely with you to create a design that reflects your brand and resonates with your audience.",
            image: "/images/image_2025_02_11T11_09_35_485Z.png",
        },
        {
            id: 4,
            title: "Proven Results",
            description: "Our clients experience significant improvements in user engagement, satisfaction, and business growth due to our expert UIUX design services.",
            image: "/images/Copywriting-Content-Marketing.png",
        },
    ];


    const [backgroundImage, setBackgroundImage] = useState(services[0]?.image || "");


    return (
        <Layouts>
            <title>UI UX Design Company | UI UX Development Services</title>
            <meta name="title" content='UI UX Design Company | UI UX Development Services' />
            <meta name="description" content="Enhance user experience with expert UI UX development services! Partner with our trusted UI UX design company for innovative solutions. Let’s build today!" />

            <div className='py-6 lg:py-12 bg-no-repeat' style={{ backgroundImage: `url(${BgGrain.src})`, }}>
                <div className='container'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-start'>
                        <div className="sm:order-none order-2 md:mt-0 mt-5 pr-10">
                            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-none'>UIUX
                                <span className='text-[#5db947]'> Design & Development Services</span></h1>
                            <p className='text-lg lg:text-xl font-medium text-black leading-[1.6] pt-5 lg:pt-6'>As a leading UIUX design company, we specialize in creating seamless, intuitive, and visually appealing user interfaces and experiences. Our UIUX design services focus on enhancing user satisfaction by making digital products easy to use, engaging, and effective in meeting your business objectives.</p>
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
                            <h3 className='text-3xl lg:text-[56px] xl:text-[65px] font-bold text-black leading-none'>Why UIUX
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
                            <p className='text-lg lg:text-xl font-light text-black leading-[1.6]'>A great user experience is crucial for the success of any digital product. Our UIUX development services ensure that your product not only looks good but also provides a smooth, intuitive, and enjoyable experience for users. From UI design to UX research, our UIUX design agency ensures that every aspect of your application or website is crafted to meet the needs of your target audience, making it both functional and aesthetically pleasing.</p>
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
                                A well-designed UIUX can increase user retention, enhance customer satisfaction, and drive conversions.
                            </p>
                        </div>
                        <div className='space-y-3 mt-10'>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={ImprovedUserEngagement} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Improved User Engagement</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>Our UIUX design services focus on making your product intuitive and easy to navigate, ensuring a smooth experience that keeps users coming back.

                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={IncreasedConversions} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Increased Conversions</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>By optimizing the user journey and streamlining interactions, our user experience design agency helps to increase conversions and user satisfaction.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={Mobileresponsivedesign} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Responsive Design</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'> We ensure your UI design is fully responsive, providing a seamless experience across all devices, whether desktop, tablet, or mobile.
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[#292929] bg-opacity-80 p-5 rounded-lg flex'>
                                <div className='shrink-0 lg:size-32 md:size-20 size-10'>
                                    <Image src={TailoredSolutions} alt='Service-Icon-one' className="max-h-[100px] m-auto" />
                                </div>
                                <div className='pl-5'>
                                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[1.6] mb-1'>Tailored Solutions</h3>
                                    <p className='text-base font-light lg:text-lg text-[#bcbcbc] leading-[1.6]'>Our UIUX design firm creates custom solutions tailored to your business and your audience, ensuring your digital product stands out.
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
                                UIUX App Development
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab2" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab2")}>
                                UIUX Web Development
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 inline-block shrink-0 ${activeTab === "tab3" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab3")}>
                                User Research & Testing
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab4" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab4")}>
                                UI Design Services
                            </button>
                            <button className={`text-base font-medium lg:border-b-4 lg:-mb-[3px] px-4  py-3 shrink-0 ${activeTab === "tab5" ? "border-[#5db947] lg:bg-transparent bg-[#5db947] lg:text-black text-white" : "border-transparent"}`} onClick={() => setActiveTab("tab5")}>
                                Design Support
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="">
                            {activeTab === "tab1" &&
                                <div className="sm:flex flex-wrap items-center">
                                    <div className="sm:w-6/12 w-full sm:pr-8">
                                        <h2 className="text-3xl lg:text-[56px] xl:text-[65px] font-thin text-[#5db947] leading-none">01</h2>
                                        <div className="md:mt-5 mt-4">
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">UIUX App Development</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We specialize in designing and developing user-friendly apps that provide an exceptional mobile experience.
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
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">UIUX Web Development</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">Our UIUX development services focus on creating websites that are visually appealing, functional, and easy to navigate for a diverse range of users.
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
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">User Research & Testing</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We conduct in-depth user research and usability testing to ensure that your design decisions are based on real user needs and behaviors.
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
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1"> UI Design Services</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">Our team creates stunning user interfaces that are not only visually appealing but also easy to navigate, ensuring your users enjoy every interaction.
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
                                            <p className="text-xl lg:text-3xl font-bold text-black leading-[1.6] mb-1">Design Support</p>
                                            <p className="text-sm font-light lg:text-lg text-neutral-600 leading-[1.6]">We provide continuous support and improvements to your UIUX designs to ensure they evolve with user feedback and industry trends.
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
