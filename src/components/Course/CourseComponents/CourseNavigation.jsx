import React from 'react'
import CompanyLogo from '../../assets/logoo.png';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';
import { lessons } from '../lessonConfig';
function Navigation() {
  
  const [visible,setVisible] = useState(false)

  const onVisible = () => {
    setVisible(!visible);
  }

  return (
    <div className='flex relative justify-between items-center'>
      <img src={CompanyLogo} className={`h-[2rem]`}></img>
      <div className='relative'>
        <IoMenuSharp fontSize="3rem" fill='var(--primary)' onClick={onVisible} className='cursor-pointer'></IoMenuSharp>
      </div>
      <div className={` max-w-[35rem] transition-all duration-300 ${visible == true ? "opacity-100 translate-x-0 z-10" : "z-0 opacity-0 translate-x-5 pointer-events-none"} flex flex-col justify-end items-end absolute right-1 text-right bg-primary top-0 rounded-[12px] p-[1.5rem]`}>
            <IoMdClose fontSize="3rem" fill='var(--secondary)' className='cursor-pointer mb-7' onClick={onVisible}></IoMdClose>
            <p className='mb-4 text-[20px] text-white opacity-30'>Spis Lekcji:</p>
            <ul className='flex flex-col gap-6 '>
                {lessons.map((lesson) => (
                    <li key={lesson.id} className='flex flex-col gap-2 bg-primaryDarker p-5 rounded-[12px]'>
                        <Link to={`/lesson/${lesson.id}`} className='text-[20px] font-semibold'>{lesson.title}</Link>
                        <p className='opacity-[75%]'>{lesson.description}</p>
                    </li>

                ))}
            </ul>
      </div>
    </div>
  )
}

export default Navigation
