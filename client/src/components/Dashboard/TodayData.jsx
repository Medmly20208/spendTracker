import React from 'react'

//components
import ValueCard from './ValueCard'


const TodayData = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold mb-[10px]'>Today</h1>
        <div className='flex gap-[10px] flex-wrap'>
            <ValueCard title="Total" amount="28"/>
            <ValueCard title="Food" amount="10"/>
            <ValueCard title="Transportation" amount="12" />
            <ValueCard title="Shelter" amount="13"/>
            <ValueCard title="Entertainement" amount="5" />
            <ValueCard title="Other" amount="8" />

           
        </div>
    </div>
  )
}

export default TodayData