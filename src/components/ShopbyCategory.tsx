import React from 'react'
import Category1 from "../../assets/categotyone.png";
import Image from "next/image";
import CategoryCard from "./CategoryCard";
import LipLogo2 from "../../assets/lipstick.png";
import cat1 from "../../assets/skin-care-bubble.png";
import cat2 from "../../assets/hair-bubble.png";
import cat3 from "../../assets/tools-brushes-bubble.png";
import cat10 from "../../assets/luxury-beauty-bubble.webp";
import cat4 from "../../assets/fragrance-bubble.webp";
import cat5 from "../../assets/bath-body-bubble.webp";
import cat6 from "../../assets/nails-bubble.webp";
import cat7 from "../../assets/men-bubble.webp";
import cat8 from "../../assets/ulta-collection-bubble.webp";
import cat9 from "../../assets/gifts-bubble.webp";
const ShopbyCategory = () => {
  return (
    <div className="flex flex-col items-center bg-[#ffffff] w-full px-12 lg:px-24  pt-10 lg:pt-20">
      <div className="flex justify-between w-full items-center bg-[#fdf1f3] py-8 px-12">
        {/* lash quiz */}
        <div className="flex justify-center items-center gap-6 lg:gap-12 ">
          <div className="hidden md:flex h-auto w-16 lg:w-28 ">
            <Image src={Category1} alt="category1" className="w-full h-auto" />
          </div>
          <h3 className="text-[#cc0058] font-circular-std-medium text-xl lg:text-2xl">
            2X Points
          </h3>
          <p className="font-circular-std-medium text-xs lg:text-sm align-middle">
            Earn 2 points per $1 spent at Ulta Beauty using your Ultamate
            Rewards Credit Card.
          </p>
        </div>
        <h4 className=" relative group">
          <span className="font-circular-std-medium text-xs font-light pb-3">
            View Details
          </span>
          <span className="absolute  bottom-0 left-0 w-full h-[2px] bg-black   group-hover:w-0"></span>
          <span className="absolute  bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700  group-hover:w-full"></span>
        </h4>
      </div>
      <div className="mt-20 w-full">
        {/* today deals */}
        <div className="flex justify-center items-center">
          <h3 className="font-circular-std-medium font-medium text-xl lg:text-2xl">
            Shop by Category
          </h3>
        </div>
        {/* <Category /> */}
        <div className="flex justify-center items-center flex-wrap">
          <CategoryCard imgSrc={LipLogo2} underlink="Makeup" />
          <CategoryCard imgSrc={cat1} underlink="Skin Care" />
          <CategoryCard imgSrc={cat2} underlink="Hair" />
          <CategoryCard imgSrc={cat3} underlink="Tooth & Brushes" />
          <CategoryCard imgSrc={cat4} underlink="Frangrance" />
          <CategoryCard imgSrc={cat5} underlink="Bath & Body" />
          <CategoryCard imgSrc={cat6} underlink="Nails" />
          <CategoryCard imgSrc={cat7} underlink="Men" />
          <CategoryCard imgSrc={cat8} underlink="ULTA Collection" />
          <CategoryCard imgSrc={cat9} underlink="Gifts" />
          <CategoryCard imgSrc={cat10} underlink="Luxury at Ulta Beauty" />
        </div>
      </div>
    </div>
  );
};

export default ShopbyCategory