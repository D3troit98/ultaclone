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
    <div className="flex flex-col  justify-evenly items-center bg-[#ffffff] w-full  px-10 py-4">
      <h3 className="font-circular-std-medium font-bold text-4xl pb-4">
        Explore Ulta Beauty Collection
      </h3>
      <h4 className="font-chronicle-deck-light text-xl font-normal leading-8">
        Makeup, skin care, bath products and more with soon-to-be-fave status.
      </h4>

      {/* three divs of images */}
      <div className="flex justify-between gap-16 pt-8 items-center align-middle">
        <div
          className="flex flex-col  w-80 h-auto justify-center items-start"
          onMouseEnter={() => setHovering1(true)}
          onMouseLeave={() => setHovering1(false)}
        >
          <div className="w-80 h-96  items-center justify-center flex overflow-hidden">
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
          <h3 className="font-circular-std-Black font-medium text-2xl">
            Free gift
          </h3>
          <p className="mb-4 font-circular-std-Light font-light text-sm">
            Choose from two with any $65 purchase. $122 value.
          </p>

          <h4 className=" relative group">
            <span className="font-circular-std-medium text-sm font-light pb-3">
              Get the gift
            </span>
            <span className="absolute  bottom-0 left-0 w-full h-[2px] bg-black   group-hover:w-0"></span>
            <span className="absolute  bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700  group-hover:w-full"></span>
          </h4>
        </div>

        <div
          className="flex flex-col gap-2 w-80 h-auto justify-center items-start"
          onMouseEnter={() => setHovering2(true)}
          onMouseLeave={() => setHovering2(false)}
        >
          <div className="w-80 h-96  items-center justify-center flex overflow-hidden">
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
          <h3 className="font-circular-std-Black font-medium text-2xl">
            50% off
          </h3>
          <p className="mb-4 font-circular-std-Light font-light text-sm">
            Select mascaras
          </p>

          <h4 className=" relative group">
            <span className="font-circular-std-medium text-sm font-light pb-3">
              Shop now
            </span>
            <span className="absolute  bottom-0 left-0 w-full h-[2px] bg-black   group-hover:w-0"></span>
            <span className="absolute  bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700  group-hover:w-full"></span>
          </h4>
        </div>

        <div
          className="flex flex-col gap-2 w-80 h-auto justify-center items-start"
          onMouseEnter={() => setHovering3(true)}
          onMouseLeave={() => setHovering3(false)}
        >
          <div className="w-80 h-96  items-center justify-center flex overflow-hidden">
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
          <h3 className="font-circular-std-Black font-medium text-2xl">
            Now $15
          </h3>
          <p className="mb-4 font-circular-std-Light font-light text-sm">
            Mascaras & lash serum
          </p>

          <h4 className=" relative group">
            <span className="font-circular-std-medium text-sm font-light pb-3">
              Shop now
            </span>
            <span className="absolute  bottom-0 left-0 w-full h-[2px] bg-black   group-hover:w-0"></span>
            <span className="absolute  bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700  group-hover:w-full"></span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LipCollection;
