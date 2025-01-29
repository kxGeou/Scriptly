import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import Button from './Button/Button.jsx';

function ActionSection() {
  const width = useWindowDimensions()
  return (
    <div className='flex flex-col justify-center items-center gap-6 mt-[20rem]'>
      <h2 className={`font-semibold ${width > 1000 ? "text-[30px]" : "text-[25px]"}`}>Gotowy, aby zacząć?</h2>
      <p className={`opacity-[70%] text-center mb-6 ${width > 1000 ? "text-[16px] w-[60%]" : "text-[16px] "}`}>Zdobądź praktyczną wiedzę, twórz projekty i rozwijaj swoje umiejętności! Rozpocznij kurs JavaScript już teraz i wzbogać swoje portfolio o ciekawe projekty.</p>
      <Button name="Rozpocznij naukę" url='/lesson/lesson-1'></Button>
    </div>
  )
}

export default ActionSection
