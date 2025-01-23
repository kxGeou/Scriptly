import CourseNavigation from '../CourseComponents/CourseNavigation';
import React, { useEffect, useState } from 'react';
import "../../../App.css";
import { db } from '../../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import useWindowDimensions from '../../../hooks/useWindowDimensions.jsx';
import CodeBlock from '../CourseComponents/CodeBlock.jsx';
import HeaderLesson from '../CourseComponents/HeaderLesson.jsx';
import ListItem from '../CourseComponents/ListItem.jsx';
import TextItem from '../CourseComponents/TextItem.jsx';
import Footer from '../../Footer.jsx';

function ThirdLesson() {
  const [thirdLesson, setthirdLesson] = useState([]);
  const width = useWindowDimensions()
      useEffect(() => {
          const fetchCourse = async () => {
            const dataBase = await getDocs(collection(db, "Lekcja2"));
            const coursesList = dataBase.docs.map(doc => doc.data());
            setthirdLesson(coursesList);
          };
      
          fetchCourse();
        }, []);
  
  return (
    <div className='bg-mainBackground py-8 px-5 min-h-screen'>
      <div className='max-w-[1400px] m-auto'>
          <CourseNavigation></CourseNavigation>
          {thirdLesson.map((item, index) => (
            <div className='flex flex-col gap-[5rem]' key={index}>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ThirdLesson
