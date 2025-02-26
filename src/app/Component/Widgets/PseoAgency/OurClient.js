"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Expertise from "../Homepagegreen/Expertise";

export default function OurClient()  {

    return  (
        <div>
            <div className="container">
                <div>
                    <h2 className="text-[34px] lg:text-[60px] text-black font-medium mb-[26px] lg:mb-[48px]">— Our clients love us</h2>
                </div>
            </div>
            <Expertise />
        </div>
    )
}