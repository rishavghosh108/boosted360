"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Greenlogo } from '../../assets/index';
import { IoIosArrowDown } from "react-icons/io";
import WorkWthUsModal from "../../Component/Widgets/Modal/WorkWithUs/WorkWthUsModal";
import { usePathname } from 'next/navigation';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isServicesOpen, setisServicesOpen] = useState(false)
    const pathname = usePathname()

    const ToggleServicesRes = () => {
        setisServicesOpen(!isServicesOpen)
    }
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const [subMenu, setSubMenu] = useState('');
    const HandelSubMenu = (val) => {
        if (subMenu === val) {
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
                                <Link href="/" className={`${pathname === '/' ? 'text-[#5db947]' : 'text-black '} relative ease_in_out text-[13px] font-bold uppercase hover:underline flex items-center justify-between`}>
                                    Home
                                </Link>
                            </li>

                            <li className='lg:mr-[40px] py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/about-us" className={`${pathname === '/about-us' ? 'text-[#5db947]' : 'text-black'} ease_in_out text-[13px] font-bold uppercase hover:underline flex items-center justify-between`}>
                                    About Us
                                </Link>
                            </li>

                            {/* services for responsive  */}
                            <button onClick={ToggleServicesRes} className={`${pathname.startsWith('/services/') ? 'text-[#5db947]' : 'text-black '} w-full text-left lg:hidden pt-[10px] px-[30px] font-[750] text-[16px] lg:text-base uppercase flex items-center ${isServicesOpen ? 'pb-0' : 'pb-[10px]'}`}> <span>Services</span>
                                <span className={`lg:hidden px-2 ${isServicesOpen ? 'rotate-[180deg]' : ''}`}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                    </svg>
                                </span>
                            </button>

                            {isServicesOpen &&
                                <li className='lg:mr-[40px] lg:hidden block py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                    <div className='mega_menu lg:space-y-0 space-y-4 lg:divide-x-[1px] divide-slate-200 ease_in_out absolute w-full max-w-[760px] right-0 lg:shadow grid lg:grid-cols-3 grid-cols-1 bg-white rounded-b-2xl p-[10px] z-30 ml-2'>
                                        <div className='lg:px-4 '>
                                            <button onClick={() => toggleDropMenu(0)} className={`${['/services/mobile-app-design', '/services/saas-design', '/services/uiux-design', '/services/wordpress-design', '/services/B2B-web-design', '/services/e-commerce-web-design', '/services/web-design-&-development', '/services/website-maintenance' ].includes(pathname) ? 'text-[#5db947]' : 'text-black'} lg:pointer-events-none flex items-center -mb-1 text-[15px] lg:text-base lg:font-bold font-[750] ${openIndex === 1 ? 'active-rotate' : ''}`}>
                                                Design & Development
                                                <span className='lg:hidden px-2'>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <ul className={`${openIndex === 0 ? 'block' : 'lg:block hidden'}`}>
                                                <li>
                                                    <Link href="/services/mobile-app-design" className={`${pathname === '/services/mobile-app-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Mobile App Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/saas-design" className={`${pathname === '/services/saas-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>SaaS Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/uiux-design" className={`${pathname === '/services/uiux-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>UI/UX Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/wordpress-design" className={`${pathname === '/services/wordpress-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>WordPress Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/B2B-web-design" className={`${pathname === '/services/B2B-web-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>B2B Web Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/e-commerce-web-design" className={`${pathname === '/services/e-commerce-web-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>eCommerce Web Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/web-design-&-development" className={`${pathname === '/services/web-design-&-development' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Web Design & Development</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/website-maintenance" className={`${pathname === '/services/website-maintenance' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Website Maintenance</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='lg:px-4 '>
                                            <button onClick={() => toggleDropMenu(1)} className={`${['/services/search-engine-optimization', '/services/local-seo', '/services/ecommerce-seo', '/services/seo-audit'].includes(pathname) ? 'text-[#5db947]' : 'text-black'} lg:pointer-events-none flex items-center -mb-1 text-[15px] lg:text-base lg:font-bold font-[750] ${openIndex === 1 ? 'active-rotate' : ''}`}>
                                                SEO
                                                <span className='lg:hidden px-2'>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <ul className={`${openIndex === 1 ? 'block' : 'lg:block hidden'}`}>
                                                <li>
                                                    <Link href="/services/search-engine-optimization" className={`${pathname === '/services/search-engine-optimization' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Search Engine Optimization</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/local-seo" className={`${pathname === '/services/local-seo' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Local SEO</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/ecommerce-seo" className={`${pathname === '/services/ecommerce-seo' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Ecommerce SEO</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/seo-audit" className={`${pathname === '/services/seo-audit' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>SEO Audit</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='lg:px-4'>
                                            <button onClick={() => toggleDropMenu(2)} className={`${['/services/google-ads', '/services/meta-ads', '/services/amazon-marketing', '/services/youtube-advertising'].includes(pathname) ? 'text-[#5db947]' : 'text-black'} lg:pointer-events-none flex items-center -mb-1 text-[15px] lg:text-base lg:font-bold font-[750] ${openIndex === 2 ? 'active-rotate' : ''}`}>
                                                Paid Advertising
                                                <span className='lg:hidden px-2'>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <ul className={`${openIndex === 2 ? 'block' : 'lg:block hidden'}`}>
                                                <li>
                                                    <Link href="/services/google-ads" className={`${pathname === '/services/google-ads' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold  uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Google Ads</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/meta-ads" className={`${pathname === '/services/meta-ads' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Meta Ads</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/amazon-marketing" className={`${pathname === '/services/amazon-marketing' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Amazon Marketing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/youtube-advertising" className={`${pathname === '/services/youtube-advertising' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>YouTube Advertising</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='lg:px-4'>
                                            <button onClick={() => toggleDropMenu(3)} className={`${['/services/social-media-marketing', '/services/email-marketing', '/services/reputation-management', '/services/content-marketing'].includes(pathname) ? 'text-[#5db947]' : 'text-black'} lg:pointer-events-none flex items-center -mb-1 text-[15px] lg:text-base lg:font-bold font-[750] ${openIndex === 3 ? 'active-rotate' : ''}`}>
                                                Online Marketing
                                                <span className='lg:hidden px-2'>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <ul className={`${openIndex === 3 ? 'block' : 'lg:block hidden'}`}>
                                                <li>
                                                    <Link href="/services/social-media-marketing" className={`${pathname === '/services/social-media-marketing' ? 'text-[#5db947]' : 'text-black'}  block text-[12px] font-bold uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3`}>Social Media Marketing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/email-marketing" className={`${pathname === '/services/email-marketing' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3`}>Email Marketing</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/reputation-management" className={`${pathname === '/services/reputation-management' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3`}>Reputation Management</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/content-marketing" className={`${pathname === '/services/content-marketing' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3`}>Content Marketing</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            }


                            <li className='lg:mr-[40px] lg:block hidden py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/" className={`${pathname.startsWith('/services/') ? 'text-[#5db947]' : 'text-black'} pointer-events-none hidden relative ease_in_out text-[13px] font-bold  uppercase hover:underline lg:flex items-center justify-between`}>
                                    Services
                                    <span className='hidden lg:block'><IoIosArrowDown /></span>
                                </Link>

                                <div className='mega_menu lg:space-y-0 space-y-4 lg:divide-x-[1px] divide-slate-200 ease_in_out absolute w-[1000px] right-0 lg:shadow flex lg:flex-row flex-col bg-white rounded-b-2xl p-[10px] z-30 ml-2'>

                                    <div className='lg:px-4 '>
                                        <button onClick={() => toggleDropMenu(1)} className={`lg:pointer-events-none flex items-center -mb-1 text-sm lg:text-base text-black lg:font-bold font-[750] ${openIndex === 1 ? 'active-rotate' : ''}`}>
                                            SEO
                                            <span className='lg:hidden px-2'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <ul className={`${openIndex === 1 ? 'block' : 'lg:block hidden'}`}>
                                            <li>
                                                <Link href="/services/search-engine-optimization" className={`${pathname === '/services/search-engine-optimization' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Search Engine Optimization</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/local-seo" className={`${pathname === '/services/local-seo' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Local SEO</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/ecommerce-seo" className={`${pathname === '/services/ecommerce-seo' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Ecommerce SEO</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/seo-audit" className={`${pathname === '/services/seo-audit' ? 'text-[#5db947]' : 'text-black '} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>SEO Audit</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='lg:px-4 '>
                                        <button onClick={() => toggleDropMenu(0)} className={`lg:pointer-events-none flex items-center -mb-1 text-sm lg:text-base text-black lg:font-bold font-[750] ${openIndex === 1 ? 'active-rotate' : ''}`}>
                                            Design & Development
                                            <span className='lg:hidden px-2'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <div className='flex items-center'>
                                            <ul className={`${openIndex === 0 ? 'block' : 'lg:block hidden'}`}>
                                                <li>
                                                    <Link href="/services/mobile-app-design" className={`${pathname === '/services/mobile-app-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Mobile App Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/saas-design" className={`${pathname === '/services/saas-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>SaaS Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/uiux-design" className={`${pathname === '/services/uiux-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>UI/UX Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/wordpress-design" className={`${pathname === '/services/wordpress-design' ? 'text-[#5db947]' : 'text-black '} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>WordPress Design</Link>
                                                </li>
                                            </ul>
                                            <ul className={`ml-[15px] ${openIndex === 0 ? 'block' : 'lg:block hidden'}`}>
                                                <li>
                                                    <Link href="/services/B2B-web-design" className={`${pathname === '/services/B2B-web-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>B2B Web Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/e-commerce-web-design" className={`${pathname === '/services/e-commerce-web-design' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>eCommerce Web Design</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/web-design-&-development" className={`${pathname === '/services/web-design-&-development' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Web Design & Development</Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/website-maintenance" className={`${pathname === '/services/website-maintenance' ? 'text-[#5db947]' : 'text-black '} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Website Maintenance</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='lg:px-4'>
                                        <button onClick={() => toggleDropMenu(2)} className={`lg:pointer-events-none flex items-center -mb-1 text-sm lg:text-base text-black lg:font-bold font-[750] ${openIndex === 2 ? 'active-rotate' : ''}`}>
                                            Paid Advertising
                                            <span className='lg:hidden px-2'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <ul className={`${openIndex === 2 ? 'block' : 'lg:block hidden'}`}>
                                            <li>
                                                <Link href="/services/google-ads" className={`${pathname === '/services/google-ads' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Google Ads</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/meta-ads" className={`${pathname === '/services/meta-ads' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold  uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Meta Ads</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/amazon-marketing" className={`${pathname === '/services/amazon-marketing' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold  uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>Amazon Marketing</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/youtube-advertising" className={`${pathname === '/services/youtube-advertising' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] my-[15px] hover:underline lg:pl-0 pl-3`}>YouTube Advertising</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='lg:px-4'>
                                        <button onClick={() => toggleDropMenu(3)} className={`lg:pointer-events-none flex items-center -mb-1 text-sm lg:text-base text-black lg:font-bold font-[750] ${openIndex === 3 ? 'active-rotate' : ''}`}>
                                            Online Marketing
                                            <span className='lg:hidden px-2'>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <ul className={`${openIndex === 3 ? 'block' : 'lg:block hidden'}`}>
                                            <li>
                                                <Link href="/services/social-media-marketing" className={`${pathname === '/services/social-media-marketing' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3`}>Social Media Marketing</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/email-marketing" className={`${pathname === '/services/email-marketing' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3`}>Email Marketing</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/reputation-management" className={`${pathname === '/services/reputation-management' ? 'text-[#5db947]' : 'text-black'} block text-[12px] font-bold uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3`}>Reputation Management</Link>
                                            </li>
                                            <li>
                                                <Link href="/services/content-marketing" className={`${pathname === '/services/content-marketing' ? 'text-[#5db947]' : 'text-black '} block text-[12px] font-bold uppercase mx-[7px] lg:my-[15px] hover:underline lg:pl-0 pl-3`}>Content Marketing</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className='lg:mr-[40px] py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/case-studies" className={`${pathname === '/case-studies' ? 'text-[#5db947]' : 'text-black'} ease_in_out text-[13px] font-bold uppercase hover:underline flex items-center justify-between`}>
                                    Case Studies
                                </Link>
                            </li>

                            <li className='lg:mr-[40px] py-[30px] w-full lg:w-auto ease_in_out navlist_link'>
                                <Link href="/blog" className={`${pathname === '/blog' ? 'text-[#5db947]' : 'text-black'} ease_in_out text-[13px] font-bold uppercase hover:underline flex items-center justify-between`}>
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