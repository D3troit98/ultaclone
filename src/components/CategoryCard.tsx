"use client";
import React, { useState } from "react";
import Image from "next/image";

const CategoryCard = ({ imgSrc, underlink }: any) => {
  const [hovering1, setHovering1] = useState(false);
  return (
    <div className="p-1">
      <div
        className="flex flex-col  w-64 h-auto justify-center items-center"
        onMouseEnter={() => setHovering1(true)}
        onMouseLeave={() => setHovering1(false)}
      >
        <div className="w-64 h-64  items-center justify-center flex overflow-hidden">
          <div className=" w-full h-auto ">
            <Image
              src={imgSrc}
              alt="lip1"
              className={`${
                hovering1
                  ? "h-auto max-w-[100%]  transform-origin-center transition duration-300 scale-110"
                  : "h-auto max-w-[100%]  transform-origin-center transition duration-300"
              } `}
            />
          </div>
        </div>

        <h4 className=" relative group pt-6">
          <span className="font-circular-std-medium text-sm font-light pb-3">
            {underlink}
          </span>
          <span
            className={`${
              hovering1
                ? "absolute  bottom-0 left-0  h-[2px] bg-black  w-0"
                : "absolute  bottom-0 left-0 w-full h-[2px] bg-black "
            }`}
          ></span>
          <span
            className={`${
              hovering1
                ? "absolute  bottom-0 left-0 h-[2px] bg-black transition-all duration-700  w-full"
                : "absolute  bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 "
            }`}
          ></span>
        </h4>
      </div>
    </div>
  );
};

export default CategoryCard;
