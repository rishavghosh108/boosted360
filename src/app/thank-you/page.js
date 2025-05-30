import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Layouts } from '../Component';


export default function ThankYou()  {
  return (
    <Layouts>
     <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>
        <div className='py-[50px] md:py-[100px] lg:py-[150px] px-[15px] md:px-[30px] lg:px-[50px]'>
          <div className='container'>
              <div className='text-center'>
                <h1 className='extra_font_family text-[#212121] font-medium text-[36px] md:text-[46px] lg:text-[56px]'>Thank You</h1>
                <p className='text-[#575757] font-medium text-[17px] mt-[10px] mb-[24px] lg:mb-[40px] m-auto max-w-[585px]'>Thank you for your interest. We will get in touch soon.</p>
                <Link href="/" className='extra_font_family m-auto ease_in_out flex w-fit items-center mb-[0] md:mb-[20px] lg:mb-[40px] text-[13px] font-medium text-white ease-in-out relative py-[14px] px-[40px] bg-[#5db947] tracking-[1px] rounded-full uppercase hover:bg-[#3c9126]'>
                  Back to Home
                </Link>
              </div>
          </div>
        </div>
      </main>
    </Layouts>
  )
}