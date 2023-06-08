import React from "react";

const NotificationItem = (props) => {
  
  return (
    <div className="flex flex-row gap-[10px] border-b-[2px] border-b-gray-400 w-[100%] p-[20px] ">
      <div>
        <h1 className="mb-[10px]">{props.description}</h1>
        <p className="text-[15px] text-gray-500 !font-[400]">
      {props.time} ago 
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;