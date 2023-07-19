import React, { useState } from "react";

import Chart from "../Chart";

//Rtk query
import { useGetExpensesQuery } from "../../api/apiSlice";

//utils
import { getCurrentDate, addDays } from "../../utils/index";

function generateDateArray(startDate, endDate) {
  let dates = [];
  let currentDate = startDate;
  console.log(currentDate, endDate);
  while (currentDate != endDate) {
    dates.push(currentDate);
    console.log(currentDate);
    currentDate = addDays(currentDate, 0);
  }

  return [...dates, endDate];
}

const ChartCard = () => {
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState(getCurrentDate());
  let Dates = [];

  Dates = generateDateArray(startDate, endDate);

  const { data: expenses } = useGetExpensesQuery({
    userId: localStorage.getItem("id"),
    endDate,
    startDate,
  });

  console.log(expenses);

  const data = {
    series: [
      {
        name: "Total",
        data: expenses?.data?.map((item) => item.amount),
      },
      {
        name: "Other",
        data: expenses?.data?.map((item) =>
          item.category === "Other" ? item.amount : 0
        ),
      },
      {
        name: "Transportation",
        data: expenses?.data?.map((item) =>
          item.category === "Transportation" ? item.amount : 0
        ),
      },
      {
        name: "Food",
        data: expenses?.data?.map((item) =>
          item.category === "Food" ? item.amount : 0
        ),
      },
      {
        name: "Shelter",
        data: expenses?.data?.map((item) =>
          item.category === "Shelter" ? item.amount : 0
        ),
      },
      {
        name: "Entertainement",
        data: expenses?.data?.map((item) =>
          item.category === "Entertainement" ? item.amount : 0
        ),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      colors: [
        "#6b7280",
        "#6b7280",
        "#eab308",
        "#f97316",
        "#3b82f6",
        "#8b5cf6",
      ],

      markers: {
        colors: [
          "#6b7280",
          "#6b7280",
          "#eab308",
          "#f97316",
          "#3b82f6",
          "#8b5cf6",
        ],
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: [
          "#6b7280",
          "#6b7280",
          "#eab308",
          "#f97316",
          "#3b82f6",
          "#8b5cf6",
        ],
      },

      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "date",
        categories: Dates,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <div className="mt-[50px]">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-2xl font-bold mb-[10px]">Chart</h1>
        <div className="flex gap-[20px] ">
          <div>
            from :{" "}
            <input
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              type="date"
              name="from"
              id="from"
              className="px-[10px] py-[5px] border
             border-gray-500 rounded-3xl"
              defaultValue={"2023-01-24"}
            />
          </div>
          <div>
            to :{" "}
            <input
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              min={startDate}
              type="date"
              name="to"
              id="to"
              className="px-[10px] py-[5px] border
             border-gray-500 rounded-3xl"
              defaultValue={"2023-05-24"}
            />
          </div>
        </div>
      </div>

      <Chart options={data.options} series={data.series} />
    </div>
  );
};

export default ChartCard;
