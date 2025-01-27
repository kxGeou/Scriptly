import Lesson1 from './Lessons/FirstLesson';
import Lesson2 from './Lessons/SecondLesson';
import Lesson3 from './Lessons/ThirdLesson';
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
];
