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
function FirstLesson() {
  const [firstLesson, setfirstLesson] = useState([]);
  const width = useWindowDimensions()
      useEffect(() => {
          const fetchCourse = async () => {
            const dataBase = await getDocs(collection(db, "Lekcja6"));
            const coursesList = dataBase.docs.map(doc => doc.data());
            setfirstLesson(coursesList);
          };
      
          fetchCourse();
        }, []);
  
const exampleCode = `
  const greet = () => {
    console.log("Hello, World!");
  };
  greet();
  `;
        


  return (
    <div className='bg-mainBackground py-8 px-5 min-h-screen'>
      <div className='max-w-[1400px] m-auto'>
        <CourseNavigation></CourseNavigation>
        {firstLesson.map((lesson, index) => (
          <div className='flex flex-col gap-[5rem]' key={index}>
          </div>
        ))}
        <Footer></Footer>
      </div>
    </div>
  )
}

export default FirstLesson
