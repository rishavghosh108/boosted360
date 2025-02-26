import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { bulletFooterBullet,Greenfooterlogo } from '../../../assets/index';

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

export default function FooterGreen() {

  return (
    <footer className='bg-[#161616] pt-[131px] pb-[70px]'>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div>
            <h3 className='py-[20px] text-[15px] font-extrabold text-white'>Paid Advertising</h3>
            <ul>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  SEM
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Google Ads (SEM)
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Facebook Ads Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  PPC (Pay-per-click)
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  LinkedIn Ads
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Paid Social Media Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Adwords Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Spotify Ads
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Hulu Ads
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Amazon Ads
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  AdWords Management Agency
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='py-[20px] text-[15px] font-extrabold text-white'>SEO & CONTENT MARKETING</h3>
            <ul>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  SEO agencies
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  B2B SEO Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Content Creation Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Content Strategy Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Global SEO Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Enterprise SEO
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Inbound Marketing Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  B2B Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Technical SEO Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  AI Transformation
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  GA4 Migration Services
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Google Tag Manager Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  YouTube Marketing Agency
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Discord Agency
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='py-[20px] text-[15px] font-extrabold text-white'>RESOURCES</h3>
            <ul>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Business Phone Services
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Ecommerce Website Builders
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Email Marketing Services
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Web Hosting Providers
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  SEO Tools
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Best Marketing Agencies
                </Link>
              </li>
            </ul>
            <h3 className='py-[20px] text-[15px] font-extrabold text-white'>CONSULTING & DIY</h3>
            <ul>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                    Strategic Marketing Consultation
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Marketing Funnel Builds
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='py-[20px] text-[15px] font-extrabold text-white'>COMPANY</h3>
            <ul>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Marketing School Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Leveling Up
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Leveling Up Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Leveling Up YouTube
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='py-[20px] text-[15px] font-extrabold text-white'>MARKETING GUIDES</h3>
            <ul>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Digital Marketing Trends
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Best Marketing Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  SEO Techniques
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Alternate Ad Networks
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Link-Building With Content
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  YouTube SEO
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Step-by-step Content Audit
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Build a Marketing Funnel
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Facebook Retargeting
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Choose the Right Digital Marketing Agency
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='py-[20px] text-[15px] font-extrabold text-white'>LATEST POSTS</h3>
            <ul>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Unlocking Web Traffic: 11 Best Programmatic SEO Tools
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Conquer SEO A/B Testing in 2024: Free Checklist & Guide (+Template!)
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Canva&apos;s Digital Marketing SEO Strategy: What&apos;s Behind Their Success?
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  How Removing Ads Can Increase Organic Reach
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Networking Magic: How to Build Strong Agency Bonds
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Why Long-Term SEO Benefits Beat Short-Term Hacks
                </Link>
              </li>
              <li>
                <Link href="#" className='ease_in_out text-[16px] text-[#adadad] font-medium hover:text-white my-[15px] flex items-center'>
                  <Image src={bulletFooterBullet} alt='dots' className='mr-[16px]' />
                  Unlocking LinkedIn: 7 Strategies to Increase Leads
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='flex flex-wrap pt-[45px]'>
          <div className='w-full lg:w-[19%]'>
            <Image src={Greenfooterlogo} alt='logo' className="w-[200px]" />
          </div>
          <div className='w-full lg:w-[51%] xl:w-[62%] py-[20px] lg:py-0 md:pl-0 lg:pl-[10px] xl:pl-0'>
            <h3 className='text-[#f8f8f8] text-[16px] font-medium pb-[2px] leading-[1.75]'>boosted 360 is a full-service digital marketing agency that helps great companies grow their revenues online.</h3>
            <p className='text-[#fff] text-[16px] font-extrabold pb-[20px] leading-[1.75]'>
              Get in touch: 
              <Link href="#" className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>contact@singlegrain.com</Link>
            </p>
            <ul className='flex flex-wrap'>
              <li className='pb-[6px] xl:pb-0'>
                <Link href="#" className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>Sitemap</Link>
              </li>
              <li className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>|</li>
              <li className='pb-[6px] xl:pb-0'>
                <Link href="#" className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>Privacy Policy</Link>
              </li>
              <li className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>|</li>
              <li className='pb-[6px] xl:pb-0'>
                <Link href="#" className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>Personal Data Removal Request</Link>
              </li>
              <li className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>|</li>
              <li className='pb-[6px] xl:pb-0'>
                <Link href="#" className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>Notice of Non-Affiliation</Link>
              </li>
              <li className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>|</li>
              <li className='pb-[6px] xl:pb-0'>
                <Link href="#" className='text-[#adadad] text-[16px] font-medium pl-[4px] hover:underline'>Accessibility</Link>
              </li>
            </ul>
          </div>
          <div className='w-full lg:w-[30%] xl:w-[19%]'>
            <ul className='flex flex-wrap'>
              <li className='pr-[3px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[42px] h-[42px] bg-[#adadad] flex justify-center items-center rounded-full'>
                  <FaFacebookF />
                </Link>
              </li>
              <li className='pr-[3px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[42px] h-[42px] bg-[#adadad] flex justify-center items-center rounded-full'>
                  <FaXTwitter />
                </Link>
              </li>
              <li className='pr-[3px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[42px] h-[42px] bg-[#adadad] flex justify-center items-center rounded-full'>
                <FaLinkedinIn />
                </Link>
              </li>
              <li className='pr-[3px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[42px] h-[42px] bg-[#adadad] flex justify-center items-center rounded-full'>
                  <FaYoutube />
                </Link>
              </li>
              <li className='pr-[3px] pb-[6px] xl:pb-0'>
                <Link href="#" className='w-[42px] h-[42px] bg-[#adadad] flex justify-center items-center rounded-full'>
                <FaSpotify />
                </Link>
              </li>
            </ul>
            <p className='text-[#adadad] text-[16px] font-medium pt-[25px] leading-[1.75]'>
              © 2024 boosted 360. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
