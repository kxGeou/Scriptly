import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions.jsx';

function ShowBox(props) {
  const width = useWindowDimensions()
  const styles = {
    opacity : "70%",
  }

  return (
    <div className={`flex flex-col items-start justify-center gap-5 shadow-xl rounded-[12px] p-[2rem] py-[4rem] w-full max-w-[600px] ${props.bg}`}>
      <div className={`text-[30px] ${width > 1000 ? "text-[35px]" : ""}`}>{props.icon}</div>
      <h2 className={`font-semibold text-[25px] leading-[120%] ${width > 1000 ? "text-[30px] mb-3 leading-[90%]" : ""}  ${props.color}`}>{props.title}</h2>
      <ul className={`flex flex-col text-[16px] justify-center items-start gap-4 ${width > 1000 ? "text-[16px] gap-6" : ""}`}>
        <li style={styles} className={`${props.color}`}>{props.firstList}</li>
        <li style={styles} className={`${props.color}`}>{props.secondList}</li>
        <li style={styles} className={`${props.color}`}>{props.thirdList}</li>
      </ul>
    </div>
  )
}

export default ShowBox
