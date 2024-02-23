"use client";

import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utility";
import { IoSearchCircle } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import MobileHamburger from "./MobileHamburger";
import StockMarquee from "./StockMarquee";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const [data, setData] = useState(null);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://live.nepsesharehub.com/v1/nepselive/live-nepse"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div
        className={cn(
          `sticky top-0 z-[10000000] bg-gray-100 dark:bg-gray-900 w-full transition-all`
        )}
      >
        <div className="flex h-[58px] w-full items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <div className="flex flex-row space-x-3 items-center justify-center">
              <div className="relative text-gray-600">
                <input
                  type="search"
                  name="serch"
                  placeholder="Company Name / Symbol / Service"
                  className="bg-white dark:bg-gray-900 text-gray-600 dark:text-slate-300 border-2 border-slate-500 dark:border-slate-800 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                />
                <IoSearchCircle
                  onClick={() => {
                    alert("Hi search");
                  }}
                  fontSize={40}
                  className="absolute right-0 top-0 cursor-pointer text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <button
              className="mr-10 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:inline-block"
              type="button"
            >
              <span className="hidden dark:block">
                <MdOutlineWbSunny
                  onClick={() => {
                    setTheme("light");
                  }}
                  size={"16px"}
                  color="white"
                />
              </span>
              <span className="dark:hidden">
                <FaMoon
                  onClick={() => {
                    setTheme("dark");
                  }}
                  size={"16px"}
                />
              </span>
            </button>
            <button
              className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 dark:text-gray-200 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:inline-block"
              type="button"
            >
              <span>Log In</span>
            </button>
            <button
              className="hidden select-none bg-slate-800 text-slate-900 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:inline-block"
              type="button"
            >
              <span>Sign Up</span>
            </button>
            <MobileHamburger />
          </div>
        </div>
        <StockMarquee data={data} />
      </div>
    </>
  );
};

export default Header;
