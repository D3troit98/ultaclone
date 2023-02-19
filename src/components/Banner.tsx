"use client"; // this is a client component  👈🏽
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import HeroBanner from "../../assets/hp_wk0323_hero_ubcgwp_mob.webp";
const Banner = () => {
  const [arrowHover, setArrowHover] = useState(false);
  const [arrowHover1, setArrowHover1] = useState(false);
  const [arrowHover2, setArrowHover2] = useState(false);
  const [arrowHover3, setArrowHover3] = useState(false);
  return (
    <div className=" bg-[#ffffff] w-full h-full ">
      <div>
        <div className="flex  w-full h-16 justify-evenly align-middle items-center  mb-4 bg-[#f6f6f6] px-10">
          <div
            className="flex justify-center items-center gap-2"
            onMouseEnter={() => setArrowHover1(true)}
            onMouseLeave={() => setArrowHover1(false)}
          >
            <div className="flex flex-col mr-[15px] h-full justify-center items-center">
              <h4 className="font-circular-std-Light text-xs font-bold">
                Earn 5X points on select brands.
              </h4>
              <p className="font-circular-std-Light text-xs ">
                Buy online, pick up in store.
              </p>
            </div>

            <AiOutlineArrowRight
              className={`font-circular-std-medium text-sm font-medium transform transition-all duration-300 ${
                arrowHover1 ? "translate-x-2" : "translate-x-0"
              } ${arrowHover1 ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <div className="w-1 h-6   border-r border-b-gray-200 " />

          <div
            className="flex justify-center items-center gap-2"
            onMouseEnter={() => setArrowHover2(true)}
            onMouseLeave={() => setArrowHover2(false)}
          >
            <div className="flex flex-col mr-[15px] h-full justify-center items-center">
              <h4 className="font-circular-std-Light text-xs font-bold">
                Earn even more.
              </h4>
              <p className="font-circular-std-Light text-xs ">
                Apply for an Ultamate Reward Credit Card.
              </p>
            </div>
            <AiOutlineArrowRight
              className={`font-circular-std-medium text-sm font-medium transform transition-all duration-300 ${
                arrowHover2 ? "translate-x-2" : "translate-x-0"
              } ${arrowHover2 ? "opacity-100" : "opacity-0"}`}
            />
          </div>
          <div className="w-1 h-6   border-r border-b-gray-200 " />

          <div
            className="flex justify-center items-center gap-2"
            onMouseEnter={() => setArrowHover3(true)}
            onMouseLeave={() => setArrowHover3(false)}
          >
            <div className="flex flex-col mr-[15px] h-full justify-center items-center">
              <h4 className="font-circular-std-Light text-xs font-bold">
                Shop.Earn points. Get rewarded
              </h4>
              <p className="font-circular-std-Light text-xs ">
                Join Ultamate Rewards
              </p>
            </div>
            <AiOutlineArrowRight
              className={`font-circular-std-medium text-sm font-medium transform transition-all duration-300 ${
                arrowHover3 ? "translate-x-2" : "translate-x-0"
              } ${arrowHover3 ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex justify-between items-start px-10 ">
        <div className="flex flex-col justify-center items-start text-left pl-28 pt-28 gap-2">
          <p className="font-circular-std-Black text-xs font-medium">
            In store & online | Feb 19-25
          </p>
          <h2 className="font-circular-std-medium text-6xl font-bold">
            30% off select <br /> lashes & <br /> mascara
          </h2>
          <p className="font-chronicle-deck-light text-xl font-normal">
            Celebrate National Lash Day (Feb 19) all week long <br />
            with offers on your fave brands.
          </p>
          <div
            className="flex justify-center items-center align-middle mt-1"
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
          >
            <h4 className="font-circular-std-medium text-2xl font-medium mr-1">
              Shop all
            </h4>
            <AiOutlineArrowRight
              className={`font-circular-std-medium text-2xl font-medium transform translate-x-0 transition-all duration-500 ${
                arrowHover ? "translate-x-2" : ""
              } `}
            />
          </div>
        </div>
        <div className="h-[441px] w-auto">
          <Image src={HeroBanner} alt="hero banner" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
