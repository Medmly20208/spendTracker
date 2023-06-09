import React from 'react'

//react apexchart
import ReactApexChart from 'react-apexcharts'



const Chart = (props) => {
  return (
    <div id="chart" className='w-full'>
      <ReactApexChart
        options={props.options}
        series={props.series}
        type={props.type || "area"}
      />
    </div>
  );
}

export default Chart