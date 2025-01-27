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
            const dataBase = await getDocs(collection(db, "Lekcja5"));
            const coursesList = dataBase.docs.map(doc => doc.data());
            setthirdLesson(coursesList);
          };
      
          fetchCourse();
        }, []);
  
const tabCreate = `let fruits = ["apple", "banana", "orange"];
`
const tabGet = 
`console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
`

const object = 
`let person = {
  name: "John",
  age: 30,
  city: "New York"
};
`
const objectGet = `console.log(person.name); // "John"
console.log(person['age']); // 30
`

const objectMod =
`person.city = "San Francisco"; // modyfikacja
person.country = "USA"; // dodanie nowego klucza
delete person.age; // usuwanie właściwości obiektu
`


  return (
    <div className='bg-mainBackground py-8 px-5 min-h-screen'>
      <div className='max-w-[1400px] m-auto'>
          <CourseNavigation></CourseNavigation>
          {thirdLesson.map((item, index) => (
            <div className='flex flex-col gap-[3rem]' key={index}>
                <HeaderLesson
                  title={item.Tytuł}
                  desc={item.OpisTytuł}
                  purpose={item.Cele}
                ></HeaderLesson>

                <div>
                  <TextItem title={"Tablice"} miniDesc={"Tablica to struktura danych, która pozwala na przechowywanie wielu wartości w jednym zmiennym obiekcie. Można myśleć o tablicy jak o listach, które możesz przechowywać w jednym miejscu."}></TextItem>
                  <CodeBlock code={tabCreate} description={"Tworzenie tablicy"} pStyling={"mb-2"} system={"JavaScript"}></CodeBlock>
                  <CodeBlock code={tabGet} description={"Dostęp do elementów tablicy"} pStyling={"mb-2"} system={"JavaScript"}></CodeBlock>

                    <h2 className='text-[20px] font-semibold mt-6'>Metody Tablicowe</h2>
                  <ol className='list-disc pl-4 flex flex-col gap-2 mt-2'>
                    <li className='opacity-75'>.push() - dodaje element na koniec tablicy</li>  
                    <li className='opacity-75'>.pop() - usuwa ostatni element z tablicy</li>  
                    <li className='opacity-75'>.shift() - usuwa pierwszy element z tablicy</li>  
                    <li className='opacity-75'>.unshift() - dodaje element na początek tablicy</li>  
                    <li className='opacity-75'>.length - zwraca długość tablicy</li>  
                  </ol>                  
                </div>

                <div>
                  <TextItem title={"Obiekty"} miniDesc={"Obiekt to struktura danych, która przechowuje dane w formacie klucz-wartość. To idealne rozwiązanie, gdy chcesz przechowywać złożone dane, jak np. informacje o osobach, samochodach itp."}></TextItem>
                  <CodeBlock code={object} description={"Tworzenie obiektu:"} pStyling={"mb-2"} system={"JavaScript"}></CodeBlock>
                  <CodeBlock code={objectGet} description={"Dostęp do danych obiektu:"} pStyling={"mb-2"} system={"JavaScript"}></CodeBlock>
                  <CodeBlock code={objectMod} description={"Dodawanie lub modyfikowanie właściwości obiektu:"} pStyling={"mb-2"} system={"JavaScript"}></CodeBlock>
                </div>

                <section className="flex flex-col gap-4">
                  <div>
                    <h2 className={`text-[30px] font-semibold leading-[110%]`}>Zadania z tablic oraz obiektów</h2>
                    <hr className='mt-4 h-[2px] bg-white'/>
                  </div>

                  <div className='flex flex-col gap-5'>
                    <div className="mt-4">
                      <p className="text-[18px] font-semibold ">Zadanie 1: Stwórz tablicę numbers zawierającą 5 liczb. Następnie:</p>
                      <ol className='flex flex-col gap-2 list-disc pl-4 mt-2'>
                        <li className='opacity-75'>Dodaj liczbę 6 na koniec tablicy</li>
                        <li className='opacity-75'>Usuń pierwszy element tablicy</li>
                        <li className='opacity-75'>Zmień drugi element tablicy na 9</li>
                      </ol>
                    </div>
                    <div className="mt-4">
                      <p className="text-[18px] font-semibold ">Zadanie 2: Stwórz obiekt car z następującymi właściwościami:</p>
                      <ol className='flex flex-col gap-2 list-disc pl-4 mt-2'>
                        <li className='opacity-75'>make (marka),</li>
                        <li className='opacity-75'>model (model),</li>
                        <li className='opacity-75'>year (rok produkcji). Następnie:</li>
                        <li className='opacity-75'>Zmień model na nowy.</li>
                        <li className='opacity-75'>Dodaj właściwość color i ustaw ją na "red".</li>
                        <li className='opacity-75'>Usuń rok produkcji.</li>
                      </ol>
                    </div>
                    <div className="mt-4">
                      <p className="text-[18px] font-semibold ">Zadanie 3: Stwórz tablicę students z trzema obiektami, z których każdy będzie reprezentować studenta (imię, wiek, ocena). Następnie:</p>
                      <ol className='flex flex-col gap-2 list-disc pl-4 mt-2'>
                        <li className='opacity-75'>Dodaj nowego studenta do tablicy.</li>
                        <li className='opacity-75'>Wypisz dane wszystkich studentów na ekranie.</li>
                      </ol>
                    </div>
                  </div>
                </section>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ThirdLesson
