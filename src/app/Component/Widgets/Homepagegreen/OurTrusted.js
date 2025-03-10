import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CtaSmall } from "../../../assets/index"
import Slider from "react-slick";
export default function OurTrusted()  {
    var trustedslider = {
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        fade: false,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 6
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };

    return  (
        <div className="pt-20">
            <div className="container">
                <h4 className="text-base lg:text-xl text-black mx-auto text-center mb-6">Our marketers are trusted by</h4>
                <div className="xl:max-w-[1024px] sm:max-w-[90%] max-w-[86%] mx-auto tru-sdle">
                    <Slider  {...trustedslider}>
                        <div>
                            <Image src={'/images/trusted-icon/facebooknewlogo.png'} className="mx-auto block" width={50} height={30} alt="thumbnail" />
                        </div>
                        <div>
                            <Image src={'/images/trusted-icon/trusted-icon-2.png'} className="mx-auto block" width={90} height={30} alt="thumbnail" />
                        </div>
                        <div>
                            <Image src={'/images/trusted-icon/trusted-icon-3.png'} className="mx-auto block" width={90} height={30} alt="thumbnail" />
                        </div>
                        <div>
                            <Image src={'/images/trusted-icon/trusted-icon-4.png'} className="mx-auto block" width={35} height={30} alt="thumbnail" />
                        </div>
                        <div>
                            <Image src={'/images/trusted-icon/trusted-icon-5.png'} className="mx-auto block" width={90} height={30} alt="thumbnail" />
                        </div>
                        <div>
                            <Image src={'/images/trusted-icon/trusted-icon-6.png'} className="mx-auto block" width={90} height={30} alt="thumbnail" />
                        </div>
                        <div>
                            <Image src={'/images/trusted-icon/trusted-icon-7.png'} className="mx-auto block" width={90} height={30} alt="thumbnail" />
                        </div>
                        <div>
                            <Image src={'/images/trusted-icon/trusted-icon-8.png'} className="mx-auto block" width={90} height={30} alt="thumbnail" />
                        </div>
                        <div>
                            <Image src={'/images/trusted-icon/trusted-icon-9.png'} className="mx-auto block" width={90} height={30} alt="thumbnail" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}