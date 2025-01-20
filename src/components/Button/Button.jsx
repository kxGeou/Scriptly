import React from 'react'

function Button(props) {
  return (
    <button className='max-w-[500px] w-[100%] h-[3.5rem] bg-primary rounded-[8px] hover:bg-primaryDarker'>
        <p className='text-white font-semibold'>{props.name}</p>
    </button>
  )
}

export default Button

