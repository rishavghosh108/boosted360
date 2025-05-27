"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SlickSlider from "../Component/Widgets/boosted360/SlickSlider";
import AutoPlay from "../Component/Widgets/boosted360/CompaniesSlider";
import Head from "next/head";
import { Greenlogolandingpage } from "../assets";

const Page = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleToggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    console.log('Toggle value:', newValue ? 'ON' : 'OFF');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollable(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subscriptionData = [
    {
      id: 0,
      planName: 'Standard',
      planNameColor: '#000000',
      subscriptionAmount: '20',
      isBestValue: false,
      planBenifits: [
        'Unlimited post scheduling',
        'Best time to post recommendations',
        'Custom analytics and reports',
        'Competitive benchmarking tool',
        'AI caption, hashtag, and ideas generator',
        'One inbox for all social accounts'
      ],
      borderColor: '#D1D1D1',
      btnBg: '#000000',
      hoverBtn: '#2c2c2c'
    },
    {
      id: 1,
      planName: 'Most Popular',
      planNameColor: '#6324e7',
      subscriptionAmount: '36',
      isBestValue: true,
      planBenifits: [
        'Link in bio tool',
        'Suspend scheduled posts',
        'Team roles and permissions',
        'Assign DMs to teammates',
        'Video voice over',
        'Automatic link tracking'
      ],
      borderColor: '#6324E7',
      btnBg: '#6324E7',
      hoverBtn: '#4311ab'
    },
    {
      id: 2,
      planName: 'Pro',
      planNameColor: '#f30081',
      subscriptionAmount: '20',
      isBestValue: false,
      planBenifits: [
        'Content library',
        'Automated engagement tools',
        'Single sign-on (SSO)',
        'Unlimited ad spend',
        'Free Hootsuite Academy training',
        'Advanced analytics'
      ],
      borderColor: '#f30081',
      btnBg: '#f30081',
      hoverBtn: '#bd0064'
    },
  ]
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/new-landing-page/lines.webp" />
        <link rel="preload" as="image" href="/images/new-landing-page/bannerbg.webp" />
        <link rel="preload" as="image" href="/images/new-landing-page/bannerleftimg.webp" />
        <link rel="preload" as="image" href="/images/new-landing-page/bannerrightbg.webp" />
      </Head>


      <div className="socialMediaMagic">
        <header
          className={`${isScrollable ? 'shadow-lg':''} transition-all ease duration-300 sticky top-0 bg-black text-white  z-[999]`}
        >
          <div className="container bg-black">
            <div className="flex items-center justify-between py-[16px] md:py-[20px]">
              <Link href="/">
                {/* <h3 className="font-[800] text-[24px] sm:text-[28px] thicccboiBold logo_gradient">
                  Boosted 360
                </h3> */}
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




                {/* <li className="font-medium thicccboiRegular text-[18px] border-b-[#dfd1dfdd] border-b md:border-b-transparent md:text-[16px] p-4">
                  <Link className="hover:underline" href="#">About Us</Link>
                </li> */}
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

        {/* banner  */}
        <div className="relative bannerbr md:pt-0 pt-10">
          <div className="container">
            <div className="flex justify-between md:flex-row flex-col-reverse">
              <div
                className={`md:pl-[10px] md:w-[44%] lg:pl-[50px] relative before:absolute before:size-[90%] bannerleftbefore before:z-[0] before:top-[-17%] md:before:top-[-10%]`}
              >
                <div className="relative before:block before:w-full before:pt-[110%] sm:before:pt-[90%] md:before:pt-[135%]">
                  <Image
                    priority
                    className="object-contain size-full rounded-[20px] absolute top-0 right-0 bottom-0 left-0 md:object-bottom object-top "
                    width={400}
                    height={100}
                    src="/images/new-landing-page/bannerleftimg.webp"
                    alt="bannerleft"
                  />
                </div>
              </div>
              <div className="w-full md:pb-0 pb-8 md:w-[52%] flex flex-col justify-center md:items-start items-center md:text-left text-center lg:justify-center relative z-[3] lg:pl-0 md:pl-[22px] ">
                <ul className="HelveticaNeue font-medium flex items-center leading-[0.9] mb-[18px]">
                  <li className="text-[#121244] text-[18px] sm:text-[20px] lg:text-[25px] mr-[15px] lg:mr-[20px]">Engage</li>
                  <li className="text-[#121244] px-[15px] lg:px-[20px] text-[18px] sm:text-[20px] lg:text-[25px] border-x-[2px] border-x-[#121244]">
                    Influence
                  </li>
                  <li className="text-[#121244] text-[18px] sm:text-[20px] lg:text-[25px] ml-[15px] lg:ml-[20px]">
                    Convert
                  </li>
                </ul>
                <p className="uppercase thicccboiRegular font-semibold text-[16px] lg:text-[18px] tracking-[4px] py-2 px-3 lg:px-5 w-fit bg-white border border-black">
                  Elevate your brand
                </p>

                <div className="mt-[20px] xl:mt-[35px] mb-[20px] xl:mb-[45px]">
                  <h2 className="bannergradient_one pt-[10px] allura_regular text-[68px] sm:text-[80px] md:text-[60px] lg:text-[75px] xl:text-[90px] font-medium relative leading-[0.7]">
                    with
                  </h2>
                  <h2 className="bannergradient_two HelveticaNeue text-[50px] sm:text-[70px] md:text-[52px] lg:text-[70px] xl:text-[80px] xxl:text-[90px] font-[600] relative before:absolute before:h-[1px] before:bg-[#F30081] before:bottom-[6px] sm:before:bottom-[3px] before:left-0 leading-[1] sm:leading-[0.8] before:w-full sm:before:w-[425px] md:before:w-[335px] lg:before:w-[475px] xl:before:w-[530px] xxl:before:w-[600px]">
                    Social media
                  </h2>
                  <h2 className="bannergradient_two HelveticaNeue text-[50px] sm:text-[70px] md:text-[52px] lg:text-[70px] xl:text-[80px] xxl:text-[90px] font-[600] relative before:absolute before:h-[1px] before:bg-[#a1a1a1] before:bottom-[12px] lg:before:bottom-[25px] before:left-0 leading-[0.8] pb-[10px] md:pb-[8px] lg:pb-[20px] before:w-full sm:before:w-[200px] md:mx-0 mx-auto md:before:w-[240px] xl:before:w-[260px] before:z-[-1] xl:pl-[10px] md:w-full w-fit">
                    magic
                  </h2>
                </div>
                <button className="thicccboiBold text-white text-[16px] xl:text-[18px] font-semibold bg-[#6324E7] transition-all duration-[0.3s] hover:bg-[#e6c32b] pl-[20px] lg:pl-[30px] pr-[10px] lg:pr-[20px] py-[8px] lg:py-[14px] rounded-[50px] flex items-center justify-between w-fit">
                  Start Your Growth Journey
                  <span className="bg-white rounded-full size-[30px] flex items-center justify-center ml-4">
                    <Image
                      width={18}
                      height={18}
                      src="/images/new-landing-page/rightArrow.svg"
                      alt=""
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* great social media pages  */}
        <div className=" social_media_pages overflow-hidden">
          <div className="container">
            <div className="relative before:absolute before:w-[100vw] before:h-full before:bg-[#e6c32b] before:left-[-15px] md:before:left-[78%] before:top-[65%] md:before:top-0 before:z-[1] md:before:right-auto before:right-[-15px] md:pl-[20px] lg:pl-[70px] xl:pl-[88px] xxl:pl-[50px] md:pr-[20px] lg:pr-[50px]">
              <p className="sofiaProMedium text-[18px] sm:text-[26px] text-white font-medium mb-5 pt-[50px] sm:pt-[80px] md:text-left text-center">
                Are you dreaming of
              </p>
              <div className="flex justify-between md:flex-row flex-col">
                <div className="">
                  <h2 className="futuramaxicgBold md:text-left text-center md:mx-0 mx-auto text-[32px] sm:text-[60px] md:text-[48px] xl:text-[70px] xxl:text-[72px] w-fit font-bold uppercase text-white leading-[1] relative">
                    Great <br className="md:hidden block" /> <span className="allura_regular normal-case text-[38px] sm:text-[60px] lg:text-[80px] xl:text-[100px] text-[#ffcf00] leading-[0.9]"> Social  <br className="md:block hidden" /> <span className="sm:tracking-[15px]"> Media </span></span> <br />
                    Pages?
                    <Image
                      className="xl:block hidden absolute top-[80%] lg:top-[60%] -translate-y-1/2 right-[-155px] lg:right-[-229px] xxl:right-[-256px] z-[2]"
                      width={100}
                      height={30}
                      src={"/images/new-landing-page/redrightArrow.svg"}
                      alt="redrightArrow.svg"
                    />
                  </h2>

                  <div className="my-6">
                    <p className="lg:pr-0 md:pr-5 sofiaProLight font-thin text-[18px] md:text-left text-center sm:w-[85%] md:mx-0 mx-auto md:w-[440px] leading-[1.6] lg:leading-[2] text-white">
                      Social presence is more
                      <span className="sofiaProMedium"> important than ever </span>
                      because it shapes how we connect, communicate, and influence
                      others in a rapidly evolving digital world.
                    </p>
                    <p className="lg:pr-0 md:pr-5 sofiaProLight font-thin text-[18px] md:text-left text-center sm:w-[85%] md:mx-0 mx-auto md:w-[450px] leading-[1.6] lg:leading-[2] text-white">
                      A
                      <span className="text-[#E8F717]"> great looking social media page </span>
                      helps you to <span className="text-[24px]">increase ...</span>
                    </p>
                  </div>

                  <ul className="sofiaProSemiBold text-white flex-wrap justify-center md:block flex">
                    <li className="font-semibold text-[18px] lg:text-[20px] p-3 bg-[#228DE5] w-fit">
                      Branding & Influence
                    </li>
                    <li className="font-semibold text-[18px] lg:text-[20px] p-3 bg-[#282828] w-fit">
                      Trust & Credibility
                    </li>
                    <li className="font-semibold text-[18px] lg:text-[20px] p-3 bg-[#23CCD8] w-fit">
                      Community & Connection
                    </li>
                    <li className="font-semibold text-[18px] lg:text-[20px] p-3 bg-[#C13CFF] w-fit">
                      Opportunities & Growth
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center items-center md:pr-8 xl:pr-10 relative md:pt-0 pt-[50px]">
                  <Image
                    className="xl:hidden block absolute top-[10%] md:top-[25%] md:rotate-[0deg] rotate-[60deg] -translate-y-1/2 left-[125px] md:left-[-76px] z-[2]"
                    width={100}
                    height={30}
                    src={"/images/new-landing-page/redrightArrow.svg"}
                    alt="redrightArrow.svg"
                  />
                  <Image
                    className="relative z-[1] w-[300px] md:w-[275px] xl:w-[350px] md:mt-0 mt-[70px]"
                    width={300}
                    height={100}
                    src={"/images/new-landing-page/mobileframesocial.png"}
                    alt=""
                  />

                  <Image
                    className="absolute bottom-[-70px] xl:bottom-[-110px] left-0"
                    width={100}
                    height={100}
                    src={"/images/new-landing-page/yellowdownarrpw.svg"}
                    alt=""
                  />
                </div>
              </div>

              <div className="pt-[25px] md:pt-[70px] xl:pt-[95px] xxl:pt-[100px] pb-[80px] relative z-[1]">
                <h2 className="thicccboiBold sm:flex-row flex-col flex items-center justify-center font-bold text-[35px] lg:text-[42px] xl:text-[50px] text-white">
                  Boosted 360
                  <span className="sofiaProRegular ml-4 text-[22px] lg:text-[38px] font-normal">
                    Helps you to achieve that
                  </span>
                </h2>

                <div className="flex items-center justify-center mt-4 md:mt-7 sm:flex-row flex-col">
                  <button className="thicccboiBold group text-white text-[16px] xl:text-[18px] font-semibold bg-[#6324e7] md:bg-[#E6C32B] transition-all duration-[0.3s] hover:bg-white hover:text-[#6324e7] pl-[20px] lg:pl-[30px] pr-[10px] lg:pr-[20px] py-[8px] lg:py-[12px] rounded-[50px] flex items-center justify-between w-fit">
                    Hire Boosted 360 Team
                    <span className="transition-colors duration-[0.3s] bg-white group-hover:bg-[#6324E7] rounded-full size-[35px] flex items-center justify-center ml-4">
                      <div className="relative w-[18px] h-[18px]">
                        <Image
                          className="absolute inset-0 transition-opacity duration-[0.3s] object-contain opacity-100 group-hover:opacity-0"
                          width={18}
                          height={18}
                          src="/images/new-landing-page/rightarrowyellow.svg"
                          alt=""
                        />
                        <Image
                          className="absolute inset-0 transition-opacity duration-[0.3s] object-contain opacity-0 group-hover:opacity-100"
                          width={18}
                          height={18}
                          src="/images/new-landing-page/rightarrowwhite.svg"
                          alt=""
                        />
                      </div>
                    </span>
                  </button>

                  <button className="md:ml-5 thicccboiBold text-[#6324E7] hover:text-white text-[16px] xl:text-[18px] font-semibold bg-white transition-all duration-[0.3s] hover:bg-[#6324e7] md:hover:bg-[#E6C32B] pl-8 lg:pl-12 pr-[10px] lg:pr-[20px] py-[8px] lg:py-[12px] rounded-[50px] flex items-center justify-between w-fit group sm:mt-0 mt-[15px]">
                    See Our Works
                    <span className="transition-colors duration-[0.3s] bg-[#6324E7] group-hover:bg-white rounded-full size-[35px] flex items-center justify-center ml-8 lg:ml-12">
                      <div className="relative w-[18px] h-[18px]">
                        <Image
                          className="absolute inset-0 transition-opacity duration-[0.3s] opacity-100 group-hover:opacity-0"
                          width={18}
                          height={18}
                          src="/images/new-landing-page/rightarrowwhite.svg"
                          alt=""
                        />
                        <Image
                          className="absolute inset-0 transition-opacity duration-[0.3s] opacity-0 group-hover:opacity-100"
                          width={18}
                          height={18}
                          src="/images/new-landing-page/rightarrowyellow.svg"
                          alt=""
                        />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* specialized in  */}
        <div id="services" className="pt-[80px] bg-black relative">
          <Image
            width={100}
            height={100}
            className="absolute left-[40%] top-[-75px] z-[1]"
            src={"/images/new-landing-page/downwhite.svg"}
            alt=""
          />
          <div className="container text-white">
            <div className="relative z-[1]">
              <h2 className="text-[30px] sm:text-[45px] lg:text-[52px] xl:text-[62px] xxl:text-[65px] [text-shadow:7px_7px_#000000] w-fit font-bold uppercase text-white leading-[1] mx-auto text-center lg:pt-5 futuramaxicgBold">
                We are <br /> specialized in
              </h2>
              <Image
                width={100}
                height={100}
                className="w-[226px] sm:w-[300px] absolute bottom-[-17px] right-0 sm:right-[35px] md:right-[100px] lg:right-[265px] z-[-1]"
                src={"/images/new-landing-page/brush_bg.png"}
                alt="brush_bg.png"
              />
            </div>

            {/* <p className="pt-[28px] px-[280px] text-center sofiaProLight font-[200] leading-[2]">
            Crafting <strong>visually appealing</strong> and
            <i className="text-[#EDC948]">engaging social media profiles</i> for
            brands, businesses, or individuals. Designing profile pictures,
            cover images, and other visual assets that align with the brand
            identity. <i className="text-[#EDC948]">Structuring posts</i>, story
            highlights, and pinned content in a way that maximizes visibility
            and interaction. Designing infographics,
            <span className="text-[#F30081]"> short videos</span>, and
            promotional materials. Adapting to new social media features and
            design trends to keep pages fresh and competitive.
          </p> */}
            <div className="mt-10 sm:mb-0 mb-5">
              <ul className="flex flex-wrap justify-center md:px-[12%] xl:px-[24%]">
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#EFC923] p-2 w-fit">Designing profile pictures</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#5E5E5E] p-2 w-fit">Designing Cover images</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#5E5E5E] p-2 w-fit">Visual assets</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#6C5CFF] p-2 w-fit">Short videos</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#F30081] p-2 w-fit">Logo and Brand identity</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#5E5E5E] p-2 w-fit">Designing infographics</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#6A2EE7] p-2 w-fit">Content writing</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#5E5E5E] p-2 w-fit">Promotional materials</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#ECECEC] p-2 w-fit">Story highlights</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#EFC923] p-2 w-fit">Structuring posts</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#5E5E5E] p-2 w-fit">Maximizes visibility and interaction</li>
                <li className="m-1 sofiaProSemiBold text-white text-[16px] border border-[#5E5E5E] p-2 w-fit">Manage Social media pages</li>
              </ul>
            </div>

            <Image width={100} height={100}
              className="w-full sm:w-[75%] xl:w-[82%] xxl:w-[85%] mx-auto"
              src="/images/new-landing-page/advertising.svg"
              alt="Advertising"
            />
          </div>
        </div>

        {/*what our customers says */}
        <div className="pt-10 bg-[#fefefe]">
          <div className="container">
            <div>
              <button className="thicccboiBold group mx-auto text-white text-[16px] xl:text-[22px] font-semibold bg-[#F30081] transition-all duration-[0.3s] hover:bg-[#d50071] pl-[20px] lg:pl-[30px] pr-[10px] lg:pr-[20px] py-[8px] lg:py-[12px] rounded-[50px] flex items-center justify-between w-fit">
                Let&apos;s Talk and Start
                <span className="transition-colors duration-[0.3s] bg-white rounded-full size-[35px] flex items-center justify-center ml-4">
                  <div className="relative w-[18px] h-[18px]">
                    <Image
                      className="absolute inset-0 transition-opacity duration-[0.3s] object-contain"
                      width={18}
                      height={18}
                      src="/images/new-landing-page/rightarrowpink.svg"
                      alt=""
                    />
                  </div>
                </span>
              </button>

              <div className="my-[26px] lg:my-[40px] xl:my-[60px] grid-cols-2 grid md:grid-cols-3">

                <div>
                  <Image className="mx-auto size-full object-contain w-[88%] md:w-[80%]" width={500} height={100} src={'/images/new-landing-page/companies-1.png'} alt="companies logos" />
                </div>
                <div>
                  <Image className="mx-auto size-full object-contain w-[88%] md:w-[80%]" width={500} height={100} src={'/images/new-landing-page/companies-2.png'} alt="companies logos" />
                </div>
                <div className="col-[1_/_3] md:col-[3_/_3]">
                  <Image className="mx-auto size-full object-contain w-[50%] md:w-[80%]" width={500} height={100} src={'/images/new-landing-page/companies-3.png'} alt="companies logos" />
                </div>
              </div>


              <div id="testimonials">
                <h2 className="futuramaxicgBold text-[22px] sm:text-[30px] lg:text-[40px] xl:text-[46px] xxl:text-[50px] mx-auto text-center w-fit font-bold uppercase text-black leading-[1] relative">
                  Here is what <br /> our customers say
                </h2>
                <p className="thicccboiBold text-[18px] sm:text-[22px] lg:text-[25px] xl:text-[30px] xxl:text-[32px] text-black text-center mt-5"> <span className="text-[#F30081]">329+</span> social accounts <span className="text-[#A500F7]">trust us</span></p>
                <div className="relative mt-[65px] sm:mx-6">
                  <div className="absolute left-[50px] right-[20px] bottom-[100px] bg-[#E2E2E2] top-[-6%] rounded-[20px] rotate-[175deg] origin-center z-0 translate-y-[30px] sm:block hidden" />
                  <div className="absolute left-0 right-0 bottom-[100px] bg-[#EFC923] top-[-4%] lg:top-[-3%] rounded-[20px] rotate-[176deg] origin-center z-0 translate-y-[30px] sm:block hidden " />

                  <div className="relative z-2 bg-[#000000] rounded-[20px] px-[16px] sm:px-[35px] lg:px-[50px] xl:px-[60px] pt-[10px] sm:pt-[35px] lg:pt-[50px] xl:pt-[60px] pb-[60px] lg:pb-[75px] xl:pb-[90px]">
                    <Image
                      width={400}
                      height={100}
                      className="w-[180px] sm:w-[300px] lg:w-[350px] absolute right-0 bottom-0"
                      src="/images/new-landing-page/dots.png"
                      alt="dots"
                    />

                    <div className="clippath_custom py-[8px] sm:py-[17px] px-[18px] bg-[#165F5A] lg:mb-0 mb-[10px] sm:mb-[20px] lg:hidden block w-fit mx-auto ">
                      <p className="thicccboiBold font-[800] text-white text-[18px] sm:text-[22px] lg:text-[30px] xl:text-[38px] xxl:text-[40px]">
                        “The quality is unmatched”
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:flex-row flex-col">
                      <div className="w-full md:w-[42%] xxl:w-[45%] md:mr-[30px] lg:mr-[40px] xl:mr-[55px]">
                        <div className="relative before:block before:w-full before:pt-[95%] md:before:pt-[145%] lg:before:pt-[124%] xxl:before:pt-[122%]">
                          <Image
                            width={400}
                            height={100}
                            className="object-cover size-full rounded-[20px] absolute top-0 right-0 bottom-0 left-0 md:object-center object-top"
                            src="/images/new-landing-page/customer.webp"
                            alt="customer"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-[58%] xxl:w-[55%] md:mt-0 mt-5">
                        <div className="clippath_custom py-[17px] px-[18px] bg-[#165F5A] lg:mb-0 mb-[20px] lg:block hidden">
                          <p className="thicccboiBold font-[800] text-white text-[22px] lg:text-[30px] xl:text-[38px] xxl:text-[40px]">
                            “The quality is unmatched”
                          </p>
                        </div>

                        <p className="thicccboiLight text-white text-[15px] sm:text-[22px] md:text-[18px] leading-[1.5] mb-3 lg:my-4 xl:my-6">
                          I&apos;ve tried a lot of similar options, but this one stands out. The quality is unmatched, and the attention to detail is impressive. In a world where physical distance no longer limits interaction, social presence <span className="text-[#edc948]">fosters relationships</span>, discussions, and movements. People find like-minded communities, support systems, and meaningful connections.
                        </p>

                        <div className="flex items-center space-x-1">
                          <Image width={20} height={20} src="/images/new-landing-page/star.svg" alt="star" />
                          <Image width={20} height={20} src="/images/new-landing-page/star.svg" alt="star" />
                          <Image width={20} height={20} src="/images/new-landing-page/star.svg" alt="star" />
                          <Image width={20} height={20} src="/images/new-landing-page/star.svg" alt="star" />
                          <Image width={20} height={20} src="/images/new-landing-page/star.svg" alt="star" />
                        </div>

                        <div className="mt-7 md:mt-[20px] lg:mt-[40px] xl:mt-[75px]">
                          <p className="thicccboiLight text-[#FFB55A] text-[15px] sm:text-[22px] md:text-[18px]">Sana Ribog</p>
                          <p className="thicccboiBold pt-1 text-white text-[15px] sm:text-[22px] md:text-[18px]">Journalist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div>
                <SlickSlider />
                <Link className="thicccboiMedium underline text-[#F30081] mx-auto table pt-8 xl:pt-10" href='#'>View all testimonials</Link>
              </div>

              <div className="py-8 xl:py-10">
                <h2 className="allura_regular flex items-center justify-center text-[40px] sm:text-[60px] xxl:text-[80px] text-[#F30081]  font-[400]">Pick a <span className="thicccboiMedium font-[600] text-[#6324E7] ml-3">Plan</span></h2>

                <p className="text-black thicccboiMedium text-[12px] sm:text-[15px] xl:text-[18px] font-semibold tracking-[1px] text-center pt-2 xl:pt-3">Manage all of your social media in one place.</p>
              </div>
            </div>
          </div>
        </div>

        {/* subscription  */}
        <div id="packages" className="bg-black py-12">
          <div className="container">

            <div className="flex items-center justify-between md:flex-row flex-col">
              <div className="flex items-center sm:flex-row flex-col">
                <p className="thicccboiMedium text-white text-[16px]">Pay annually <span className="thicccboiLight">(Save up to 38%)</span></p>

                <button
                  onClick={handleToggle}
                  className={`w-[52px] h-[25px] sm:my-0 my-4 mr-2 ml-7 flex items-center rounded-full p-1 transition-colors duration-300 ${enabled ? 'bg-[#6324E7]' : 'bg-white'
                    }`}
                >
                  <div
                    className={` w-[17px] h-[17px] rounded-full shadow-md transform transition-transform duration-300 ${enabled ? 'translate-x-6 bg-white' : 'translate-x-0 bg-[#6324E7]'
                      }`}
                  />
                </button>

                <p className="text-[#AB83FF] thicccboiMedium text-[16px]">Pay monthly</p>
              </div>
              <button className="md:mt-0 mt-5 thicccboiBold text-[15px] sm:text-[16px] text-[#EFC923] border border-[#EFC923] flex items-center py-[10px] px-[20px] rounded-full">
                <Image className="mr-2" width={18} height={18} src={'/images/new-landing-page/yellowplus.svg'} alt="" />
                Create Custom Package
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[12px] lg:gap-[24px] xl:gap-[28px] mt-8 xl:mt-12">

              {subscriptionData.map((item, index) => (
                <div key={index} className={`flex flex-col border-[4px] rounded-[12px] bg-[#FFFFFF] pt-[20px] pb-[25px] px-[15px] lg:px-[28px]`} style={{ borderColor: `${item.borderColor}` }}>
                  <h4 className={`thicccboiBold text-[25px] lg:text-[28px] xl:text-[32px] font-bold mb-6`} style={{ color: `${item.planNameColor}` }}>{item.planName}</h4>
                  <p className="thicccboiMedium text-[26px] lg:text-[34px] text-black font-semibold mb-4 xl:mb-6">
                    $<span>{item.subscriptionAmount}</span> <sub className="text-[#626262] text-[18px] right-0 bottom-0 thicccboiLight">/month</sub></p>
                  <div>
                    <p className="thicccboiMedium text-[#767676] text-[16px] bg-[#F6F6F6] py-2 pl-4 pr-7 w-fit rounded-full">Features included</p>
                  </div>

                  <ul className="space-y-3 xl:space-y-6 xl:mt-6 mt-4 mb-8">

                    {item.planBenifits.map((benefits, index) => (
                      <li key={index} className="flex items-start text-black font-[500]">
                        <Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />
                        {benefits}
                      </li>
                    ))}
                  </ul>

                  <button className={`thicccboiBold group mt-auto md:mt-auto text-white text-center text-[16px] xl:text-[18px] font-semibold transition-all duration-[0.3s] pl-[30px] pr-[10px] py-[8px] rounded-[50px] flex items-center justify-between w-full`} style={{
                    backgroundColor: hoveredIndex === index ? item.hoverBtn : item.btnBg
                  }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="flex-[1]">Get Started</span>
                    <span className="transition-colors duration-[0.3s] bg-white rounded-full size-[35px] flex items-center justify-center ml-4">
                      <div className="relative w-[18px] h-[18px]">
                        <Image
                          className="absolute inset-0 transition-opacity duration-[0.3s] object-contain"
                          width={18}
                          height={18}
                          src="/images/new-landing-page/rightarrowblack.svg"
                          alt=""
                        />
                      </div>
                    </span>
                  </button>

                </div>
              ))}
              {/* <div className="flex flex-col border-[4px] border-[#6324E7] rounded-[12px] bg-[#FFFFFF] pt-[20px] pb-[25px] px-[15px] lg:px-[28px]">
                <h4 className="thicccboiBold text-[#6324E7] text-[26px] lg:text-[28px] xl:text-[32px] font-bold mb-6">Most Popular</h4>
                <div className="flex items-center mb-4 xl:mb-6 justify-between">
                  <p className="thicccboiMedium text-[26px] lg:text-[34px] text-black font-semibold">$36 <sub className="text-[#626262] text-[18px] right-0 bottom-0 thicccboiLight">/month</sub></p>
                  <button className="thicccboiMedium text-[8px] lg:text-[10px] xl:text-[14px] py-[10px] px-3 xl:px-5 rounded-full bg-[#6324E7] text-white">BEST VALUE</button>
                </div>
                <p className="thicccboiMedium text-[#767676] text-[16px] bg-[#F6F6F6] py-2 pl-4 pr-7 w-fit rounded-full">Features included</p>

                <ul className="space-y-3 xl:space-y-6 xl:mt-6 mt-4 mb-8">
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />Link in bio tool</li>
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />Suspend scheduled posts</li>
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />Team roles and permissions</li>
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />Assign DMs to teammates</li>
                  <li className="flex items-start text-black font-[500]">
                    <Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />
                    <span>
                      Video voice over
                      <span className="bg-[#DC0E0E] text-[10px] rounded-[3px] py-[2px] px-1 text-white ml-2">New</span>
                    </span>
                  </li>
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />Automatic link tracking</li>
                </ul>

                <button className="thicccboiBold mt-auto md:mt-auto group text-white text-[16px] xl:text-[18px] font-semibold bg-[#6324E7] hover:bg-[#4008b5] transition-all duration-[0.3s] pl-[30px] pr-[10px] py-[8px] rounded-[50px] flex items-center justify-between w-full">
                  <span className="flex-[1]">Get Started</span>
                  <span className="transition-colors duration-[0.3s] bg-white rounded-full size-[35px] flex items-center justify-center ml-4">
                    <div className="relative w-[18px] h-[18px]">
                      <Image
                        className="absolute inset-0 transition-opacity duration-[0.3s] object-contain"
                        width={18}
                        height={18}
                        src="/images/new-landing-page/rightarrowblack.svg"
                        alt=""
                      />
                    </div>
                  </span>
                </button>

              </div>
              <div className="flex flex-col border-[4px] border-[#F30081] rounded-[12px] bg-[#FFFFFF] pt-[20px] pb-[25px] px-[15px] lg:px-[28px]">
                <h4 className="thicccboiBold text-[#F30081] text-[24px] lg:text-[28px] xl:text-[32px] font-bold mb-6">Pro</h4>
                <p className="thicccboiMedium text-[26px] lg:text-[34px] text-black font-semibold mb-4 xl:mb-6">$49 <sub className="text-[#626262] text-[18px] right-0 bottom-0 thicccboiLight">/month</sub></p>

                <p className="thicccboiMedium text-[#767676] text-[16px] bg-[#F6F6F6] py-2 pl-4 pr-7 w-fit rounded-full">Features included</p>

                <ul className="space-y-3 xl:space-y-6 mt-4 xl:mt-6 mb-8">
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />Content library</li>
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />Automated engagement tools</li>
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />Single sign-on (SSO)</li>
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" /> Unlimited ad spend</li>
                  <li className="flex items-start text-black font-[500]">
                    <Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />
                    <span>
                      Free Hootsuite Academy training
                      <span className="bg-[#DC0E0E] text-[10px] rounded-[3px] py-[2px] px-1 text-white ml-2">New</span>
                    </span>
                  </li>
                  <li className="flex items-center text-black font-[500]"><Image className="mr-2" width={16} height={16} src={'/images/new-landing-page/ultick.svg'} alt="" />  Advanced analytics</li>
                </ul>

                <button className="thicccboiBold mt-auto md:mt-auto group text-white text-[16px] xl:text-[18px] font-semibold bg-[#F30081] hover:bg-[#c9026c] transition-all duration-[0.3s] pl-[30px] pr-[10px] py-[8px] rounded-[50px] flex items-center justify-between w-full">
                  <span className="flex-[1]">Get Started</span>
                  <span className="transition-colors duration-[0.3s] bg-white rounded-full size-[35px] flex items-center justify-center ml-4">
                    <div className="relative w-[18px] h-[18px]">
                      <Image
                        className="absolute inset-0 transition-opacity duration-[0.3s] object-contain"
                        width={18}
                        height={18}
                        src="/images/new-landing-page/rightarrowblack.svg"
                        alt=""
                      />
                    </div>
                  </span>
                </button>

              </div> */}

            </div>

            <div className="mt-[55px] xl:mt-[80px] md:pl-5">
              <p className="thicccboiRegular flex items-center text-[15px] sm:text-[18px] text-white md:justify-start justify-center">Not sure which package is best for you <Image width={21} height={35} className="w-[12px] ml-2" src={'/images/new-landing-page/what.png'} alt="cfb" /></p>

              <div className="flex items-center mt-3 md:justify-start justify-center sm:flex-row flex-col">
                <h3 className="thicccboiBold text-white text-[26px] sm:text-[40px] lg:text-[46px] xl:text-[68px] xxl:text-[80px]">Let&apos;s begin here</h3>
                <Link href={'#'} className="text-[#EFC923] pt-[5px] ml-6 thicccboiRegular font-[500] text-[18px] sm:text-[22px] lg:text-[24px] xl:text-[30px] flex items-center">Schedule Call <Image className="ml-3" width={18} height={18} src={'/images/new-landing-page/schecall.svg'} alt="" /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* collaborate  */}
        <div className="pt-[40px] sm:pt-[60px] xl:pt-[80px] pb-[30px] lg:pb-[40px] xl:pb-[60px] bg-white">
          <div className="container">
            <div>
              <h4 className="thicccboiBold text-black text-[22px] sm:text-[30px] lg:text-[35px] text-center">You can collaborate <br /> anywhere with our team.</h4>
              <div className="mt-5">
                <AutoPlay />
              </div>

              <div id="contact" className="bg-[#330B6F] rounded-[20px] px-[18px] sm:px-[25px] lg:px-[56px] xl:px-[70px] pb-[30px] my-7 sm:my-10 xl:my-12 md:mx-[60px] lg:mx-[100px] vbg">
                <p className="thicccboiBold text-white text-[20px] sm:text-[25px] lg:text-[30px] text-center py-6 sm:py-8 lg:py-10">Got Questions? Ask us</p>

                <div>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
                      <input type="text" placeholder="Name" className="text-black w-full p-[12px] sm:p-[15px] outline-none border-none bg-white rounded-[6px] placeholder:text-black placeholder:font-[300]" />
                      <input type="email" placeholder="Email" className="text-black w-full p-[12px] sm:p-[15px] outline-none border-none bg-white rounded-[6px] placeholder:text-black placeholder:font-[300]" />
                      <input type="text" placeholder="Phone" className="text-black w-full p-[12px] sm:p-[15px] outline-none border-none bg-white rounded-[6px] placeholder:text-black placeholder:font-[300]" />
                    </div>

                    <textarea placeholder="Message" className="text-black w-full mt-[10px] md:mt-[16px] h-[125px] md:h-[160px] p-[15px] outline-none border-none bg-white rounded-[6px] placeholder:text-black placeholder:font-[300]">

                    </textarea>
                  </form>


                  <div className="flex lg:items-center justify-between mt-5 lg:flex-row flex-col md:items-start items-center">

                    <div className="flex items-start sm:items-center sm:space-x-3 xl:space-x-5 sm:flex-row flex-col">
                      {/* <Link href='#' className="flex items-center">
                        <Image width={26} height={26} src={'/images/new-landing-page/team.svg'} alt="" />
                        <p className="thicccboiRegular text-white text-[14px] xl:text-[16px] ml-1 xl:ml-2">Boosted360 connect</p>
                      </Link>
                      <Link href={'#'} className="flex items-center sm:my-0 my-3">
                        <Image width={26} height={26} src={'/images/new-landing-page/wp.svg'} alt="" />
                        <p className="thicccboiRegular text-white text-[14px] xl:text-[16px] ml-1 xl:ml-2">+91 9830445152</p>
                      </Link> */}
                      <Link href="mailto:info@boosted360.com" className="flex items-center">
                        <Image width={26} height={26} src={'/images/new-landing-page/email.svg'} alt="" />
                        <p className="thicccboiRegular text-white text-[14px] xl:text-[16px] ml-1 xl:ml-2">info@boosted360.com</p>
                      </Link>
                    </div>

                    <div className="lg:mt-0 mt-[15px]">
                      <button className="mt-5 thicccboiBold group sm:mt-auto text-black text-center text-[16px] xl:text-[18px] font-semibold bg-[#EFC923] transition-all duration-[0.3s] pl-[16px] pr-[5px] xl:pr-[9px] py-[6px] rounded-[50px] flex items-center justify-between w-full">
                        <span className="flex-[1]">Send</span>
                        <span className="transition-colors duration-[0.3s] bg-black rounded-full size-[25px] lg:size-[35px] flex items-center justify-center ml-4">
                          <div className="relative w-[14px] h-[14px]">
                            <Image
                              className="absolute inset-0 transition-opacity duration-[0.3s] object-contain"
                              width={18}
                              height={18}
                              src="/images/new-landing-page/rightarrowyellow.svg"
                              alt=""
                            />
                          </div>
                        </span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="bg-[#F2F2F2]">
          {/* <div className="container">
            <footer className="text-black py-10 lg:py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 lg:gap-12">
         
                <div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      Boosted <span className="text-[#330B6F]">360</span>
                    </h2>
                    <p className="mt-3 text-[18px] leading-[1.4]">
                      Save time and get Real results on social media. Boosted 360 makes it easy.
                    </p>
                    <div className="flex space-x-2 mt-4 text-white">
                      <Link href={'#'} className="bg-[#330B6F] hover:bg-[#261142] p-2 size-8 flex items-center justify-center rounded-full">
                        <Image width={10} height={10} src={'/images/new-landing-page/facebooklogo.svg'} alt="" />
                      </Link>
                      <Link href='#' className="bg-[#330B6F] hover:bg-[#261142] p-2 size-8 flex items-center justify-center rounded-full">
                        <Image width={10} height={10} src={'/images/new-landing-page/x.svg'} alt="" />
                      </Link>
                      <Link href='#' className="bg-[#330B6F] hover:bg-[#261142] p-2 size-8 flex items-center justify-center rounded-full">
                        <Image width={10} height={10} src={'/images/new-landing-page/linke.svg'} alt="" />
                      </Link>
                      <Link href={'#'} className="bg-[#330B6F] hover:bg-[#261142] p-2 size-8 flex items-center justify-center rounded-full">
                        <Image width={12} height={12} src={'/images/new-landing-page/insta.svg'} alt="" />
                      </Link>

                    </div>
                  </div>
                </div>

         
                <div>
                  <div>
                    <h3 className="font-bold mb-4 thicccboiBold text-[22px]">Company</h3>
                    <ul className="space-y-2 text-sm thicccboiMedium">
                      <li>About Us</li>
                      <li>Careers</li>
                      <li>Community Impact</li>
                      <li>Contact Us</li>
                      <li>Industries We Serve</li>
                      <li>Locations</li>
                      <li>Phishing Scam Alert</li>
                    </ul>
                  </div>
                </div>

             
                <div>
                  <div>
                    <h3 className="font-bold mb-4 thicccboiBold text-[22px]">Services</h3>
                    <ul className="space-y-2 text-sm thicccboiMedium">
                      <li>Digital Marketing Services</li>
                      <li>SEO Services</li>
                      <li>PPC Services</li>
                      <li>Content Marketing Services</li>
                      <li>Social Media Services</li>
                      <li>Web Design Services</li>
                      <li>Digital Advertising Services</li>
                    </ul>
                  </div>
                </div>

                
                <div>
                  <div>
                    <h3 className="font-bold mb-4 thicccboiBold text-[22px]">Knowledgebase</h3>
                    <ul className="space-y-2 text-sm thicccboiMedium">
                      <li>Digital Marketing</li>
                      <li>SEO</li>
                      <li>PPC</li>
                      <li>Content Marketing</li>
                      <li>Social Media</li>
                      <li>Web Design</li>
                    </ul>
                  </div>
                </div>
              </div>

            </footer>
          </div> */}

          <div className="bg-[#EFC923]">
            <div className="container">
              <div className="py-2 lg:py-4 flex flex-col md:flex-row justify-center items-center text-sm text-black">
                <p className="thicccboiMedium text-[12px] sm:text-[16px]">Copyright © {new Date().getFullYear()} Boosted 360. All Right reserved.</p>
                {/* <div className="flex space-x-3 ">
                  <a href="#" className="hover:underline thicccboiMedium text-[12px] sm:text-[16px]">Privacy Policy</a>
                  <span>|</span>
                  <a href="#" className="hover:underline thicccboiMedium text-[12px] sm:text-[16px]">Terms & Conditions</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Page;
