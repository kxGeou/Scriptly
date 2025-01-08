import React from 'react'
import CompanyLogo from './assets/logo.png';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

function Navigation() {
  const navigationList = ['Kontakt', 'Projekty', 'Dokumentacja', 'Kurs'];
  const [visible, setVisible] = useState(false);
  const [listView, setListView] = useState(false);
  const width = useWindowDimensions()

  useEffect(() => {
      if (width > 800) {
        setListView(true);
      } else {
        setListView(false)
      }
  }, [width]);

  function visibleToggle() {
    setVisible(!visible)
  }

  return (
    <div className='flex relative justify-between items-center'>
      <img src={CompanyLogo} className={`h-[1.75rem] `}></img>


      <div className={`${listView ? "hidden" : "block"}`}>


        <IoMenuSharp fontSize="2.5rem" className='text-primary cursor-pointer' onClick={visibleToggle}/>
        
        <div className={`transition-all duration-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5 pointer-events-none"} absolute right-0 top-0 flex flex-col items-end justify-center bg-primary text-mainBackground p-5 w-[100%] rounded-[12px] gap-6`}>
          <IoMdClose fontSize="2.5rem" onClick={visibleToggle} className='cursor-pointer text-mainBackground'/>
         
          {navigationList.map((navItem, index) => (
              <a key={index} className='cursor-pointer text-[20px] hover:bg-primaryDarker w-full text-right p-2 rounded-[8px] text-mainBackground'>{navItem}</a>
          ))}
        </div>
      </div>

      <div className={`space-x-12 ${listView ? "block" : "hidden"}`}>
          {navigationList.map((listItem, index) => (
            <a key={index} className={`cursor-pointer text-secondary ${index + 1 === navigationList.length ? "text-white bg-primary px-4 py-2 rounded-[8px] " : "bg-none"}`}>{listItem}</a> 
          ))}
      </div>    

    </div>
  )
}

export default Navigation
