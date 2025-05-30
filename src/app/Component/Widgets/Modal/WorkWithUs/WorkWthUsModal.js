"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { BtnArrow, Exrinceone } from '../../../../assets/index';
import { useFormik } from 'formik';
import validator from 'validator';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import _ from 'lodash';
const WorkWthUsModal = ({ isOpen, onClose }) => {
  // const [value, setValue] = useState('');

 
  const removeExtraSpace = (s) => {
    var rSpase = s.replace(/\s{2,}/g, ' ');
    return _.trimStart(rSpase);
  };
 
  const [btnLoader, setBtnLoader] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  var _ = require('lodash');


 

  const [WorkWithUsData, setWorkWithUsData] = useState({
      name: "",
      email: "",
      phone: "",
      website: "",
      message: "",
      select_value: "",
      company: "",
      document_file: ""
  });


  const validate = values => {
    const errors = {};
  
    if (!removeExtraSpace(values.name)) {
      errors.name = 'Full name is required';
    } else if (values.name.length > 100) {
      errors.name = 'Must be 100 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Work email is required';
    } else if ( !validator.isEmail(values.email)) {
      errors.email = 'Invalid work email address';
    }
    if (!values.phone) {
      errors.phone = 'Phone is required';
    } else if (!/^\+?[0-9\s\-()]*$/.test(values.phone)) {
        errors.phone = 'Invalid phone number';
    } else {
        const phoneDigits = values.phone.replace(/[^\d]/g, '');
        if (phoneDigits.length < 10 || phoneDigits.length > 15) {
            errors.phone = 'Phone number must be between 10 and 15 digits';
        }
    }

    if (values.website) {
      if (!validator.isURL(values.website)) {
          errors.website = 'Invalid website address';
      } else if (values.website.match("[<>]")) {
          errors.website = 'Please provide a valid website';
      }
  }
 

    if (!removeExtraSpace(values.message)) {
      errors.message = 'Message is required';
    } 


  
    return errors;
  };



  const router  = useRouter();

  function myGreeting() {
    setIsThankYou(false);
    setIsError(false);
  }

  const formik = useFormik({
    initialValues: WorkWithUsData,
    validate,
    onSubmit: (values, {resetForm}) => {
      console.log('WorkWithUsData',WorkWithUsData);
      setBtnLoader(true);
      const data = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        website: values.website,
        message: values.message,
        company: values.company,
        select_value:values.select_value,
        document_file: values.document_file,
      }
      axios.post(`https://works-reddensoft.com/bwd_cta/admin/api/boosted360-work-with-us`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      })
        .then(function (response) {
          setIsThankYou(true);
          resetForm({values: ""});
          router.push('/thank-you');
        })
        .catch(function (error) {
          setIsError(error?.message ? error.message: "Network Error")
        })
        .finally(() => {
          setBtnLoader(false);
          setTimeout(myGreeting, 10000);
        }); 
    },
  });

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal') {
      onClose();
    }
  };


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
    <div id="modal" className='fixed top-0 left-0 w-screen backdrop-filter backdrop-blur-[2px] h-screen bg-black bg-opacity-50 overflow-auto z-[9999] px-2'>
      <div className='modal-centered flex items-center'>
        <div className='container mx-auto relative xl:max-w-[1000px] bg-[#f8f8f8] border-[1px] border-solid border-[#00000033] rounded-[10px] !p-[10px] md:p-[16px]'>
          <button onClick={() => {
              onClose();
              formik.resetForm({ values: "" });
            }} className='text-[16px] text-[#666] font-bold absolute top-[10px] right-[10px] size-[30px] border border-[#5db947] hover:bg-[#5db947] rounded-full pt-[2px] hover:text-white pl-[1px]'>&#10005;</button>
          <div className='max-w-[100%] lg:max-w-[90%] m-auto'>
            <div className='py-[20px] xxl:py-[28px] md:mt-0 mt-6'>
              <h2 className='text-[20px] md:text-[26px] lg:text-[28px] font-bold leading-[1.25] text-black text-center'>
                Accelerate Your Marketing Without Growing Headcount
              </h2>
              <p className='text-[16px] md:text-[18px] lg:text-[20px] pt-[5px] leading-[1.25] text-black text-center'>
                Fill out the form below to speak with someone from our team.
              </p>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  <div className='px-[8px] pb-[12px]'>
                   
                      <input type="text" name="name" onChange={formik.handleChange}
                      value={removeExtraSpace(formik.values.name)} onBlur={formik.handleBlur} className='w-full h-[40px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]' placeholder="Full name *" />
                      {formik.touched.name && formik.errors.name ? <div style={{color: '#ff0000'}}>{formik.errors.name}</div> : null}
                  </div>
                  <div className='px-[8px] pb-[12px]'>
                    
                    <input type="text" name="email" onChange={formik.handleChange}
                      value={removeExtraSpace(formik.values.email)} onBlur={formik.handleBlur} className='w-full h-[40px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]' placeholder="Work email*" />
                      {formik.touched.email && formik.errors.email ? <div style={{color: '#ff0000'}}>{formik.errors.email}</div> : null}
                  </div>
                  <div className='px-[8px] pb-[12px]'>
                    <PhoneInput
                      placeholder="Enter phone number*"
                      value={formik.values.phone}
                      onChange={(val) => formik.setFieldValue('phone', val)}
                      defaultCountry="US"
                      international
                      countryCallingCodeEditable={true}
                      className='w-full h-[40px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none pl-[10px] pr-[25px] text-[16px] text-[#666]'
                    />
                     {formik.touched.phone && formik.errors.phone ? <div style={{ color: '#ff0000' }}>{formik.errors.phone}</div> :
                    error?.phone ? (<div style={{ color: '#ff0000' }}>{errors.phone}</div>) : null}
                  </div>
                 
                  <div className='px-[8px] pb-[12px]'>
                    <input
                      type='text'
                      name="website"
                      onChange={formik.handleChange}
                      value={removeExtraSpace(formik.values.website)} onBlur={formik.handleBlur}
                      placeholder='Website'
                      className='w-full h-[40px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]'
                    />
                    {formik.touched.website && formik.errors.website ? <div style={{ color: '#ff0000' }}>{formik.errors.website}</div> :
                      error?.website ? (<div style={{ color: '#ff0000' }}>{error.website}</div>) : null}
                  </div>
                  <div className="px-[8px] pb-[12px]">
                    <select
                      name="select_value"
                      value={formik.values.select_value} // Controlled by Formik
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full h-[40px] rounded-[4px] bg-transparent border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]"
                    >
                      <option value="" disabled>
                        I&apos;d like to talk about
                      </option>
                      <option value="Search Engine Optimization">Search Engine Optimization</option>
                      <option value="Local SEO">Local SEO</option>
                      <option value="Ecommerce SEO">Ecommerce SEO</option>
                      <option value="SEO Audit">SEO Audit</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Meta Ads">Meta Ads</option>
                      <option value="Amazon Marketing">Amazon Marketing</option>
                      <option value="YouTube Advertising">YouTube Advertising</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Email Marketing">Email Marketing</option>
                      <option value="Reputation Management">Reputation Management</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Others">Others</option>
                    </select>
                    
                    
                  </div>

                  <div className='px-[8px] pb-[12px]'>
                    <input 
                      type='text'
                      name="company"
                      onChange={formik.handleChange}
                      value={removeExtraSpace(formik.values.company)} onBlur={formik.handleBlur}
                      placeholder='Company'
                      className='w-full h-[40px] rounded-[4px] bg-[#fff] border border-solid border-[#ececec] outline-none px-[25px] text-[16px] text-[#666]'
                    />
                  </div>
                  
                  <div className='px-[8px] pb-[12px] md:col-span-2'>
                   

                    <textarea type="text" name="message" onChange={formik.handleChange}
                    value={removeExtraSpace(formik.values.message)} onBlur={formik.handleBlur} rows={3} placeholder='Your message/requirements*' className='w-full p-3 rounded-sm resize-y h-28 border border-solid border-[#ececec]' />
                    {formik.touched.message && formik.errors.message ? <div style={{color: '#ff0000'}}>{formik.errors.message}</div> : null}
                  </div>
                  <div className='px-[8px] pb-[12px] md:col-span-2'>
                   
                    <input type="file" className='hidden' id="fileUpload" onChange={(event) => {
                      formik.setFieldValue("document_file", event.currentTarget.files[0]);
                      }} name='document_file' accept=".doc, .docx" />
                    <label htmlFor="fileUpload" className='text-[16px] text-[#666] flex items-center border rounded border-solid border-[#ececec] px-4 py-2'>
                      <div className='size-6 shrink-0 flex text-white items-center justify-center rounded-full bg-[#5db947] mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 15.577v-8.65l-2.33 2.33l-.708-.718L12 5l3.539 3.539l-.708.719L12.5 6.927v8.65zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"/></svg>
                      </div>
                      {formik.values.document_file ? `...${formik.values.document_file.name.slice(-25)}`:'Upload a .doc or .docx file for the project brief.'}

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
                    {/* <button type="submit" className="ease_in_out bg-[#5db947] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#5db947] md:mb-4 mb-[20px] px-[20px] xxl:px-[30px] md:px-[55px] py-[15px] md:py-[16px] xxl:py-[20px] mt-[20px] xxl:mt-[40px] hover:bg-[#5db947]">
                      Submit Your Query
                      <span className="ml-[10px]">
                        <Image src={BtnArrow} alt="arrow" />
                      </span>
                    </button> */}


                    <button type="submit" disabled={btnLoader} className="ease_in_out bg-[#5db947] text-[14px] md:text-[15px] font-bold text-white uppercase inline-flex border border-solid border-[#5db947] md:mb-4 mb-[20px] px-[20px] xxl:px-[30px] md:px-[55px] py-[15px] mt-[18px] hover:bg-[#5db947]">
                      Submit Your Query 
                      {btnLoader ? (
                          <span className='btn-ring-animation'></span>
                      ):(
                        <span className="ml-[10px]">
                        <Image src={BtnArrow} alt="arrow" />
                      </span>
                      )}
                  </button>
                
                      {isThankYou && (
                      <div className='alert alert-success mt-3'>
                          Thank you for getting in touch!
                      </div>
                      )}
                      {isError && (
                      <div className='alert alert-error mt-3'>
                          {isError}
                      </div>
                      )}
                    </div>  
                  </div>


                  
                
              </form>
              <div className='hidden lg:block'>
                <div className='flex items-center justify-center'>
                  <div>
                    <Image src={Exrinceone} alt="profile" className="size-[80px] rounded-full object-cover" />
                  </div>
                  <div className='pl-[25px] max-w-[450px] py-[20px]'>
                    <h3 className='text-[20px] font-bold leading-[1.25] text-black text-left'>
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
