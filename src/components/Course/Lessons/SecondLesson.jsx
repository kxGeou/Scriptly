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
  const [show, setShow] = useState(false)
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
      
        const everyData = [
          {type: "Liczby (Number)", desc: "Reprezentują wartości liczbowe, zarówno całkowite, jak i dziesiętne:", code: "let price = 19.99"},
          {type: "Teksty (String)", desc: "Służą do przechowywania tekstu, który zapisujemy w cudzysłowie:", code: "let greeting = 'Cześć, świecie!';"},
          {type: "Wartości logiczne (Boolean)", desc: "Reprezentują tylko dwie wartości: true (prawda) lub false (fałsz).", code: "let isAvailable = true/false;"},
          {type: "Obiekty (Object)", desc: "Pozwalają na przechowywanie bardziej złożonych danych w strukturach klucz: wartość:", code: "let person = {name: 'Kamil', age: 30}"},
          {type: "Tablice (Array)", desc: "Przechowują wiele wartości w jednej zmiennej:", code: "let fruits = ['jabłko', 'banan', 'wiśnia'];"},
        ] 

        const tipHandler = () => {
          setShow(!show)
        }

  return (
    <div className='bg-mainBackground py-8 px-5 min-h-screen'>
      <div className='max-w-[1400px] m-auto '>
          <CourseNavigation></CourseNavigation>
          {secondLesson.map((lesson, index) => (
            <div className='flex flex-col gap-[3rem]' key={index}>
              <HeaderLesson title={lesson.Tytuł} desc={lesson.OpisTytuł} purpose={lesson.Cele}></HeaderLesson>
              <TextItem title="Zmienne – Podstawa Przechowywania Danych" miniDesc={lesson.CzymSaZmienne}></TextItem>
              <div className='relative'>
                <CodeBlock code={typeData} system="JavaScript"></CodeBlock>
                <button onClick={tipHandler} className='bg-primary py-2 px-5 rounded-[8px] hover:bg-primaryDarker mt-[1rem]'>💡Wskazówka</button>
                <div onClick={tipHandler} className={`absolute bg-primaryDarker w-[50%] left-[50%] translate-x-[-50%] p-[2rem] top-[5%] z-10 flex flex-col rounded-[12px] transition-all duration-300 ${show ? "opacity-100 translate-x-0 z-10" : "opacity-0 translate-x-5 pointer-events-none"}`}>
                  <p>let – Używamy, gdy wartość zmiennej może się zmienić.</p>
                  <p>const – Używamy, gdy wartość zmiennej pozostaje stała (np. imię).</p>
                  <p>var – Starszy sposób deklaracji zmiennych, którego unikamy w nowoczesnym kodzie.
                  </p>
                </div>
              </div>
              <TextItem title={"Typy Danych"} miniDesc={"W JavaScript mamy różne typy danych. Oto najczęściej używane:"}></TextItem>
              {everyData.map((item, index) => (
                <div className='flex flex-col'>
                      <p className='text-[20px] font-semibold'>{item.type}</p>
                      <p className='opacity-[75%] mb-5'>{item.desc}</p>
                    <CodeBlock code={item.code} styling={"h-[5rem] flex justify-start items-center"}></CodeBlock>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  )
}

export default SecondLesson
