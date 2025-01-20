import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import Logo from './assets/logoo.png'
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { useCallback } from 'react';
function Footer() {
  const width = useWindowDimensions()

  const companyEmail = "grzegorz.wfb@gmail.com";
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}`;

  const handleClick = () => {
    window.open(gmailURL, "_blank");
  };

  const handleOpenLink = useCallback((url) => {
    window.open(url, "_blank");
  }, []);

  const links = {
    facebook : "https://www.facebook.com/profile.php?id=100073536213869"
  }

  return (
    <div className={`flex gap-[3rem] justify-between mt-[15rem] mb-4 ${width > 800 ? "flex-row" : "flex-col"} `}>
      <div className='flex flex-col gap-3 items-start'>
        <img src={Logo} alt="icon of our company" className='h-[2rem]'/>
        <p className='w-[75%] opacity-[70%]'>Platforma edukacyjna dla początkujących programistów w języku JavaScript</p>
      </div>


      <div className='flex flex-col gap-2'>
        <h2 className='text-[25px] font-semibold mb-[0.5rem]'>Kontakt</h2>
        <div className='flex items-center gap-[0.5rem]'>
          <SiGmail fill='red'></SiGmail>
          <p className='hover:text-primaryDarker text-[16px] opacity-[70%] cursor-pointer' onClick={handleClick} >grzegorz.wfb@gmail.com</p>
        </div>
        <div className='flex items-center gap-[0.5rem]'>
          <FaFacebookF fill='var(--primary)'></FaFacebookF>
          <p className='hover:text-primaryDarker opacity-[70%] cursor-pointer'onClick={() => handleOpenLink(links.facebook)} >Grzegorz Matusik</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
