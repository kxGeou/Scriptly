import React, { useEffect, useState } from 'react';
import "../../App.css";
import { db } from '../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import CourseNavigation from './CourseComponents/CourseNavigation.jsx';
function JavaScriptBasics() {
    const [firstLesson, setfirstLesson] = useState([]);

    useEffect(() => {
        const fetchCourse = async () => {
          const dataBase = await getDocs(collection(db, "FirstSteps"));
          const coursesList = dataBase.docs.map(doc => doc.data());
          setfirstLesson(coursesList);
        };
    
        fetchCourse();
      }, []);

    
      return (
        <div className='bg-mainBackground py-8 px-5 max-w-[1400px] m-auto'>
          <CourseNavigation></CourseNavigation>
            {firstLesson.map((firstLesson, index) => (
              <div key={index} className='flex flex-col gap-10'>

                <section className='mt-[3rem] flex flex-col gap-6'>
                  <h2 className='font-semibold text-[25px]'>{firstLesson.HeroHeader}</h2>
                  <p className='text-[16px] opacity-[70%]'>{firstLesson.HeroDescription}</p>
                </section>


                <section className='flex flex-col gap-3'>
                  <p className='text-primary text-[20px]'>Cele Lekcji:</p>
                  <ul className='flex flex-col gap-2 opacity-[75%]'>
                    <li>{firstLesson.LessonPurpose[0]}</li>
                    <li>{firstLesson.LessonPurpose[1]}</li>
                    <li>{firstLesson.LessonPurpose[2]}</li>
                  </ul>
                </section>

                <section className='flex-col flex gap-2'>
                    <h2 className='font-semibold text-[25px]'>1. {firstLesson.FirstLesson}</h2>
                    <hr className='h-[2px] bg-gray-800 mb-2' />
                    <p >{firstLesson.FirstLessonDesc}</p>
                    <ul className='flex flex-col gap-5  mt-3'>
                      <div>
                        <label className='text-primary text-[20px]'>Ciało</label>
                        <li className='opacity-[75%]'>{firstLesson.ShowCase[0]}</li>                  
                      </div>
                      <div>
                        <label className='text-red-700 text-[20px] '>Kolory i ubranie</label>
                        <li className='opacity-[75%]'>{firstLesson.ShowCase[1]}</li>
                      </div>
                      <div>
                        <label className='text-purple-800 text-[20px]'>Mózg Robota</label>
                        <li className='opacity-[75%]'>{firstLesson.ShowCase[2]}</li>
                      </div>
                    </ul>
                </section>
              </div>
            ))}
        </div>
      );
    };

export default JavaScriptBasics
