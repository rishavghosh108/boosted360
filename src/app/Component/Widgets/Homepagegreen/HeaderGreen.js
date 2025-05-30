"use client"
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Greenlogo} from '../../../assets/index';
import { IoIosArrowDown } from "react-icons/io";

import WorkWthUsModal from "../Modal/WorkWithUs/WorkWthUsModal"


export default function HeaderGreen() {
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

    return (
        <header className='ease_in_out'>
            <div className='bg-[#5db947] p-[15px] text-center text-[#fff] mb-[20px]'>
                <div className='container'>
                    <p className='text-[17px] font-medium'>
                        We&apos;re actively hiring paid media and SEO roles at Boosted 360!
                        <Link href="#" className='pl-[10px] underline'>Learn More</Link>
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='flex justify-between items-center pb-[20px]'>
                    <div>
                        <Link href="/">
                            <Image src={Greenlogo} alt='logo' className='w-[172px]' />
                        </Link>
                    </div>
                    <div className={`navber ${showMenu ? 'active' : ''}`}>
                        <ul className='flex items-center navlist'>
                            <li className='pr-[40px] py-[10px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/" className=' relative ease_in_out text-[13px] font-bold text-black uppercase hover:underline flex items-center justify-between'>
                                    Services
                                    <span className='hidden lg:block'><IoIosArrowDown /></span>
                                </Link>
                                <ul className='mega_menu ease_in_out absolute w-full max-w-[250px] bg-white rounded-[10px] p-[10px] z-10'>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>SEO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Programmatic SEO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Content Marketing</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Paid Advertising</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>CRO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Performance Creative</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='pr-[40px] py-[10px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/" className='ease_in_out text-[13px] font-bold text-black uppercase hover:underline flex items-center justify-between'>
                                    Industries 
                                    <span className='hidden lg:block'><IoIosArrowDown /></span>
                                </Link>
                                <ul className='mega_menu ease_in_out absolute w-full max-w-[250px] bg-white rounded-[10px] p-[10px] z-10'>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>SEO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Programmatic SEO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Content Marketing</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Paid Advertising</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>CRO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Performance Creative</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='pr-[40px] py-[10px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/" className='ease_in_out text-[13px] font-bold text-black uppercase hover:underline flex items-center justify-between'>
                                    About Us 
                                    <span className='hidden lg:block'><IoIosArrowDown /></span>
                                </Link>
                                <ul className='mega_menu ease_in_out absolute w-full max-w-[250px] bg-white rounded-[10px] p-[10px] z-10'>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>SEO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Programmatic SEO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Content Marketing</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Paid Advertising</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>CRO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Performance Creative</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='pr-[40px] py-[10px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/" className='ease_in_out text-[13px] font-bold text-black uppercase hover:underline flex items-center justify-between'>
                                    Learn
                                    <span className='hidden lg:block'><IoIosArrowDown /></span>
                                </Link>
                                <ul className='mega_menu ease_in_out absolute w-full max-w-[250px] bg-white rounded-[10px] p-[10px] z-10'>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>SEO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Programmatic SEO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Content Marketing</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Paid Advertising</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>CRO</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='block text-[12px] font-bold text-black uppercase mx-[7px] my-[15px]'>Performance Creative</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button onClick={openModal} className='ease_in_out block text-[13px] font-bold text-[#5db947] uppercase px-[37px] py-[10px] bg-[#fff] border-2 border-solid border-[#5db947] hover:bg-[#5db947] hover:text-[#fff]'>
                                    Work With Us
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='block lg:hidden'>
                        <button onClick={toggleMenu} id="hamburger" className={` ${showMenu ? 'active' : ''} pt-1 inline-block`}>
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
