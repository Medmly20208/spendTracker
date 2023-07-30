import React, { useEffect, useState } from "react";

//components
import SectionTitle from "../SectionTitle";
import CardContainer from "../CardContainer";
import GroupNav from "./GroupNav";

//react router dom
import { Outlet, Link } from "react-router-dom";

//icon
import { Icon } from "@iconify/react";

const Chat = () => {
  const [room, setRoom] = useState(0);

  return (
    <CardContainer>
      <SectionTitle title={"Chat"} className={"!text-left "} />
      <div className="grid sm:grid-cols-[200px_minmax(0,_1fr)] gap-[10px] mt-[50px]">
        {/*<Link className="sm:hidden" to="/user/Chat">
          <Icon icon={"fluent-mdl2:back"} />
  </Link>*/}
        <GroupNav setRoom={setRoom} room={room}></GroupNav>
        <Outlet context={room} />
      </div>
    </CardContainer>
  );
};

export default Chat;
