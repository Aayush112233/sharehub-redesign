"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import "../css/Marquee.css";
import { useTheme } from "next-themes";
const StockMarquee = ({data}) => {
  
  const { theme, setTheme } = useTheme();


  const IconStatus = (diff) => {
    if (diff > 0) {
      return <IoIosArrowUp color="green" style={{ marginLeft: "5px" }} />;
    } else {
      return <IoIosArrowDown color="red" style={{ marginLeft: "5px" }} />;
    }
  };
  return (
    <>
      <div style={{ width: "99%" }} className="bg-gray-100 dark:bg-gray-900">
        <Marquee gradient gradientColor={theme === 'dark'?"#111827":"#f1f5f9"} pauseOnHover style={{ overflowX: "hidden" }}>
          <div className="flex gap-3">
            {data?.map((item, index) => (
              <>
                <div className="relative  py-3 sm:max-w-xl sm:mx-auto">
                  <button className="group cursor-pointer relative flex items-center bg-white dark:bg-slate-800 hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                    <p className="text-sm text-gray-600 dark:text-slate-300 ">
                      {item.symbol} {item.lastTradedPrice} &#40;{" "}
                      {(item.openPrice - item.lastTradedPrice).toFixed(2)} &#41;
                    </p>
                    {IconStatus(item.openPrice - item.lastTradedPrice)}
                   
                  </button>
                </div>
              </>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default StockMarquee;
