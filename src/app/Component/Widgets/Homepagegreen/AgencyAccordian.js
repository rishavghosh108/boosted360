"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Collapse, Expand, CtaSmall } from "../../../assets/index"

export default function AgencyAccordian() {

    // const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const items = [
        {
            title: 'SEO Services',
            content: 'Our SEO services include tactics and strategies for improving ranking and visibility of a website.',
            ctaLink: '/services/search-engine-optimization'
        },
        {
            title: 'Pay-Per-Click (PPC) Advertising',
            content: 'From Google ads to Facebook ads, we help our clients to accelerate sales and with lead generation.',
            ctaLink: '/services/google-ads'
        },
        {
            title: 'Social Media Marketing',
            content: 'Our SMM services are for managing social media presence, engaging audiences and reach target goals.',
            ctaLink: '/services/social-media-marketing'
        },
        {
            title: 'Content Marketing',
            content: 'Our content marketing helps in creating and distributing valuable content for attracting and engaging target people. ',
            ctaLink: '/services/content-marketing'
        },
    ];

    return (
        <div className="">
            {items.map((item, index) => (
                <div className="mb-[10px] p-[20px] rounded-[10px] bg-[#fff] border border-solid border-[#ececec]" key={index} >
                    <button className={`flex items-center justify-between w-full rounded-[10px] ${activeIndex === index ? '' : ''} text-left text-[18px] md:text-[21px] lg:text-[26px] xl:text-[30px] font-bold text-black`}
                        onClick={() => onTitleClick(index)}
                    >
                        <span className='flex items-center'>
                            <Image src={CtaSmall} alt='cta-small' />
                            <span className='pl-[18px]'>{item.title}</span>
                        </span>
                        {activeIndex === index ? (
                            <Image src={Collapse} alt="close-icon" className="ml-[6px]" />
                        ) : (
                            <Image src={Expand} alt="open-icon" className="ml-[6px]" />
                        )}
                    </button>
                    {activeIndex === index && (
                        <div className="pt-[27px] text-[20px] leading-[1.6] font-medium text-black">
                            <p>{item.content}</p>
                            <Link href={item.ctaLink} className='mt-[20px] flex items-center text-[15px] font-extrabold text-[#5db947]'>
                                Read More
                                <span className='ml-[6px]'><Image src={CtaSmall} alt='cta-small' /></span>
                            </Link>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}