"use client"
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Greenlogo} from '../../assets/index';
import { IoIosArrowDown } from "react-icons/io";

import WorkWthUsModal from "../../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal"


export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    const [subMenu, setSubMenu] = useState('');
    const HandelSubMenu = (val) => {
        if(subMenu === val){
            setSubMenu('')
        } else {
            setSubMenu(val)
        }
    }

      // header sticky
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop >= 200 ? header.classList.add('active') : header.classList.remove('active');
    };

    // modal

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    // 
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropMenu = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <header className='ease_in_out fixed top-0 left-0 w-full bg-white z-[999]'>
            
            <div className='container'>
                <div className='flex justify-between items-center py-2 lg:py-0'>
                    <div>
                        <Link href="/">
                            <Image src={Greenlogo} alt='logo' className='w-[172px]' />
                        </Link>
                    </div>
                    <div className={`navber ${showMenu ? 'active' : ''}`}>
                        <ul className='flex items-center navlist relative'>

                            <li className='lg:mr-[40px] py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/" className=' relative ease_in_out text-[13px] font-bold text-black uppercase hover:underline flex items-center justify-between'>
                                    Home
                                </Link>
                            </li>

                            <li className='lg:mr-[40px] py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/about-us" className='ease_in_out text-[13px] font-bold text-black uppercase hover:underline flex items-center justify-between'>
                                    About Us 
                                </Link>
                            </li>

                            <li className='lg:mr-[40px] py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/" className='pointer-events-none hidden relative ease_in_out text-[13px] font-bold text-black uppercase hover:underline lg:flex items-center justify-between'>
                                    Services
                                    <span className='hidden lg:block'><IoIosArrowDown /></span>
                                </Link>
                                <div className='mega_menu lg:space-y-0 space-y-4 lg:divide-x-[1px] divide-slate-200 ease_in_out absolute w-full max-w-[760px] right-0 lg:shadow grid lg:grid-cols-3 grid-cols-1 bg-white rounded-b-2xl p-[10px] z-30'>
                                    <div className='lg:px-4 '>
                                        <button onClick={() => toggleDropMenu(1)} className={`lg:pointer-events-none flex items-center -mb-1 text-sm lg:text-base text-black lg:font-bold font-[750] ${ openIndex === 1 ? 'active-rotate' : '' }`}>
                                            SEO
                                            <span className='lg:hidden px-2'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <ul className={`${openIndex === 1 ? 'block' : 'lg:block hidden'}`}>
                                            <li>
                                                <Link href="/services/search-engine-optimization" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3'>Search Engine Optimization</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/local-seo" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3'>Local SEO</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/ecommerce-seo" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3'>Ecommerce SEO</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/seo-audit" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3'>SEO Audit</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='lg:px-4'>
                                        <button onClick={() => toggleDropMenu(2)} className={`lg:pointer-events-none flex items-center -mb-1 text-sm lg:text-base text-black lg:font-bold font-[750] ${ openIndex === 2 ? 'active-rotate' : '' }`}>
                                            Paid Advertising
                                            <span className='lg:hidden px-2'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <ul className={`${openIndex === 2 ? 'block' : 'lg:block hidden'}`}>
                                            <li>
                                                <Link href="/services/google-ads" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3'>Google Ads</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/meta-ads" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3'>Meta Ads</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/amazon-marketing" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3'>Amazon Marketing</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/youtube-advertising" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3'>YouTube Advertising</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='lg:px-4'>
                                        <button onClick={() => toggleDropMenu(3)} className={`lg:pointer-events-none flex items-center -mb-1 text-sm lg:text-base text-black lg:font-bold font-[750] ${ openIndex === 3 ? 'active-rotate' : '' }`}>
                                            Online Marketing
                                            <span className='lg:hidden px-2'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <ul className={`${openIndex === 3 ? 'block' : 'lg:block hidden'}`}>
                                            <li>
                                                <Link href="/services/social-media-marketing" className='block text-[12px] font-bold text-black uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3'>Social Media Marketing</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/email-marketing" className='block text-[12px] font-bold text-black uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3'>Email Marketing</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/reputation-management" className='block text-[12px] font-bold text-black uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3'>Reputation Management</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/content-marketing" className='block text-[12px] font-bold text-black uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3'>Content Marketing</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className='lg:mr-[40px] py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/case-studies" className='ease_in_out text-[13px] font-bold text-black uppercase hover:underline flex items-center justify-between'>
                                    Case Studies 
                                </Link>
                            </li>
                            
                            <li className='lg:mr-[40px] py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/blog" className='ease_in_out text-[13px] font-bold text-black uppercase hover:underline flex items-center justify-between'>
                                    Blog 
                                </Link>
                            </li>

                            <li>
                                <button onClick={openModal} className='ease_in_out block text-[13px] font-bold text-[#5db947] uppercase px-[37px] py-[10px] bg-[#fff] border-2 border-solid border-[#5db947] hover:bg-[#5db947] hover:text-[#fff]'>
                                    Work With Us
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='block lg:hidden'>
                        <button onClick={toggleMenu} id="hamburger" className={` ${showMenu ? 'active' : ''} pt-1`}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>
                    </div>
                </div>
            </div>
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    );
}