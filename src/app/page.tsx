import Image from 'next/image'
import styles from "./page.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import LipCollection from "@/components/LipCollection";
import TodaysDeals from "@/components/TodaysDeals";
import AlltheLove from "@/components/AlltheLove";
import WhatNew from "@/components/WhatNew";
import Ultamate from "@/components/Ultamate";
import ShopbyCategory from "@/components/ShopbyCategory";
import BeautyServices from "@/components/BeautyServices";
import Commitments from "@/components/Commitments";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Banner />
      <LipCollection />
      <TodaysDeals />
      <AlltheLove />
      <WhatNew />
      <Ultamate />
      <ShopbyCategory />
      <BeautyServices />
      <Commitments />
      <Footer />
    </div>
  );
}
