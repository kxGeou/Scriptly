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
      const dataBase = await getDocs(collection(db, "Lekcja7"));
      const coursesList = dataBase.docs.map((doc) => doc.data());
      setthirdLesson(coursesList);
    };

    fetchCourse();
  }, []);
  const add = `const newElement = document.createElement("p");
newElement.textContent = "Nowy paragraf!";
document.body.appendChild(newElement);  // Dodaje nowy element do końca body
`;
  const deleteF = `const element = document.getElementById("myElement");
element.remove();  // Usuwa element z DOM
`;
  const listener = `document.getElementById("myButton").addEventListener("click", function() {
  alert("Przycisk kliknięty!");
});
`;
  const searchFunctions = [
    "getElementById() – zwraca element po jego ID.",
    "getElementsByClassName() – zwraca wszystkie elementy z określoną klasą.",
    "querySelector() – zwraca pierwszy element pasujący do selektora CSS.",
    "querySelectorAll() – zwraca wszystkie elementy pasujące do selektora CSS.",
  ];
  const HTML = `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>DOM Example</title>
</head>
<body>
  <div id="container">
    <h1>Witaj w świecie DOM!</h1>
    <p>Przykład użycia DOM w JavaScript.</p>
  </div>
</body>
</html>
`;
  const structure = `html
 └── head
 └── body
       └── div (id: "container")
             └── h1
             └── p
`;

  const idk = `const title = document.getElementById("title");
console.log(title);  // Zwraca element z id="title"
`;
  return (
    <div className="bg-mainBackground py-8 px-5 min-h-screen">
      <div className="max-w-[1400px] m-auto">
        <CourseNavigation></CourseNavigation>
        {thirdLesson.map((item, index) => (
          <div className="flex flex-col gap-[3rem]" key={index}>
            <HeaderLesson
              title={item.Tytul}
              desc={item.OpisT}
              purpose={item.Cele}
            ></HeaderLesson>
            <TextItem title={"Czym jest DOM"} miniDesc={item.Czym}></TextItem>
            <div>
              <TextItem
                title={"Jak działa DOM?"}
                miniDesc={item.CzymJest}
              ></TextItem>
              <CodeBlock
                system={"HTML"}
                code={HTML}
                mpStyling={"mt-8"}
                Minidescription={
                  "W DOM powyższy kod HTML jest reprezentowany jako drzewo obiektów:"
                }
              ></CodeBlock>
              <CodeBlock code={structure} visible={"hidden"}></CodeBlock>
            </div>

            <div>
              <ListItem
                title={"Manipulowanie DOM za pomocą JavaScript"}
                desc={
                  "Aby znaleźć elementy na stronie, możemy użyć różnych metod DOM, takich jak:"
                }
                textList={searchFunctions}
              ></ListItem>
              <CodeBlock
                system={"JavaScript"}
                description={"Przykład:"}
                pStyling={"mb-2"}
                code={idk}
              ></CodeBlock>

              <p className="text-[20px] font-semibold mb-2 mt-12">
                Zmiana zawartości elementu
              </p>
              <CodeBlock
                code={
                  "document.getElementById('myElement').innerHTML = 'Nowy tekst!';"
                }
                system={"JavaScript"}
                pStyling={"mb-4"}
                description={
                  "Możemy zmieniać zawartość tekstową lub HTML elementów za pomocą właściwości innerHTML lub textContent."
                }
              ></CodeBlock>
              <p className="text-[20px] font-semibold mb-2 mt-12">
                Zmiana stylów CSS
              </p>
              <CodeBlock
                code={
                  "document.getElementById('myElement').style.backgroundColor = 'blue';"
                }
                system={"JavaScript"}
                pStyling={"mb-2"}
                description={
                  "Możemy również modyfikować style CSS elementów za pomocą właściwości style."
                }
              ></CodeBlock>

              <p className="text-[20px] font-semibold mb-2 mt-12">
                Dodawanie nowych elementów
              </p>
              <CodeBlock
                description={
                  "Aby dodać nowe elementy do DOM, możemy używać metod takich jak createElement() oraz appendChild()."
                }
                code={add}
                pStyling={"mb-2"}
              ></CodeBlock>
              <p className="text-[20px] font-semibold mb-2 mt-12">
                Usuwanie elementów
              </p>
              <CodeBlock
                description={
                  "Aby usunąć element z DOM, możemy używać metody removeChild()."
                }
                code={deleteF}
                pStyling={"mb-2"}
              ></CodeBlock>
            </div>

            <div>
              <TextItem
                title={"Zdarzenia w DOM"}
                miniDesc={
                  "DOM pozwala również na obsługę zdarzeń, takich jak kliknięcia, zmiany w formularzach, czy inne interakcje użytkownika. Do tego służy metoda addEventListener(), którą możemy przypisać do elementów."
                }
              ></TextItem>
              <CodeBlock
                system={"JavaScript"}
                description={"Przykład:"}
                pStyling={"mb-2"}
                code={listener}
              ></CodeBlock>
            </div>

            <section className="flex flex-col gap-4">
              <div>
                <h2 className={`text-[30px] font-semibold leading-[110%]`}>
                  Zadania z Manipulacji DOM
                </h2>
                <hr className="mt-4 h-[2px] bg-white" />
              </div>

              <div>
                <div className="mt-4">
                  <p className="text-[18px] opacity-75">
                  Ćwiczenie 1: Stwórz stronę HTML, która zawiera przycisk. Po kliknięciu na przycisk powinien pojawić się alert z komunikatem „Witaj w DOM!”.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-[18px] opacity-75">
                  Ćwiczenie 2: Zmodyfikuj stronę, dodając funkcjonalność, która zmienia tło strony po kliknięciu na przycisk.
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-[18px] opacity-75">
                  Ćwiczenie 3: Dodaj na stronę formularz z polem tekstowym. Kiedy użytkownik kliknie przycisk, dodaj jego dane z formularza do listy na stronie.
                  </p>
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

export default SixthLesson;
