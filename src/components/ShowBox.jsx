import React from 'react'
function ShowBox(props) {

  const styles = {
    opacity : "75%",
  }

  return (
    <div className={`flex flex-col items-start justify-center gap-5 shadow-xl rounded-[12px] p-[2rem] py-[4rem] w-full max-w-[600px] ${props.bg}`}>
      <div className={`text-[32px]`}>{props.icon}</div>
      <h2 className={`font-semibold text-[25px] leading-[120%]  ${props.color}`}>{props.title}</h2>
      <ul className={`flex flex-col justify-center items-start gap-4`}>
        <li style={styles} className={`${props.color}`}>{props.firstList}</li>
        <li style={styles} className={`${props.color}`}>{props.secondList}</li>
        <li style={styles} className={`${props.color}`}>{props.thirdList}</li>
      </ul>
    </div>
  )
}

export default ShowBox
