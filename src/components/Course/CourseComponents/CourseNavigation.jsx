import React from 'react'
import CompanyLogo from '../../assets/logoo.png';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';
import { lessons } from '../lessonConfig';
function Navigation() {
 

  return (
    <div className='flex relative justify-between items-center'>
      <img src={CompanyLogo} className={`h-[2rem]`}></img>
      <div className='relative'>
        <IoMenuSharp fontSize="3rem" fill='var(--primary)' className='cursor-pointer'></IoMenuSharp>
      </div>
      <div className='flex flex-col justify-end items-end absolute right-1 text-right bg-primary min-w-[50%] top-0 rounded-[12px] p-[1.5rem]'>
            <IoMdClose fontSize="3rem" fill='var(--secondary)' className='cursor-pointer'></IoMdClose>
            <ul className='flex flex-col gap-6'>
                {lessons.map((lesson) => (
                    <li key={lesson.id}>
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
