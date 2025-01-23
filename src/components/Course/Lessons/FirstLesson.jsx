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
            const dataBase = await getDocs(collection(db, "Lekcja1"));
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
              <HeaderLesson title={lesson.Tytuł} desc={lesson.OpisT} purpose={lesson.Cele}></HeaderLesson>
              <ListItem title="Funkcja JavaScript" desc="Wyobraź sobie że twoja przeglądarka to teatrzyk kukiełkowy" textList={lesson.Teatrzyk}></ListItem>
              <ListItem title="Definicja JavaScript" desc={lesson.Definicja} textList={lesson.DefinicjaLista}></ListItem>
              <TextItem title="Jak działa JavaScript w przeglądarce" miniDesc={lesson.JakDziala}></TextItem>
              <section> 
                <h2 className={`text-[30px] font-semibold leading-[110%]`}>Twój pierwszy program "Hello, World!"</h2>
                <hr className='mt-4 h-[3.1px] bg-white'/>
                <p className='text-[20px] font-semibold my-6'>Twój pierwszy program nie będzie wymagał nawet struktury HTML, jedynie co potrzebne to konsola z przeglądarki (skopiuj kod i wklej go do konsoli)</p>

                <div>
                  <CodeBlock system="JavaScript" code={exampleCode} />
                  <p className='opacity-[75%] mt-3'>Ten kod definiuje prostą funkcję greet, która wyświetla w konsoli tekst Hello, World!. Następnie funkcja jest wywoływana, aby zaprezentować jej działanie.</p>
                </div>
              </section>

            </div>
        ))}
        <Footer></Footer>
      </div>
    </div>
  )
}

export default FirstLesson
