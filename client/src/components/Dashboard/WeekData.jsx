import React from 'react'

import ValueCard from './ValueCard'

const WeekData = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold mb-[10px]'>This week</h1>
        <div className='flex gap-[10px] flex-wrap'>
            <ValueCard title="Total" amount="28" color="green"/>
            <ValueCard title="Food" amount="10" color="orange"/>
            <ValueCard title="Transportation" amount="12" color="yellow"/>
            <ValueCard title="Shelter" amount="13" color="blue"/>
            <ValueCard title="Entertainement" amount="5" color="amber"/>
            <ValueCard title="Other" amount="8" color="green"/>

           
        </div>
    </div>
  )
}

export default WeekData