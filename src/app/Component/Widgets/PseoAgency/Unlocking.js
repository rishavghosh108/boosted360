import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SaaSMarketing,SaaSMarketingHIGH,Download } from "../../../assets/index"

export default function Unlocking()  {

    return  (
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-[25px]">
                <div className="pb-[30px] lg:pb-0">
                    <h2 className="text-center md:text-left text-[32px] md:text-[30px] lg:text-[45px] font-bold text-black leading-[1.25]">
                    <span className="border-b-[6px] border-solid border-[#ffae00] md:inline-block lg:inline pr-[6px] lg:pr-0">Unlocking Online Growth </span>
                         Potential
                    </h2>
                    <p className="max-w-[100%] lg:max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        Struggling to amplify your website&apos;s footprint across the vast web landscape?
                    </p>
                    <p className="max-w-[100%] lg:max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        Countless businesses find themselves in a maze, trying to navigate the complex and ever-evolving world of search engine optimization. They aim for peak online visibility to capture the fleeting attention of customers but often face unpredictable results and wasted efforts.
                    </p>
                    <p className="max-w-[100%] lg:max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        Enter pSEO, the next horizon in scalable, intelligent search marketing. This approach empowers companies to transcend traditional SEO limits through data-driven automation and tailored content strategies.
                    </p>
                    <p className="max-w-[100%] lg:max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        At boosted 360, we specialize in harnessing the full power of pSEO to elevate your brand&apos;s digital presence. Our pSEO services turn the formidable web into navigable terrain, paving a clear path for your growth and success.
                    </p>
                </div>
                <div>
                    <Image src={SaaSMarketing} alt="SaaSMarketing" className="w-full m-auto lg:m-0" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-[40px] lg:pt-[100px]">
                <div>
                    <Image src={SaaSMarketingHIGH} alt="SaaSMarketingHIGH" className="w-full m-auto lg:m-0" />
                </div>
                <div className="pt-[30px] lg:pt-0">
                    <h2 className="text-center md:text-left text-[32px] md:text-[30px] lg:text-[45px] font-bold text-black leading-[1.25]">
                        <span className="border-b-[6px] border-solid border-[#ffae00] md:inline-block lg:inline pr-[6px] lg:pr-0">
                        Strategic pSEO </span>
                        Mastery
                    </h2>
                    <p className="max-w-[100%] lg:max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        Recognizing the unique challenges of our clients, boosted 360 crafts a bespoke pSEO campaign that fits your business like a glove. We begin by analyzing your current digital footprint, pinpointing opportunities and setting the stage for a comprehensive pSEO journey.
                    </p>
                    <p className="max-w-[100%] lg:max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        Next, we deploy AI-driven tactics to automate the generation of high-quality content that engages and converts. Our targeted approach means every piece of content serves a purpose, ensuring that none of your marketing spend is wasted.
                    </p>
                    <p className="max-w-[100%] lg:max-w-[510px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63] mt-[20px] lg:mt-[35px] text-left">
                        As a pSEO agency that thrives on innovation and results, we don&apos;t just deliver traffic—we deliver the right traffic. Streamlined customer journeys and improved search rankings are just a pSEO consulting session away.
                    </p>
                    <ul className="mt-[20px] lg:mt-[35px]">
                        <li className="flex items-center my-[8px] lg:my-[10px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63]">
                            <span className="mr-[10px]">
                                <Image src={Download} alt="Download" className="w-[19px] h-[19px]" />
                            </span>
                            Automated content creation
                        </li>
                        <li className="flex items-center my-[8px] lg:my-[10px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63]">
                            <span className="mr-[10px]">
                                <Image src={Download} alt="Download" className="w-[19px] h-[19px]" />
                            </span>
                            Data-driven keyword strategy
                        </li>
                        <li className="flex items-center my-[8px] lg:my-[10px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63]">
                            <span className="mr-[10px]">
                                <Image src={Download} alt="Download" className="w-[19px] h-[19px]" />
                            </span>
                            Customized content scaling
                        </li>
                        <li className="flex items-center my-[8px] lg:my-[10px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63]">
                            <span className="mr-[10px]">
                                <Image src={Download} alt="Download" className="w-[19px] h-[19px]" />
                            </span>
                            SEO performance monitoring
                        </li>
                        <li className="flex items-center my-[8px] lg:my-[10px] text-[17px] lg:text-[19px] text-[#666] leading-[1.63]">
                            <span className="mr-[10px]">
                                <Image src={Download} alt="Download" className="w-[19px] h-[19px]" />
                            </span>
                            User engagement analysis
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Link href="/" className="ease_in_out box-shadow-1 bg-[#5db947] text-[14px] md:text-[20px] font-bold text-white flex w-fit border border-solid border-[#5db947] px-[24px] md:px-[31px] py-[10px] md:py-[14px] m-auto mt-[30px] md:mt-[50px] rounded-[28px]">     
                    Scale SEO Automatically  
                </Link>
            </div>
        </div>
    )
}