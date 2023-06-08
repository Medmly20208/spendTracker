import React from "react";

//components
import NotificationItem from "./NotificationItem";
import SectionTitle from "../SectionTitle";
import CardContainer from "../CardContainer";



const Notifications = () => {
  
  return (
     <CardContainer>
          <SectionTitle title={"Notifications"} className={"!text-left "}/>
          <div className="w-[100%] flex flex-col justify-center items-start  gap-[10px]">
            <NotificationItem
              
              description={"new report has come"}
              time={"1h"}
            />
            <NotificationItem
             
              description={"new report has come"}
              time={"2h"}
            />
            <NotificationItem
              
              description={"new report has come"}
              time={"3h"}
            />
            
           
          </div>
          </CardContainer>
  );
};

export default Notifications;