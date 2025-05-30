"use client"

import React, { useState } from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import { Companie7, sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd, BtnArrow, work1, anthem_google,work4 } from '@/app/assets';
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

                            <Image src={sliderInLogolop} width={80} height={80} alt={`Slide`} className='w-20 mx-auto lg:mx-0 mix-blend-darken' />
                            <h1 className='lg:text-5xl md:text-4xl text-3xl text-neutral-800 md:pt-10 pt-5 font-light text-center lg:text-left'>
                                Empowering CPR Tampa&apos;s Growth Through
                                {/* <br className='hidden lg:block' /> */}
                                <span className='font-bold'> Digital Marketing</span>
                            </h1>

                            <p className='pt-5 md:text-xl text-base text-neutral-800 text-center lg:text-left'>


                                Boosted 360 enhanced CPR Tampa&apos;s <span className='font-bold text-[#459231]'>digital marketing</span> with targeted content, SEO, social media, and lead generation strategies, significantly improving visibility and driving online class registrations.



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
                        <Image src={work4} className='max-w-3xl mx-auto w-full h-96 object-contain' alt={`Slide`} />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-3 text-center items-center pb-10 lg:pt-5'>
                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            2.5k
                        </h2>
                        <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
                            Page views
                        </p>
                    </div>

                    <div className='bg-white border py-10 px-2'>
                        <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
                            75%
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
                        Driving Growth for CPR Tampa <br className='hidden lg:block' /> <b className="font-bold">through Digital Marketing</b>.
                    </h2>

                    <p className='text-xl pt-4 font-light max-w-3xl mx-auto text-center'>
                        CPR Tampa provides expert training and certification in life-saving skills, including CPR, ACLS, PALS, and BLS. Through tailored digital marketing strategies, we enhanced their online presence, drove targeted traffic, and helped increase class registrations, ensuring more individuals are certified in these essential life-saving techniques.
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
                            To develop an effective strategy, we began by thoroughly understanding CPR Tampa&apos;s objectives, audience, and unique value proposition. This involved identifying the key services they offer, such as CPR, ACLS, PALS, and BLS certification courses, and ensuring that our efforts aligned with the goal of increasing online class registrations and brand visibility.
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
                            We created and distributed informative content that resonated with CPR Tampa&apos;s target audience, including blogs, tutorials, and videos. This content provided value by educating potential clients on the importance of certification and offering insights into life-saving techniques. This approach attracted qualified traffic and nurtured leads through valuable educational material.
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
                            Our digital marketing strategy included extensive market research to identify CPR Tampa&apos;s target audience, establish specific goals, and select appropriate channels. We focused on optimizing their website and creating compelling offers that encouraged users to register for classes. Our ultimate goal was to generate high-quality leads and increase conversions through organic and paid marketing efforts.
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
                            CPR Tampa has seen remarkable growth due to our tailored digital marketing efforts. By focusing on SEO, content marketing, and targeted campaigns, we were able to help them increase organic traffic and registrations. Notably, we Boosted the visibility of the site for critical keywords like “ACLS class Tampa,&quot; &quot;PALS class Tampa,&quot; and “Basic Life Support Tampa,&quot; leading to a notable increase in leads and conversions.
                        </p>
                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='max-w-3xl mx-auto md:pb-20 pb-10 content-aria'>
                    <p>
                        Our approach started with in-depth research to analyze CPR Tampa&apos;s business, competitors, and audience. Using a combination of SEO, content marketing, lead generation tactics, and paid campaigns, we created an integrated marketing strategy to increase visibility, drive traffic, and generate quality leads for online class registration.
                    </p>

                    <h1>
                        CPR Tampa&apos;s Success Story

                    </h1>

                    <p>
                        CPR Tampa has experienced significant growth thanks to our bespoke digital marketing strategy. With a focus on SEO and content, we helped increase organic sessions by 650% and drove a 300% increase in online class registrations.
                    </p>

                    {/* <div className='bg-white p-5 mb-3'>
                        <Image width={600} height={100} src={'/images/details-image/details-image2.png'} alt={`Slide`} className='w-full' />
                    </div> */}

                    <p>
                        By leveraging a combination of targeted SEO, content creation, and PPC campaigns, CPR Tampa achieved a steady rise in qualified leads and conversions.
                    </p>


                    <h1>
                        <span>Google My Business (GMB) Optimization</span>
                    </h1>

                    <p>
                        We optimized CPR Tampa&apos;s Google My Business profile to improve their local visibility. This included accurate business information, regular updates, and effective management of customer reviews. 
                    </p>

                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/CPR_tampa_review.png'} alt={`Slide`} className='w-full' />

                    </div>

                    <p>
                    By focusing on local SEO and managing their GMB profile, CPR Tampa ranked #1 for terms such as &quot;PALS class Tampa&quot; and &quot;Basic Life Support Tampa,&quot; increasing local search traffic and driving potential customers directly to their site for class registrations.
                    </p>
                    {/* 
          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image3.png'} alt={`Slide`} className='w-full' />
          </div> */}


                    <h1>Local SEO</h1>
                    <p>Local SEO played a critical role in enhancing CPR Tampa&apos;s visibility within Tampa and surrounding areas. By targeting high-value keywords like &quot;ACLS class Tampa,&quot; &quot;PALS class Tampa,&quot; and &quot;Basic Life Support Tampa,&quot; we ensured CPR Tampa ranked high on search engines for these crucial search terms. This led to improved local search results, increasing organic traffic from people specifically searching for CPR certification in the area.
                    </p>
                    <div className='mb-3 '>
                        <Image width={600} height={100} src={'/images/details-image/CPR_tampa_browser.png'} alt={`Slide`} className='w-full' />
                    </div>



                    <h1>
                        Social Media Marketing
                    </h1>
                    <p>Boosted 360 amplified CPR Tampa&apos;s social media presence by developing targeted campaigns aimed at educating the community and generating leads. Regular content posts, paid social ads, and community engagement efforts increased brand awareness by 35%, Boosted audience interaction by 40%, and led to a 20% increase in class sign-ups. We strategically used social media to connect with both individuals and businesses seeking CPR training.</p>
                    {/* <div className='bg-white p-5 mb-3 '>
                        <div className='w-[70%] mx-auto'>
                            <Image width={600} height={100} src={'/images/details-image/contactform.png'} alt={`Slide`} className='w-full' />
                        </div>
                    </div> */}

                    <h1>
                        Lead Generation
                    </h1>
                    <p>We optimized lead generation strategies through a seamless online class registration process. By offering easy-to-complete forms, strategic calls-to-action (CTAs), and compelling content, we captured high-quality leads directly from the website. These leads were nurtured with follow-up emails and personalized offers, which ultimately increased class registrations and conversions.</p>
                    <h1>
                        Content Marketing
                    </h1>
                    <p>Our content marketing strategy for CPR Tampa focused on creating relevant and educational content such as blog posts, video tutorials, and infographics on life-saving techniques. This content not only Boosted SEO rankings but also helped CPR Tampa establish credibility and trust among their audience. By providing value-driven content, CPR Tampa positioned itself as the go-to authority for CPR, ACLS, PALS, and BLS certifications.</p>

                    <h1>Ad Campaigns (PPC)</h1>
                    <p>We implemented targeted PPC campaigns to drive qualified traffic to CPR Tampa&apos;s registration pages. These campaigns, including search ads, display ads, and remarketing efforts, were highly focused on capturing individuals actively searching for CPR and first aid certification in Tampa. The targeted ads resulted in increased website traffic and a higher conversion rate for class sign-ups.</p>

                    <h1>PPC Ad Types</h1>
                    <ul>
                        <li className='list-disc list-inside'>Search Ads Campaign</li>
                        <li className='list-disc list-inside py-4'>Display Ads Campaign</li>
                        <li className='list-disc list-inside'>Remarketing Campaign
                        </li>
                    </ul>
                    <p></p>

                    <h1>Landing Page Optimization</h1>
                    <p>To maximize conversions, we optimized landing pages with clear CTAs, user-friendly design, and fast loading times. We ensured that the content on the landing pages highlighted the benefits of taking CPR classes with CPR Tampa, offering easy registration forms and clear information. The optimized landing pages contributed to higher engagement and improved conversion rates, leading to increased online class sign-ups.</p>

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
