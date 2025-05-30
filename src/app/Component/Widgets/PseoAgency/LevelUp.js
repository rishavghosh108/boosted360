import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Marketingschool,Levelingup } from "../../../assets/index"

export default function LevelUp()  {

    return  (
        <div className="container">
            <div className="pt-[60px] lg:pt-[90px] pb-[20px] md:pb-[60px] overflow-hidden">
                <h2 className="text-[28px] md:text-[36px] lg:text-[50px] text-black font-medium mb-[30px] md:mb-[40px] lg:mb-[70px] text-center">Level Up Your Marketing Knowledge</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 relative play_div">
                    <div>
                        <div className="flex flex-col h-full relative">
                            <div className="relative">
                                <div className="m-auto mb-[10px] md:mb-[40px] w-[180px] md:w-[266px] h-[180px] md:h-[266px] image_before relative">
                                    <Image src={Marketingschool} alt="image" className="rounded-full" />
                                </div>
                            </div>
                            <div className="text-center pb-[80px] lg:pb-[90px]">
                                <h3 className="text-[24px] md:text-[26px] lg:text-[33px] text-[#5db947] font-bold leading-[120%] text-center mb-[6px] lg:mb-[15px]">Marketing School</h3>
                                <p className="text-[17px] lg:text-[19px] text-[#666] leading-[26px] text-center max-w-[385px] p-[10px] lg:p-[20px] pt-[10px] lg:pt-[14px] m-auto">A top business podcast with 90<br />
                                million downloads</p>
                                <p className="text-[16px] lg:text-[18px] text-black leading-[20px] font-bold text-center max-w-[180px] m-auto pb-[20px] lg:pb-[35px]">Eric Siu & Neil Patel</p>
                                <Link href="#" className="text-[16px] lg:text-[20px] text-white leading-[45px] absolute bottom-[25px] left-0 right-0 m-auto border-[1px] border-solid border-[#5db947] rounded-full bg-[#5db947] px-[36px] lg:px-[65px] w-fit ease_in_out hover:border-[#5db947]">
                                    Watch on Youtube
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col h-full relative">
                            <div className="relative">
                                <div className="m-auto mb-[10px] md:mb-[40px] w-[180px] md:w-[266px] h-[180px] md:h-[266px] image_before relative">
                                    <Image src={Levelingup} alt="image" className="rounded-full" />
                                </div>
                            </div>
                            <div className="text-center pb-[80px] lg:pb-[90px]">
                                <h3 className="text-[26px] lg:text-[33px] text-[#5db947] font-bold leading-[120%] text-center mb-[6px] lg:mb-[15px]">Marketing School</h3>
                                <p className="text-[17px] lg:text-[19px] text-[#666] leading-[26px] text-center max-w-[385px] p-[10px] lg:p-[20px] pt-[10px] lg:pt-[14px] m-auto">A top business podcast with 90<br />
                                million downloads</p>
                                <p className="text-[16px] lg:text-[18px] text-black leading-[20px] font-bold text-center max-w-[180px] m-auto pb-[20px] lg:pb-[35px]">Eric Siu & Neil Patel</p>
                                <Link href="#" className="text-[16px] lg:text-[20px] text-white leading-[45px] absolute bottom-[25px] left-0 right-0 m-auto border-[1px] border-solid border-[#5db947] rounded-full bg-[#5db947] px-[36px] lg:px-[65px] w-fit ease_in_out hover:border-[#5db947]">
                                    Watch on Youtube
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}