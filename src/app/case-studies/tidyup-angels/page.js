"use client"

import React, { useState } from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import { Companie7, sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd, BtnArrow, work1, anthem_google, } from '@/app/assets';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';
import WorkWthUsModal from "../../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal"
import Companies from '@/app/Component/Widgets/Homepagegreen/Companies';

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Layouts>
            <div className='container'>
                <div className='grid lg:grid-cols-2 gap-8 items-center pt-5 lg:pb-20 pb-10'>
                    <div>
                        <div className='max-w-3xl mx-auto'>
                            {/* Companie7 */}
                            <Image src={'/images/details-image/curbappeal.png'} width={100} height={100} alt={`Slide`} className='w-40 mx-auto lg:mx-0 brightness-75' />

                            <h1 className='lg:text-5xl md:text-4xl text-3xl text-neutral-800 md:pt-10 pt-5 font-light text-center lg:text-left'>
                                Empowering Tidy Up Angels&apos; Success in House Cleaning Services Through
                                {/* <br className='hidden lg:block' /> */}
                                <span className='font-bold'> Digital Marketing</span>
                            </h1>

                            <p className='pt-5 md:text-xl text-base text-neutral-800 text-center lg:text-left'>

                                Boosted 360 helped Tidy Up Angels enhance their online presence by leveraging targeted <span className='font-bold text-[#459231]'>SEO strategies, content marketing, and lead generation techniques</span>. As a result, their visibility for essential house cleaning services such as deep cleaning, recurring cleaning, and move-in/move-out cleaning skyrocketed, generating more leads and helping them become the top choice for cleaning services in Overland Park, KS.

                            </p>
                            <button onClick={openModal} className="ease_in_out box-shadows bg-[#2a2a2a] text-[14px] md:text-[15px] font-bold text-white uppercase flex w-fit border border-solid border-[#3e3e3e] px-[30px] md:px-[55px] py-[15px] md:py-[20px] lg:mx-0 mx-auto mt-[40px] hover:bg-[#404040] hover:border-[#404040]">
                                Reach Us
                                <span className="ml-[10px]">
                                    <Image src={BtnArrow} alt="arrow" />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className=''>
                        <Image src={work1} className='max-w-3xl mx-auto w-full h-96 object-cover' alt={`Slide`} />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-3 text-center items-center pb-10 lg:pt-5'>
                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            5.0k
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Page views
                        </p>
                    </div>

                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            85%
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Lead generation
                        </p>
                    </div>

                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            8X
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Growth rate
                        </p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="pb-[20px] lg:pb-[30px] pt-[20px] lg:pt-[80px]">

                    <h2 className="lg:text-5xl md:text-4xl text-3xl capitalize font-light text-neutral-800 w-full text-center">
                        Driving Growth for Tidy Up Angels <br className='hidden lg:block' /> <b className="font-bold">through Digital Marketing</b>.
                    </h2>

                    <p className='text-xl pt-4 font-light max-w-3xl mx-auto text-center'>
                        Tidy Up Angels offers professional house cleaning services in Overland Park, KS, specializing in deep home cleaning, recurring cleaning services, move-in/move-out cleaning, and put-on-market cleaning. Our digital marketing efforts were tailored to increase their online visibility, drive qualified traffic, and generate leads for their premium cleaning services. By optimizing SEO, improving content, and utilizing paid campaigns, we positioned Tidy Up Angels as a trusted leader in residential cleaning.
                    </p>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 gap-3 pt-5 lg:pb-20 md:pb-16 pb-10'>
                    <div className='bg-white border py-5 px-5'>
                        <p className='text-neutral-300 text-4xl font-light'>
                            1
                        </p>
                        <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
                            Grasping needs:
                        </h2>
                        <p className='text-neutral-700 font-light text-base pt-5'>
                            To craft an effective digital marketing strategy for Tidy Up Angels, we focused on their unique offerings and customer base. Our primary objective was to increase awareness and drive leads for their popular services. By targeting highly relevant keywords and local audiences, we ensured their services reached the right clients in a competitive market.
                        </p>
                    </div>

                    <div className='bg-white border py-5 px-5'>
                        <p className='text-neutral-300 text-4xl font-light'>
                            2
                        </p>
                        <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
                            Content marketing:
                        </h2>
                        <p className='text-neutral-700 font-light text-base pt-5'>
                        We developed a content marketing strategy that addressed key cleaning-related topics and the benefits of cleaning services. This included blog posts, cleaning checklists, and FAQs that resonated with the clients looking for dependable cleaning solutions. By creating useful content, we increased user engagement, built trust, and improved SEO rankings for high-priority keywords.
                        </p>
                    </div>

                    <div className='bg-white border py-5 px-5'>
                        <p className='text-neutral-300 text-4xl font-light'>
                            3
                        </p>
                        <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
                            Marketing strategy:
                        </h2>
                        <p className='text-neutral-700 font-light text-base pt-5'>
                        Our strategy involved in-depth keyword research and the selection of high-value keywords. We optimized the website for conversions, redesigned key landing pages, and implemented CTAs to drive inquiries and bookings. We conducted market analysis to understand customer behaviors and preferences, allowing us to strategically position it as the go-to service provider in Overland Park.
                        </p>
                    </div>

                    <div className='bg-white border py-5 px-5'>
                        <p className='text-neutral-300 text-4xl font-light'>
                            4
                        </p>
                        <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
                            Success story:
                        </h2>
                        <p className='text-neutral-700 font-light text-base pt-5'>
                        Thanks to our targeted efforts, Tidy Up Angels saw a dramatic increase in their online presence. By focusing on SEO, content marketing, and effective lead-generation strategies, we helped them rank highly for important keywords. As a result, their inbound leads surged, with more people seeking their cleaning services for both recurring and one-time needs.
                        </p>
                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='max-w-3xl mx-auto md:pb-20 pb-10 content-aria'>
                    <p>
                    Through our tailored digital marketing approach, Tidy Up Angels saw a 700% increase in organic traffic and a 350% growth in service bookings. Our focus on local SEO and targeted lead-generation tactics successfully increased both online visibility and conversions for their cleaning services.
                    </p>

                    {/* <h1>
                        CPR Tampa&apos;s Success Story

                    </h1>

                    <p>
                        CPR Tampa has experienced significant growth thanks to our bespoke digital marketing strategy. With a focus on SEO and content, we helped increase organic sessions by 650% and drove a 300% increase in online class registrations.
                    </p>

                    <div className='bg-white p-5 mb-3'>
                        <Image width={600} height={100} src={'/images/details-image/details-image2.png'} alt={`Slide`} className='w-full' />
                    </div> */}

                    {/* <p>
                        By leveraging a combination of targeted SEO, content creation, and PPC campaigns, CPR Tampa achieved a steady rise in qualified leads and conversions.
                    </p> */}


                    <h1>
                        <span>Google My Business (GMB) Optimization</span>
                    </h1>

                    <p>
                    We optimized Tidy Up Angels&apos; Google My Business profile to enhance local search rankings and visibility. By keeping the profile up-to-date, responding to reviews, and maintaining engagement with potential customers, we helped them rank for high-value keywords such as &quot;house cleaning services in Overland Park, KS&quot; 
                    </p>

                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/Anthamreview.png'} alt={`Slide`} className='w-full' />

                    </div>

                    <p>
                    and &quot;move-in and move-out cleaning in Overland Park, KS.&quot; As a result, Tidy Up Angels achieved top positions in local searches and attracted more customers.
                    </p>
                    {/* 
          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image3.png'} alt={`Slide`} className='w-full' />
          </div> */}


                    <h1>Local SEO</h1>
                    <p>Local SEO played a central role in driving Tidy Up Angels&apos; growth. By optimizing their website for location-based keywords such as &quot;house cleaning services in Overland Park, KS&quot; and &quot;recurring cleaning services in Overland Park, KS,&quot; we ensured that they ranked highly in local search results. This resulted in a significant increase in organic traffic from individuals searching for cleaning services in Overland Park.
                    </p>
                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/Antham_google.png'} alt={`Slide`} className='w-full' />
                    </div>



                    <h1>
                        Social Media Marketing
                    </h1>
                    <p>Through social media campaigns, Tidy Up Angels increased their brand awareness and connected with potential clients. By sharing educational content about cleaning tips and the importance of professional cleaning, we saw a 40% boost in engagement. Additionally, targeted paid ads for their services contributed to a 25% increase in bookings. Social media helped amplify their reputation as a trusted provider of quality cleaning services.</p>
                    <div className='bg-white p-5 mb-3 '>
                        <div className='w-[70%] mx-auto'>
                            <Image width={600} height={100} src={'/images/details-image/contactform.png'} alt={`Slide`} className='w-full' />
                        </div>
                    </div>

                    <h1>
                        Lead Generation
                    </h1>
                    <p>We optimized Tidy Up Angels&apos; website for lead generation by incorporating clear CTAs, easy-to-use contact forms, and simplified service booking options. We also implemented lead nurturing strategies, such as personalized follow-up emails and special offers, to convert website visitors into paying clients. These efforts led to a substantial increase in service inquiries and recurring bookings.</p>
                    <h1>
                        Content Marketing
                    </h1>
                    <p>The content strategy for Tidy Up Angels focused on producing high-value articles and resources about house cleaning, benefits of recurring cleaning, and preparation for move-in and move-out cleaning. This content not only improved SEO rankings but also helped educate potential clients about the value of professional cleaning services. As a result, Tidy Up Angels became a trusted authority in the home cleaning industry.</p>

                    {/* <h1>Ad Campaigns (PPC)</h1>
                    <p>We implemented targeted PPC campaigns to drive qualified traffic to CPR Tampa&apos;s registration pages. These campaigns, including search ads, display ads, and remarketing efforts, were highly focused on capturing individuals actively searching for CPR and first aid certification in Tampa. The targeted ads resulted in increased website traffic and a higher conversion rate for class sign-ups.</p> */}

                    

                    <h1>Landing Page Optimization</h1>
                    <p>We enhanced Tidy Up Angels&apos; landing pages to maximize conversion rates by improving page load speeds, ensuring mobile responsiveness, and providing clear CTAs. Each page was optimized for specific cleaning services, ensuring a streamlined user experience. These improvements contributed to a higher volume of bookings and inquiries for Tidy Up Angels&apos; services.</p>

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


            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
            <Growing />
        </Layouts>
    );
};

export default Page;
