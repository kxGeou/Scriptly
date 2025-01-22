import CourseNavigation from '../CourseComponents/CourseNavigation';
import React, { useEffect, useState } from 'react';
import "../../../App.css";
import { db } from '../../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import useWindowDimensions from '../../../hooks/useWindowDimensions.jsx';
function FirstLesson() {
  const [firstLesson, setfirstLesson] = useState([]);
  const width = useWindowDimensions()
      useEffect(() => {
          const fetchCourse = async () => {
            const dataBase = await getDocs(collection(db, "Lekcja1"));
            const coursesList = dataBase.docs.map(doc => doc.data());
            setfirstLesson(coursesList);
          };
      
          fetchCourse();
        }, []);
  
  
  return (
    <div className='bg-mainBackground py-8 px-5 min-h-screen'>
      <div className='max-w-[1400px] m-auto'>
        <CourseNavigation ></CourseNavigation>
        {firstLesson.map((lesson, index) => (
            <div className='flex flex-col gap-[5rem]'>
              <section className='flex flex-col gap-[3rem]  mt-[4rem]'>
                <div className='flex flex-col justify-center gap-4'>
                  <h2 className='text-[40px] font-semibold leading-[110%]'>Odkryj moc JavaScript: Twój pierwszy krok w świat programowania!</h2>
                  <p className={`${width > 800 ? "w-[70%]": "w-[100%]"} opacity-[75%] leading-[140%]`}>{lesson.Wprowadzenie}</p>
                </div>

                <div className='flex flex-col gap-3'>
                  <p className='text-[22px] font-semibold text-primary'>Cele Lekcji:</p>
                  <ul className={`${width > 700 ? "" : "flex-col"} flex gap-2 w-full justify-between`}>
                    <li className={`${width > 700 ? "w-[30%]" : "w-[100%]"} p-8 bg-boxBackground rounded-[12px]  flex justify-center items-center text-center hover:bg-primaryDarker`}>Dowiesz się, czym jest JavaScript</li>
                    <li className={`${width > 700 ? "w-[30%]" : "w-[100%]"} p-8 bg-boxBackground rounded-[12px]  flex justify-center items-center text-center hover:bg-primaryDarker`}>Zrozumiesz, jak JavaScript działa w przeglądarce</li>
                    <li className={`${width > 700 ? "w-[30%]" : "w-[100%]"} p-8 bg-boxBackground rounded-[12px]  flex justify-center items-center text-center hover:bg-primaryDarker`}>Napiszesz swój pierwszy program: „Hello, World!</li>
                  </ul>
                </div>
              </section>

              <section className='flex flex-col'>
                <h2 className={`text-[30px] font-semibold leading-[110%]`}>Funkcja JavaScript</h2>
                <hr className='mt-4 h-[2px] bg-white'/>
                <div className='mt-8 flex flex-col gap-2'>
                  <p className='text-[20px] font-semibold mb-4'>Wyobraź sobie że twoja przeglądarka to teatrzyk kukiełkowy</p>
                  <ul className={`${width > 700 ? "gap-3" : "gap-4"} opacity-[75%] flex flex-col list-disc px-4`}>
                    <li>{lesson.Teatrzyk[0]}</li>
                    <li>{lesson.Teatrzyk[1]}</li>
                    <li>{lesson.Teatrzyk[2]}</li>
                  </ul>
                </div>
              </section>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FirstLesson
