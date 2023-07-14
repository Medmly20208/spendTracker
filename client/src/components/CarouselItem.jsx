import React from "react";

const CarouselItem = (props) => {
  return (
    <div
      style={{ "--image-url": `url('/src/assets/images/${props.image}')` }}
      className={`bg-cover z-[100000] relative bg-[center] bg-[image:var(--image-url)] `}
    >
      <div className="relative w-[50vw] h-[100vh] bg-gradient-to-b from-[rgba(255,0,0,0)] to-[#000000]"></div>
      <div className="absolute bottom-0 left-0 text-white w-[45vw] p-[30px] mb-[20px]">
        <h1 className="text-gray-300  text-[35px] mb-[30px]">
          <span className="text-main-red !w-[50vw] font-bold">
            spendTracker
          </span>{" "}
          {props.slogan}
        </h1>
        <p className="leading-relaxed">{props.text}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
