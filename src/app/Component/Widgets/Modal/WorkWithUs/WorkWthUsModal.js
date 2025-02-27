"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { BtnArrow, Exrinceone } from '../../../../assets/index';

const WorkWthUsModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('');

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal') {
      onClose();
    }
  };

  // useEffect(() => {
  //   if (isOpen) {
  //     window.addEventListener('click', handleOutsideClick);
  //   } else {
  //     window.removeEventListener('click', handleOutsideClick);
  //   }

  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (e) => {
        if (e.target.id === 'modal') {
          onClose();
        }
      };
  
      window.addEventListener('click', handleOutsideClick);
      
      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOpen, onClose]); // Include 'onClose' to ensure it's always up-to-date
  

  if (!isOpen) return null;

  return (
    <div id="modal" className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 overflow-auto z-[9999] px-2'>
      <div className='modal-centered flex items-center'>
        <div className='container mx-auto relative xl:max-w-[1000px] bg-[#f8f8f8] border-[1px] border-solid border-[#00000033] rounded-[10px] !p-[10px] md:p-[16px]'>
          <button onClick={onClose} className='text-[16px] text-[#666] font-bold absolute top-[10px] right-[10px] size-[30px] border border-[#5db947] hover:bg-[#5db947] rounded-full pt-[3px] hover:text-white pl-[1px]'>&#10005;</button>
          <div className='max-w-[100%] lg:max-w-[90%] m-auto'>
            <div className='py-[20px] xxl:py-[32px]'>
              <h2 className='text-[20px] md:text-[26px] lg:text-[30px] font-bold leading-[1.25] text-black text-center'>
                Accelerate Your Marketing Without Growing Headcount
              </h2>
              <p className='text-[16px] md:text-[18px] lg:text-[20px] pt-[8px] leading-[1.25] text-black text-center'>
                Fill out the form below to speak with someone from our team.
              </p>
            </div>
            <div>
              <form>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  <div className='px-[8px] pb-[20px]'>
                    <input
                      type='text'
                      placeholder='Full name *'
                      className='w-full h-[50px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]'
                    />
                  </div>
                  <div className='px-[8px] pb-[20px]'>
                    <input
                      type='email'
                      placeholder='Work email*'
                      className='w-full h-[50px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]'
                    />
                  </div>
                  <div className='px-[8px] pb-[20px]'>
                    <PhoneInput
                      placeholder="Enter phone number*"
                      value={value}
                      onChange={setValue}
                      defaultCountry="US"
                      international
                      countryCallingCodeEditable={true}
                      className='w-full h-[50px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none pl-[10px] pr-[25px] text-[16px] text-[#666]'
                    />
                  </div>
                  <div className='px-[8px] pb-[20px]'>
                    <input
                      type='url'
                      placeholder='Website'
                      className='w-full h-[50px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]'
                    />
                  </div>
                  <div className='px-[8px] pb-[20px]'>
                    <select className='w-full h-[50px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]'>
                      <option disabled selected>I&apos;d like to talk about</option>
                      <option>Search Engine Optimization</option>
                      <option>Local SEO</option>
                      <option>Ecommerce SEO</option>
                      <option>SEO Audit</option>
                      <option>Google Ads</option>
                      <option>Meta Ads</option>
                      <option>Amazon Marketing</option>
                      <option>YouTube Advertising</option>
                      <option>Social Media Marketing</option>
                      <option>Email Marketing</option>
                      <option>Reputation Management </option>
                      <option>Content Marketing</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className='px-[8px] pb-[20px]'>
                    <input
                      type='text'
                      placeholder='Company'
                      className='w-full h-[50px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]'
                    />
                  </div>
                  
                  <div className='px-[8px] pb-[20px] md:col-span-2'>
                    <textarea placeholder='Your message/requirements*' className='w-full p-3 rounded-sm resize-y h-36 border border-solid border-[#ececec]'></textarea>
                  </div>
                  <div className='px-[8px] pb-[20px] md:col-span-2'>
                    <input
                      id="fileUpload"
                      type="file"
                      className='hidden'
                    />
                    <label htmlFor="fileUpload" className='text-[16px] text-[#666] flex items-center border rounded border-solid border-[#ececec] px-4 py-2.5'>
                      <div className='size-7 shrink-0 flex text-white items-center justify-center rounded-full bg-[#5db947] mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 15.577v-8.65l-2.33 2.33l-.708-.718L12 5l3.539 3.539l-.708.719L12.5 6.927v8.65zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"/></svg>
                      </div>
                      Upload a .doc or .docx file for the project brief.

                    </label>
                  </div>
                  {/* <div className='flex items-start px-[8px] md:col-span-2'>
                    <input
                      type='checkbox'
                      id='Subscribe'
                      value='Subscribe'
                      className='w-4 h-4 rounded-[4px] bg-[#fff] border border-neutral-300 outline-none'
                    />
                    <label htmlFor="Subscribe" className='text-[15px] md:text-[16px] lg:text-[17px] text-zinc-700 md:pl-3 pl-2 cursor-pointer'>
                      Subscribe to our Leveling Up newsletter for the newest marketing updates and tips every week.
                    </label>
                  </div> */}
                  <div className="text-center md:col-span-2">
                    <Link href="/" className="ease_in_out bg-[#5db947] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#5db947] md:mb-4 mb-[20px] px-[20px] xxl:px-[30px] md:px-[55px] py-[15px] md:py-[16px] xxl:py-[20px] mt-[20px] xxl:mt-[40px] hover:bg-[#5db947]">
                      Submit Your Query
                      <span className="ml-[10px]">
                        <Image src={BtnArrow} alt="arrow" />
                      </span>
                    </Link>
                  </div>
                </div>
                
              </form>
              <div className='hidden lg:block'>
                <div className='flex items-center justify-center'>
                  <div>
                    <Image src={Exrinceone} alt="profile" className="w-[100px] h-[100px] rounded-full object-cover" />
                  </div>
                  <div className='pl-[32px] max-w-[450px] py-[32px]'>
                    <h3 className='text-[24px] font-bold leading-[1.25] text-black text-left'>
                      “We can count on them to bring new ideas to the table consistently”
                    </h3>
                    <p className='mt-[15px] text-[14px] font-medium leading-[1.25] text-[#666]'>
                      <span className='font-extrabold'>Jacqueline Foster,</span> Demand Generation Marketing, Lever.co
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWthUsModal;
