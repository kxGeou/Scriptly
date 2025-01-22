import React from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
function HeaderLesson({ title, desc, purpose }) {
    const width = useWindowDimensions()
    const purposes = purpose


    const ListItem = ({text}) => {
        return (
            <li className={`${width > 700 ? "w-[30%]" : "w-[100%]"} p-8 bg-boxBackground rounded-[12px]  flex justify-center items-center text-center hover:bg-primaryDarker`}>{text}</li>
        )
    }

    return (
    
       <section className='flex flex-col gap-[3rem]  mt-[4rem]'>
            <div className='flex flex-col justify-center gap-4'>
                <h2 className='text-[40px] font-semibold leading-[110%]'>{title}</h2>
                <p className={`${width > 800 ? "w-[70%]": "w-[100%]"} opacity-[75%] leading-[140%]`}>{desc}</p>
            </div>     

            <div  className='flex flex-col gap-3'>
                <p className='text-[22px] font-semibold text-primary'>Cele Lekcji:</p>
                <ul className={`${width > 700 ? "" : "flex-col"} flex gap-2 w-full justify-between`}>
                {purposes.map((liItem, index) => (
                    <ListItem key={index}  text={liItem}></ListItem>
                ))} 
                </ul>
            </div> 
                
        </section>
  )
}

export default HeaderLesson
