import React,{useState} from 'react'

import Chart from "../Chart"

//Rtk query
import { useGetExpensesQuery } from '../../api/apiSlice'

const ChartCard = () => {

   const [startDate,setStartDate] = useState("2023-06-04")
   const [endDate,setEndDate] = useState("2023-06-12")
   
   const {data:expenses} = useGetExpensesQuery({userId:localStorage.getItem("id"),endDate,startDate}) 
   

    console.log(expenses)
    
    const data = {
        series: [
          {
            name: "Total",
            data:[225, 201, 291, 178,  204 ,]
 
           ,
          },
          {
            name: "Other",
            data:  [35, 56, 78, 43, 89],
          },
          {
            name: "Transportation",
            data: [49, 6, 54, 22, 90] ,
          },
          {
            name: "Food",
            data:  [13, 81, 93, 59, 78],
          },
          {
            name: "Shelter",
            data:  [2, 55, 19, 34, 79],
          },
          {
            name: "Entertainement",
            data: [89, 44, 35, 62, 50],
          },
        
        ],
        options: {
          chart: {
            height: 350,
            type: "area",
          },
          colors:  ["#6b7280", "#6b7280", "#eab308", "#f97316", "#3b82f6","#8b5cf6"]

          ,
          markers: {
            colors:   ["#6b7280", "#6b7280", "#eab308", "#f97316", "#3b82f6","#8b5cf6"]

            ,
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            colors:  ["#6b7280", "#6b7280", "#eab308", "#f97316", "#3b82f6","#8b5cf6"]

            ,
          },
    
          stroke: {
            curve: "smooth",
            width: 2,
          },
          xaxis: {
            type: "date",
            categories: ["2023/01/01","2023/02/01","2023/03/01","2023/04/01","2023/05/01",],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
        },
      };


  return (
    <div className='mt-[50px]'>
        <div className='flex justify-between items-center flex-wrap'>
        <h1 className='text-2xl font-bold mb-[10px]'>Chart</h1>
        <div className='flex gap-[20px] '>
            <div>
                from : <input onChange={(e)=>setEndDate(e.target.value)} type="date" name="from" id="from" className='px-[10px] py-[5px] border
             border-gray-500 rounded-3xl' defaultValue={"2023-01-24"} />
            </div>
            <div>
                to : <input onChange={(e)=>setEndDate(e.target.value)} type="date" name="to" id="to" className='px-[10px] py-[5px] border
             border-gray-500 rounded-3xl' defaultValue={"2023-05-24"}/>
            </div>
        </div>
        </div>
        
        <Chart options={data.options} series={data.series}  />
    </div>
  )
}

export default ChartCard