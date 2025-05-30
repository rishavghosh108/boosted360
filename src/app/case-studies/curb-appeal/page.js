"use client"

import React, { useState } from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import { Companie7, sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd, BtnArrow, work1, anthem_google,work2 } from '@/app/assets';
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
                Empowering Curb Appeal Lawn&apos;s 
                {/* <br className='hidden lg:block' /> */}
                <span className='font-bold'> Digital Transformation</span>
              </h1>

              <p className='pt-5 md:text-xl text-base text-neutral-800 text-center lg:text-left'>
                

                Boosted 360 drove growth for Curb Appeal Lawn through a <span className='font-bold text-[#459231]'>digital marketing</span> strategy that included SEO, content marketing, resulting in increased brand <span className='font-bold text-[#459231]'>visibility, engagement, and revenue.</span> 

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
            <Image width={597} height={100} src={work2} className='max-w-3xl mx-auto w-full h-96 object-contain' alt={`Slide`} />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-3 text-center items-center pb-10 lg:pt-5'>
          <div className='bg-white border py-10 px-2'>
            <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
            5k/<sub className='text-[22px] font-semibold relative bottom-0'>month</sub>
            </h2>
            <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
              Page views
            </p>
          </div>

          <div className='bg-white border py-10 px-2'>
            <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
              50%
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
          Driving Growth for Curb Appeal Lawn<br className='hidden lg:block' /> <b className="font-bold">through Targeted Digital Marketing</b>.
          </h2>

          <p className='text-xl pt-4 font-light max-w-3xl mx-auto text-center'>
          Curb Appeal Lawn is dedicated to enhancing the beauty of residential and commercial properties. Over the years, Boosted 360 has worked closely with Curb Appeal Lawn to transform their digital presence, drive traffic, and convert leads into long-term clients. Through a strategic blend of SEO and content marketing, we significantly Boosted their online visibility and brand recognition.
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
            To understand the unique needs of Curb Appeal Lawn, we first identified their business goals and target audience. We analyzed the specific challenges they faced in gaining visibility and attracting high-quality leads. 
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
            Our content marketing strategy for Curb Appeal Lawn involved creating valuable, informative content to engage potential clients. This included blog posts on lawn care tips, videos showing their service quality showcasing before-and-after transformations. 
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
            The marketing strategy was built around SEO to ensure the website rank high for relevant local keywords. Strategies were focused on user-generated content and client testimonials to create community engagement to convert them into long-term clients.
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
            Through our digital marketing efforts, website traffic increased by over 40%, leading to a significant boost in leads. The strategic use of SEO placed them at the forefront of local search results, while content marketing led to higher engagement and increased brand awareness. 
            </p>
          </div>

        </div>
      </div>

      <div className='container'>
        <div className='max-w-3xl mx-auto md:pb-20 pb-10 content-aria'>
          <p>
          Our approach started with extensive research, analyzing competitors, and gaining deep insights into Curb Appeal Lawn&apos;s target demographic. From there, we developed a custom digital marketing strategy that included SEO, content creation and lead generation tactics. With these combined efforts, we created an integrated approach that ensured sustained growth and engagement for the business.
          </p>

          <h1>
          Curb Appeal Lawn&apos;s Success Story:

          </h1>

          <p>
          Through our strategic marketing campaigns, Curb Appeal Lawn experienced substantial growth in visibility and engagement. We successfully implemented a variety of digital strategies that resulted in a remarkable 400% increase in organic search traffic and a 500X increase in online lead generation.
          </p>

          {/* <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image2.png'} alt={`Slide`} className='w-full' />
          </div> */}

          <p>
          By focusing on long-term SEO strategies, content marketing, and leveraging local search opportunities, we were able to create a sustainable, impactful online presence that consistently attracted new customers.
          </p>


          <h1>
            <span>Google My Business (GMB) Optimization</span>
          </h1>

          <p>
          We optimized Curb Appeal Lawn&apos;s GMB listing to improve their visibility in local searches. By ensuring their business information was accurate and up-to-date, and by actively managing reviews and posting regular updates, we increased their ranking for keywords like &quot;Lawn care services near me&quot; and &quot;Best lawn service in Simpsonville.
          </p>

          <div className='mb-3 '>
            <Image width={600} height={100} src={'/images/details-image/curb_appeal_review.png'} alt={`Slide`} className='w-full' />

          </div>

          <p>
          &quot;This led to greater local exposure and a continuous flow of organic traffic to their site, resulting in a higher number of customer inquiries.
          </p>
          {/* 
          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image3.png'} alt={`Slide`} className='w-full' />
          </div> */}


          <h1>Local SEO</h1>
          <p>Focusing on Local SEO, we targeted location-specific keywords such as &quot;Lawn care services Simpsonville&quot; and &quot;Affordable lawn care Simpsonville&quot;. This tactic enabled Curb Appeal Lawn to rank highly for critical search terms in their service areas. As a result, the company experienced increased local visibility, attracting clients who were actively searching for lawn care services within their geographic region.
          </p>
          <div className='mb-3 '>
            <Image width={600} height={100} src={'/images/details-image/curb_appeal_browser.png'} alt={`Slide`} className='w-full' />
          </div>

       

          <h1>
            Lead Generation
          </h1>
          <p>We implemented a multi-faceted lead generation strategy for Curb Appeal Lawn, incorporating email marketing, web forms, phone call tracking, and social media inquiries. Our approach involved creating high-quality landing pages, valuable lead magnets like downloadable guides, and compelling calls-to-action. This resulted in an increase in high-quality leads and improved conversion rates, nurturing these leads through personalized email follow-ups and phone consultations.</p>
          <div className='bg-white p-5 mb-3 '>
            <div className='w-[70%] mx-auto'>
              <Image width={600} height={100} src={'/images/details-image/curb_appeal_contact.png'} alt={`Slide`} className='w-full' />
            </div>
          </div>

          <h1>
            Content Marketing
          </h1>
          <p>We developed a targeted content marketing strategy for Curb Appeal Lawn, which included blogs, service pages, and educational videos that informed potential customers about lawn care best practices and the benefits of professional lawn services. By offering valuable content, we not only increased website traffic but also built trust with the audience, positioning Curb Appeal Lawn as a thought leader in the industry. As a result, Curb Appeal Lawn saw a 300% increase in organic traffic and improved their SEO rankings.</p>

        

          <h1>
            Landing Page Optimization
          </h1>
          <p>Landing page optimization played a critical role in converting visitors into customers. We worked on improving the user experience by optimizing design, reducing load times, and enhancing call-to-action buttons. By incorporating user-friendly features and persuasive copy, we saw higher engagement and conversion rates. This led to more website visitors becoming clients, further boosting Curb Appeal Lawn&apos;s customer base and online presence.</p>

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
