import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
function Faq() {
    const width = useWindowDimensions()

    const DetailBox = (props) => {
        return (
            <details className='bg-boxBackground p-7 rounded-[12px]'>
                <summary className={`${width < 1000 ? "text-[18px]" : ""} text-[20px]`}>{props.title}</summary>
                <p className='font-normal opacity-[75%] mt-4'>{props.description}</p>
            </details>
        );
    }

    const faqList = [
        {title: "Czym jest Scriptly?", description: "Scriptly to platforma edukacyjna zaprojektowana, aby pomóc początkującym zrozumieć i nauczyć się JavaScript w praktyczny i przyjazny sposób."},
        {title: "Czy Scriptly jest odpowiednie dla osób początkujących?", description: "Tak, Scriptly zostało zaprojektowane z myślą o osobach, które dopiero zaczynają swoją przygodę z JavaScriptem. Zaczynamy od podstaw i wprowadzamy stopniowo bardziej zaawansowane tematy, wyjaśniając wszystko w przystępny sposób."},
        {title: "Czy Scriptly zawiera informacje o innych technologiach poza JavaScriptem?", description: "Obecnie Scriptly koncentruje się wyłącznie na JavaScripcie, aby zapewnić szczegółową i kompletną dokumentację oraz zasoby edukacyjne. W przyszłości możliwe jest rozszerzenie o treści związane z powiązanymi technologiami, jak HTML, CSS czy frameworki JavaScript."},
        {title: "Czy mogę korzystać z Scriptly na urządzeniach mobilnych?", description: "Tak, Scriptly jest w pełni responsywne, co oznacza, że możesz korzystać z platformy zarówno na komputerze, jak i na urządzeniach mobilnych. Dzięki temu możesz uczyć się JavaScriptu w dowolnym miejscu i czasie!"},
    ]

  return (
    <div className='flex flex-col font-semibold mt-[20rem]'>
        <h2 className={`${width < 1000 ? "text-[20px]" : ""} text-[30px] mb-4`}>Sekcja Pytań (FAQ)</h2>
        <hr className=' mb-12 h-[2px] bg-white opacity-[50%]'/>
        <div className='flex flex-col gap-8'>
           {faqList.map(detail => (
            <DetailBox title={detail.title} description={detail.description}></DetailBox>
           ))}
        </div>
    </div>
  )
}

export default Faq
