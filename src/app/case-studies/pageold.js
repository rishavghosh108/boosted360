"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { work1, work2, work3, work4, work5, work6 } from '../assets/index';
import Slider from "react-slick";
import Header from '../Component/Layout/Header';

export default function Page() {
    const mainSliderRef = useRef(null);
    const thumbSliderRef = useRef(null);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        setNav1(mainSliderRef.current);
        setNav2(thumbSliderRef.current);
    }, []);

    useEffect(() => {
        const mainSlider = mainSliderRef.current;
        const handleWheel = (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                mainSlider.slickPrev();
            } else {
                mainSlider.slickNext();
            }
        };

        if (mainSlider) {
            const sliderList = mainSlider.innerSlider.list;
            sliderList.addEventListener('wheel', handleWheel);
            return () => {
                sliderList.removeEventListener('wheel', handleWheel);
            };
        }
    }, [nav1]);

    const mainSliderSettings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        vertical: false,
        verticalSwiping: true,
        asNavFor: nav2,
        beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
        ref: slider => (mainSliderRef.current = slider),
    };

    const thumbSliderSettings = {
        slidesToShow: 5,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        asNavFor: nav1,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: false,
        centerPadding: '0',
        ref: slider => (thumbSliderRef.current = slider),
        centerMode: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            }
        ],
    };

    const images = [work1, work2, work3, work4, work5, work6,];
    const totalSlides = images.length;

    const [isVisible, setIsVisible] = useState(false);

    const handleMenuClick = () => {
        setIsVisible(!isVisible);
    };

    const links = [
        { href: '/work', label: 'Studio' },
        { href: '#', label: 'Service' },
        { href: '#', label: 'Home' },
    ];

    return (
        <>

            <Header />
            <div className="h-screen w-full overflow-hidden relative">

                <div className="vertical-slider-wrapper w-full h-full relative">
                    <Slider {...mainSliderSettings}>
                        {images.map((img, index) => (
                            <div key={index} className="item">
                                <div className="item_img relative">
                                    <Image src={img} alt={`Slide ${index + 1}`} />
                                </div>
                                {/* <div className='item_text absolute m-auto max-w-[650px]'>
                                    <h1 className='lg:text-[120px] md:text-[100px] sm:text-[80px] text-[50px] text-[#fff] font-bold text-shadow-lg'>Sustainable Salons</h1>
                                </div> */}
                                <div className='absolute bottom-[6rem] z-10 flex justify-center left-0 w-full'>
                                    <Link href="/case-studies/details" className='fadeInUp bg-[#5db947] md:text-[16px] text-[12px] text-white font-medium shadow-md px-6 py-2 rounded-full flex justify-between items-center '>Case Studies Details</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="thumb-slider-wrapper absolute bottom-[10px] left-0 w-full">
                    <div className='w-full max-w-[500px] relative m-auto slider_border py-[10px]'>
                        <Slider {...thumbSliderSettings}>
                            {images.map((img, index) => (
                                <div key={index} className={`w-full h-[50px] px-[1px] ${activeSlide === index ? 'active' : ''}`}>
                                    <Image src={img} alt={`Thumbnail ${index + 1}`} className='w-full h-full object-cover object-top' />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className="current-page-number absolute bottom-[26px] left-0 hidden md:block px-[30px]">
                    <p className='text-[16px] text-[#cfcfcf]'>SCROLL OR DRAG</p>
                </div>

                <div className="current-page-number absolute bottom-[26px] right-0 px-[30px]">
                    <p className='text-[16px] font-medium text-[#fff] relative'>
                        {activeSlide + 1}
                        <span className='pl-[8px] relative sliderafter'></span>
                        {totalSlides}
                    </p>
                </div>

                {/* <div className='absolute top-[50%] md:right-[30px] right-[15px] menu_btn_div'>
                    <div className='relative'>
                        <button
                            onClick={handleMenuClick}
                            className={isVisible ? 'menu-button-active active overflow-hidden' : 'overflow-hidden relative z-[10]'}
                        >
                            <div className='bg-white md:text-[16px] text-[12px] text-black font-medium md:px-[18px] px-[14px] rounded-full md:w-[150px] w-[80px] flex justify-between items-center md:h-[36px] h-[30px] relative z-[10]'>
                                <div>
                                    <p className='firsep'>Menu</p>
                                    <p className='secp'>Close</p>
                                </div>
                                <div className='relative -mt-0.5'>
                                    <span className="dots">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="8px" fill='#000' viewBox="0 0 512 512">
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
                                        </svg>
                                    </span>
                                    <span className="cross">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" fill='#000' viewBox="0 0 384 512">
                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </button>
                        <div className='link_tranisation' style={{ position: 'absolute', top: '0' }}>
                            {links.map((link, index) => {
                                const translateXValue = isVisible ? `calc(-${(index + 1) * 106}%)` : '0';

                                return (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            transform: `translateX(${translateXValue})`,
                                            transition: 'transform 3s ease-in-out, transform 3s ease-in-out,',
                                            opacity: isVisible ? 1 : 0,
                                            pointerEvents: isVisible ? 'auto' : 'none'
                                        }}
                                        className={`
                                            bg-white md:text-[16px] text-[12px] text-black font-medium md:px-[18px] px-[14px] rounded-full md:w-[150px] w-[80px] flex justify-between items-center md:h-[36px] h-[30px]
                                        `}
                                    >
                                        <div>
                                            <span data-hover={link.label}></span>
                                        </div>
                                        <div>
                                            <span className="dots">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="8px" height="8px" fill='#000' viewBox="0 0 512 512">
                                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

