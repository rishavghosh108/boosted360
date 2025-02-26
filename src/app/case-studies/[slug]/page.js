"use client"

import React, { useState } from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import { Companie7, sliderInLogoOne,sliderInLogoThree,sliderInLogoTwo,sliderInLogoTdffe,sliderInLogolop,sliderInLogoafr,sliderInLogondg,sliderInLogocxml,sliderInLogorei,sliderInLogovbg,sliderInLogojjjd,sliderInLogomasla,sliderInLogodff,sliderInLogonnjdvd, BtnArrow, work1 } from '@/app/assets';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';
import WorkWthUsModal from "../../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal"

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
              <Image src={Companie7} alt={`Slide`} className='w-40 mx-auto lg:mx-0 brightness-75' />

              <h1 className='lg:text-5xl md:text-4xl text-3xl text-neutral-800 md:pt-10 pt-5 font-light text-center lg:text-left'>
                Jasper Grows Blog Organic Sessions 810% and Blog <br className='hidden lg:block'/>
                <span className='font-bold'>-Attributed User Signups 400X</span>
              </h1>

              <p className='pt-5 md:text-xl text-base text-neutral-800 text-center lg:text-left'>
                With <span className='font-bold text-[#459231]'>Austin Distel</span>, Senior Director of Marketing, and <span className='font-bold text-[#459231]'>Krista Doyle</span>, Manager of Content Marketing
              </p>
              <button onClick={openModal} className="ease_in_out box-shadows bg-[#2a2a2a] text-[14px] md:text-[15px] font-bold text-white uppercase flex w-fit border border-solid border-[#3e3e3e] px-[30px] md:px-[55px] py-[15px] md:py-[20px] lg:mx-0 mx-auto mt-[40px] hover:bg-[#404040] hover:border-[#404040]">
                  Work With Us 
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
            We&apos;ll build a sustainable organic <br className='hidden lg:block'/> <b className="font-bold"> growth program for you</b>.
          </h2>

          <p className='text-xl pt-4 font-light max-w-3xl mx-auto text-center'>
            Every engagement starts with research into your product, competitors, and industry to develop a bespoke organic growth strategy.
          </p>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 gap-3 pt-5 lg:pb-20 md:pb-16 pb-10'>
          <div className='bg-white border py-5 px-5'>
            <p className='text-neutral-300 text-4xl font-light'>
              1
            </p>
            <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
              Research & Strategy
            </h2>
            <p className='text-neutral-700 font-light text-base pt-5'>
              Review your existing website, understand your business model, 
                            analyze competitors, and learn your industry. Then build an 
              SEO and content strategy for organic growth.
            </p>
          </div>

          <div className='bg-white border py-5 px-5'>
            <p className='text-neutral-300 text-4xl font-light'>
              2
            </p>
            <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
              Program Implementation
            </h2>
            <p className='text-neutral-700 font-light text-base pt-5'>
              Execute the SEO program which may include producing high quality content and 
              backlinks to demonstrate subject matter expertise, build website authority, 
              and rank for target keywords.
            </p>
          </div>

          <div className='bg-white border py-5 px-5'>
            <p className='text-neutral-300 text-4xl font-light'>
              3
            </p>
            <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
              Performance Monitoring
            </h2>
            <p className='text-neutral-700 font-light text-base pt-5'>
              Build reporting dashboards to monitor search organic performance including 
              search impressions and clicks, organic traffic, and of course conversions.
            </p>
          </div>

          <div className='bg-white border py-5 px-5'>
            <p className='text-neutral-300 text-4xl font-light'>
              4
            </p>
            <h2 className='text-neutral-800 pt-5 text-xl border-b-2 pb-2'>
              Iterate & Optimize
            </h2>
            <p className='text-neutral-700 font-light text-base pt-5'>
              Identify opportunities to iterate and optimize the program 
              according to performance data and/or changes in the business.
            </p>
          </div>

        </div>
      </div>

      <div className='container'>
        <div className='max-w-3xl mx-auto md:pb-20 pb-10 content-aria'>
          <p>
            <span>Jasper is an artificial intelligence</span> writing tool that helps you write content faster. 
            Their community of users are fanatics about the product (they&apos;ve even gotten the logo 
            tattooed) and includes people from companies like Google, Airbnb, IBM, and more.
          </p>
          
          <h1>
            <span>The Challenge:</span> Build and scale a content program with few resources.
          </h1>

          <p>
            The Jasper team in July 2021 was 14 people strong, and Austin was a marketing team of one. Despite that,
             he was determined to build and scale a content program to drive organic traffic and user growth.
          </p>
          
          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image2.png'} alt={`Slide`} className='w-full' />
          </div>

          <p>
            He knew the personas and use cases deeply, but he needed support turning that knowledge into content. 
            Most importantly, he needed content that would bring in traffic that turned into users.
          </p>

          <p>
            Jasper was also migrating their website domain from jarvis.ai to jasper.ai in January 2022, 
            which meant organic traffic was at risk. The team wanted to maintain and grow their organic 
            traffic through this migration.
          </p>

          <h1>
            <span>The Goal:</span> Grow product signups with content.
          </h1>

          <p>
            The Jasper team in July 2021 was 14 people strong, and Austin was a marketing team of one. Despite that,
             he was determined to build and scale a content program to drive organic traffic and user growth.
          </p>

          <p>
            The Jasper team in July 2021 was 14 people strong, and Austin was a marketing team of one. Despite that,
             he was determined to build and scale a content program to drive organic traffic and user growth.
          </p>

          <p>
            He knew the personas and use cases deeply, but he needed support turning that knowledge into content. 
            Most importantly, he needed content that would bring in traffic that turned into users.
          </p>


          <p>
            Jasper was also migrating their website domain from jarvis.ai to jasper.ai in January 2022, 
            which meant organic traffic was at risk. The team wanted to maintain and grow their organic 
            traffic through this migration.
          </p>

          <p>
            The Jasper team in July 2021 was 14 people strong, and Austin was a marketing team of one. Despite that,
             he was determined to build and scale a content program to drive organic traffic and user growth.
          </p>

          <p>
            He knew the personas and use cases deeply, but he needed support turning that knowledge into content. 
            Most importantly, he needed content that would bring in traffic that turned into users.
          </p>

          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image1.png'} alt={`Slide`} className='w-full' />
          </div>

          <p>
            Jasper was also migrating their website domain from jarvis.ai to jasper.ai in January 2022, 
            which meant organic traffic was at risk. The team wanted to maintain and grow their organic 
            traffic through this migration.
          </p>

          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image3.png'} alt={`Slide`} className='w-full' />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="bg-cover bg-center border-t border-neutral-200 md:py-[60px] pb-10 pt-10 mt-0 lg:mb-[40px]">
          <div>
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
                </ul>
        </div>
      </div>

      <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
      <Growing />
    </Layouts>
  );
};

export default Page;
