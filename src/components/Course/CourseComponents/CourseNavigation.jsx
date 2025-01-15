import React from 'react'
import CompanyLogo from '../../assets/logo.png';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
function Navigation() {
  const navigationList = ['Kontakt', 'Projekty', 'Dokumentacja', 'Kurs'];
  const [visible, setVisible] = useState(false);
  const [listView, setListView] = useState(false);
  const width = useWindowDimensions()
  const [firstLesson, setfirstLesson] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => {
          const dataBase = await getDocs(collection(db, "CourseList"));
          const coursesList = dataBase.docs.map(doc => doc.data());
          setfirstLesson(coursesList);
        };
    
        fetchCourse();
      }, []);

  useEffect(() => {
    if (width > 800) {
      setListView(true);
    } else {
      setListView(false)
    }
  }, [width]);

  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [])


  function visibleToggle() {
    setVisible(!visible)
  }





  return (
    <div className='flex relative justify-between items-center'>
      <img src={CompanyLogo} className={`h-[2rem]`}></img>


      <div className={`${listView ? "hidden" : "block"} `}>
        <IoMenuSharp fontSize="3rem" fill='var(--primary)' className='text-primary cursor-pointer' onClick={visibleToggle} />
        <div className={` transition-all duration-300 ${visible ? "opacity-100 translate-x-0 z-10" : "z-0 opacity-0 translate-x-5 pointer-events-none"} absolute right-0 top-0 flex flex-col items-end justify-center bg-primary text-mainBackground p-5 w-[100%] rounded-[12px] gap-6`} >
          <IoMdClose fontSize="2.5rem" fill='white' onClick={visibleToggle} className='cursor-pointer text-mainBackground' />

          {firstLesson.map((firstLesson, index) => (
            <div key={index} className='flex flex-col gap-10 overflow-y-scroll h-[25rem] max-h-[25rem]'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[20px] text-mainBackground'>{firstLesson.FirstLessonHeader}</h3>
                    <p className='opacity-[75%] text-mainBackground'>{firstLesson.WhatIsJs}</p>
                    <p className='opacity-[75%] text-mainBackground'>{firstLesson.HowItWorks}</p>
                    <p className='opacity-[75%] text-mainBackground'>{firstLesson.FirstProgram}</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h3 className='text-[20px]  text-mainBackground'>{firstLesson.SecondHeader}</h3>
                    <p className='opacity-[75%] text-mainBackground'>{firstLesson.Variables}</p>
                    <p className='opacity-[75%] text-mainBackground'>{firstLesson.DataType}</p>
                    <p className='opacity-[75%] text-mainBackground'>{firstLesson.Operators}</p>
                </div>
            
            </div>
            ))}
        </div>

      </div>

    

    </div>
  )
}

export default Navigation
