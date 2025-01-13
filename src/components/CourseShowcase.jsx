import React from 'react'
import Button from './Button/Button'
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
function CourseShowcase() {
  const width = useWindowDimensions();

  const descText = "Z Scriptly łatwo nauczysz się JavaScript od podstaw. Praktyczne ćwiczenia, testy i szczegółowa dokumentacja pomogą Ci szybko opanować podstawy, by zacząć tworzyć własne projekty"


  return (
    <div className='flex flex-col items-center justify-center gap-7 mt-[15rem] mb-[15rem]'>
      <h2 className={`text-[25px] text-center font-semibold leading-[180%] ${width > 1000 ? "text-[30px]" : ""}`}>Rozpocznij swoją przygodę z <span className='bg-primary p-3 text-mainBackground'>JavaScript!</span></h2>
      <p className={`text-center opacity-[75%] text-[16px] leading-[170%] ${width > 1000 ? "text-[16px] w-[50%]" : ""}`}>{descText}</p>
      <div className={`w-[100%] max-w-[600px] h-[15rem] bg-primary opacity-75 rounded-[12px] my-7 ${width > 1000 ? "h-[20rem]" : ""}`}></div>
      <Button name="Rozpocznij kurs"></Button>
    </div>
  )
}

export default CourseShowcase
