import React from "react";

//icon
import { Icon } from "@iconify/react";

//components
import SectionTitle from "../SectionTitle";
import CardContainer from "../CardContainer";
import TodayData from "./TodayData";
import MonthData from "./MonthData";



const Dashboard = () => {
  
  return (
    
   
    <CardContainer >
          <SectionTitle title={"Dashboard"} className={"!text-left "}/>
          <div className="flex justify-between">
          <h2 className="text-[25px] my-[10px] !font-[500] ">
                Welcome Back,<span className="text-main-red">Med!</span>
          </h2>
          <div className="flex items-center flex-wrap gap-[10px] mb-[20px]">
              <div className="flex gap-[10px] items-center">
                <p className="text-gray-500 text-[1.1em]">Date:</p>
                <input
                  type="date"
                  className="px-[10px] py-[5px] border
             border-gray-500 rounded-3xl"
                  defaultValue={"2023-05-24"}
                />
              </div>
              
          </div>
          </div>
          
          
          

          <div className="flex gap-[5px] items-center mb-[20px] text-[16px] text-gray-500">
            <Icon icon={"solar:calendar-linear"} className="text-[25px]" />
            <p>24 May,2023</p>
          </div>
          <div className="flex flex-col gap-[25px]">
          <TodayData/>
          <MonthData/>
          </div>
          
          
    </CardContainer>
  
  );
};

export default Dashboard;