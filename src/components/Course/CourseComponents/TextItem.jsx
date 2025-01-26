import React from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
function TextItem({title, miniDesc}) {
    const width = useWindowDimensions()
    return (
        <section className='flex flex-col'>
        <h2 className={`text-[30px] font-semibold leading-[110%]`}>{title}</h2>
        <hr className='mt-4 h-[2px] bg-white'/>
        <div className='mt-6 flex flex-col gap-2'>
          <p className=' opacity-[75%] leading-7'>{miniDesc}</p>
        </div>
      </section>
  )
}

export default TextItem
