import { useState } from "react";

//react-router-dom
import { Outlet } from "react-router-dom";

//components
import Nav from "./Nav";

const Container = () => {
    const [isNavDisplayed, setIsNavDisplayed] = useState(true);
    const ToggleNav = () => setIsNavDisplayed((prev) => !prev);
  
    //style={{marginLeft:isNavDisplayed && window.innerWidth>400 ? "80px" : "0px"}}
   
    return (
      <>
        <Nav ToggleNav={ToggleNav} isNavDisplayed={isNavDisplayed} />
        <div
          id="layout"
          className={`${
            isNavDisplayed && window.innerWidth > 700 ? "ml-[250px]" : "ml-[0px]"
          } bg-gray-100 min-h-screen`}
        >
          <Outlet />
        </div>
      </>
    );
  };

export default Container;

