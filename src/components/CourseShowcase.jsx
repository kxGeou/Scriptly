import React from 'react'
import Button from './Button/Button'
function CourseShowcase() {
  const descText = "Z Scriptly łatwo nauczysz się JavaScript od podstaw. Praktyczne ćwiczenia, testy i szczegółowa dokumentacja pomogą Ci szybko opanować podstawy, by zacząć tworzyć własne projekty"


  return (
    <div className='flex flex-col items-center justify-center gap-7 mt-[10rem]'>
      <h2 className='text-[25px] text-center font-semibold leading-[170%]'>Rozpocznij swoją przygodę z <span className='bg-primary p-3 text-mainBackground'>JavaScript!</span></h2>
      <p className='text-center opacity-[75%] text-[15px] leading-[170%]'>{descText}</p>
      <div className='w-[100%] max-w-[800px] h-[15rem] bg-primary opacity-75 rounded-[12px] my-7'></div>
      <Button name="Rozpocznij kurs"></Button>
    </div>
  )
}

export default CourseShowcase
