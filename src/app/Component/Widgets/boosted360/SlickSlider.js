'use client'
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const StaticSlider = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1500,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const testimonials = [
        {
            quote: "Exactly what I was looking for",
            description: `I'm always immersed in my blogging work, <strong>so LynkMe 360 takes care of managing all my social media pages.</strong> I trust them completely.`,
            name: "Richard O Nil",
            role: "Food Blogger, Canada",
            roleColor: "#4AA732",
            bgColor: "#EAFFE4",
            borderColor: "#4AA732",
            labelBgColor: "#4AA732",
            image: "/images/new-landing-page/lookingfor.png",
            beforeImageBg: '#4AA732'
        },
        {
            quote: "I love my Insta page",
            description: `I travel a lot and want to showcase all my tour photos in creative manner. <strong>LynkMe 360 made it possible</strong>. I love my instagram page`,
            name: "Christina Haul",
            role: "Traveler, California",
            roleColor: "#6B21A8",
            bgColor: "#F7EDFF",
            borderColor: "#6B21A8",
            labelBgColor: "#6B21A8",
            image: "/images/new-landing-page/lokkingforfemale.png",
            beforeImageBg: '#6B21A8'
        },
    ];

    return (
        <div className="mx-0 sm:mx-6 mt-4">

            <Slider ref={sliderRef} {...settings}>
                {testimonials.map((item, index) => (
                    <div key={index}>
                        <div
                            className="pb-5 rounded-[20px] p-4 relative z-[0]"
                            style={{ backgroundColor: item.bgColor, border: `1px solid ${item.borderColor}` }}
                        >
                            <div
                                className={`border px-[15px] pt-[5px] lg:pt-0 pb-[12px] w-fit ${index % 2 == !0 ? 'ml-auto' : ''}`}
                                style={{
                                    backgroundColor: item.labelBgColor,
                                    clipPath:
                                        index % 2 === 0
                                            ? 'polygon(0 0%, 100% 0%, 100% 100%, 7% 85%)'
                                            : 'polygon(0 0%, 100% 0%, 90% 85%, 0 100%)',
                                }}
                            >
                                <p className="thicccboiBold leading-[0.8] font-bold text-white text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[23px] xxl:text-[25px]">
                                    <span className="text-[30px] lg:text-[50px]">“</span>
                                    {item.quote}
                                    <span className="text-[30px] lg:text-[50px]">”</span>
                                </p>
                            </div>

                            <div className="flex items-center space-x-4 mt-2 lg:flex-row flex-col md:flex-col-reverse">
                                <div className="w-full lg:w-1/2 mb-[20px] md:mb-[-60px] lg:mt-0 mt-[5px]">
                                    <div className="relative before:block before:w-full before:pt-[85%] md:before:pt-[118%] lg:before:pt-[128%] xxl:before:pt-[135%]">
                                        <Image
                                            width={400}
                                            height={100}
                                            className="object-cover size-full rounded-[20px] absolute top-0 right-0 bottom-0 left-0"
                                            src={item.image}
                                            alt="customer"
                                        />
                                        <div className="absolute top-[10px] left-0 size-full bg-[#FFECA8] z-[-1] rounded-[20px]" style={{ backgroundColor: `${item.beforeImageBg}` }}></div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2">
                                    <div>
                                        <p
                                            className="thicccboiRegular text-black text-[15px] sm:text-[22px] md:text-[15px] xl:text-[17px] leading-[1.5] my-2 xl:my-3"
                                            dangerouslySetInnerHTML={{ __html: `"${item.description}"` }} ></p>
                                        
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Image
                                                    key={i}
                                                    width={20}
                                                    height={20}
                                                    src="/images/new-landing-page/star.svg"
                                                    alt="star"
                                                />
                                            ))}
                                        </div>
                                        <div className="mt-7 md:mt-3 xl:mt-9">
                                            <p className="thicccboiRegular text-black text-[15px] sm:text-[22px] md:text-[15px] xl:text-[17px]">{item.name}</p>
                                            <p
                                                className="thicccboiBold pt-1 text-[15px] sm:text-[22px] md:text-[15px] xl:text-[17px]"
                                                style={{ color: item.roleColor }}
                                            >
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>



            {/* <div className="flex justify-center mt-5 sm:mt-10 space-x-4">
                <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="bg-[#F30081] text-white size-[36px] flex items-center justify-center rounded-full transition"
                >
                    <Image width={16} height={16} src={'/images/new-landing-page/sliderarrowprev.svg'} alt="prev" />
                </button>
                <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="bg-[#F30081] text-white size-[36px] flex items-center justify-center rounded-full transition"
                >
                    <Image width={16} height={16} src={'/images/new-landing-page/slidernext.svg'} alt="prev" />
                </button>
            </div> */}

        </div>
    );
};

export default StaticSlider;
