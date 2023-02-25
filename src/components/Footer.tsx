import Image from "next/image";
import React from "react";
import Footerlogo from "../../assets/footer_cc.png";
const Footer = () => {
  return (
    <div className="bg-[#f5f5f5] mt-4 lg:mt-8 pt-3 lg:pt-6">
      <div className="flex  flex-wrap  align-middle justify-evenly items-start p-3 lg:p-6">
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] ">Store</h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light ">
            Find a Store
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light">
            Virtual Store Tour
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Beauty Services
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            List of Brands
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Ultamate Rewards
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Ways to Shop Ulta Beauty
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] ">Guest Services</h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light ">
            Guest Services Center
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light">
            Order Status
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Shipping Policy & Rate
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Returns
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Contact Us
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Your Privacy Rights
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] ">About Us</h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light ">
            Our Company
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light">
            Investor Relations
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Affiliates
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Site Map
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Supply Chain
          </p>
          <p className="text-sm font-medium  text-[#303030] font-circular-std-Light">
            Transparency
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] ">Services</h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light ">
            Gift Cards
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light">
            Mobile App
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#222d3a] ">
            Ultamate Rewards Credit Card
          </h3>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light ">
            Learn More & Apply
          </p>
          <p className="text-sm font-medium text-[#303030] font-circular-std-Light">
            Manage Account
          </p>
          <div className="w-8 h-8">
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
