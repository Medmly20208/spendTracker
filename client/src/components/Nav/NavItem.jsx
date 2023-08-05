import React from "react";

import { Link } from "react-router-dom";

const NavItem = (props) => {
  const navItemClass =
    "h-[40px] p-[5px] !w-[200px] rounded-md text-black hover:bg-secondary-green cursor-pointer transition-all duration-300 ";
  return (
    <Link
      to={`${props.path}`}
      className={`${navItemClass} ${
        props.selectedNav === props.path
          ? "text-main-red bg-gray-100 dark:bg-main-red dark:bg-opacity-10"
          : " bg-white dark:bg-main-black dark:text-white"
      } py-[5px] w-full flex items-center justify-start gap-[10px] h-fit `}
      onClick={() => props.setSelectedNav(props.path)}
    >
      {props.icon}
      <p
        className={`${
          props.selectedNav === props.path ? "font-[600]" : "font-normal "
        } `}
      >
        {props.path}
      </p>
    </Link>
  );
};

export default NavItem;
