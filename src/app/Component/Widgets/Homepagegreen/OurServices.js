import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Servicebg,CtaSmall,SearchEngineOptimization,PaidAdvertising,SocialMediaMarketing,EmailMarketing,BtnArrow,ContentMarketingDd } from "../../../assets/index"
import WorkWthUsModal from "../../Widgets/Modal/WorkWithUs/WorkWthUsModal"

export default function OurServices()  {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return  (
        <>
            <div className="container">
                <div className="bg-cover bg-center rounded-[10px] py-[40px] mt-[85px]" style={{ backgroundImage: `url(${Servicebg.src})`, }}>
                    <div>
                        <h2 className="text-[30px] lg:text-[56px] xl:text-[65px] font-bold text-white leading-[1.25] text-center">
                            Our Services
                        </h2>
                        <p className="text-[14px] lg:text-[16px] px-[10px] m-auto text-[#bcbcbc] leading-[1.6] text-center max-w-[1113px] font-normal">
                        At Boosted 360, our team of highly specialized marketing experts — ecommerce, pay-per-click, search engine optimization, lead generation, conversion rate optimization, performance marketing, and more — are here to ensure that you get the results you want. We focus on data that truly matters to inform our every conversation and decision with constant testing, tweaking, and optimizing. Our <strong>digital marketing company</strong> makes sure every opportunity is realized.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center pt-[20px] lg:pt-[30px] px-[10px] md:px-[30px] lg:px-[40px]">
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={SearchEngineOptimization} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto object-contain" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">Search Engine Optimization</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px] pb-[40px]">Our expert SEO team and content writers will craft conversion-driven <strong>digital marketing services</strong> that leverages years of SEO consultancy and strategy implementation to ensure your business ranks higher on Google.</p>
                                <Link href="/services/search-engine-optimization" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more 
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={PaidAdvertising} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto object-contain" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">Paid Advertising</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px] pb-[40px]">From Google Ads to social media advertising, we create highly targeted paid campaigns that deliver measurable results. Data-driven approach at our <strong>online marketing agency</strong> ensures that your ad spend is optimized for maximum return on investment.</p>
                                <Link href="/services/google-ads" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more 
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={SocialMediaMarketing} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto object-contain" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">Social Media Marketing</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px] pb-[30px]">We design and execute impactful social media campaigns that drive engagement, build brand awareness, and ultimately lead to higher conversions. Strategic approach in our <strong>internet marketing agency</strong> will help you connect with your audience in meaningful ways. </p>
                                <Link href="/services/social-media-marketing" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more 
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={EmailMarketing} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto object-contain" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">Email Marketing</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px] pb-[30px]">Our email marketing experts create personalized, conversion-focused campaigns to help you nurture leads and retain customers. From segmented lists to automated workflows, we ensure your emails drive results.</p>
                                <Link href="/services/email-marketing" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more 
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-4/12 md:w-6/12 w-full p-[4px] md:p-[6px] relative">
                            <div className="h-full text-center p-[15px] lg:p-[20px] xl:p-[30px] pb-[60px] bg-[#292929] rounded-[10px] relative">
                                <Image src={ContentMarketingDd} alt='Service-Icon-one' className="max-h-[80px] lg:max-h-[100px] m-auto object-contain" />
                                <h2 className="mt-[30px] text-[20px] xl:text-[22px] text-white leading-[1.26] font-bold text-center">Content Marketing</h2>
                                <p className="text-[15px] text-[#bcbcbc] leading-[1.39] mt-[15px] pb-[30px]">Our content writers produce high-quality, SEO-optimized content that not only attracts traffic but also converts visitors into loyal customers. Our <strong>digital marketing solution</strong> develops a strategy that resonates with your target audience and supports your overall marketing goals.</p>
                                <Link href="/services/content-marketing" className="absolute left-0 right-0 bottom-[25px] flex justify-center text-[15px] text-[#5db947] leading-[2.13] font-bold hover:underline m-auto w-fit">
                                    Learn more 
                                    <Image src={CtaSmall} alt='cta-small' className="ml-[10px]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="text-center">
                        <button onClick={openModal} className="ease_in_out bg-[#5db947] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#5db947] px-[30px] md:px-[55px] py-[15px] md:py-[20px] mt-[40px] hover:bg-[#5db947]">
                            Work With Us
                            <span className="ml-[10px]">
                                <Image src={BtnArrow} alt="arrow" />
                            </span>
                        </button>
                    </div> */}
                </div>
            </div>
            <WorkWthUsModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}