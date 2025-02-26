"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

import { Iconplus,Iconminus, } from '../../../assets/index';

export default function Questions() {

  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: 'What is pSEO and how can a pSEO agency benefit my business? ',
      content: 'pSEO, or programmatic SEO, is a data-driven approach that leverages automation and AI to optimize content for search engines at scale. A pSEO agency can massively benefit your business by efficiently targeting numerous long-tail keywords, enhancing your online presence, and driving substantial traffic to your site. Its like having an SEO maestro conducting a digital symphony, ensuring your brands visibility crescendos in the search engine results.',
    },
    {
      title: 'Can a pSEO agency help me outrank my competitors?',
      content: 'Unlike traditional SEO, a pSEO agency deploys advanced tools and AI to analyze vast datasets for keyword opportunities. This allows for the identification of scalable keyword patterns rather than one-off terms, aligning content with user intent across thousands of search queries. Its a smarter, more systematic way to capture a wider audience by anticipating and addressing their specific search needs.',
    },
    {
      title: 'Can a pSEO agency help me outrank my competitors?',
      content: 'Absolutely! A pSEO agency specializes in identifying gaps in your competitors search presence and exploits them by creating targeted, high-quality content at scale. This strategy not only improves your search engine rankings but also offers your audience a richer informational experience. Its like entering a chess match with a grandmaster strategy, positioning you several moves ahead of the competition.',
    },
    {
      title: 'What kind of results can I expect from hiring a pSEO agency?',
      content: 'By partnering with a pSEO agency, you can expect a significant increase in organic traffic, improved search engine rankings for a multitude of keywords, and a broader content footprint online. This isnt instant magic, though; its a strategic, ongoing effort that builds momentum and delivers compounding results over time. Think of it as planting a digital forest—one that grows into a vast, enduring canopy of visibility for your brand.',
    },
  ];

  return (
    <div className="pt-[60px] md:pt-[105px]">
      <div className='container'>
        <div>
          <h3 className='text-[30px] md:text-[34px] lg:text-[40px] leading-[1.2] md:leading-[1.54] font-bold text-center text-black pb-[14px] md:pb-0'>Frequently Asked Questions</h3>
          <p className='text-[18px] md:text-[20px] lg:text-[25px] leading-[1.6] text-center text-black'>And We Have The Answers</p>
        </div>
        <div className="mx-auto pt-[30px] md:pt-[35px] w-full max-w-[1140px]">
          {items.map((item, index) => (
            <div className="group mb-[10px] rounded-[20px] border-[4px] border-solid border-[#f3f3f3] " key={index}>
              <button className={`ease_in_out flex items-center w-full justify-between group-hover:text-[#5db947] ${activeIndex === index ? '' : ''}  text-left text-[17px] md:text-[19px] lg:text-[25px]   font-medium md:font-bold text-black focus:outline-[#f3f3f3] focus-visible:outline-[#f3f3f3] bg-none py-[11px] lg:py-[20px] px-[16px] lg:px-[30px]`}
              onClick={() => onTitleClick(index)}
              >
                <span>{item.title}</span>
                {activeIndex === index ? (
                    <Image src={Iconminus} alt="close-icon" className="" />
                  ) : (
                    <Image src={Iconplus} alt="open-icon" className="" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-[16px] lg:px-[30px] pb-[20px] lg:pb-[30px] text-[16px] md:text-[17px] lg:text-[19px] leading-[1.63] text-[#666]">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='mt-[30px] md:mt-[50px]'>
            <p className='text-[17px] md:text-[18px] leading-[1.6] text-center text-[#666]'>If you were unable to find the answer youve been looking for, do not hesitate to get in touch and ask us directly.</p>
            <Link href="/" className="ease_in_out box-shadow-1 bg-[#5db947] text-[14px] md:text-[20px] font-bold text-white flex w-fit border border-solid border-[#5db947] px-[24px] md:px-[31px] py-[10px] md:py-[14px] m-auto mt-[30px] md:mt-[50px] rounded-[28px]">     
                Scale SEO Automatically  
            </Link>
        </div>
      </div>
    </div>
  )
}