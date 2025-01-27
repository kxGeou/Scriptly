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

function ThirdLesson() {
  const [thirdLesson, setthirdLesson] = useState([]);
  const width = useWindowDimensions();
  const example = "Przykład codzienny: Wyobraź sobie, że piszesz przepis na naleśniki. Każdego dnia, zamiast przepisywać całą instrukcję, możesz ją zapisać jako 'funkcję' i po prostu do niej sięgać."

  useEffect(() => {
    const fetchCourse = async () => {
      const dataBase = await getDocs(collection(db, "Lekcja3"));
      const coursesList = dataBase.docs.map((doc) => doc.data());
      setthirdLesson(coursesList);
    };

    fetchCourse();
  }, []);

const exampleFunction = `
function nazwaFunkcji() {
  // Kod, który funkcja wykonuje
}
`;
const firstFunction = `
function przywitaj() {
  console.log("Cześć! Witaj w świecie JavaScript!");
}
przywitaj(); // Wywołanie funkcji
`
const secondFunction = 
`
const przywitaj = function() {
  console.log("Cześć! Witaj w świecie JavaScript!");
};
przywitaj();
`

const paramFunction = 
`
function dodaj(a, b) {
  console.log(a + b);
}
dodaj(3, 5); // Wynik: 8
`
const returnFunction = 
`
function pomnóż(a, b) {
  return a * b;
}
const wynik = pomnóż(4, 5);
console.log(wynik); // Wynik: 20
`

const arrowFunction = 
`
const przywitaj = () => {
  console.log("Cześć! Witaj w JavaScript!");
};
przywitaj();
`

  return (
    <div className="bg-mainBackground py-8 px-5 min-h-screen">
      <div className="max-w-[1400px] m-auto">
        <CourseNavigation></CourseNavigation>
        {thirdLesson.map((item, index) => (
          <div className="flex flex-col gap-[3rem]" key={index}>
            <HeaderLesson
              title={item.Tytuł}
              desc={item.OpisTytułu}
              purpose={item.Cele}
            ></HeaderLesson>
            <ListItem
              title={"Co to jest funkcja?"}
              desc={
                "Funkcja to blok kodu, który można wywołać, aby wykonać określone zadanie. Można je wykorzystać do:"
              }
              textList={item.DoFunkcja}
            ></ListItem>

            <div>
              <TextItem title={"Jak stworzyć funkcję w JavaScript?"} miniDesc={"Najprostszy sposób na stworzenie funkcji wygląda tak:"}></TextItem>
              <CodeBlock code={exampleFunction} visible={"hidden"} system={"JavaScript"} pStyling={"mt-12"}></CodeBlock>
              <CodeBlock code={firstFunction} description={"Przykładowa funkcja: "}  system={"JavaScript"} pStyling={"mt-12 mb-4"}></CodeBlock>
              <CodeBlock code={secondFunction} description={"Funkcję można także zapisać jako zmienną:"}  system={"JavaScript"} pStyling={"mt-12 mb-4"}></CodeBlock>
            </div>

            <div>
              <TextItem title={"Parametry i Argumenty"} miniDesc={"Funkcje mogą przyjmować dane jako 'parametry'. To jak składniki w przepisie kulinarnym."}></TextItem>
              <CodeBlock code={paramFunction} description={"Przykład:"}  system={"JavaScript"} pStyling={"mt-12 mb-4 "}></CodeBlock>
            </div>
            <div>
              <TextItem title={"Zwracanie wartości (return)"} miniDesc={"Funkcje mogą zwracać wynik swojej pracy, zamiast go tylko wyświetlać"}></TextItem>
              <CodeBlock code={paramFunction} description={"Przykład:"}  system={"JavaScript"} pStyling={"mt-12 mb-4 "}></CodeBlock>
            </div>
            <div>
              <TextItem title={"Funkcje Strzałkowe (Arrow Functions)"} miniDesc={"Jest to nowoczesny sposób definiowania funkcji. Są krótsze i bardziej przejrzyste"}></TextItem>
              <CodeBlock code={arrowFunction} description={"Przykład:"}  system={"JavaScript"} pStyling={"mt-12 mb-4 "}></CodeBlock>
            </div>
          
          <section className="flex flex-col gap-4">
            <div>
              <h2 className={`text-[30px] font-semibold leading-[110%]`}>Zadania: Napisz własne funkcje:</h2>
              <hr className='mt-4 h-[2px] bg-white'/>
            </div>

            <div>
              <div className="mt-8">
                <p className="text-[20px] font-semibold">Zadanie 1: Kalkulator</p>
                <p className="opacity-75 my-2">{item.Zadanie1}</p>
              </div>
              <div className="mt-8">
                <p className="text-[20px] font-semibold">Zadanie 2: Powitanie</p>
                <p className="opacity-75 my-2">{item.Zadanie2}</p>
              </div>
              <div className="mt-8">
                <p className="text-[20px] font-semibold">Zadanie 3: Sprawdź liczbę</p>
                <p className="opacity-75 my-2">{item.Zadanie3}</p>
              </div>
            </div>
          </section>


          </div>

        ))}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default ThirdLesson;
