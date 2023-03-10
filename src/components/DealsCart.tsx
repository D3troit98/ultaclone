import React from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const DealsCart = ({
  activeIndex,
  scrollToPrev,
  scrollToNext,
  imgSrc,
}: any) => {
  return (
    <div>
      <div className="flex flex-col w-96 lg:w-[1027px] h-auto mt-4 lg:mt-8 bg-[#f6f6f6] pt-2 lg:pt-4 px-3 lg:px-6 mr-2 lg:mr-5 ">
        <div className="flex items-center justify-end gap-2 lg:gap-4">
          <BsChevronLeft
            className={`opacity-${
              activeIndex === 0 ? "50" : "100"
            } text-xs font-circular-std-medium gap-36`}
            onClick={scrollToPrev}
          />
          <span className="text-xs font-circular-std-medium">{`${
            activeIndex + 1
          }/3`}</span>
          <BsChevronRight
            className={`opacity-${activeIndex === 2 ? "50" : "100"}`}
            onClick={scrollToNext}
          />
        </div>
        <div className="py-10 lg:py-20 px-14 lg:px-28  flex  items-center gap-4 lg:gap-9">
          <div className="w-48 lg:w-96 h-auto ">
            <Image
              src={imgSrc}
              alt="todaydeal1"
              className="h-auto max-w-[100%]  transform-origin-center transition duration-300"
            />
          </div>
          <div className="flex flex-col  w-full">
            <h4 className="font-circular-std-Black font-medium text-xs">
              NATIONAL LASH DAY
            </h4>
            <h3 className="font-circular-std-Black font-medium text-xl lg:text-2xl">
              Free 11 piece gift
            </h3>
            <p className="mb-2 lg:mb-4 font-circular-std-Light font-light text-xs lg:text-sm">
              with any $65 online purchase. Choose from two. $122 value
            </p>

            <h4 className=" w-20 relative group">
              <span className="font-circular-std-medium text-sm font-light pb-3">
                Get the gift
              </span>
              <span className="absolute  bottom-0 left-0 w-full h-[1px] bg-black   group-hover:w-0"></span>
              <span className="absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700  group-hover:w-full"></span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsCart;
