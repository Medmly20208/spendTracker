import React from "react";

//components
import Chart from "../Chart";

import { useSelector } from "react-redux";

const PieChart = () => {
  const monthData = useSelector((content) => content.ui.monthData);

  console.log(monthData);

  const Amounts = {
    Food: 0,
    Transportation: 0,
    Other: 0,
    Entertainment: 0,
    Shelter: 0,
  };
  monthData?.map((item) => {
    Amounts[item.category] += item.amount;
  });
  const data = {
    options: {
      labels: Object.keys(Amounts),
      chart: {
        height: 300, // Set the height of the chart
      },
      colors: ["#f97316", "#eab308", "#ef4444", "#8b5cf6", "#3b82f6"],

      markers: {
        colors: ["#f97316", "#eab308", "#ef4444", "#8b5cf6", "#3b82f6"],
      },

      fill: {
        colors: ["#f97316", "#eab308", "#ef4444", "#8b5cf6", "#3b82f6"],
      },
    },
    series: Object.values(Amounts),
  };

  return (
    <div className="border rounded-2xl mt-[30px] h-fit bg-white dark:bg-secondary-black p-6">
      <h1 className="text-2xl font-bold mb-[10px]">This month</h1>
      <Chart options={data.options} series={data.series} type="pie" />
    </div>
  );
};

export default PieChart;
