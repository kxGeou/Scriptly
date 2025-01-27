import Lesson1 from './Lessons/FirstLesson';
import Lesson2 from './Lessons/SecondLesson';
import Lesson3 from './Lessons/ThirdLesson';
import Lesson4 from './Lessons/FourthLesson';
import Lesson5 from './Lessons/FifthLesson';
import Lesson6 from './Lessons/SixthLesson';
import Lesson7 from './Lessons/SeventhLesson';
export const lessons = [
    {
        id: 'lesson-1',
        title: 'Wprowadzenie do JavaScript',
        description: "Dowiedz się, czym jest JavaScript, dlaczego warto go używać i jak działa w przeglądarce.",
        component: Lesson1,
    },
    {
        id: 'lesson-2',
        title: 'Typy Danych',
        description: "Poznaj podstawowe zasady pisania kodu w JavaScript, w tym zmienne, typy danych, operatory i wyrażenia.",
        component: Lesson2,
    },
    {
        id: 'lesson-3',
        title: 'Funkcje JavaScript',
        description: "Dowiedz się jak pisać funkcje w JavaScript",
        component: Lesson3,
    },
    {
        id: 'lesson-4',
        title: 'Konstrukcje kontrolne',
        description: "Poznaj, jak JavaScript podejmuje decyzje za pomocą instrukcji warunkowych oraz jak wielokrotnie wykonuje kod dzięki pętlom",
        component: Lesson4,
    },
    {
        id: 'lesson-5',
        title: 'Tablice i Obiekty ',
        description: "Poznaj, jak JavaScript podejmuje decyzje za pomocą instrukcji warunkowych oraz jak wielokrotnie wykonuje kod dzięki pętlom",
        component: Lesson5,
    },
    {
        id: 'lesson-6',
        title: 'Asynchroniczność w JavaScript',
        description: "Zrozumiesz, czym jest asynchroniczność i dlaczego jest ważna w programowaniu.",
        component: Lesson6,
    },
    {
        id: 'lesson-7',
        title: 'Dokument Object Model (DOM)',
        description: "Nauka manipulowania strukturą HTML oraz CSS za pomocą JavaScript",
        component: Lesson7,
    },
];
