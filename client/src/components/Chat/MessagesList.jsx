import React from "react";

import { formatDistanceToNow } from "date-fns";

const MessagesList = ({ messages }) => {
  return (
    <div>
      {messages?.length == 0 ? <p>No messages in this room</p> : <></>}
      {messages?.map((message, index) => {
        let date = message.createdAt;

        //right format for geenrate dates
        const arrayDate = [
          date.split("T")[0].slice(0, 4),
          parseInt(date.split("T")[0].slice(5, 7)) - 1,
          date.split("T")[0].slice(8, 10),
          date.split("T")[1].slice(0, 2),
          date.split("T")[1].slice(3, 5),
          date.split("T")[1].slice(6, 8),
        ];

        if (message.senderId === localStorage.getItem("id")) {
          return (
            <div className="flex justify-end w-full" key={index}>
              <div className="bg-blue-500 text-white w-fit p-[5px] rounded-md  m-[10px]">
                <p className="!text-[12px] text-gray-100 !m-[0px]">You</p>
                <p className="!m-[0px]">{message.message}</p>
                <p className="!text-[12px]">
                  {formatDistanceToNow(new Date(...arrayDate), {
                    includeSeconds: true,
                  })}
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex justify-start w-full" key={index}>
              <div className="bg-white  w-fit p-[5px] rounded-md  m-[10px]">
                <p className="!text-[12px]  !m-[0px]">{message.senderId}</p>
                <p className="!m-[0px]">{message.message}</p>
                <p className="!text-[12px]">
                  {formatDistanceToNow(new Date(...arrayDate), {
                    includeSeconds: true,
                  })}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MessagesList;
