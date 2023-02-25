import React from 'react'
import Image from "next/image";
import UlltaImg from "../../assets/ultamateimg.webp";
const Ultamate = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-auto mt-8 bg-[#f6f6f6] pt-2 lg:pt-4 px-3 lg:px-6 mr-2 lg:mr-5 ">
        <div className="py-10 lg:py-20 px-14 lg:px-28  flex lg:flex-row flex-col items-center justify-between ">
          <div className=" w-96 lg:w-[418px] h-auto  ">
            <Image
              src={UlltaImg}
              alt="todaydeal1"
              className="h-auto max-w-[100%] object-fill "
            />
          </div>
          <div className="flex flex-col h-auto w-72 lg:w-96">
            {/* <h4 className="font-circular-std-Black font-medium text-xs">
              MEMBER LOVE
            </h4> */}
            <h3 className="font-circular-std-Black font-medium text-2xl lg:text-3xl">
              You Spend. you earn
            </h3>
            <p className="mb-2 lg:mb-4 font-circular-std-Light font-light text-xs lg:text-sm">
              Ultamate rewards, sign in or join to to earn points with every
              purchase
            </p>
            <div className="flex justify-start items-center mt-3 lg:mt-6">
              <div className="bg-black text-white font-circular-std-medium text-xs mr-4 lg:mr-8  py-2 lg:py-3 px-4 lg:px-5 hover:scale-110 transition duration-200">
                SIGN IN
              </div>
              <div>
                <h4 className="lg:w-20 w-16 relative group">
                  <span className="font-circular-std-medium text-xs lg:text-sm font-light pb-2 lg:pb-3">
                    Get the gift
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

export default Ultamate