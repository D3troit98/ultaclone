"use client"; // this is a client component  👈🏽
import React, { useState, useRef } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import DealsCart from "./DealsCart";
import TodaydealImage2 from "../../assets/todaydeal2.webp";
import TodaydealImage3 from "../../assets/todaydeal3.webp";
import TodaydealImage1 from "../../assets/todaydeal1.webp";
const DealsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollToNext = () => {
    const container = containerRef.current;
    const nextIndex = activeIndex + 1;
    if (nextIndex < container.children.length) {
      container.children[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveIndex(nextIndex);
    }
  };

  const scrollToPrev = () => {
    const container = containerRef.current;
    const prevIndex = activeIndex - 1;
    if (prevIndex >= 0) {
      container.children[prevIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveIndex(prevIndex);
    }
  };

  return (
    <div className="flex gap-3 lg:gap-7  overflow-scroll scroll-smooth container">
      <div ref={containerRef} className="flex">
        <DealsCart
          activeIndex={activeIndex}
          scrollToPrev={scrollToPrev}
          scrollToNext={scrollToNext}
          imgSrc={TodaydealImage1}
        />
        <DealsCart
          activeIndex={activeIndex}
          scrollToPrev={scrollToPrev}
          scrollToNext={scrollToNext}
          imgSrc={TodaydealImage2}
        />
        <DealsCart
          activeIndex={activeIndex}
          scrollToPrev={scrollToPrev}
          scrollToNext={scrollToNext}
          imgSrc={TodaydealImage3}
        />
      </div>
    </div>
  );
};

export default DealsCarousel;
