import React from 'react'

//components
import TodayCard from './TodayCard'

const TodayData = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold mb-[10px]'>Today</h1>
        <div className='flex gap-[10px] flex-wrap'>
            <TodayCard title="Total" amount="28" color="green"/>
            <TodayCard title="Food" amount="10" color="orange"/>
            <TodayCard title="Transportation" amount="12" color="yellow"/>
            <TodayCard title="Shelter" amount="13" color="blue"/>
            <TodayCard title="Entertainement" amount="5" color="amber"/>
            <TodayCard title="Other" amount="8" color="green"/>

           
        </div>
    </div>
  )
}

export default TodayData