"use client"

import React, { useState } from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import { Companie7, sliderInLogoOne, sliderInLogoThree, sliderInLogoTwo, sliderInLogoTdffe, sliderInLogolop, sliderInLogoafr, sliderInLogondg, sliderInLogocxml, sliderInLogorei, sliderInLogovbg, sliderInLogojjjd, sliderInLogomasla, sliderInLogodff, sliderInLogonnjdvd, BtnArrow, work1, anthem_google,} from '@/app/assets';
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
              <Image src={'/images/details-image/anthem_png.png'} width={100} height={100} alt={`Slide`} className='w-40 mx-auto lg:mx-0 brightness-75' />

              <h1 className='lg:text-5xl md:text-4xl text-3xl text-neutral-800 md:pt-10 pt-5 font-light text-center lg:text-left'>
                Empowering Anthem Senior 
                {/* <br className='hidden lg:block' /> */}
                <span className='font-bold'>Living&apos;s Digital Growth</span>
              </h1>

              <p className='pt-5 md:text-xl text-base text-neutral-800 text-center lg:text-left'>
                Boosted 360 enhanced Anthem Senior Living&apos;s <span className='font-bold text-[#459231]'>digital marketing</span> with targeted content, social media, and SEO, boosting visibility and <span className='font-bold text-[#459231]'>driving growth</span>.

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
              1.8k
            </h2>
            <p className='text-neutral-700 lg:text-lg text-sm pt-4'>
              Page views
            </p>
          </div>

          <div className='bg-white border py-10 px-2'>
            <h2 className='text-[#459231] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-light'>
              66%
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
            Driving Growth for Anthem Senior Living <br className='hidden lg:block' /> <b className="font-bold">through Digital Marketing</b>.
          </h2>

          <p className='text-xl pt-4 font-light max-w-3xl mx-auto text-center'>
            Anthem Senior Living provides personalized, high-quality care for seniors, focusing on enhancing their well-being. Through strategic digital marketing, we targeted relevant audiences, optimized online presence, and utilized content marketing to increase brand awareness and drive growth, ensuring more families find their ideal senior living solution.
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
              Understanding the requirement involves identifying the client&apos;s goals, target audience, and specific needs. It&apos;s crucial to gather detailed insights and expectations to create a tailored, effective digital marketing plan that addresses their objectives.
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
              Content marketing is the creation and distribution of valuable, relevant content to attract, engage, and retain an audience. It includes blogs, videos, and social media, aiming to drive conversions and build brand authority.
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
              A marketing strategy outlines the plan to achieve specific business goals. It involves market research, identifying target audiences, setting objectives, and selecting appropriate channels, all designed to effectively promote the brand and maximize ROI.
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
              A success story in digital marketing showcases a business or campaign that achieved significant results, such as increased engagement or revenue. These stories demonstrate the effectiveness of strategies and build credibility for future efforts.
            </p>
          </div>

        </div>
      </div>

      <div className='container'>
        <div className='max-w-3xl mx-auto md:pb-20 pb-10 content-aria'>
          <p>
            <span> We start with research, analyzing your business, competitors, and audience</span>. Through tailored strategies across GMB marketing, SEO, lead generation, content creation, PPC, and landing page optimization, we create an integrated approach that ensures measurable results. Our focus is on long-term organic growth that fosters success for your business.
          </p>

          <h1>
            Anthem Senior Living&apos;s Success Story:
          </h1>

          <p>
            Anthem Senior Living has achieved remarkable growth through our bespoke digital marketing efforts.
          </p>

          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image2.png'} alt={`Slide`} className='w-full' />
          </div>

          <p>
            With a focus on organic growth, we helped them increase blog organic sessions by 810% and attributed user sign-ups grew by 400X. Through a mix of SEO, content strategy, and paid campaigns,
          </p>

          <p>
            we brought Anthem Senior Living a steady, long-term increase in leads and visibility.
          </p>

          <h1>
            <span>GMB/Google My Business/GMB Marketing</span>
          </h1>

          <p>
            We optimized Anthem Senior Living&apos;s Google My Business (GMB) listing to boost local visibility. By ensuring accurate business information, managing reviews, and posting regular updates,
          </p>

          <p>
            Anthem Senior Living ranked #1 for key terms such as &quot;Senior care living in Anthem,&quot; &quot;Anthem assisted living,&quot; and &quot;Senior living in Anthem.&quot;
          </p>

          <div className='bg-white mb-3 '>
              <Image width={600} height={100} src={'/images/details-image/Anthamreview.png'} alt={`Slide`} className='w-full' />
           
          </div>

          <p>
            This optimization resulted in greater exposure in local searches, driving more organic traffic to their website and converting leads into residents.
          </p>
{/* 
          <div className='bg-white p-5 mb-3'>
            <Image width={600} height={100} src={'/images/details-image/details-image3.png'} alt={`Slide`} className='w-full' />
          </div> */}


          <h1>
            Local SEO
          </h1>
          <p>We strategically focused on Local SEO to enhance Anthem Senior Living&apos;s search engine ranking. By optimizing their website with location-specific keywords like &quot;Senior care living in Anthem,&quot; &quot;Anthem assisted living,&quot; and &quot;Senior living in Anthem,&quot; we ensured that Anthem Senior Living ranked #1 for these critical terms. This approach significantly boosted their local visibility, driving more targeted traffic from people specifically looking for senior living options in the Anthem area.</p>
          <div className='bg-white p-5 mb-3 '>
            <div className='w-[60%] mx-auto'>
              <Image width={600} height={100} src={'/images/details-image/anthem_google.png'} alt={`Slide`} className='w-full' />
            </div>
          </div>

          <h1>
            Social Media Marketing
          </h1>
          <p>Boosted 360 enhanced Anthem Senior Living&apos;s social media marketing by crafting engaging content that resonated with their target audience. Through strategic campaigns, Boosted 360 increased brand visibility by 40%, improved audience engagement by 30%, and generated a 25% increase in leads every week. Consistent posting, paid ads, and community interaction helped drive leads and strengthen Anthem&apos;s online presence.</p>
          {/* <div className='bg-white p-5 mb-3 '>
            <div className='w-[60%] mx-auto'>
              <Image width={600} height={100} src={'/images/details-image/anthem_google.png'} alt={`Slide`} className='w-full' />
            </div>
          </div> */}

          <h1>
            Lead Generation
          </h1>
          <p>Through a multi-channel approach, we effectively generated leads for Anthem Senior Living via email, phone numbers, social media, and the website&apos;s contact forms. By offering valuable content, engaging calls-to-action, and seamless forms, we made it easy for potential clients to reach out. These efforts captured quality leads, which were nurtured through personalized follow-ups, resulting in increased inquiries and conversions for Anthem Senior Living&apos;s services.</p>
          <div className='bg-white p-5 mb-3 '>
            <div className='w-[70%] mx-auto'>
              <Image width={600} height={100} src={'/images/details-image/contactform.png'} alt={`Slide`} className='w-full' />
            </div>
          </div>

          <h1>
            Content Marketing
          </h1>
          <p>We implemented a comprehensive content marketing strategy for Anthem Senior Living, focusing on creating informative, engaging, and valuable content for their audience. By producing blog posts, guides, and videos, we educated potential customers on senior care options and assisted living services in Anthem. This approach not only boosted SEO rankings but also helped Anthem Senior Living build trust and long-term relationships with their audience, positioning them as a leader in the senior care industry. </p>

          <h1>
            Ad Campaign (PPC/Facebook Ads)
          </h1>
          <p>We launched targeted PPC and Facebook ad campaigns to drive more qualified traffic to Anthem Senior Living&apos;s website. By using precise audience targeting and compelling ad creative, we reached people actively searching for senior care services or interested in the Anthem area. The ads increased brand awareness and generated high-quality leads, contributing to the overall success of their digital marketing strategy and enhancing their online presence within the senior living space.</p>
          <p>PPC Ad types - search ads campaign, display ad campaign, remarketing campaign </p>
          <p>Facebook ad reach - Overall Facebook follower added 2k/month and audience size 290,500,000 where men and women ratio is 54.8% and 45.2% respectively. </p>

          <h1>
           Landing Page Optimization
          </h1>
          <p>Optimizing landing pages for conversions was crucial to Anthem Senior Living&apos;s digital marketing success. We focused on refining the design, improving load times, and enhancing call-to-action (CTA) buttons to create an intuitive, user-friendly experience. The addition of relevant imagery and persuasive copy led to higher engagement rates and better conversion of visitors into potential residents, ensuring that each landing page effectively communicated the value of Anthem Senior Living&apos;s services and offerings.</p>
          <p>It has increased Page Views to 6k/month and 703 visits/day that is an overall 12.5% growth.  </p>

        </div>
      </div>


      {/* <div className="container">
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
      </div> */}
      <div className='pb-10 md:pb-20'>
        <Companies />
      </div>

      <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
      <Growing />
    </Layouts>
  );
};

export default Page;
