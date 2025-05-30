"use client"

import React, { useState } from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import { Companie7, sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd, BtnArrow, work1, anthem_google,work6 } from '@/app/assets';
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
                            <Image src={sliderInLogonnjdvd} width={80} height={80} alt={`Slide`} className='w-20 mx-auto lg:mx-0 mix-blend-darken' />
                            <h1 className='lg:text-5xl md:text-4xl text-3xl text-neutral-800 md:pt-10 pt-5 font-light text-center lg:text-left'>
                                Empowering Liar Catchers&apos; Success in the Private Investigation Industry Through Strategic
                                {/* <br className='hidden lg:block' /> */}
                                <span className='font-bold'> Digital Marketing</span>
                            </h1>

                            <p className='pt-5 md:text-xl text-base text-neutral-800 text-center lg:text-left'>
                                Liar Catchers&apos; <span className='font-bold text-[#459231]'>digital marketing strategy successfully enhanced</span> its online presence by leveraging <span className='font-bold text-[#459231]'>targeted SEO, content marketing, social media, and lead generation efforts</span>. This resulted in increased visibility for key private investigation services, attracting potential clients in need of civil investigations, evidence collection, attorney referrals, and other legal-related services.


                           
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
                        <Image src={work6} className='max-w-3xl mx-auto w-full h-96 object-contain' alt={`Slide`} />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-3 text-center items-center pb-10 lg:pt-5'>
                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                        4.5k
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
                        12X
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
                    Driving Growth for Liar Catchers <br className='hidden lg:block' /> <b className="font-bold">through Digital Marketing</b>.
                    </h2>

                    <p className='text-xl pt-4 font-light max-w-3xl mx-auto text-center'>
                    Liar Catchers, a top-ranked private investigator agency in Lexington, specializes in services like civil investigations, evidence collection, attorney referrals, and legal disclaimers. Through a tailored digital marketing strategy, we successfully enhanced Liar Catchers&apos; online visibility, attracted high-quality leads, and bolstered their reputation as a leading agency in the competitive Lexington market.
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
                        To create an effective strategy, we began by understanding Liar Catchers&apos; unique value propositions, their target audience, and the competitive landscape of the private investigation industry. Our primary goal was to drive leads for services such as civil investigations, legal disclaimers, and evidence collection, ensuring that Liar Catchers remained top of mind for individuals and businesses seeking trusted investigative services.
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
                        We developed engaging content centered around the most relevant topics for their audience, such as tips on legal disclaimers, the importance of evidence collection, and when to hire a private investigator. This content helped nurture leads by providing value and building trust at every stage of the customer journey. Our content marketing approach established Liar Catchers as an authoritative figure in the Lexington legal community.
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
                        Our strategy involved thorough market research, competitor analysis, and careful identification of high-value keywords. We implemented a combination of SEO optimization, targeted ad campaigns, and engaging social media content to drive organic traffic and improve conversions. We also optimized Liar Catchers&apos; website to ensure it generated more inquiries from potential clients interested in private investigation services in Lexington.
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
                        Liar Catchers saw substantial growth through our digital marketing efforts. By focusing on SEO, targeted content, and strategic online campaigns, we helped them rank for high-value keywords such as &quot;private investigator in Lexington,&quot; &quot;detective agency in Lexington,&quot; and &quot;legal disclaimer services Lexington.&quot; This resulted in a significant increase in qualified leads and higher conversion rates for their investigative services.
                        </p>
                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='max-w-3xl mx-auto md:pb-20 pb-10 content-aria'>
                    <p>
                    Through our strategic digital marketing initiatives, Liar Catchers experienced a 700% increase in organic traffic and a 400% increase in lead generation. By focusing on SEO and lead nurturing tactics, we achieved measurable growth, driving more high-quality leads and conversions for their services, including civil investigations and evidence collection.
                    </p>

                    {/* <h1>
                        ACLS Solutions&apos; Digital Marketing Success

                    </h1>

                    <p>
                        Through our strategic digital marketing efforts, ACLS Solutions experienced a 650% increase in organic traffic and a 300% increase in online class registrations.
                    </p>

                    <div className='bg-white p-5 mb-3'>
                        <Image width={600} height={100} src={'/images/details-image/details-image2.png'} alt={`Slide`} className='w-full' />
                    </div>

                    <p>
                        By focusing on key SEO strategies and content marketing, we were able to achieve significant growth, driving more high-quality leads and conversions for their ACLS certification courses.
                    </p> */}


                    <h1>
                        <span>Google My Business (GMB) Optimization</span>
                    </h1>

                    <p>
                    We optimized Liar Catchers&apos; Google My Business profile to enhance local search visibility and improve rankings for critical keywords like &quot;private investigator in Lexington&quot; and &quot;detective agency in Lexington.&quot; 
                    </p>

                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/liar_catchers_review_dtl.png'} alt={`Slide`} className='w-full' />

                    </div>

                    <p>
                    We regularly updated the profile with accurate information, managed reviews, and responded to client inquiries, ensuring they stayed at the forefront of local search results.
                    </p>
                    {/* 
          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image3.png'} alt={`Slide`} className='w-full' />
          </div> */}


                    <h1>Local SEO</h1>
                    <p>Local SEO played a pivotal role in increasing Liar Catchers&apos; visibility in Lexington. By targeting geo-specific keywords like &quot;private investigator in Lexington&quot; and &quot;detective agency in Lexington,&quot; we were able to secure top rankings in local searches, driving organic traffic from individuals in need of private investigation services in the area.
                    </p>
                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/liar_catchers_browser.png'} alt={`Slide`} className='w-full' />
                    </div>



                    <h1>
                        Social Media Marketing
                    </h1>
                    <p>Through targeted social media campaigns, we increased brand awareness for Liar Catchers by sharing valuable content related to civil investigations, legal disclaimers, and evidence collection. Our efforts, including regular posts and sponsored ads, led to a 50% rise in engagement and a 30% increase in inquiries about their investigative services. Social media helped build a community of potential clients actively seeking professional investigation help.</p>
                    {/* <div className='bg-white p-5 mb-3 '>
                        <div className='w-[70%] mx-auto'>
                            <Image width={600} height={100} src={'/images/details-image/contactform.png'} alt={`Slide`} className='w-full' />
                        </div>
                    </div> */}

                    <h1>
                        Lead Generation
                    </h1>
                    <p>We optimized the lead generation process by enhancing the website with user-friendly contact forms and integrating effective CTAs that encouraged website visitors to reach out for consultations. This seamless lead generation system allowed us to capture inquiries and convert them into actionable leads for civil investigations and legal support services.</p>
                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/liar_catchers_contact-ldf.png'} alt={`Slide`} className='w-full' />
                    </div>
                    <h1>
                        Content Marketing
                    </h1>
                    <p>Our content marketing strategy involved publishing blog posts and resources that addressed critical topics such as &quot;When to hire a private investigator&quot; and &quot;Understanding legal disclaimers.&quot; These pieces of content not only Boosted SEO rankings but also helped potential clients better understand the services offered by Liar Catchers, reinforcing their credibility as an expert in the private investigation field.</p>

                    {/* <h1>Ad Campaigns (PPC)</h1>
                    <p>We executed highly targeted PPC campaigns, including search ads, display ads, and remarketing efforts, to drive qualified traffic to ACLS Solutions&apos; class registration pages. These campaigns focused on individuals actively searching for ACLS and CPR certification in the St. Louis area, resulting in increased site traffic and higher conversion rates for class sign-ups.</p> */}

                    <h1>Landing Page Optimization</h1>
                    <p>We optimized Liar Catchers&apos; landing pages to improve conversion rates. With faster loading times, user-friendly designs, and clear CTAs that focused on the services they offer (like attorney referrals and civil investigations), the landing pages encouraged more visitors to take action and request consultations. As a result, we saw a significant boost in conversions, especially for clients seeking legal-related investigative services.</p>

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
