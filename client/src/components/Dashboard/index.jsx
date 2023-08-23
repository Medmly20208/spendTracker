import React, { useState } from "react";

//icon
import { Icon } from "@iconify/react";

//components
import SectionTitle from "../SectionTitle";
import CardContainer from "../CardContainer";
import TodayData from "./TodayData";
import MonthData from "./MonthData";
import WeekData from "./WeekData";
import ChartCard from "./ChartCard";
import LastestExpenses from "./LastestExpenses";
import PieChart from "./PieChart";
//utils
import { getCurrentDate } from "../../utils";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <CardContainer>
      <SectionTitle title={"Dashboard"} className={"!text-left "} />
      <div className="flex justify-between ">
        <h2 className="text-[25px] my-[10px] !font-[500] dark:text-white ">
          Welcome Back,
          <span className="text-main-red">
            {userData.firstName + " " + userData.lastName}!
          </span>
        </h2>
      </div>

      <div className="flex gap-[5px] items-center mb-[20px] text-[16px] text-gray-500">
        <Icon icon={"solar:calendar-linear"} className="text-[25px] " />
        <p className="dark:text-white">{getCurrentDate()}</p>
      </div>
      <div className="grid grid-rows-1 xl:grid-cols-[minmax(700px,_1fr)_400px] gap-[0px]">
        <div className="flex flex-col gap-[25px] ">
          <TodayData />
          <WeekData />
          <MonthData />
        </div>
        <div>
          <LastestExpenses />
          <PieChart />
        </div>
      </div>
      <ChartCard />
    </CardContainer>
  );
};

export default Dashboard;
