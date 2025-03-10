'use client'
import React from 'react'
import Header from '../Component/Layout/Header';
import { work1, work2, work3, work4, work5, work6 } from '../assets/index';
import Link from 'next/link';
import Image from 'next/image';
import FooterGreen from '../Component/Layout/Footer';

const page = () => {

    const SlideItems = [
        {
            imageUrl: work1,
            title: 'Anthem Senior Living',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.'
        },
        {
            imageUrl: work2,
            title: 'CPR Kansas City',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.'
        },
        {
            imageUrl: work3,
            title: 'Tidy Up',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.'
        },
        {
            imageUrl: work4,
            title: 'Tax net',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.'
        },
        {
            imageUrl: work5,
            title: 'ServerMon',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.'
        },
        {
            imageUrl: work6,
            title: 'WP Codings',
            description: 'Anthem Senior Living is a dedicated senior care community in the United States, providing a safe, comfortable, and home-like environment for elderly individuals.'
        },
    ]
    return (
        <>
            <Header />

            <div className='pt-[120px] pb-[55px]'>
                <div className='container'>
                    <div className='grid grid-cols-2 gap-[25px]'>
                        {SlideItems.map((item, index) => (
                            <div key={index} className='bg-blue-950 h-[350px] hover:shadow-md rounded-xl overflow-hidden relative group'>
                                <div className='w-[48%] rounded-xl p-5 xl:p-6 text-white text-left h-full flex flex-col justify-center'>
                                    <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold pb-3 xl:pb-4">{item.title}</h3>
                                    <p className="text-sm xl:text-base xl:leading-5 font-light pb-4">{item.description}</p>
                                </div>

                                <Link class="absolute w-14 h-14 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out rounded-full bg-white flex items-center justify-center z-[9] shadow-lg" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="fill-secondary" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path></svg>
                                </Link>
                                <div className='absolute top-0 right-0 bottom-0 left-0 size-full rounded-xl group-hover:left-[50%] transition-all ease-in duration-300'>
                                    <Image className='size-full object-cover rounded-xl' src={item.imageUrl} alt={`${item.imageUrl.src}`} />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <FooterGreen />
        </>
    )
}

export default page