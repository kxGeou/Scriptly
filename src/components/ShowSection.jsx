import React from 'react'
import ShowBox from './ShowBox'
import { FaBookBookmark } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';

function ShowSection() {
  const width = useWindowDimensions()
  return (
    <div className={`${width < 1000 ? " flex-col" : "flex-row"} w-full mt-[8rem] flex gap-16 justify-center items-center`}>
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
