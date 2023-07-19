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

import { useGetExpensesQuery } from "../../api/apiSlice";

//utils
import { getCurrentDate } from "../../utils";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <CardContainer>
      <SectionTitle title={"Dashboard"} className={"!text-left "} />
      <div className="flex justify-between">
        <h2 className="text-[25px] my-[10px] !font-[500] ">
          Welcome Back,
          <span className="text-main-red">
            {userData.firstName + " " + userData.lastName}!
          </span>
        </h2>
      </div>

      <div className="flex gap-[5px] items-center mb-[20px] text-[16px] text-gray-500">
        <Icon icon={"solar:calendar-linear"} className="text-[25px]" />
        <p>{getCurrentDate()}</p>
      </div>

      <div className="flex flex-col gap-[25px]">
        <TodayData />
        <WeekData />
        <MonthData />
        <ChartCard />
      </div>
    </CardContainer>
  );
};

export default Dashboard;
