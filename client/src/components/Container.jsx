import { useState } from "react";

//react-router-dom
import { Outlet, useNavigate } from "react-router-dom";

//components
import Nav from "./Nav";
import Tooltip from "./Tooltip";

//icon
import { Icon } from "@iconify/react";

const Container = () => {
  const navigate = useNavigate();

  const [isNavDisplayed, setIsNavDisplayed] = useState(true);
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  const openTooltip = () => setIsTooltipDisplayed(true);
  const closeTooltip = () => setIsTooltipDisplayed(false);

  const ToggleNav = () => setIsNavDisplayed((prev) => !prev);

  //style={{marginLeft:isNavDisplayed && window.innerWidth>400 ? "80px" : "0px"}}

  const profileImgContent =
    JSON.parse(localStorage.getItem("userData")).firstName[0] +
    JSON.parse(localStorage.getItem("userData")).lastName[0];
  console.log(isTooltipDisplayed);

  const logOut = () => {
    localStorage.setItem("userData", null);
    localStorage.setItem("token", null);
    navigate("/", { replace: true });
  };

  return (
    <>
      <Nav ToggleNav={ToggleNav} isNavDisplayed={isNavDisplayed} />
      <div
        id="layout"
        className={`!min-h-screen box-border transition-all ${
          isNavDisplayed && window.innerWidth > 700 ? "ml-[250px]" : "ml-[0px]"
        } bg-gray-100 `}
      >
        <div
          className={`bg-white w-full h-[60px] relative flex  ${
            isNavDisplayed ? "justify-end" : "justify-between"
          } items-center  px-[1em] md:px-[3.3em] `}
        >
          <Icon
            onClick={ToggleNav}
            icon={"solar:list-linear"}
            className={`cursor-pointer  ${
              isNavDisplayed ? "hidden" : "block"
            }   box-content text-3xl  text-main-red p-[0.1em] w-fit`}
          />
          <div
            onClick={openTooltip}
            className="box-content relative bg-red-500 cursor-pointer h-[2em] w-[2em] p-[0.2em] rounded-full text-white flex justify-center items-center"
          >
            <p>{profileImgContent}</p>
          </div>

          {isTooltipDisplayed && (
            <Tooltip onClose={closeTooltip}>
              <div className="bg-white rounded-md p-[1em] border border-gray-300">
                <div className="border-b">
                  <p className=" text-black mb-[5px] font-bold">
                    {JSON.parse(localStorage.getItem("userData")).firstName}{" "}
                    {JSON.parse(localStorage.getItem("userData")).lastName}
                  </p>

                  <p className="text-gray-500 mb-[5px]">
                    {JSON.parse(localStorage.getItem("userData")).email}
                  </p>
                </div>
                <div className="mt-[5px]">
                  <button className="text-red-500" onClick={logOut}>
                    Logout
                  </button>
                </div>
              </div>
            </Tooltip>
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Container;
