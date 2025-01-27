import CourseNavigation from "../CourseComponents/CourseNavigation";
import React, { useEffect, useState } from "react";
import "../../../App.css";
import { db } from "../../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import useWindowDimensions from "../../../hooks/useWindowDimensions.jsx";
import CodeBlock from "../CourseComponents/CodeBlock.jsx";
import HeaderLesson from "../CourseComponents/HeaderLesson.jsx";
import ListItem from "../CourseComponents/ListItem.jsx";
import TextItem from "../CourseComponents/TextItem.jsx";
import Footer from "../../Footer.jsx";

function SixthLesson() {
    const [thirdLesson, setthirdLesson] = useState([]);
    const width = useWindowDimensions();
  
    useEffect(() => {
      const fetchCourse = async () => {
        const dataBase = await getDocs(collection(db, "Lekcja6"));
        const coursesList = dataBase.docs.map((doc) => doc.data());
        setthirdLesson(coursesList);
      };
  
      fetchCourse();
    }, []);
  
const timeout = 
`console.log("Start");

setTimeout(() => {
  console.log("Po 2 sekundach");
}, 2000);

console.log("Koniec");
`

const timeoutReturn =
`Start
Koniec
Po 2 sekundach
`

const promise = 
`let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operacja zakończona sukcesem");
  } else {
    reject("Coś poszło nie tak");
  }
});

promise
  .then(result => console.log(result))  // Jeśli promise jest rozwiązane
  .catch(error => console.log(error));  // Jeśli promise zostanie odrzucone
`

const async =
`async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Dane pobrane"), 2000);
  });

  let result = await promise;  // Czekamy na rozwiązanie obietnicy
  console.log(result);
}

fetchData();
`

  return (
    <div className="bg-mainBackground py-8 px-5 min-h-screen">
      <div className="max-w-[1400px] m-auto">
         <CourseNavigation></CourseNavigation>
         {thirdLesson.map((item, index) => (
          <div className="flex flex-col gap-[3rem]" key={index}>
              <HeaderLesson title={item.Tytuł} desc={item.OpisTytulSec} purpose={item.Cele}></HeaderLesson>
              <TextItem title={"Zrozumienie asynchroniczności"} miniDesc={item.Zrozumienie}></TextItem>
              <div>
                <ListItem title={"Przykłady asynchroniczności"} desc={"Dwie funkcje setTimeout i setInterval pozwalają na opóźnienie wykonania kodu lub cykliczne wykonywanie jakiejś operacji"} textList={item.IntervalTimeout}></ListItem>
                <CodeBlock system={"JavaScript"} pStyling={"my-2"} code={timeout} description={"Przykład:"}></CodeBlock>
                <CodeBlock system={"JavaScript"} pStyling={"my-2"} code={timeoutReturn} description={"Wynik:"} Minidescription={"Jak widać, kod nie czeka na setTimeout() i przechodzi do kolejnej instrukcji"}></CodeBlock>
              </div>

              <div>
                <TextItem title={"Promise"} miniDesc={"Obiekt Promise reprezentuje wartość, która może być dostępna teraz, później lub nigdy. Promise jest używany do obsługi operacji asynchronicznych, takich jak zapytania HTTP."}></TextItem>
                <CodeBlock code={promise} description={"Przykład z użyciem Promise:"} pStyling={"my-2"} system={"JavaScript"}></CodeBlock>
              </div>
              <div>
                <TextItem title={"Async/await"} miniDesc={item.Async}></TextItem>
                <CodeBlock code={async} description={"Przykład z użyciem async i await:"} pStyling={"my-2"} system={"JavaScript"}></CodeBlock>
              </div>


              <section className="flex flex-col gap-4">
            <div>
              <h2 className={`text-[30px] font-semibold leading-[110%]`}>Zadania z Asynchroniczności</h2>
              <hr className='mt-4 h-[2px] bg-white'/>
            </div>

            <div>
              <div className="mt-4">
                <p className="text-[18px] opacity-75">1.Użyj setTimeout(), aby wyświetlić komunikat po 3 sekundach, a następnie wyświetl inny komunikat po 5 sekundach..</p>
              </div>
              <div className="mt-4">
                <p className="text-[18px] opacity-75">2.Stwórz funkcję, która symuluje pobieranie danych z serwera (używając setTimeout) i zwraca wynik za pomocą Promise. Zastosuj then() do obsługi wyniku.</p>
              </div>
              <div className="mt-4">
                <p className="text-[18px] opacity-75">3.Stwórz funkcję fetchData() z wykorzystaniem async/await, która symuluje opóźnione pobieranie danych, czeka 2 sekundy, a następnie wyświetla komunikat.</p>
              </div>
            </div>
          </section>
          </div>
         ))}
         <Footer></Footer>
      </div>
      
    </div>
  )
}

export default SixthLesson
