import React from 'react'
import Image from "next/image";
import Evergreen from "../../assets/evergreen_corpcommitments_diversity.jpeg";
import Evergreen2 from "../../assets/hp_wk4222_corpcommittments_waystoshop.webp";
import Evergreen3 from "../../assets/corp-commitments_responsibilities_april2021_compact-card.webp";

const Commitments = () => {
  return (
    <div className="flex flex-col bg-[#ffffff] w-full px-10  lg:px-20  pt-10 lg:pt-20">
      <div className="flex justify-start items-center ">
        <h1 className="font-circular-std-medium text-xl lg:text-2xl font-medium text-start">
          Our Corperate commitments
        </h1>
      </div>

      <div className="flex flex-wrap justify-evenly items-start mt-4 lg:mt-8">
        <div className="flex justify-center items-center p-4 ">
          <div className=" w-auto h-auto mr-3 lg:mr-6 ">
            <Image
              src={Evergreen}
              alt="todaydeal1"
              className="h-auto max-w-[100%] object-fill "
            />
          </div>
          <div className="flex flex-col h-auto w-60 lg:w-72">
            <h3 className="text-base font-circular-std-medium font-thin ">
              Diversity, Equity & Incusion
            </h3>
            <p className="lg:mb-4 mb-2 font-circular-std-Light font-light text-sm">
              We&apos;re committed to creating a more inclusive world{" "}
            </p>
            <div className="flex justify-start items-center mt-3">
              <div>
                <h4 className="w-[85px] relative group">
                  <span className="font-circular-std-medium text-sm font-light pb-3">
                    Learn more
                  </span>
                  <span className="absolute  bottom-0 left-0 w-full h-[1px] bg-black   group-hover:w-0"></span>
                  <span className="absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700  group-hover:w-full"></span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 ">
          <div className=" w-auto h-auto mr-3 lg:mr-6 ">
            <Image
              src={Evergreen2}
              alt="todaydeal1"
              className="h-auto max-w-[100%] object-fill "
            />
          </div>
          <div className="flex flex-col h-auto w-60 lg:w-72">
            <h3 className="text-base font-circular-std-medium font-thin ">
              Ways to shop
            </h3>
            <p className="lg:mb-4 mb-2 font-circular-std-Light font-light text-sm">
              Our guests are at the heart of all we do, including choices in how
              you shop.
            </p>
            <div className="flex justify-start items-center mt-3">
              <div>
                <h4 className="w-[85px] relative group">
                  <span className="font-circular-std-medium text-sm font-light pb-3">
                    Learn more
                  </span>
                  <span className="absolute  bottom-0 left-0 w-full h-[1px] bg-black   group-hover:w-0"></span>
                  <span className="absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700  group-hover:w-full"></span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 ">
          <div className=" w-auto h-auto mr-3 lg:mr-6 ">
            <Image
              src={Evergreen3}
              alt="todaydeal1"
              className="h-auto max-w-[100%] object-fill "
            />
          </div>
          <div className="flex flex-col h-auto w-60 lg:w-72">
            <h3 className="text-base font-circular-std-medium font-thin ">
              Corporate Responsibility
            </h3>
            <p className="lg:mb-4 mb-2 font-circular-std-Light font-light text-sm">
              We use the power of beauty to enhance the world around us.
            </p>
            <div className="flex justify-start items-center mt-3">
              <div>
                <h4 className="w-[85px] relative group">
                  <span className="font-circular-std-medium text-sm font-light pb-3">
                    Learn more
                  </span>
                  <span className="absolute  bottom-0 left-0 w-full h-[1px] bg-black   group-hover:w-0"></span>
                  <span className="absolute  bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-700  group-hover:w-full"></span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitments