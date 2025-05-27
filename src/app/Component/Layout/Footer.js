import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { bulletFooterBullet, Greenfooterlogo } from '../../assets/index';

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

export default function FooterGreen() {

  const year = new Date().getFullYear();

  return (
    <footer className='bg-[#161616] lg:pt-[131px] pt-[120px] md:pb-[30px] pb-5'>
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className='pt-[20px] text-[18px] uppercase font-extrabold text-white'>SEO</h3>
            <ul className='p-0'>
              <li>
                <Link href="/services/search-engine-optimization" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Search Engine Optimization
                </Link>
              </li>

              <li>
                <Link href="/services/local-seo" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Local SEO
                </Link>
              </li>

              <li>
                <Link href="/services/ecommerce-seo" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Ecommerce SEO
                </Link>
              </li>

              <li>
                <Link href="/services/seo-audit" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  SEO Audit
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className='pt-[20px] text-[18px] uppercase font-extrabold text-white'>Design & Development</h3>
            <ul className='p-0'>
              <li>
                <Link href="/services/web-design-&-development" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Web Design & Development
                </Link>
              </li>

              <li>
                <Link href="/services/website-maintenance" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Website Maintenance
                </Link>
              </li>

              <li>
                <Link href="/services/saas-design" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  SaaS Design
                </Link>
              </li>

              <li>
                <Link href="/services/uiux-design" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>



          <div>
            <h3 className='pt-[20px] text-[18px] uppercase font-extrabold text-white'>Paid Advertising </h3>
            <ul className='p-0'>
              <li>
                <Link href="/services/google-ads" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Google Ads
                </Link>
              </li>
              <li>
                <Link href="/services/meta-ads" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link href="/services/amazon-marketing" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Amazon Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/youtube-advertising" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  YouTube Advertising
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='pt-[20px] text-[18px] uppercase font-extrabold text-white'>Online Marketing</h3>
            <ul className='p-0'>
              <li>
                <Link href="/services/social-media-marketing" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Social Media Marketing
                </Link>
              </li>

              <li>
                <Link href="/services/email-marketing" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Email Marketing
                </Link>
              </li>

              <li>
                <Link href="/services/reputation-management" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Reputation Management
                </Link>
              </li>

              <li>
                <Link href="/services/content-marketing" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Content Marketing
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className='pt-[20px] text-[18px] uppercase font-extrabold text-white'>Company</h3>
            <ul className='p-0'>
              <li>
                <Link href="/about-us" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/blog" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/case-studies" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Case Studies
                </Link>
              </li>

            </ul>
          </div>
        </div>
         <Link className='text-white font-bold' href={'/boosted360'}>Social Media Marketing</Link>
      </div>

      <div className='container '>
        <div className='flex flex-wrap pt-[45px] border-t border-neutral-600 mt-10'>

          <div className='w-full lg:w-[19%]'>
            <Link className='' href="/">
              <Image src={Greenfooterlogo} alt='logo' className="w-[200px]" />
            </Link>
          </div>

          <div className='w-full lg:w-[51%] xl:w-[62%] py-[20px] lg:py-0 md:pl-0 lg:pl-[10px] xl:pl-0'>
            <h3 className='text-[#f8f8f8] text-[14px] font-medium pb-[2px] leading-[16px]'>Boosted360 is a full-service digital marketing agency that helps great companies grow their revenues online.</h3>
            <p className='text-[#fff] text-[14px] font-extrabold pb-[20px] leading-[1.75]'>
              Get in touch:
              <Link href="mailto:contact@boosted360.com" className='text-[#adadad] text-[14px] font-medium pl-[4px] hover:underline'>contact@boosted360.com</Link>
            </p>
            <ul className='flex flex-wrap'>
              <li className='pb-[6px] xl:pb-0 border-r border-neutral-500'>
                <Link href="#" className='text-[#adadad] text-[14px] font-medium pl-[4px] pr-4 hover:underline'>Sitemap</Link>
              </li>

              <li className='pb-[6px] xl:pb-0'>
                <Link href="#" className='text-[#adadad] text-[14px] font-medium pl-4 hover:underline'>Privacy Policy</Link>
              </li>

            </ul>
          </div>

          <div className='w-full lg:w-[30%] xl:w-[19%]'>
            <ul className='flex flex-wrap'>
              <li className='pr-[5px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[35px] h-[35px] bg-[#adadad] hover:bg-[#5db947] text-neutral-900 hover:text-white transition-all flex justify-center items-center rounded-full'>
                  <FaFacebookF />
                </Link>
              </li>
              <li className='pr-[5px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[35px] h-[35px] bg-[#adadad] hover:bg-[#5db947] text-neutral-900 hover:text-white transition-all flex justify-center items-center rounded-full'>
                  <FaXTwitter />
                </Link>
              </li>
              <li className='pr-[5px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[35px] h-[35px] bg-[#adadad] hover:bg-[#5db947] text-neutral-900 hover:text-white transition-all flex justify-center items-center rounded-full'>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className='pr-[5px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[35px] h-[35px] bg-[#adadad] hover:bg-[#5db947] text-neutral-900 hover:text-white transition-all flex justify-center items-center rounded-full'>
                  <FaYoutube />
                </Link>
              </li>
              <li className='pr-[5px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[35px] h-[35px] bg-[#adadad] hover:bg-[#5db947] text-neutral-900 hover:text-white transition-all flex justify-center items-center rounded-full'>
                  <FaSpotify />
                </Link>
              </li>
            </ul>
            <p className='text-[#adadad] text-[14px] font-medium pt-[25px] leading-[16px]'>
              © {year} Boosted360. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}