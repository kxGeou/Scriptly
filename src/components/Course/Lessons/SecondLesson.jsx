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
function SecondLesson() {
  const [secondLesson, setsecondLesson] = useState([]);
  const [show, setShow] = useState(false);
  const width = useWindowDimensions();
  useEffect(() => {
    const fetchCourse = async () => {
      const dataBase = await getDocs(collection(db, "Lekcja2"));
      const coursesList = dataBase.docs.map((doc) => doc.data());
      setsecondLesson(coursesList);
    };

    fetchCourse();
  }, []);

  const DetailBox = (props) => {
    return (
      <details className="bg-boxBackground p-7 rounded-[12px]">
        <summary className={`${width < 1000 ? "text-[18px]" : ""} text-[20px]`}>
          {props.title}
        </summary>
        <p className="font-normal opacity-[75%] mt-4">{props.description}</p>
        <CodeBlock
          code={props.code}
          styling={"h-[4rem] flex justify-start items-center bg-[#363636] mt-4"}
          visible={"hidden"}
        ></CodeBlock>
      </details>
    );
  };

  const exerciseCode = `let name = "Jan"; // Twój komentarz: Jaki to typ danych?
let age = 25; // Twój komentarz: 
let isStudent = true; // Twój komentarz: 
let address; // Twój komentarz: 
let car = null; // Twój komentarz: 
let hobbies = ["czytanie", "sport", "muzyka"]; // Twój komentarz: 
let person = { name: "Ewa", age: 30 }; // Twój komentarz: 
`;

const secExercise = 
`
// Zamiana liczby na tekst
let number = 42;
let numberAsString = ... ; // Uzupełnij

// Zamiana tekstu na liczbę
let text = "123";
let textAsNumber = ... ; // Uzupełnij

// Zamiana tekstu "false" na wartość boolean
let textFalse = "false";
let textAsBoolean = ... ; // Uzupełnij

`

  const typeData = `
let imie = "Jan"; // Zmienna przechowująca tekst
const wiek = 25;  // Zmienna przechowująca liczbę
var miasto = "Warszawa"; // Starszy sposób deklaracji zmiennych 
`;

  const exerciseCodeS = `
Zamiana liczby na tekst
let age = 25;
let ageAsString = String(age); // tutaj wynik to "25"
console.log(typeof ageAsString); // "string"
`;

  const everyData = [
    {
      type: "Liczby (Number)",
      desc: "Reprezentują wartości liczbowe, zarówno całkowite, jak i dziesiętne:",
      code: "let price = 19.99",
    },
    {
      type: "Teksty (String)",
      desc: "Służą do przechowywania tekstu, który zapisujemy w cudzysłowie:",
      code: "let greeting = 'Cześć, świecie!';",
    },
    {
      type: "Wartości logiczne (Boolean)",
      desc: "Reprezentują tylko dwie wartości: true (prawda) lub false (fałsz).",
      code: "let isAvailable = true/false;",
    },
    {
      type: "Obiekty (Object)",
      desc: "Pozwalają na przechowywanie bardziej złożonych danych w strukturach klucz: wartość:",
      code: "let person = {name: 'Kamil', age: 30}",
    },
    {
      type: "Tablice (Array)",
      desc: "Przechowują wiele wartości w jednej zmiennej:",
      code: "let fruits = ['jabłko', 'banan', 'wiśnia'];",
    },
  ];

  const everyOperator = [
    {
      title: "+ (dodawanie):",
      desc: "Dodaje dwie liczby lub łączy teksty (konkatenacja):",
      code: "let sum = 5 + 3; // 8 || let greeting = 'Cześć' + ' świecie!'; // 'Cześć świecie!'",
    },

    {
      title: "- (odejmowanie)",
      desc: "Odejmuje jedną liczbę od drugiej:",
      code: "let difference = 10 - 4; // 6",
    },
    {
      title: "* (mnożenie):",
      desc: "Mnoży dwie liczby",
      code: "let product = 4 * 3; // 12",
    },

    {
      title: "/ (dzielenie)",
      desc: "Dzieli jedną liczbę przez drugą:",
      code: "let quotient = 12 / 4; // 3",
    },
    {
      title: "% (modulo)",
      desc: "Zwraca resztę z dzielenia:",
      code: "let modulo = 10 % 3; // 1",
    },
  ];

  const everyLogic = [
    {
      title: "&& (i) – Zwraca true, jeśli oba warunki są prawdziwe:",
      code: "console.log(true && false); // false",
    },
    {
      title:
        "|| (lub) – Zwraca true, jeśli przynajmniej jeden warunek jest prawdziwy:",
      code: "console.log(true || false); // true",
    },
    {
      title: "! (nie) – Neguje wartość logiczną:",
      code: "console.log(!true); // false",
    },
  ];

  const everyGreater = [
    {
      title:
        "> (większe niż) – Sprawdza, czy pierwsza wartość jest większa od drugiej:",
      code: "console.log(10 > 5); // true",
    },
    {
      title:
        "< (mniejsze niż) – Sprawdza, czy pierwsza wartość jest mniejsza od drugiej:",
      code: "console.log(10 >= 10); // true",
    },
    {
      title:
        ">= (większe lub równe) – Sprawdza, czy pierwsza wartość jest większa lub równa drugiej:",
      code: "console.log(5 <= 10); // true",
    },
  ];

  const tipHandler = () => {
    setShow(!show);
  };

  return (
    <div className="bg-mainBackground py-8 px-5 min-h-screen">
      <div className="max-w-[1400px] m-auto ">
        <CourseNavigation></CourseNavigation>
        {secondLesson.map((lesson, index) => (
          <div className="flex flex-col gap-[3rem]" key={index}>
            <HeaderLesson
              title={lesson.Tytuł}
              desc={lesson.OpisTytuł}
              purpose={lesson.Cele}
            ></HeaderLesson>
            <TextItem
              title="Zmienne – Podstawa Przechowywania Danych"
              miniDesc={lesson.CzymSaZmienne}
            ></TextItem>
            <div className="relative">
              <CodeBlock code={typeData} system="JavaScript"></CodeBlock>
              <button
                onClick={tipHandler}
                className="bg-primary py-2 px-5 rounded-[8px] hover:bg-primaryDarker mt-[1rem]"
              >
                💡Wskazówka
              </button>
              <div
                onClick={tipHandler}
                className={`absolute bg-primaryDarker w-[50%] left-[50%] translate-x-[-50%] p-[2rem] top-[5%] z-10 flex flex-col rounded-[12px] transition-all duration-300 ${
                  show
                    ? "opacity-100 translate-x-0 z-10"
                    : "opacity-0 translate-x-5 pointer-events-none"
                }`}
              >
                <p>let – Używamy, gdy wartość zmiennej może się zmienić.</p>
                <p>
                  const – Używamy, gdy wartość zmiennej pozostaje stała (np.
                  imię).
                </p>
                <p>
                  var – Starszy sposób deklaracji zmiennych, którego unikamy w
                  nowoczesnym kodzie.
                </p>
              </div>
            </div>
            <TextItem
              title={"Typy Danych"}
              miniDesc={
                "W JavaScript mamy różne typy danych. Oto najczęściej używane:"
              }
            ></TextItem>
            {everyData.map((item, index) => (
              <div className="flex flex-col">
                <p className="text-[20px] font-semibold">{item.type}</p>
                <p className="opacity-[75%] mb-5">{item.desc}</p>
                <CodeBlock
                  code={item.code}
                  styling={"h-[5rem] flex justify-start items-center"}
                ></CodeBlock>
              </div>
            ))}
            <TextItem
              title={"Operatory arytmetyczne"}
              miniDesc={
                "Operatory arytmetyczne służą do wykonywania obliczeń matematycznych"
              }
            ></TextItem>
            {everyOperator.map((item, index) => (
              <DetailBox
                title={item.title}
                description={item.desc}
                code={item.code}
              ></DetailBox>
            ))}
            <TextItem
              title={"Operatory porównania"}
              miniDesc={
                "Operatorów porówniania używamy do sprawdzania relacji między wartościami"
              }
            ></TextItem>
            {everyGreater.map((item, index) => (
              <div className="flex flex-col gap-6">
                <h2 className="font-semibold">{item.title}</h2>
                <CodeBlock
                  system={"JavaScript"}
                  code={item.code}
                  styling={"mt-0"}
                  visible={"hidden"}
                ></CodeBlock>
              </div>
            ))}
            <TextItem
              title={"Operatory logiczne"}
              miniDesc={
                "Operatorów logicznych używa się do tworzenia warunków logicznych"
              }
            ></TextItem>
            {everyLogic.map((item, index) => (
              <div className="flex flex-col gap-6">
                <h2 className="font-semibold">{item.title}</h2>
                <CodeBlock
                  system={"JavaScript"}
                  code={item.code}
                  styling={"mt-0"}
                  visible={"hidden"}
                ></CodeBlock>
              </div>
            ))}

            <section className="flex flex-col gap-8">
              <div>
                <h2 className="mt-12 text-[24px] font-semibold">
                  Zadanie 1: Rozpoznaj typy danych
                </h2>
                <p className="my-2 opacity-[75%]">
                  Przyjrzyj się poniższym wartościom i określ, jaki to typ
                  danych (string, number, boolean, undefined, null, object,
                  array).
                </p>
                <CodeBlock
                  system={"JavaScript"}
                  code={exerciseCode}
                  styling={"mt-6"}
                ></CodeBlock>
                <p className="opacity-[75%] my-2">
                  Napisz odpowiedź w komentarzach obok każdej zmiennej
                </p>
              </div>

              <hr className="mt-4 h-[2px] bg-white" />


              <div>
                <h2 className="mt-12 text-[24px] font-semibold mb-2">
                  Zadanie 2: Zamień typ danych
                </h2>
                <ol className="list-decimal opacity-[75%] pl-4">
                  <li>Zmień wartość liczby na tekst</li>
                  <li>Zmień wartość tekstu na liczbę</li>
                  <li>Zmień wartość tekstu "false" na boolean</li>
                </ol>
                <CodeBlock
                  system={"JavaScript"}
                  code={exerciseCodeS}
                  styling={"mt-8"}
                ></CodeBlock>
                <p className="mt-4 opacity-75">
                  Użyj funkcji wbudowanych, takich jak String(), Number() i
                  Boolean().
                </p>

                <p className="text-[20px] mt-16 mb-4">Twoje zadanie: Dokończ poniższy kod, wypełniając odpowiednie linie.</p>
                <CodeBlock code={secExercise}></CodeBlock>
              </div>
            </section>
          </div>
        ))}

        <Footer></Footer>
      </div>
    </div>
  );
}

export default SecondLesson;
