import React, { useState } from "react";

import Chart from "../Chart";

//Rtk query
import { useGetExpensesQuery } from "../../api/apiSlice";

//utils
import { getCurrentDate, addDays } from "../../utils/index";

//redux
import { useSelector } from "react-redux";

function generateDateArray(startDate, endDate) {
  let dates = [];
  let currentDate = startDate;
  while (currentDate != endDate) {
    dates.push(currentDate);

    currentDate = addDays(currentDate, 0);
  }

  return [...dates, endDate];
}

const ChartCard = () => {
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(addDays(new Date(), 0));
  const isDarkMode = useSelector((content) => content.ui.isDarkMode);

  let Dates = [];

  Dates = generateDateArray(startDate, endDate);

  const { data: expenses } = useGetExpensesQuery({
    userId: localStorage.getItem("id"),
    endDate,
    startDate,
  });

  const chartValues = {};

  for (let date in Dates) {
    chartValues[`${Dates[date]}`] = {
      Food: 0,
      Transportation: 0,
      Other: 0,
      Entertainement: 0,
      Shelter: 0,
      Total: 0,
    };
  }

  if (expenses?.data) {
    for (let expense of expenses.data) {
      chartValues[expense.date.slice(0, 10)][expense.category] +=
        expense.amount;
      chartValues[expense.date.slice(0, 10)]["Total"] += expense.amount;
    }
  }

  const data = {
    series: [
      {
        name: "Total",
        data: Object.values(chartValues).map((item) => item.Total),
      },
      {
        name: "Other",
        data: Object.values(chartValues).map((item) => item.Other),
      },
      {
        name: "Transportation",
        data: Object.values(chartValues).map((item) => item.Transportation),
      },
      {
        name: "Food",
        data: Object.values(chartValues).map((item) => item.Food),
      },
      {
        name: "Shelter",
        data: Object.values(chartValues).map((item) => item.Shelter),
      },
      {
        name: "Entertainement",
        data: Object.values(chartValues).map((item) => item.Entertainement),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      colors: [
        "#6b7280",
        "#ef4444",
        "#eab308",
        "#f97316",
        "#3b82f6",
        "#8b5cf6",
      ],

      markers: {
        colors: [
          "#6b7280",
          "#ef4444",
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
          "#ef4444",
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
        categories: Object.keys(chartValues),
      },
      tooltip: {
        style: {
          backgroundColor: isDarkMode ? "black" : "white",
        },
        x: {
          format: "dd/MM/yy HH:mm",
        },
        theme: isDarkMode ? "dark" : "light",
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
             border-gray-500 rounded-3xl dark:bg-secondary-black"
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
             border-gray-500 rounded-3xl dark:bg-secondary-black"
            />
          </div>
        </div>
      </div>

      <Chart options={data.options} series={data.series} />
    </div>
  );
};

export default ChartCard;
