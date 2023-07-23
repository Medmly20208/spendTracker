import React from "react";

//react-router-dom
import { Link, useParams } from "react-router-dom";

const GroupNav = ({ room, setRoom }) => {
  const param = useParams();

  const listItemstyle = (roomList) => {
    return `p-[10px] border rounded-md cursor-pointer ${
      roomList == param.room ? "bg-gray-100" : ""
    }`;
  };
  console.log(param);
  return (
    <div>
      <ul className="flex flex-col gap-[5px] ">
        <Link
          to={`${0}`}
          className={listItemstyle(0)}
          onClick={() => setRoom(0)}
        >
          General
        </Link>
        <Link
          to={`${1}`}
          className={listItemstyle(1)}
          onClick={() => setRoom(1)}
        >
          save money
        </Link>
        <Link
          to={`${2}`}
          className={listItemstyle(2)}
          onClick={() => setRoom(2)}
        >
          invest money
        </Link>
      </ul>
    </div>
  );
};

export default GroupNav;
