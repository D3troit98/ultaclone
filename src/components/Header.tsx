"use client"; // this is a client component

import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineShopping,AiOutlineSearch} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Logo from '../../assets/01flyout_ub_logo.png'

const Header = () => {

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <div className="flex justify-between items-center w-full h-16 lg:px-24 px-20 py-2 lg:py-4 bg-white border-b  border-b-gray-200">
      <div className="flex items-center gap-5 h-full ">
        <AiOutlineMenu className="h-full cursor-pointer w-full" />
        <div className="w-1 h-full   border-r border-b-gray-200" />
        <Image
          src={Logo}
          alt="logo"
          className="h-full   orange-filter"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <div
          className={`lg:flex hidden items-center rounded-full h-8 px-3 bg-gray-200 w-64 border-2 border-transparent ${
            focused ? "border-cyan-400" : ""
          }`}
        >
          <AiOutlineSearch className="h-6 w-6 text-gray-500" />
          <input
            type="search"
            placeholder="Search"
            className="px-4 outline-none bg-gray-200 "
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div className=" lg:flex hidden items-center h-full gap-4">
        <Link href="/" className="mr-5">
          <p className="font-circular-std-Light text-xs">Find a Store</p>
        </Link>
        <div className="w-1 h-full  border-r border-b-gray-200" />
        <Link href="/">
          <p className="font-circular-std-Light text-xs">Email & Text Signup</p>
        </Link>
        <div className="w-1 h-full   border-r border-b-gray-200" />
        <Link href="/">
          <p className="font-circular-std-Light text-xs">Gift Cards</p>
        </Link>
        <div className="flex items-center ml-5">
          <p className="font-circular-std-Light text-xs ">Rewards</p>
          <RiArrowDropDownLine className="text-xs" />
        </div>
        <div>
          <AiOutlineShopping className="text-xl " />
        </div>
      </div>
    </div>
  );
};

export default Header;
