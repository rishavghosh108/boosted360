'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Greenlogolandingpage } from '@/app/assets/index';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function PaymentSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [token, setToken] = useState(null);
  const [redirectTime, setRedirectTime] = useState(5);
  const [paymentVerify, setPaymentVerify] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Extract token from URL
  useEffect(() => {
    const tokenValue = searchParams.get('token');
    setToken(tokenValue);

    if (!tokenValue) {
      router.push('/boosted360');
    }
  }, [searchParams, router]);

  // Fetch and verify payment
  useEffect(() => {
    if (!token) return;

    const getPaymentStatus = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_P}/paypal/capture`,
          { order_id: token },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        );
        
        if (response.data.success === true && !response.data.error) {
          setPaymentVerify(true);
        } else {
          router.push('/boosted360/payment-failed');
        }
      } catch (error) {
        router.push('/boosted360/payment-failed');
      }
    };

    getPaymentStatus();
  }, [token, router]);

  // Countdown redirect after success
  useEffect(() => {
    if (!paymentVerify) return;

    const interval = setInterval(() => {
      setRedirectTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [paymentVerify]);

  // Perform redirect when countdown hits 0
  useEffect(() => {
    if (redirectTime === 0) {
      router.push('/');
    }
  }, [redirectTime, router]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollable(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className={`${isScrollable ? 'shadow-lg' : ''} transition-all ease duration-300 sticky top-0 bg-white text-black z-[999]`}>
        <div className="container bg-white">
          <div className="flex items-center justify-between py-[16px] md:py-[20px]">
            <Link href="/">
              <Image width={100} height={100} src={Greenlogolandingpage} alt="Boosted360" className='w-[172px]' />
            </Link>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden z-[10] relative w-8 h-8 flex flex-col justify-center items-center"
            >
              <span className={`block w-6 h-[2px] transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-1.5 bg-black" : "bg-white"}`} />
              <span className={`block w-6 h-[2px] my-[6px] transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100 bg-white"}`} />
              <span className={`block w-6 h-[2px] transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-1.5 bg-black" : "bg-white"}`} />
            </button>

            {/* Menu Items */}
            <ul className={`md:flex md:flex-row flex-col md:static fixed top-0 left-0 w-full h-screen md:h-auto md:w-auto bg-white md:bg-transparent text-black z-[99] transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
              <button onClick={toggleMenu} aria-label="Close" className="absolute md:hidden top-4 right-4 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {['services', 'packages', 'testimonials', 'contact'].map((id, idx) => (
                <li key={idx} className="font-medium text-[18px] border-b md:border-b-transparent md:text-[16px] p-4">
                  <Link className="hover:underline" href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="lg:py-20 py-12 h-[calc(100vh-107px)] md:h-[calc(100vh-127px)] lg:h-[calc(100vh-143px)] flex items-center bg-[#ececec]">
        <div className="container mx-auto">
          <div className="w-full lg:w-2/5 md:w-3/5 mx-auto flex justify-center items-center h-auto">
            {paymentVerify ? (
              <div className="message-box bg-white shadow-lg py-10 px-5 text-center border-b-4 border-primary">
                <div className="flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#5db947" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </div>
                <h2 className="lg:text-4xl sm:text-3xl text-2xl font-semibold mt-2 mb-3">Payment Successful</h2>
                <p className="lg:text-lg text-sm text-gray-700 font-medium">
                  Thank you for your payment,<br />
                  Your transaction has been completed successfully.<br />
                  We&apos;ll contact you shortly with further details.
                </p>
                <p className="text-blue-400 text-sm">Redirecting to home ({redirectTime})</p>
              </div>
            ) : (
              <div className="loader" />
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#F2F2F2]">
        <div className="bg-[#EFC923]">
          <div className="container">
            <div className="py-2 lg:py-4 flex flex-col md:flex-row justify-center items-center text-sm text-black">
              <p className="text-[12px] sm:text-[16px] font-medium">
                Copyright © {new Date().getFullYear()} Boosted 360. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
