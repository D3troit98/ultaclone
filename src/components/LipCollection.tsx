"use client"; // this is a client component  👈🏽
import React, { useState } from "react";
import LipLogo1 from "../../assets/lipcosm3.webp";
import LipLogo3 from "../../assets/lipcosm4.webp";
import LipLogo2 from "../../assets/hp_wk0423_gwp_nld.webp";
import Image from "next/image";
const LipCollection = () => {
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const [hovering3, setHovering3] = useState(false);

  return (
    <div className="flex flex-col  justify-evenly items-center bg-[#ffffff] w-full px-5 lg:px-10 pt-6 lg:pt-12">
      <h3 className="font-circular-std-medium font-bold text-2xl  lg:text-4xl pb-4">
        Deals we love
      </h3>
      <h4 className="font-chronicle-deck-light text-lg lg:text-xl font-normal leading-8">
        National Lash Day offers you don&apos;t want to miss.
      </h4>

      {/* three divs of images */}
      <div className="flex flex-wrap justify-between gap-6 lg:gap-16 pt-4 lg:pt-8 items-center align-middle">
        <div
          className="flex flex-col w-72  lg:w-80 h-auto justify-center items-start"
          onMouseEnter={() => setHovering1(true)}
          onMouseLeave={() => setHovering1(false)}
        >
          <div className="w-72  lg:w-80 h-80 lg:h-96  items-center justify-center flex overflow-hidden">
            <div className=" w-full h-auto ">
              <Image
                src={LipLogo2}
                alt="lip1"
                className={`${
                  hovering1
                    ? "h-auto max-w-[100%]  transform-origin-center transition duration-300 scale-110"
                    : "h-auto max-w-[100%]  transform-origin-center transition duration-300"
                } `}
              />
            </div>
          </div>
          <h4 className="font-circular-std-Black font-medium text-xs">
            ONLINE ONLY
          </h4>
          <h3 className="font-circular-std-Black font-medium text-xl lg:text-2xl">
            Free gift
          </h3>
          <p className="mb-4 font-circular-std-Light font-light text-sm lg:text-sm">
            Choose from two with any $65 purchase. $122 value.
          </p>

          <h4 className=" relative group">
            <span className="font-circular-std-medium text-sm font-light pb-3">
              Get the gift
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

        <div
          className="flex flex-col w-72  lg:w-80 h-auto justify-center items-start"
          onMouseEnter={() => setHovering2(true)}
          onMouseLeave={() => setHovering2(false)}
        >
          <div className="w-72  lg:w-80 h-80 lg:h-96  items-center justify-center flex overflow-hidden">
            <div className=" w-full h-auto ">
              <Image
                src={LipLogo1}
                alt="lip1"
                className={`${
                  hovering2
                    ? "h-auto max-w-[100%]  transform-origin-center transition duration-300 scale-110"
                    : "h-auto max-w-[100%]  transform-origin-center transition duration-300"
                } `}
              />
            </div>
          </div>
          <h4 className="font-circular-std-Black font-medium text-xs">
            BENEFIT COSMETICS
          </h4>
          <h3 className="font-circular-std-Black font-medium text-xl lg:text-2xl">
            50% off
          </h3>
          <p className="mb-4 font-circular-std-Light font-light text-sm lg:text-sm">
            Select mascaras
          </p>

          <h4 className=" relative group">
            <span className="font-circular-std-medium text-sm font-light pb-3">
              Shop now
            </span>
            <span
              className={`${
                hovering2
                  ? "absolute  bottom-0 left-0  h-[2px] bg-black  w-0"
                  : "absolute  bottom-0 left-0 w-full h-[2px] bg-black "
              }`}
            ></span>
            <span
              className={`${
                hovering2
                  ? "absolute  bottom-0 left-0 h-[2px] bg-black transition-all duration-700  w-full"
                  : "absolute  bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 "
              }`}
            ></span>
          </h4>
        </div>

        <div
          className="flex flex-col w-72  lg:w-80 h-auto justify-center items-start"
          onMouseEnter={() => setHovering3(true)}
          onMouseLeave={() => setHovering3(false)}
        >
          <div className="w-72  lg:w-80 h-80 lg:h-96  items-center justify-center flex overflow-hidden">
            <div className=" w-full h-auto ">
              <Image
                src={LipLogo3}
                alt="lip1"
                className={`${
                  hovering3
                    ? "h-auto max-w-[100%]  transform-origin-center transition duration-300 scale-110"
                    : "h-auto max-w-[100%]  transform-origin-center transition duration-300"
                } `}
              />
            </div>
          </div>
          <h4 className="font-circular-std-Black font-medium text-xs">
            CLINIQUE
          </h4>
          <h3 className="font-circular-std-Black font-medium text-xl lg:text-2xl">
            Now $15
          </h3>
          <p className="mb-4 font-circular-std-Light font-light text-sm lg:text-sm">
            Mascaras & lash serum
          </p>

          <h4 className=" relative group">
            <span className="font-circular-std-medium text-sm font-light pb-3">
              Shop now
            </span>
            <span
              className={`${
                hovering3
                  ? "absolute  bottom-0 left-0  h-[2px] bg-black  w-0"
                  : "absolute  bottom-0 left-0 w-full h-[2px] bg-black "
              }`}
            ></span>
            <span
              className={`${
                hovering3
                  ? "absolute  bottom-0 left-0 h-[2px] bg-black transition-all duration-700  w-full"
                  : "absolute  bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 "
              }`}
            ></span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LipCollection;
