"use client";
import React, { useState } from "react";
import Image from "next/image";
import BeautyServiesLogo from "../../assets/hp_wk3822_beautyservices_hero.png";
import BeautyServiceImg from "../../assets/hp_wk0323_article_beautyservices_colorrefresh.webp";
import BeautyServiceImg2 from "../../assets/hp_wk0323_beautyservices_fekkai.jpeg";
import BeautyServiceImg3 from "../../assets/hp_wk0323_article_beautyservices_shinyhair.webp";
const BeautyServices = () => {
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const [hovering3, setHovering3] = useState(false);
  return (
    <div className="w-full p-1 lg:p-0 mt-10 lg:mt-20 bg-[#fdf1f3]">
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col-reverse justify-between pt-0 px-10 lg:px-20 items-center">
          <div className="flex flex-col w-full lg:w-80 pl-5 lg:pl-10">
            <h1 className="font-circular-std-Black text-5xl lg:text-6xl font-bold">
              Beauty Services
            </h1>
            <p className="font-chronicle-deck-light text-lg lg:text-xl font-normal mt-2">
              Your best look. Our promise.Each service begins with a
              complimentary consulatation with a licensed beauty pro. Ask
              questions and share ideas. we&apos;ll do the same
            </p>
            <div className="flex justify-start items-center gap-3 lg:gap-5 mt-4 lg:mt-8">
              <h4 className=" relative group">
                <span className="font-circular-std-Light text-xs font-light pb-3">
                  Learn more
                </span>
                <span className="absolute  bottom-0 left-0 w-full h-[1px] bg-black   group-hover:w-0"></span>
                <span className="absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700  group-hover:w-full"></span>
              </h4>
              <h4 className=" relative group">
                <span className="font-circular-std-Light text-xs font-light pb-3">
                  Book appointment
                </span>
                <span className="absolute  bottom-0 left-0 w-full h-[1px] bg-black   group-hover:w-0"></span>
                <span className="absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700  group-hover:w-full"></span>
              </h4>
            </div>
          </div>
          <div className="w-full lg:w-[900px] h-auto">
            <Image
              src={BeautyServiesLogo}
              alt="logo"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly items-center">
          <div
            className="flex flex-col  w-80 h-auto justify-center items-center"
            onMouseEnter={() => setHovering1(true)}
            onMouseLeave={() => setHovering1(false)}
          >
            <div className="w-72 h-80  items-center justify-center flex overflow-hidden">
              <div className=" w-full h-auto ">
                <Image
                  src={BeautyServiceImg}
                  alt="lip1"
                  className={`${
                    hovering1
                      ? "h-auto max-w-[100%]  transform-origin-center transition duration-300 scale-110"
                      : "h-auto max-w-[100%]  transform-origin-center transition duration-300"
                  } `}
                />
              </div>
            </div>
            <h4 className=" relative group justify-center items-center text-center pt-1">
              <span className="font-circular-std-medium text-2xl font-medium pb-3">
                Refresh your colour
              </span>

              <span
                className={`${
                  hovering1
                    ? "absolute  bottom-0 left-0 h-[1px] bg-black transition-all duration-700  w-full"
                    : "absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700 "
                }`}
              ></span>
            </h4>
            <p className="mb-4 font-circular-std-Light text-center font-light text-sm">
              Your best hair for spring. We have ideas
            </p>
          </div>

          <div
            className="flex flex-col  w-80 h-auto justify-center items-center"
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
          >
            <div className="w-72 h-80  items-center justify-center flex overflow-hidden">
              <div className=" w-full h-auto ">
                <Image
                  src={BeautyServiceImg2}
                  alt="lip1"
                  className={`${
                    hovering2
                      ? "h-auto max-w-[100%]  transform-origin-center transition duration-300 scale-110"
                      : "h-auto max-w-[100%]  transform-origin-center transition duration-300"
                  } `}
                />
              </div>
            </div>
            <h4 className=" relative group justify-center items-center text-center pt-1">
              <span className="font-circular-std-medium text-2xl font-medium pb-3">
                Brand of the moment
              </span>

              <span
                className={`${
                  hovering2
                    ? "absolute  bottom-0 left-0 h-[1px] bg-black transition-all duration-700  w-full"
                    : "absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700 "
                }`}
              ></span>
            </h4>
            <p className="mb-4 font-circular-std-Light font-light text-center text-sm">
              Explore Fekkai during your next salon visit through March 4
            </p>
          </div>

          <div
            className="flex flex-col  w-80 h-auto justify-center items-center"
            onMouseEnter={() => setHovering3(true)}
            onMouseLeave={() => setHovering3(false)}
          >
            <div className="w-72 h-80  items-center justify-center flex overflow-hidden">
              <div className=" w-full h-auto ">
                <Image
                  src={BeautyServiceImg3}
                  alt="lip1"
                  className={`${
                    hovering3
                      ? "h-auto max-w-[100%]  transform-origin-center transition duration-300 scale-110"
                      : "h-auto max-w-[100%]  transform-origin-center transition duration-300"
                  } `}
                />
              </div>
            </div>
            <h4 className=" relative group justify-center items-center text-center pt-1">
              <span className="font-circular-std-medium text-2xl font-medium pb-3">
                Try deep conditioning
              </span>

              <span
                className={`${
                  hovering3
                    ? "absolute  bottom-0 left-0 h-[1px] bg-black transition-all duration-700  w-full"
                    : "absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700 "
                }`}
              ></span>
            </h4>
            <p className="mb-4 font-circular-std-Light font-light text-center text-sm">
              Smooth, shinning and healthy hair, right this way
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyServices;
