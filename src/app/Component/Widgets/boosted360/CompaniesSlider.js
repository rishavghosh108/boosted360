'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function AutoPlay() {
    const settings = {
        dots: false,
        arrows: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        pauseOnHover: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const data = [
        {
            img: '/images/new-landing-page/collaborate-1.png'
        },
        {
            img: '/images/new-landing-page/collaborate-2.png'
        },
        {
            img: '/images/new-landing-page/collaborate-3.png'
        },
        {
            img: '/images/new-landing-page/collaborate-4.png'
        },
        {
            img: '/images/new-landing-page/collaborate-5.png'
        },
        {
            img: '/images/new-landing-page/collaborate-6.png'
        },
        {
            img: '/images/new-landing-page/collaborate-7.png'
        },
        {
            img: '/images/new-landing-page/collaborate-8.png'
        },
        {
            img: '/images/new-landing-page/collaborate-9.png'
        },
    ]
    // .log(data)
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index}>
                        <div>
                            <Image width={100} height={100} src={item.img} alt={'item.img'} />
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    );
}

export default AutoPlay;