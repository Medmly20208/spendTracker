import React from 'react'


import Chart from '../Chart'


const MonthCard = (props) => {
  return (
    <div className="w-[160px] border border-gray-1000 rounded-3xl  shadow-md">
      <div className="p-[20px]  pb-[0px] flex items-center justify-between">
        <h1 className="text-[20px]  !font-[400] ">{props.title} </h1>
        
        
      </div>

      <Chart
        options={props.options}
        series={props.series}
        type="area"
      />
    </div>
  );
}

export default MonthCard