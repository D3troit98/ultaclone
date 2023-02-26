import Image from "next/image";
import React from "react";
import Footerlogo from "../../assets/footer_cc.png";
const Footer = () => {
  return (
    <div className="bg-[#f5f5f5] mt-4 lg:mt-8 pt-3 lg:pt-6">
      <div className="flex  w-full flex-col md:flex-row align-middle justify-center md:justify-evenly items-center md:items-start p-3 lg:p-6 ">
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] text-center">
            Store
          </h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Find a Store
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Virtual Store Tour
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Beauty Services
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            List of Brands
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Ultamate Rewards
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Ways to Shop Ulta Beauty
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] text-center">
            Guest Services
          </h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Guest Services Center
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Order Status
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Shipping Policy & Rate
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Returns
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Contact Us
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Your Privacy Rights
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] text-center">
            About Us
          </h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Our Company
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Investor Relations
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Affiliates
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Site Map
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Supply Chain
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light text-center">
            Transparency
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] text-center">
            Services
          </h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Gift Cards
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Mobile App
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h3 className="text-sm font-bold text-[#222d3a]  text-center">
            Ultamate Rewards Credit Card
          </h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Learn More & Apply
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light text-center">
            Manage Account
          </p>
          <div className=" flex w-8 h-8 justify-center align-middle items-center">
            <Image
              src={Footerlogo}
              className="w-full h-full"
              alt="fotoerlogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
