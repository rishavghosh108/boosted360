'use client'
import React from 'react'
import Header from '../Component/Layout/Header';
import { work1, work2, work3, work4, work5, work6 } from '../assets/index';
import Link from 'next/link';
import Image from 'next/image';
import { Layouts } from '@/app/Component';
import Growing from '../Component/Widgets/Homepagegreen/Growing';

const page = () => {

    const SlideItems = [
        {
            imageUrl: work1,
            title: 'Anthem Senior Living',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.',
            slug: '/case-studies/anthem-senior'
        },
        {
            imageUrl: work2,
            title: 'CPR Kansas City',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.',
            slug: '/case-studies/curb-appeal'
        },
        {
            imageUrl: work3,
            title: 'Tidy Up',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.',
            slug: '/case-studies/curb-appeal'
        },
        {
            imageUrl: work4,
            title: 'Tax net',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.',
            slug: '/case-studies/curb-appeal'
        },
        {
            imageUrl: work5,
            title: 'ServerMon',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.',
            slug: '/case-studies/curb-appeal'
        },
        {
            imageUrl: work6,
            title: 'WP Codings',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.',
            slug: '/case-studies/curb-appeal'
        },
    ]
    return (
        <Layouts>
            <div className='pt-8 pb-16'>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[18px] sm:gap-[25px] lg:px-0 px-0 sm:px-10 nn1:px-[15%]'>
                        {SlideItems.map((item, index) => (
                            <div key={index} className='bg-blue-950 hover:shadow-md rounded-xl overflow-hidden relative group'>
                                <div className='w-[48%] absolute top-0 left-0 rounded-xl p-2 sm:p-5 xl:p-6 text-white text-left h-full flex flex-col justify-center'>
                                    <h3 className="text-[16px] sm:text-xl xl:text-2xl 2xl:text-3xl font-semibold pb-3 xl:pb-4">{item.title}</h3>
                                    <p className="text-[12px] sm:text-sm xl:text-base leading-[1] xl:leading-5 font-light pb-4">{item.description}</p>
                                </div>

                                <Link className="absolute size-[2rem] sm:size-14 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out rounded-full bg-white flex items-center justify-center z-[9] shadow-lg" href={item.slug}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="fill-secondary" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path></svg>
                                </Link>
                                <Image className='size-full object-cover rounded-xl relative left-0 group-hover:left-[50%] transition-all ease-in duration-300' src={item.imageUrl} alt={`${item.imageUrl.src}`} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Growing />
        </Layouts>
    )
}

export default page