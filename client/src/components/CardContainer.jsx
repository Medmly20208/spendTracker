import React from 'react'

const CardContainer = (props) => {
  return (
    <div className={"w-full flex justify-center items-center "+props.className}>
      <div className="p-[20px] mt-[100px] mb-[20px] bg-white shadow-md w-[90%] rounded-lg">
        <div className="flex flex-col justify-center  h-full">
            {props.children}
            </div>
            </div>
            </div>
  )
}

export default CardContainer