"use client"
import React from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import Link from 'next/link';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';

const Page = () => {
    const blogdata = [
        {
            id: 0,
            blogImage:'/images/blog/blog-1.jpg',
            publishDate: 'September 30, 2018 ',
            userProfile: '',
            userName: 'Braxton Noble',
            title: 'Google My Business Optimization: A Step-by-Step Guide for Local Rankings',
            description: 'Businesses may manage their online presence across Google Maps and Google Search with Google My Business (GMB), a free product from Google. Businesses can use it to build a profile that includes important details like their address, phone number, website, business hours, and client reviews. Businesses may improve their exposure in local search results and give prospective clients the information they need to make educated decisions by optimizing their Google My Business listing.',
            dedicatedPageLink:'/blog/google-business'
        },
        {
            id: 1,
            blogImage:'/images/blog/blog-2.png',
            publishDate: 'September 30, 2018', 
            userProfile: '',
            userName: 'Braxton Noble',
            title: 'Email Marketing Trends in 2025: What Businesses Need to Know',
            description: "It's difficult to manage email marketing for small business campaigns and an e-commerce firm at the same time, to be honest. Meeting client expectations and boosting sales are just two of the many responsibilities you have.",
            dedicatedPageLink:'/blog/email-marketing-trends'
        },
        {
            id: 2,
            blogImage:'/images/blog/googleadsvsmetaads.webp',
            publishDate: 'March 28, 2025', 
            userProfile: '',
            userName: 'Braxton Noble',
            title: 'Meta Ads vs. Google Ads: Which One Delivers Better ROI for Your Business?',
            description: "Google Ads and Meta Ads are two platforms that have become leaders in the ever-changing field of digital marketing. Although each has special benefits, which one offers a higher return on investment (ROI)? The features, affordability, and overall effect on good roi for business of each platform will be covered in greater detail in this blog article.",
            dedicatedPageLink:'/blog/meta-ads-vs-google-ads'
        }
        
    ]
    return (
        <Layouts>
            <title>Latest Blogs & Insights - Boosted360</title>
            <meta name="title" content='Latest Blogs & Insights - Boosted360' />
            <meta name="description" content="Stay ahead with the latest marketing insights! Explore Boosted360’s blog for expert tips, trends, and strategies. Read now & boost your growth!" />


            <div className='xl:py-16 md:py-10 py-6'>
                <div className='container'>
                    <div className='flex flex-wrap'>
                        <div className='md:w-2/3 w-full'>
                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-3'>

                                {blogdata.map((item,index) => (
                                    <Link key={index} href={item.dedicatedPageLink} className='no-underline text-black'>
                                        <div className='border border-solid border-neutral-200 p-2 rounded-md'>
                                            <div className='relative before:w-full before:block before:pt-[56.6%]'>
                                                <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={item.blogImage} width={400} height={266} alt="thumbnail" />
                                            </div>
                                            <div className='py-4'>
                                                <h5 className='text-sm lg:text-base font-semibold text-zinc-600 mb-1 truncate'>{item.publishDate}</h5>
                                                <div className='flex items-center mb-4'>
                                                    <div className='size-6 shrink-0 mr-2'>
                                                        <Image className='size-full object-cover' src={'/images/blog/Ellipse-1.jpg'} width={24} height={24} alt="thumbnail" />
                                                    </div>
                                                    <p className='text-sm lg:text-base font-semibold text-zinc-600 truncate'>{item.userName}</p>
                                                </div>
                                                <h4 className='text-lg lg:text-xl font-semibold text-black lg:leading-[1.2] mb-3'>{item.title}
                                                </h4>
                                                <p className="text-sm lg:text-base font-light text-black lg:leading-[1.4] ">
                                                    <span className='truncate-lines inline-block'>{item.description}</span>
                                                    <span className="text-blue-600 font-normal read-more"> read more</span>
                                                </p>


                                            </div>
                                        </div>
                                    </Link>
                                ))}


                            </div>
                            <nav className='md:my-12 my-7'>
                                <ul className="flex w-fit mx-auto space-x-2 text-sm">
                                    <li>
                                        <Link href="/" className='inline-flex justify-center items-center p-1 size-9 rounded-md font-semibold text-base border border-solid border-zinc-400 bg-[#5db947] text-white'>1</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className='inline-flex justify-center items-center p-1 size-9 rounded-md font-semibold text-base border border-solid border-zinc-400 bg-white text-black hover:bg-[#5db947] hover:text-white'>2</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className='inline-flex justify-center items-center p-1 size-9 rounded-md font-semibold text-base border border-solid border-zinc-400 bg-white text-black hover:bg-[#5db947] hover:text-white'>3</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className='inline-flex justify-center items-center p-1 size-9 rounded-md font-semibold text-base border border-solid border-zinc-400 bg-white text-black hover:bg-[#5db947] hover:text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" strokeLinecap="square" d="m5 14l7-6.5L5 1" strokeWidth="1" /></svg>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='md:w-1/3 w-full lg:pl-8 pl-5'>
                            <div className='space-y-4'>
                                <div className='border border-solid border-neutral-200 pl-2 py-4 pr-8 rounded-md relative bg-white'>
                                    <input type='search' className='text-base font-light text-black lg:leading-[1.4] w-full outline-none' placeholder='Search..' />
                                    <button type='submit' className='bg-transparent size-6 flex items-center justify-center absolute right-2 top-3.5 text-neutral-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
                                        </svg>
                                    </button>
                                </div>
                                <div className='border border-solid border-neutral-200 p-4 rounded-md space-y-4'>
                                    <h5 className='text-lg lg:text-xl font-semibold text-black lg:leading-[1.2]'>Recent Post</h5>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[90%] lg:w-24 w-16 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/min-1.jpg'} width={100} height={100} alt="thumbnail" />
                                        </div>
                                        <div className='pl-3'>
                                            <h6 className='text-sm lg:text-base font-semibold text-black mb-1'>Aenean mattis tortor ac sapien congue molestie</h6>
                                            <p className='text-xs lg:text-sm font-light text-neutral-600 lg:leading-[1.2]'>September 16, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[90%] lg:w-24 w-16 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/min-2.jpg'} width={100} height={100} alt="thumbnail" />
                                        </div>
                                        <div className='pl-3'>
                                            <h6 className='text-sm lg:text-base font-semibold text-black mb-1'>Etiam commodo eros non erat tristique congue</h6>
                                            <p className='text-xs lg:text-sm font-light text-neutral-600 lg:leading-[1.2]'>September 15, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[90%] lg:w-24 w-16 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/min-3.jpg'} width={100} height={100} alt="thumbnail" />
                                        </div>
                                        <div className='pl-3'>
                                            <h6 className='text-sm lg:text-base font-semibold text-black mb-1'>Curabitur pretium lectusnc ine fermentum fermen</h6>
                                            <p className='text-xs lg:text-sm font-light text-neutral-600 lg:leading-[1.2]'>September 14, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[90%] lg:w-24 w-16 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/min-4.jpg'} width={100} height={100} alt="thumbnail" />
                                        </div>
                                        <div className='pl-3'>
                                            <h6 className='text-sm lg:text-base font-semibold text-black mb-1'>Suspendisse viverra massa eget nibh ultricies mollis</h6>
                                            <p className='text-xs lg:text-sm font-light text-neutral-600 lg:leading-[1.2]'>September 14, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-solid border-neutral-200 p-4 rounded-md space-y-4'>
                                    <h5 className='text-lg lg:text-xl font-semibold text-black lg:leading-[1.2]'>Categories</h5>
                                    <ul className='p-0 m-0 list-none divide-y-[1px] divide-neutral-200'>
                                        <li className='text-sm lg:text-base font-semibold text-neutral-700 py-3'>Tax</li>
                                        <li className='text-sm lg:text-base font-semibold text-neutral-700 py-3'>Audit</li>
                                        <li className='text-sm lg:text-base font-semibold text-neutral-700 py-3'>Bookkeeping</li>
                                        <li className='text-sm lg:text-base font-semibold text-neutral-700 py-3'>Finance</li>
                                        <li className='text-sm lg:text-base font-semibold text-neutral-700 py-3'>Debt Financing</li>
                                        <li className='text-sm lg:text-base font-semibold text-neutral-700 py-3'>Equity Financing</li>
                                        <li className='text-sm lg:text-base font-semibold text-neutral-700 py-3'>Grant Financing</li>
                                        <li className='text-sm lg:text-base font-semibold text-neutral-700 py-3'>Due Diligence</li>
                                    </ul>
                                </div>
                                <div className='border border-solid border-neutral-200 p-4 rounded-md space-y-4'>
                                    <h5 className='text-lg lg:text-xl font-semibold text-black lg:leading-[1.2]'>Top Post</h5>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[90%] lg:w-24 w-16 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/min-1.jpg'} width={100} height={100} alt="thumbnail" />
                                        </div>
                                        <div className='pl-3'>
                                            <h6 className='text-sm lg:text-base font-semibold text-black mb-1'>Aenean mattis tortor ac sapien congue molestie</h6>
                                            <p className='text-xs lg:text-sm font-light text-neutral-600 lg:leading-[1.2]'>September 16, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[90%] lg:w-24 w-16 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/min-2.jpg'} width={100} height={100} alt="thumbnail" />
                                        </div>
                                        <div className='pl-3'>
                                            <h6 className='text-sm lg:text-base font-semibold text-black mb-1'>Etiam commodo eros non erat tristique congue</h6>
                                            <p className='text-xs lg:text-sm font-light text-neutral-600 lg:leading-[1.2]'>September 15, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[90%] lg:w-24 w-16 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/min-3.jpg'} width={100} height={100} alt="thumbnail" />
                                        </div>
                                        <div className='pl-3'>
                                            <h6 className='text-sm lg:text-base font-semibold text-black mb-1'>Curabitur pretium lectusnc ine fermentum fermen</h6>
                                            <p className='text-xs lg:text-sm font-light text-neutral-600 lg:leading-[1.2]'>September 14, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-4 rounded-md space-y-4'>
                                    <h5 className='text-lg lg:text-xl font-semibold text-black lg:leading-[1.2]'>Subscribe Newsletter</h5>
                                    <div className='border border-solid border-neutral-200 rounded-md flex items-center p-2'>
                                        <input type='email' className='text-base font-light text-black lg:leading-[1.4] p-2 w-full outline-none' placeholder='Email address' />
                                        <button type='submit' className=' text-white bg-[#5db947] border-[#5db947] border sm:text-sm text-xs font-medium rounded-none inline-block lg:px-6 px-4 sm:py-2 py-1.5'>
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Growing />
        </Layouts>
    );
};

export default Page;