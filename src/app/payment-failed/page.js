"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Greenlogolandingpage } from '../assets';
import Image from 'next/image';

export default function PaymentSuccess() {
  const [isScrollable, setIsScrollable] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollable(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header
        className={`${isScrollable ? 'shadow-lg' : ''} transition-all ease duration-300 sticky top-0 bg-black text-white  z-[999]`}
      >
        <div className="container bg-black">
          <div className="flex items-center justify-between py-[16px] md:py-[20px]">
            <Link href="/">
              <Image width={100} height={100} src={Greenlogolandingpage} alt="Boosted360" className='w-[172px]' />
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden z-[10] relative w-8 h-8 flex flex-col justify-center items-center"
            >
              <span
                className={`block w-6 h-[2px] transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-1.5 bg-black" : "bg-white"
                  }`}
              />
              <span
                className={`block w-6 h-[2px] my-[6px] transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100 bg-white"
                  }`}
              />
              <span
                className={`block w-6 h-[2px] transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-1.5 bg-black" : "bg-white"
                  }`}
              />
            </button>



            <ul
              className={` md:pt-0 pt-[90px]
              md:flex md:flex-row flex-col md:static fixed top-0 left-0 w-full h-screen md:h-auto md:w-auto 
              bg-white md:bg-transparent text-black md:text-white z-[99] transition-all duration-300 ease-in-out 
              ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
            `}
            >


              <button onClick={toggleMenu}
                aria-label="Close"
                className="absolute md:hidden top-4 right-4 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>


              <li className="font-medium thicccboiRegular text-[18px] border-b-[#dfd1dfdd] border-b md:border-b-transparent md:text-[16px] p-4">
                <Link className="hover:underline" href="#services">Services</Link>
              </li>
              <li className="font-medium thicccboiRegular text-[18px] border-b-[#dfd1dfdd] border-b md:border-b-transparent md:text-[16px] p-4">
                <Link className="hover:underline" href="#packages">Packages</Link>
              </li>
              <li className="font-medium thicccboiRegular text-[18px] border-b-[#dfd1dfdd] border-b md:border-b-transparent md:text-[16px] p-4">
                <Link className="hover:underline" href="#testimonials">Testimonials</Link>
              </li>
              <li className="font-medium thicccboiRegular text-[18px] border-b-[#dfd1dfdd] border-b md:border-b-transparent md:text-[16px] p-4">
                <Link className="hover:underline" href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="lg:py-20 py-12 h-[86vh] flex items-center">
        <div className="container mx-auto">
          <div className="w-full lg:w-2/5 md:w-3/5 mx-auto">
            <div className="message-box bg-white shadow-lg py-10 px-5 text-center border-b-4 border-solid border-[#45a6ff]">
              <div className="flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#ef4444" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
              </div>
              <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mt-2 mb-3">Payment Failed</h2>
              <p className='lg:text-lg text-sm text-gray-700 font-medium'>We couldn&apos;t process your payment.</p>
              <p className="lg:text-lg text-sm text-gray-700 font-medium">
                Try again later
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F2F2]">
        <div className="bg-[#EFC923]">
          <div className="container">
            <div className="py-2 lg:py-4 flex flex-col md:flex-row justify-center items-center text-sm text-black">
              <p className="thicccboiMedium text-[12px] sm:text-[16px]">Copyright © {new Date().getFullYear()} Boosted 360. All Right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}