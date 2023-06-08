import React from 'react'

const TodayCard = (props) => {
  return (
<div className={`w-[160px] p-[20px]  rounded-md text-white flex flex-col gap-[10px] justify-center items-center bg-gradient-to-r from-${props.color}-300 to-${props.color}-500`}>
    <h2 className='text-md'>{props.title}</h2>
    <p className='text-2xl font-bold'>{props.amount} $</p>
</div>
  )
}

export default TodayCard