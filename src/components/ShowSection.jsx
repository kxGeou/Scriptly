import React from 'react'
import ShowBox from './ShowBox'
import { FaBookBookmark } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
function ShowSection() {
  return (
    <div className='w-full mt-[8rem] flex flex-col gap-16'>
      <ShowBox 
        icon={<FaBookBookmark />} 
        color = ""
        title="Twoja uproszczona nauka"
        firstList="Naucz się podstaw JavaScript bez zbędnego żargonu."
        secondList="Zrozum złożone koncepcje dzięki prostym przykładom"
        thirdList="Uzyskaj jasne wyjaśnienia krok po kroku, dla trudnych zagadnień."
        bg = "bg-mainBackground"
        >
      </ShowBox>
      <ShowBox 
      icon={<FaLaptopCode fill='white' />} 
      title="Twoja uproszczona nauka"
      firstList="Naucz się podstaw JavaScript bez zbędnego żargonu."
      secondList="Zrozum złożone koncepcje dzięki prostym przykładom"
      thirdList="Uzyskaj jasne wyjaśnienia krok po kroku, dla trudnych zagadnień."
      bg = "bg-primary"
      color = "text-white"
      > 
      </ShowBox>
    </div>
  )
}

export default ShowSection
