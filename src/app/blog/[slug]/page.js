"use client"
import React from 'react';
import { Layouts } from '@/app/Component';
import Image from 'next/image';
import Link from 'next/link';
import Growing from '@/app/Component/Widgets/Homepagegreen/Growing';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Page = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <Layouts>
            <div className='xl:py-16 md:py-10 py-6'>
                <div className='container'>
                    <div className='relative before:w-full before:block before:pt-[36.6%]'>
                        <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/blog-1.jpg'} width={400} height={266} alt="thumbnail" />
                    </div>
                    <div className='py-3'>
                        <h5 className='text-sm lg:text-base font-semibold text-zinc-600 mb-1 truncate'>September 30, 2018</h5>
                    </div>
                    <div className='content-aria'>
                        <h3>I take better pictures caffeinated. Wnat to buy me a cup of coffee?</h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id estfuga.</p>
                        <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <a href='#'>omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>
                        <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam.</p>
                        <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p>
                        <h3>Heading</h3>
                        <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                        <div className='relative before:w-full before:block before:pt-[26.5%]'>
                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/blg-dtl.jpg'} width={400} height={266} alt="thumbnail" />
                        </div>
                        <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
                        <ul className='list-disc pl-4 space-y-1'>
                            <li className=' list-disc text-sm lg:text-base font-light text-black lg:leading-[1.4]'>Donec nulla non metus auctor fringilla</li>
                            <li className=' list-disc text-sm lg:text-base font-light text-black lg:leading-[1.4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className=' list-disc text-sm lg:text-base font-light text-black lg:leading-[1.4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className=' list-disc text-sm lg:text-base font-light text-black lg:leading-[1.4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className=' list-disc text-sm lg:text-base font-light text-black lg:leading-[1.4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Harum quidem rerum facilis est et expedita distinctio. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.</p>
                        <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus omnis voluptas assumenda est id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>
                        
                    </div>
                    <div className='border-t border-b border-solid border-neutral-200 py-4'>
                        <h4 className='text-xl lg:text-2xl xl:text-3xl font-bold text-black leading-none mb-8'>More Post</h4>
                            <Slider {...settings}>
                                <div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[62%] w-24 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/blog-2.jpg'} width={150} height={120} alt="thumbnail" />
                                        </div>
                                        <div className='md:pl-3 pl-2'>
                                            <h5 className='text-base lg:text-lg font-semibold text-black lg:leading-[1.2] mb-1'>Aenean mattis tortor ac sapien congue molestie</h5>
                                            <p className='text-sm lg:text-base font-semibold text-zinc-600'>September 16, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[62%] w-24 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/blog-3.jpg'} width={150} height={120} alt="thumbnail" />
                                        </div>
                                        <div className='md:pl-3 pl-2'>
                                            <h5 className='text-base lg:text-lg font-semibold text-black lg:leading-[1.2] mb-1'>Etiam commodo eros non erat tristique congue</h5>
                                            <p className='text-sm lg:text-base font-semibold text-zinc-600'>September 15, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[62%] w-24 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/blog-4.jpg'} width={150} height={120} alt="thumbnail" />
                                        </div>
                                        <div className='md:pl-3 pl-2'>
                                            <h5 className='text-base lg:text-lg font-semibold text-black lg:leading-[1.2] mb-1'>Curabitur pretium lectusnc ine fermentum fermen</h5>
                                            <p className='text-sm lg:text-base font-semibold text-zinc-600'>September 15, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-start'>
                                        <div className='relative before:w-full before:block before:pt-[70%] w-24 shrink-0'>
                                            <Image className='size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-md' src={'/images/blog/blog-1.jpg'} width={150} height={120} alt="thumbnail" />
                                        </div>
                                        <div className='md:pl-3 pl-2'>
                                            <h5 className='text-base lg:text-lg font-semibold text-black lg:leading-[1.2] mb-1'>Curabitur pretium lectusnc ine fermentum fermen</h5>
                                            <p className='text-sm lg:text-base font-semibold text-zinc-600'>September 15, 2018 - TAX, FINANCE</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                </div>
            </div>

            <Growing />
        </Layouts>
    );
};

export default Page;