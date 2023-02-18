import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import HeroBanner from "../../assets/hp_wk0323_hero_ubcgwp_mob.webp";
const Banner = () => {
  return (
    <div className=" bg-[#ffffff] w-full h-full px-10 py-6">
      <div>
        <div className="flex  w-full h-9 justify-evenly align-middle items-center p-3 mb-4 bg-[#f6f6f6]">
          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col mr-[15px] h-full justify-center items-center">
              <h4 className="font-circular-std-Light text-xs font-bold">
                Earn 5X points on select brands.
              </h4>
              <p className="font-circular-std-Light text-xs ">
                Buy online, pick up in store.
              </p>
            </div>
            <AiOutlineArrowRight />
          </div>
          <div className="w-1 h-6   border-r border-b-gray-200 " />

          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col mr-[15px] h-full justify-center items-center">
              <h4 className="font-circular-std-Light text-xs font-bold">
                Earn even more.
              </h4>
              <p className="font-circular-std-Light text-xs ">
                Apply for an Ultamate Reward Credit Card.
              </p>
            </div>
            <AiOutlineArrowRight />
          </div>
          <div className="w-1 h-6   border-r border-b-gray-200 " />

          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col mr-[15px] h-full justify-center items-center">
              <h4 className="font-circular-std-Light text-xs font-bold">
                Shop.Earn points. Get rewarded
              </h4>
              <p className="font-circular-std-Light text-xs ">
                Join Ultamate Rewards
              </p>
            </div>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex justify-between items-start ">
        <div className="flex flex-col justify-center items-start text-left pl-28 pt-28 gap-2">
          <p className="font-circular-std-Black text-xs font-medium">
            ULTA BEAUTY COLLECTION
          </p>
          <h2 className="font-circular-std-medium text-6xl font-bold">
            Free 10 piece makeup bag
          </h2>
          <p className="font-chronicle-deck-light text-xl font-normal">
            Get your Ulta Beauty Collection gift when you <br />
            spend $19.50 on select items from the brand.
          </p>
          <div className="flex justify-center items-center align-middle mt-1">
            <h4 className="font-circular-std-medium text-2xl font-medium mr-1">
              Get the gift
            </h4>
            <AiOutlineArrowRight className="font-circular-std-medium text-2xl font-medium" />
          </div>
        </div>
        <div className="h-[600px] w-full">
          <Image src={HeroBanner} alt="hero banner" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner