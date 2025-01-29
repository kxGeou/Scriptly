import React from 'react'
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link  to={`${props.url}`} className='flex items-center justify-center max-w-[500px] w-[100%] h-[3.5rem] bg-primary rounded-[8px] hover:bg-primaryDarker'>
        <p className='text-white font-semibold'>{props.name}</p>
    </Link>
  )
}

export default Button

