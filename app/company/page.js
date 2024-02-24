"use client";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { AiOutlinePercentage, AiOutlineStock } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { SiFigshare } from "react-icons/si";
import { GoHistory } from "react-icons/go";
import { BiAnalyse, BiSpreadsheet } from "react-icons/bi";
import { useEffect, useState } from "react";
import Information from "@/components/companyTab/Information";
import Announcements from "@/components/companyTab/Announcements";
import News from "@/components/companyTab/News";
import Dividends from "@/components/companyTab/Dividends";
import PriceHistory from "@/components/companyTab/PriceHistory";
import RightShares from "@/components/companyTab/RightShares";
import { Dropdown } from "flowbite-react";
import { useTheme } from "next-themes";

export default function Company() {
  const [selectedButton, setSelectedButton] = useState("Information");
  const [currentComponent, setCurrentComponent] = useState(<Information />);
  const { theme, setTheme } = useTheme();

  const buttonList = [
    { name: "Information", icon: <IoIosInformationCircleOutline /> },
    { name: "News", icon: <FaRegNewspaper /> },
    { name: "Announcements", icon: <GrAnnounce /> },
    { name: "Dividends", icon: <AiOutlinePercentage /> },
    { name: "Right Shares", icon: <SiFigshare /> },
    { name: "Price History", icon: <GoHistory /> },
    { name: "Floorsheet", icon: <BiSpreadsheet /> },
    { name: "Broker Analysis", icon: <BiAnalyse /> },
    { name: "Fundamentals", icon: <LiaFileInvoiceDollarSolid /> },
    { name: "Financial Reports", icon: <TbReport /> },
    { name: "Compare Stocks", icon: <AiOutlineStock /> },
  ];

  useEffect(() => {
    ComponentToShow(selectedButton);
  }, [selectedButton]);

  const ComponentToShow = (button) => {
    const components = {
      Information: <Information />,
      News: <News />,
      Announcements: <Announcements />,
      Dividends: <Dividends />,
      "Right Shares": <RightShares />,
      "Price History": <PriceHistory />,
      Floorsheet: <Dividends />,
      "Broker Analysis": <Dividends />,
      Fundamentals: <Dividends />,
      "Financial Reports": <Dividends />,
      "Compare Stocks": <Dividends />,
    };
    console.log(button);
    setCurrentComponent(components[button]);
  };

  return (
    <>
      <main>
        <div className="col-span-12 text-2xl bg-gray-100 dark:bg-slate-900 font-bold p-2 text-gray-600 dark:text-slate-300">
          HRL Himalayan Reinsurance Limited
        </div>
        <div className=" p-2 grid bg-gray-100 dark:bg-slate-900 grid-cols-12 gap-2 ">
          <div className="p-2 rounded md:col-span-2 hidden md:block bg-gray-200 dark:bg-slate-800 ">
            <div class="w-100 h-max sticky top-[0]">
              <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                {buttonList.map((item) => (
                  <li>
                    <a
                      href="#"
                      class={`inline-flex relative items-center px-3 py-2 rounded-lg ${
                        selectedButton === item.name
                          ? "text-white bg-green-900"
                          : "dark:text-white text-black bg-gray-200 dark:bg-slate-800"
                      } active w-full `}
                      aria-current="page"
                      onClick={() => {
                        setSelectedButton(item.name);
                      }}
                    >
                      <div className="mr-2">{item.icon}</div>

                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-2 rounded block col-span-12 md:hidden bg-gray-200 dark:bg-slate-800 ">
            <Dropdown
              label={selectedButton}
              style={
                theme === "dark"
                  ? { color: "white", borderColor: "white" }
                  : { color: "black", borderColor: "gray" }
              }
            >
              {buttonList.map((item) => (
                <Dropdown.Item
                  onClick={() => {
                    setSelectedButton(item.name);
                  }}
                >
                  {item.name}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
          <div className="w-full p-3 rounded md:col-span-10 col-span-12 bg-gray-200 dark:bg-slate-700 mr-3">
            {currentComponent}
          </div>
        </div>
      </main>
    </>
  );
}
