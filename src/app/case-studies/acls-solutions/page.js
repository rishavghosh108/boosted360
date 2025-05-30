"use client"

import React, { useState } from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import { Companie7, sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd, BtnArrow, work1, anthem_google,work3 } from '@/app/assets';
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
                            <Image src={'/images/details-image/cpr-sltp.png'} width={100} height={100} alt={`Slide`} className='w-10 mx-auto lg:mx-0 mix-blend-darken' />

                            <h1 className='lg:text-5xl md:text-4xl text-3xl text-neutral-800 md:pt-10 pt-5 font-light text-center lg:text-left'>
                                Empowering CPR Classes, St. Louis&apos; Growth Through 
                                {/* <br className='hidden lg:block' /> */}
                                <span className='font-bold'> Digital Marketing</span>
                            </h1>

                            <p className='pt-5 md:text-xl text-base text-neutral-800 text-center lg:text-left'>
                            Boosted 360 enhanced CPR Classes, St. Louis&apos; <span className='font-bold text-[#459231]'> digital marketing </span>
                            by leveraging targeted <span className='font-bold text-[#459231]'>content, SEO, social media, and lead generation strategies.</span>
                             This significantly improved their online visibility, resulting in more leads and class registrations for ACLS certification in St. Louis.
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
                        <Image src={work3} className='max-w-3xl mx-auto w-full h-96 object-contain' alt={`Slide`} />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-3 text-center items-center pb-10 lg:pt-5'>
                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            3.2k
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Page views
                        </p>
                    </div>

                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            80%
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Lead generation
                        </p>
                    </div>

                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            10X

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
                        Driving Growth for CPR Classes, St. Louis <br className='hidden lg:block' /> <b className="font-bold">through Digital Marketing</b>.
                    </h2>

                    <p className='text-xl pt-4 font-light max-w-3xl mx-auto text-center'>
                        CPR Classes, St. Louis offers expert training and certification in Advanced Cardiovascular Life Support (ACLS) and Basic Life Support (BLS) for healthcare professionals. Through a tailored digital marketing strategy, we helped CPR Classes, St. Louis enhance their online presence, boost organic traffic, and increase class registrations, ensuring more individuals in the healthcare field are certified in these life-saving techniques.
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
                        To create an effective digital marketing strategy, we started by understanding CPR Classes, St. Louis&apos; objectives, target audience, and unique value proposition. This involved examining their services, including ACLS and BLS certification courses, and ensuring our efforts aligned with their goal of driving more registrations and increasing visibility in the competitive St. Louis market.
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
                        We created valuable educational content to engage CPR Classes, St. Louis&apos; target audience. It included blogs, and tutorials on the importance of ACLS certification, life-saving techniques, and the benefits of professional certification. By producing informative content, we attracted qualified traffic, nurtured leads, and provided value to potential customers at all stages of the buyer&apos;s journey.
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
                        Our strategy included thorough market research to identify CPR Classes, St. Louis&apos; target audience, develop clear goals, and select the most effective marketing channels. We worked on optimizing the CPR Classes, St. Louis website for conversions, implementing compelling calls-to-action (CTAs), and promoting tailored offers that encouraged users to register for ACLS certification classes. 
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
                        CPR Classes, St. Louis has seen outstanding growth thanks to our digital marketing efforts. By focusing on SEO, content marketing, and targeted ad campaigns, we helped CPR Classes, St. Louis rank for high-value keywords like “ACLS certification St. Louis,&quot; &quot;CPR certification St. Louis,&quot; and &quot;ACLS classes St. Louis.&quot; This resulted in a substantial increase in leads and online class registrations.
                        </p>
                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='max-w-3xl mx-auto md:pb-20 pb-10 content-aria'>
                    <p>
                        Our integrated approach, including SEO, content marketing, paid campaigns, and lead generation strategies, has not only improved their visibility but also enhanced their lead nurturing process and conversion rates. As a result, CPR Classes, St. Louis is now one of the most recognized providers of ACLS certification in the St. Louis area.
                    </p>

                    <h1>
                        CPR Classes, St. Louis&apos; Digital Marketing Success

                    </h1>

                    <p>
                        Through our strategic digital marketing efforts, CPR Classes, St. Louis experienced a 650% increase in organic traffic and a 300% increase in online class registrations.
                    </p>

                    {/* <div className='bg-white p-5 mb-3'>
                        <Image width={600} height={100} src={'/images/details-image/details-image2.png'} alt={`Slide`} className='w-full' />
                    </div> */}

                    <p>
                        By focusing on key SEO strategies and content marketing, we were able to achieve significant growth, driving more high-quality leads and conversions for their ACLS certification courses.
                    </p>


                    <h1>
                        <span>Google My Business (GMB) Optimization</span>
                    </h1>

                    <p>
                       We optimized CPR Classes, St. Louis&apos; Google My Business profile to enhance local visibility and improve rankings for critical keywords like &quot;ACLS certification St. Louis&quot; and &quot;CPR certification St. Louis.&quot; This included regularly updating business information, managing customer reviews, and increasing engagement with potential clients. 
                    </p>

                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/acls_st_louis_aeview.png'} alt={`Slide`} className='w-full' />

                    </div>

                    <p>
                    As a result, CPR Classes, St. Louis achieved top rankings in local searches, making it easier for potential customers to find and register for classes.
                    </p>
                    {/* 
          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image3.png'} alt={`Slide`} className='w-full' />
          </div> */}


                    <h1>Local SEO</h1>
                    <p>Local SEO was a key focus of our strategy, as we aimed to improve CPR Classes, St. Louis&apos; visibility in the St. Louis area. By targeting relevant keywords such as “ACLS certification St. Louis” and “CPR certification St. Louis,” we ensured that CPR Classes, St. Louis ranked high for these search terms, leading to improved organic traffic from individuals actively searching for ACLS certification and related services in the area.
                    </p>
                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/acls_st_louis_browser.png'} alt={`Slide`} className='w-full' />
                    </div>



                    <h1>
                    Social Media Marketing
                    </h1>
                    <p>Boosted 360 amplified CPR Classes, St. Louis&apos; social media presence by developing targeted campaigns aimed at educating the community and generating leads. Regular content posts, paid social ads, and community engagement efforts resulted in a 40% increase in brand awareness and a 25% rise in class sign-ups. We strategically used social media platforms to connect with both healthcare professionals and businesses in need of ACLS and BLS certification training.</p>
                    {/* <div className='bg-white p-5 mb-3 '>
                        <div className='w-[70%] mx-auto'>
                            <Image width={600} height={100} src={'/images/details-image/contactform.png'} alt={`Slide`} className='w-full' />
                        </div>
                    </div> */}

                    <h1>
                    Lead Generation
                    </h1>
                    <p>We optimized the lead generation process by streamlining the online registration experience. This involved creating easy-to-use forms, integrating strategic CTAs, and ensuring that valuable content was always within reach of potential customers. Our lead nurturing strategy, which included personalized follow-up emails and offers, helped convert leads into class registrations and ensured a smooth transition from interest to action.</p>

                    <h1>
                    Content Marketing
                    </h1>
                    <p>The content marketing strategy for CPR Classes, St. Louis focused on delivering informative and relevant content such as blog posts, tutorials, and infographics. Topics covered critical aspects of ACLS and BLS training, highlighting their importance in life-saving scenarios. This content not only Boosted SEO rankings but also helped CPR Classes, St. Louis build authority in their niche, establishing them as a trusted resource for healthcare certification.</p>

                    <h1>Ad Campaigns (PPC)</h1>
                    <p>We executed highly targeted PPC campaigns, including search ads, display ads, and remarketing efforts, to drive qualified traffic to CPR Classes, St. Louis&apos; class registration pages. These campaigns focused on individuals actively searching for ACLS and CPR certification in the St. Louis area, resulting in increased site traffic and higher conversion rates for class sign-ups.</p>

                    <h1>Landing Page Optimization</h1>
                    <p>To maximize conversions, we optimized CPR Classes, St. Louis&apos; landing pages by improving page speed, ensuring a user-friendly design, and placing clear CTAs. These optimized landing pages highlighted the benefits of taking ACLS and BLS courses with CPR Classes, St. Louis, providing easy access to registration forms and compelling class details. As a result, we saw a significant improvement in engagement and conversion rates, leading to a higher volume of online class sign-ups.</p>

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
