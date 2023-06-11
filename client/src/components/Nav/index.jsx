import React, { useState } from "react";

// heroIcon
import {
  PresentationChartLineIcon,
  BellIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  DocumentChartBarIcon,
  NewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

//iconify
import { Icon } from "@iconify/react";

// react-router-dom
import { Link, useLocation, useNavigate } from "react-router-dom";

//components
import Logo from "../../assets/images/LogoIcon.png";
import NavItem from "./NavItem";


const Nav = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedNav, setSelectedNav] = useState(location.pathname.slice(1).split("/")[1]);
  const navItemClass =
    "w-[40px] h-[40px] p-[5px]  text-white hover:bg-secondary-green cursor-pointer transition-all duration-300 rounded-md";

  const navIcon = props.isNavDisplayed
    ? "material-symbols:keyboard-double-arrow-left"
    : "material-symbols:keyboard-double-arrow-right";


  const logOut = () => {
    //localStorage.setItem("userData", null);
    localStorage.setItem("token", null);
    navigate("/", { replace: true });
  };

  return (
    <>
      <Icon
        onClick={props.ToggleNav}
        icon={"fontisto:nav-icon-a"}
        className={
          navItemClass +
          " bg-main-red fixed top-[10px] left-[5px] z-[100000] sm:hidden "
        }
      />

      {props.isNavDisplayed && (
        <div>
          <div
            onClick={props.ToggleNav}
            className="fixed top-0 left-0 w-screen h-screen bg-white/5 z-[10000] backdrop-blur-sm sm:hidden"
          ></div>
          <Icon
            onClick={props.ToggleNav}
            icon={navIcon}
            className={
              navItemClass +
              " bg-primary-green fixed top-[80px] left-[20px] z-[1000]"
            }
          />

          <div
            
            className="fixed top-[0px] left-[0px] h-screen w-[250px] bg-main-red z-[10000] "
          >
           
            <div className="flex flex-col items-center justify-start gap-[20px] h-full pt-[150px]">
              <NavItem
                path="Dashboard"
                setSelectedNav={setSelectedNav}
                selectedNav={selectedNav}
                icon={<PresentationChartLineIcon className="!w-[1.5em]" />}
              />
              <NavItem
                path="Profile"
                setSelectedNav={setSelectedNav}
                selectedNav={selectedNav}
                icon={<UserCircleIcon className="!w-[1.5em]" />}
              />
              <NavItem
                path="Notifications"
                setSelectedNav={setSelectedNav}
                selectedNav={selectedNav}
                icon={<BellIcon className="!w-[1.5em]" />}
              />
              <NavItem
                path="Reports"
                setSelectedNav={setSelectedNav}
                selectedNav={selectedNav}
                icon={<DocumentChartBarIcon className="!w-[1.5em]" />}
              />
              <NavItem
                path="Chat"
                setSelectedNav={setSelectedNav}
                selectedNav={selectedNav}
                icon={<ChatBubbleOvalLeftEllipsisIcon className="!w-[1.5em]" />}
              />
          
             <NavItem
                path="News"
                setSelectedNav={setSelectedNav}
                selectedNav={selectedNav}
                icon={<NewspaperIcon className="!w-[1.5em]" />}
              />
              <div>
                <ArrowLeftOnRectangleIcon
                  className={`${navItemClass} ${"bg-primary-red"}`}
                  onClick={logOut}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;