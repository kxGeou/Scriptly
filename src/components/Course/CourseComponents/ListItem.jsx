import React from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
function ListItem({title, desc, textList}) {
    const width = useWindowDimensions()
    return (
        <section className='flex flex-col'>
        <h2 className={`text-[30px] font-semibold leading-[110%]`}>{title}</h2>
        <hr className='mt-4 h-[2px] bg-white'/>
        <div className='mt-8 flex flex-col gap-2'>
          <p className='text-[20px] font-semibold mb-4'>{desc}</p>
          <ul className={`${width > 700 ? "gap-3" : "gap-4"} opacity-[75%] flex flex-col list-disc px-4`}>
           {textList.map((item, index) => (
            <li key={index}>{item}</li>
           ))}
          </ul>


        </div>
      </section>
  )
}

export default ListItem
