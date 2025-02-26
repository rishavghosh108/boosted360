import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bulletpoint } from "../../../assets/index"

export default function Youalso()  {

    return  (
        <div className="container">
            <div className="pt[40px] md:pt[60px] lg:pt[90px]">
                <h2 className="text-[30px] md:text-[36px] lg:text-[50px] text-black font-medium text-center">You also might be interested in</h2>
            </div>
            <div className="flex w-full pt-[40px] lg:pt-[60px] pb-[20px] lg:pb-[40px]">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                            <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Guest Post Link Building Service
                        </Link>
                    </li>
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                        <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Programmatic SEO Agency
                        </Link>
                    </li>
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                        <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Manual Link Building Service
                        </Link>
                    </li>
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                        <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Digital Marketing Agency
                        </Link>
                    </li>
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                        <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Short Form Video Agency
                        </Link>
                    </li>
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                        <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Content Optimization Services
                        </Link>
                    </li>
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                        <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Linkedin Management Agency
                        </Link>
                    </li>
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                        <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Sales Funnel Digital Marketing Agency
                        </Link>
                    </li>
                    <li className="group pb-[15px] md:pb-[20px] lg:pb-[30px]">
                        <Link href="#" className="ease_in_out text-[17px] md:text-[19px] text-[#666] group-hover:text-[#5db947] flex items-start">
                        <Image src={Bulletpoint} alt="check" className="mr-[20px] md:mr-[30px]" />
                            Full Funnel Marketing Agency
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}