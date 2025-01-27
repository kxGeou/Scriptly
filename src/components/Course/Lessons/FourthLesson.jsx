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

  const liItemm = "i <= 5: Warunek wykonywania pętli."

  const ifCode = `
const age = 18;

if (age >= 18) {
  console.log("Jesteś pełnoletni!");
} else {
  console.log("Nie masz jeszcze 18 lat.");
}
`;

const elseIfCode = 
`
const score = 75;

if (score >= 90) {
  console.log("Ocena: A");
} else if (score >= 75) {
  console.log("Ocena: B");
} else if (score >= 50) {
  console.log("Ocena: C");
} else {
  console.log("Ocena: D");
}
`
const forLoop = 
`
for (let i = 1; i <= 5; i++) {
  console.log("Liczba:", i);
}
`

const whileLoop = 
`
let count = 1;

while (count <= 3) {
  console.log("Wartość:", count);
  count++;
}
`
const doWhile = 
`
let num = 0;

do {
  console.log("Numer:", num);
  num++;
} while (num < 3);
`
const stepCounter = 
`
let steps = 0;

while (steps < 10) {
  console.log("Zrobiłeś krok:", steps + 1);
  steps++;
}

if (steps === 10) {
  console.log("Gratulacje, osiągnąłeś cel!");
}
`

  useEffect(() => {
    const fetchCourse = async () => {
      const dataBase = await getDocs(collection(db, "Lekcja4"));
      const coursesList = dataBase.docs.map((doc) => doc.data());
      setthirdLesson(coursesList);
    };

    fetchCourse();
  }, []);

  return (
    <div className="bg-mainBackground py-8 px-5 min-h-screen">
      <div className="max-w-[1400px] m-auto">
        <CourseNavigation></CourseNavigation>
        {thirdLesson.map((item, index) => (
          <div className="flex flex-col gap-[3rem]" key={index}>
            <HeaderLesson
              title={item.Tytuł}
              desc={item.OpisTytuł}
              purpose={item.Cele}
            ></HeaderLesson>
            <div>
              <TextItem
                title={"Instrukcja warunkowa if"}
                miniDesc={
                  "Instrukcja if pozwala wykonać kod tylko wtedy, gdy określony warunek zostanie spełniony. Oto przykład:"
                }
              ></TextItem>
              <CodeBlock
                system={"JavaScript"}
                code={ifCode}
                styling={"mt-8"}
              ></CodeBlock>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="font-semibold text-[18px]">Opis:</li>
                <li className="opacity-75">if: Sprawdza czy warunek jest prawdziwy</li>
                <li className="opacity-75">else: Wykonuje kod, jeśli poprzedni warunek nie został spełniony</li>
              </ul>
            </div>
            <div>
              <TextItem
                title={"Rozszerzenie instrukcji warunkowych"}
                miniDesc={
                  "Możemy użyć else if, aby obsłużyć wiele warunków."
                }
              ></TextItem>
              <CodeBlock
                system={"JavaScript"}
                code={elseIfCode}
                styling={"mt-8"}
              ></CodeBlock>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="font-semibold text-[18px]">Opis:</li>
                <li className="opacity-75">else if pozwala obsłużyć wiele warunków w jednym ciągu.</li>
                <li className="opacity-75">Kolejne warunki są sprawdzane tylko wtedy, gdy poprzedni nie został spełniony.</li>
              </ul>
            </div>



            <div className="flex flex-col gap-16">
              <div>
                <TextItem
                  title={"Pętle"}
                  miniDesc={
                    "Pętle pozwalają na wielokrotne wykonywanie tego samego fragmentu kodu. Najczęściej używane pętle to for, while i do...while."
                  }
                ></TextItem>
                <CodeBlock
                  system={"JavaScript"}
                  code={forLoop}
                  styling={"mt-2"}
                  description={"Pętla for: Wykonuje kod określoną liczbę razy."}
                ></CodeBlock>
                <ul className="flex flex-col gap-2 mt-4">
                  <li className="font-semibold text-[18px]">Opis:</li>
                  <li className="opacity-75">let i = 1: Inicjalizujemy zmienną i.</li>
                  <li className="opacity-75">{liItemm}</li>
                  <li className="opacity-75">i++: Zwiększamy i o 1 po każdej iteracji</li>
                </ul>
              </div>

              <div>
                <CodeBlock
                  system={"JavaScript"}
                  code={whileLoop}
                  styling={"mt-2"}
                  description={"Pętla while: Wykonuje kod, dopóki warunek jest prawdziwy."}
                ></CodeBlock>
                <ul className="flex flex-col gap-2 mt-4">
                  <li className="font-semibold text-[18px]">Opis:</li>
                  <li className="opacity-75">Sprawdza warunek przed każdą iteracją.</li>
                </ul>
              </div>

              <div>
                <CodeBlock
                  system={"JavaScript"}
                  code={doWhile}
                  styling={"mt-2"}
                  description={"Pętla do...while: Kod jest wykonany przynajmniej raz, a następnie warunek jest sprawdzany."}
                ></CodeBlock>
                <ul className="flex flex-col gap-2 mt-4">
                  <li className="font-semibold text-[18px]">Opis:</li>
                  <li className="opacity-75">Nawet jeśli warunek na początku jest fałszywy, kod w do wykona się przynajmniej raz.</li>
                </ul>
              </div>
            </div>
            <div>
              <TextItem title={"Przykład praktyczny: Licznik kroków"} miniDesc={"Oto przykład wykorzystania warunków i pętli do stworzenia prostego licznika kroków:"}></TextItem>
              <CodeBlock code={stepCounter}></CodeBlock>
            </div>

            <section className="flex flex-col gap-4">
            <div>
              <h2 className={`text-[30px] font-semibold leading-[110%]`}>Zadania z pętli</h2>
              <hr className='mt-4 h-[2px] bg-white'/>
            </div>

            <div>
              <div className="mt-4">
                <p className="text-[18px] opacity-75">1.Napisz program, który sprawdzi, czy podana liczba jest parzysta czy nieparzysta, korzystając z instrukcji if.</p>
              </div>
              <div className="mt-4">
                <p className="text-[18px] opacity-75">2.Stwórz pętlę for, która wyświetli liczby od 1 do 100.</p>
              </div>
              <div className="mt-4">
                <p className="text-[18px] opacity-75">3.Napisz pętlę while, która sumuje liczby od 1 do 50 i wyświetla wynik.</p>
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
