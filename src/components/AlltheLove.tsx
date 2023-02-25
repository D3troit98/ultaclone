import React from 'react'
import Ultamate from "./Ultamate";

const AlltheLove = () => {
  return (
    <div className="flex flex-col items-center bg-[#ffffff] w-full px-12 lg:px-24  pt-10 lg:pt-20">
      <div className="flex justify-between w-full items-center bg-[#fdf1f3] py-4 lg:py-8 px-6 lg:px-12">
        {/* lash quiz */}
        <div className="flex justify-center items-center gap-6 lg:gap-12 ">
          <h3 className="text-[#cc0058] font-circular-std-medium text-xl lg:text-2xl">
            $3.50 off
          </h3>
          <p className="font-circular-std-medium text-xs lg:text-sm align-middle">
            your qualifying $15 purchase with code 221017
          </p>
        </div>
        <h4 className=" relative group">
          <span className="font-circular-std-medium text-xs font-light pb-3">
            View Details
          </span>
          <span className="absolute  bottom-0 left-0 w-full h-[1px] bg-black   group-hover:w-0"></span>
          <span className="absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700  group-hover:w-full"></span>
        </h4>
      </div>
      <div className="mt-10 lg:mt-20 w-full">
        {/* today deals */}
        <div className="flex">
          <h3 className="font-circular-std-medium font-medium text-xl lg:text-2xl">
            Ultamate Rewards
          </h3>
        </div>
        {/* <DealsCarousel /> */}
        <Ultamate />
      </div>
    </div>
  );
};

export default AlltheLove