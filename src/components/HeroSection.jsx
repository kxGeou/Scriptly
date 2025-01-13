import React, { useEffect, useState } from 'react'
import Button from "./Button/Button.jsx";
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
function HeroSection() {
  const width = useWindowDimensions()
  return (
    <div className='flex flex-col justify-center items-center text-center h-[80svh] gap-8 relative'>
      <h1 className={`${width > 630 ? "text-[45px]" : "text-[35px]"} ${width > 1000 ? "w-[50%]" : ""} text-[35px] font-black leading-[120%] tracking-[3%]`}>Twoja przestrzeń do nauki <span className='text-primary'>JavaScript</span> od podstaw</h1>
      <p className={`${width > 630 ? "text-[20px]" : "text-[16px]"} opacity-[50%] font-medium mb-10`}>Scriptly to twój start z JavaScript</p>
      <Button name="Rozpocznij naukę"></Button>

      <span className={`text-[16px] absolute bottom-[-6%] opacity-[50%]`}>Console.log("Hello, Scriptly")</span>
    </div>
  )
}

export default HeroSection
