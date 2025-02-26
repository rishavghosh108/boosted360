"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import { Testimonialone,Testimonialtwo } from "../../../assets/index"

export default function Testimonials({ thumbnailSrc, videoSrc })  {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const [isPlaying1, setIsPlaying1] = useState(false);

    const handlePlay1 = () => {
        setIsPlaying1(true);
    };

    return  (
        <div className="container">
            <div>
                <h2 className="text-[30px] md:text-[34px] lg:text-[60px] text-black font-medium mb-[26px] lg:mb-[48px] text-center md:text-left">— Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pb-[30px] md:pb-[40px]">
                <div className="block pr-0 md:pr-[10px] mb-[20px] md:mb-0">
                    <div className="youtube bg-black bg-cover bg-center relative pt-[56.25%] overflow-hidden cursor-pointer w-full h-full" style={{ backgroundImage: `url(${Testimonialone.src})`, }} onClick={handlePlay}>
                        {!isPlaying && (
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[90px] h-[90px] rounded-full opacity-[0.8] play_btn ease_in_out">
                                <span className="play-icon">▶</span>
                            </div>
                        )}
                        {isPlaying && (
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/i-byBdoTZ6Y?si=C_-yK0iFf4deq7aS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        )}
                    </div>
                </div>
                <div className="block pl-0 md:pl-[10px]">
                    <div className="youtube bg-black bg-cover bg-center relative pt-[56.25%] overflow-hidden cursor-pointer w-full h-full" style={{ backgroundImage: `url(${Testimonialtwo.src})`, }} onClick={handlePlay1}>
                        {!isPlaying1 && (
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[90px] h-[90px] rounded-full opacity-[0.8] play_btn ease_in_out">
                                <span className="play-icon">▶</span>
                            </div>
                        )}
                        {isPlaying1 && (
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/i-byBdoTZ6Y?si=C_-yK0iFf4deq7aS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}