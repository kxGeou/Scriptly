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

function SecondLesson() {
  const [secondLesson, setsecondLesson] = useState([]);
  const width = useWindowDimensions()
      useEffect(() => {
          const fetchCourse = async () => {
            const dataBase = await getDocs(collection(db, "Lekcja2"));
            const coursesList = dataBase.docs.map(doc => doc.data());
            setsecondLesson(coursesList);
          };
      
          fetchCourse();
        }, []);
  
const typeData = `
let imie = "Jan"; // Zmienna przechowująca tekst
const wiek = 25;  // Zmienna przechowująca liczbę
var miasto = "Warszawa"; // Starszy sposób deklaracji zmiennych 
`
      

  return (
    <div className='bg-mainBackground py-8 px-5 min-h-screen'>
      <div className='max-w-[1400px] m-auto'>
          <CourseNavigation></CourseNavigation>
          {secondLesson.map((lesson, index) => (
            <div className='flex flex-col gap-[5rem]' key={index}>
              <HeaderLesson title={lesson.Tytuł} desc={lesson.OpisTytuł} purpose={lesson.Cele}></HeaderLesson>
              <TextItem title="Zmienne – Podstawa Przechowywania Danych" miniDesc={lesson.CzymSaZmienne}></TextItem>
              <div>
                <CodeBlock code={typeData} system="JavaScript"></CodeBlock>
                <p className='opacity-[75%] mt-3'>💡Wskazówka: Używaj let i const, ponieważ są nowocześniejsze i bardziej bezpieczne niż var.</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SecondLesson
