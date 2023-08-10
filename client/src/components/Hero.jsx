import React from "react";

import dashboardTwo from "../assets/images/dashboardTwo.jpg";

const Hero = () => {
  return (
    <div className="text-center mt-[100px] text-4xl  flex justify-center items-center flex-col gap-[20px]">
      <div>
        <h1>Track Your Expenses</h1>
        <h1> Master Your Finances with SpendTracker!</h1>
      </div>

      <p className="text-[16px] text-gray-700 w-[350px] leading-normal">
        The expense tracker platform is a powerful tool designed to help
        individuals easily monitor and manage their financial transactions.
      </p>

      <div className="drop-shadow-custom mt-[100px] flex justify-center items-center p-[20px]">
        <img src={dashboardTwo} alt="dashboard" className="rounded-3xl" />
      </div>

      {/*
          <img src={dashboardTwo} alt="dashboard" className="mt-[100px]"/>
        */}
    </div>
  );
};

export default Hero;
