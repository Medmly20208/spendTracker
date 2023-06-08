import React from 'react'


//components
import MonthCard from './MonthCard'


const MonthData = () => {

    const Total = {
        series: [
          {
            name: "Temperature",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
        ],
        options: {
          colors: ["#DC2626", "#2563EB", "#9CA3AF", "#16A34A"],
          markers: {
            colors: ["#DC2626", "#2563EB", "#9CA3AF", "#16A34A"],
          },
  
          fill: {
            colors: ["#DC2626", "#2563EB", "#9CA3AF", "#16A34A"],
          },
          chart: {
            height: 350,
            type: "area",
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
  
          xaxis: {
            categories: [
              "01:00PM",
              "01:20PM",
              "01:40PM",
              "02:00PM",
              "02:20PM",
              "02:40PM",
              "03:00PM",
              "03:20PM",
              "03:40PM",
            ],
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          grid: {
            show: false,
          },
          legend: {
            show: false,
          },
        },
      };
  return (
    <div>
    <h1 className='text-2xl font-bold mb-[10px]'>This Month</h1>
    <div className='flex gap-[10px] flex-wrap'>
      
    <MonthCard title={"Total"}
          options={Total.options}
          series={Total.series} />
            <MonthCard title={"Food"}
          options={Total.options}
          series={Total.series} />
            <MonthCard title={"Transportation"}
          options={Total.options}
          series={Total.series} />
            <MonthCard title={"Shelter"}
          options={Total.options}
          series={Total.series} />
            <MonthCard title={"Entertainment"}
          options={Total.options}
          series={Total.series} />
            <MonthCard title={"Other"}
          options={Total.options}
          series={Total.series} />
  

       
    </div>
</div>
  )
}

export default MonthData