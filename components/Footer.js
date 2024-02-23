import Image from "next/image";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsPhoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa6";
import { IoLocationOutline, IoMailSharp } from "react-icons/io5";
import img from "../assets/badge.png";
import img2 from "../assets/badge2.png";
const Footer = () => {
  return (
    <>
      <div class="bg-green-900 flex justify-between">
        <div class="w-full flex flex-col px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-5 sm:grid-cols-2 flex justify-between">
          <div class="p-5 flex flex-col items-start md:items-center">
            <h3 class="flex flex-col items-start md:items-center font-bold text-xl text-gray-300 dark:text-slate-300 text-center">
              Softshala Pvt.Ltd
              <Image
                width={100}
                height={100}
                src="https://arthakendra.com/sharehub/assets/sharehub-yIE25QB_.svg"
              />
            </h3>
            <div className="w-[100px] flex justify-around">
              <a
                href="/#"
                className="cursor-pointer flex items-center text-gray-300 dark:text-slate-300"
              >
                <FaInstagram size={"20px"} />
              </a>
              <a href="/#" className="text-gray-300 dark:text-slate-300">
                <FaFacebook size={"20px"} />
              </a>
              <a href="/#" className="text-gray-300 dark:text-slate-300">
                <FaYoutube size={"20px"} />
              </a>
            </div>
            <div className="flex w-[140px] items-center mt-5 border border-gray-200 rounded-md px-2 py-1">
              <div>
                <Image width={20} height={20} src={img} className="mr-3" />
              </div>
              <div>
                <p className="text-xs text-gray-300 dark:text-slate-300 height-3">
                  GET IT ON
                </p>
                <p className="text-sm font-bold text-gray-300 dark:text-slate-300">
                  Google Play
                </p>
              </div>
            </div>
            <div className="flex w-[140px] items-center mt-5 border border-gray-200 rounded-md px-2 py-1">
              <div>
                <Image width={20} height={20} src={img2} className="mr-2" />
              </div>
              <div>
                <p className="text-xs text-gray-300 dark:text-slate-300">
                  Available on the
                </p>
                <p className="text-sm font-bold text-gray-300 dark:text-slate-300">
                  App Store
                </p>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="text-sm uppercase text-gray-300 dark:text-slate-300 font-bold">
              Product
            </div>
            <a class="my-2 block  text-gray-300 dark:text-slate-300" href="/#">
              Live Market{" "}
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-2 block text-gray-300 dark:text-slate-300" href="/#">
              Market Depth{" "}
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-2 block text-gray-300 dark:text-slate-300" href="/#">
              Floorsheet
            </a>
            <a class="my-2 block text-gray-300 dark:text-slate-300" href="/#">
              Top Gainers
            </a>
            <a class="my-2 block text-gray-300 dark:text-slate-300" href="/#">
              Top Losers
            </a>
          </div>
          <div class="p-5">
            <div class="text-sm uppercase text-gray-300 dark:text-slate-300 font-bold">
              Market
            </div>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              IPO/FPO{" "}
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Right Share{" "}
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Debentures{" "}
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Mutual Funds{" "}
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5">
            <div class="text-sm uppercase text-gray-300 dark:text-slate-300 font-bold">
              Info
            </div>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Write for us
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Broker List
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Merchant Bankers
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              IPO Result
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Existing Issues
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Ongoing Auctions
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              Upcomming Issues
              <span class="text-gray-300 dark:text-slate-300 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5">
            <div class="text-sm uppercase text-gray-300 dark:text-slate-300 font-bold">
              Contact Us
            </div>
            <a class="my-3 block text-gray-300 dark:text-slate-300" href="/#">
              <p className="text-gray-300 mb-4 dark:text-slate-300 flex items-center gap-3">
                <FaPhone fontSize={"25px"} /> +977 9865231470 , +977 9801234567
              </p>
              <p className="text-gray-300 mb-4 dark:text-slate-300 flex items-center gap-3">
                <IoMailSharp fontSize={"25px"} /> softshala@info.com
              </p>
              <p className="text-gray-300 dark:text-slate-300 flex items-center gap-3">
                <IoLocationOutline fontSize={"25px"} /> Tinkune - 07, Kathmandu
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
