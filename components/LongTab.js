"use client";

import InvestingTable from "@/reusables/InvestingTable";
import { Dropdown } from "flowbite-react";
import React, { useState, useEffect } from "react";

const LongTab = () => {
  const [tabIndex, setIndex] = useState(1);

  const [ipo, setIPO] = useState([]);
  const [ipoLocal, setIPOLocal] = useState([]);
  const [ipoFE, setIPOFE] = useState([]);
  const [rightShare, setRightShare] = useState([]);
  const [fpo, setFPO] = useState([]);
  const [mutualFunds, setMutualFund] = useState([]);
  const [debenture, setDeventure] = useState([]);

  const [dropContent, setDropContent] = useState("");

  const getIPO = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/public-offering/?size=10&type=0&for=2"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setIPO(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getIPOLocal = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/public-offering/?size=10&type=0&for=0"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setIPOLocal(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getIPOFE = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/public-offering/?size=10&type=0&for=1"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setIPOFE(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getRightShare = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/public-offering/?size=10&type=2&for=2"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setRightShare(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getFPO = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/public-offering/?size=10&type=1&for=2"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setFPO(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getMutualFunds = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/public-offering/?size=10&type=3&for=2"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setMutualFund(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDeventure = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/public-offering/?size=10&type=4&for=2"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setDeventure(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getIPO();
    getDeventure();
    getFPO();
    getIPOFE();
    getIPOLocal();
    getMutualFunds();
    getRightShare();
  }, []);

  useEffect(() => {
    const getNameByInd = (tabIndex) => {
      const tab = TabContent.find((item) => item.ind === tabIndex);
      return tab ? tab.name : null;
    };
    const name = getNameByInd(tabIndex)
    setDropContent(name)

  }, [tabIndex]);

  const TabContent = [
    {
      name: "IPO",
      ind: 1,
    },
    {
      name: "IPO Local",
      ind: 2,
    },
    {
      name: "IPO Foreign Employees",
      ind: 3,
    },
    {
      name: "Right Share",
      ind: 4,
    },
    {
      name: "FPO",
      ind: 5,
    },
    {
      name: "Mutual Fund",
      ind: 6,
    },
    {
      name: "Debentures",
      ind: 7,
    },
  ];

  return (
    <div className="font-sans flex items-center justify-center">
      <div className="w-full">
        <div className="mb-4  p-2 hidden md:flex rounded-lg bg-gray-100 dark:bg-slate-800 shadow-md gap-1">
          <button
            type="button"
            onClick={() => {
              setIndex(1);
            }}
            className={`flex-1  p-1 pointer-events-auto text-gray-600 dark:text-slate-300 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
              tabIndex === 1 ? "bg-green-900 text-white" : ""
            }`}
          >
            IPO
          </button>
          <button
            type="button"
            onClick={() => {
              setIndex(2);
            }}
            className={`flex-1 p-1 pointer-events-auto text-gray-600 dark:text-slate-300 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
              tabIndex === 2 ? "bg-green-900 text-white" : ""
            }`}
          >
            IPO Local
          </button>
          <button
            type="button"
            onClick={() => {
              setIndex(3);
            }}
            className={`flex-1 p-1 pointer-events-auto text-gray-600 dark:text-slate-300 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
              tabIndex === 3 ? "bg-green-900 text-white" : ""
            }`}
          >
            IPO Foreign Employees
          </button>
          <button
            type="button"
            onClick={() => {
              setIndex(4);
            }}
            className={`flex-1 p-1 pointer-events-auto text-gray-600 dark:text-slate-300 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
              tabIndex === 4 ? "bg-green-900 text-white" : ""
            }`}
          >
            Right Share
          </button>
          <button
            type="button"
            onClick={() => {
              setIndex(5);
            }}
            className={`flex-1 p-1 pointer-events-auto text-gray-600 dark:text-slate-300 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
              tabIndex === 5 ? "bg-green-900 text-white" : ""
            }`}
          >
            FPO
          </button>
          <button
            type="button"
            onClick={() => {
              setIndex(6);
            }}
            className={`flex-1 p-1 pointer-events-auto text-gray-600 dark:text-slate-300 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
              tabIndex === 6 ? "bg-green-900 text-white" : ""
            }`}
          >
            Mutual Fund
          </button>
          <button
            type="button"
            onClick={() => {
              setIndex(7);
            }}
            className={`flex-1 p-1 pointer-events-auto text-gray-600 dark:text-slate-300 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
              tabIndex === 7 ? "bg-green-900 text-white" : ""
            }`}
          >
            Debenture
          </button>
        </div>
        <div className="p-2 rounded block col-span-12 md:hidden bg-gray-200 dark:bg-slate-800 ">
          <Dropdown label={dropContent === "" ? "IPO" : dropContent}>
            {TabContent.map((item) => (
              <Dropdown.Item
                onClick={() => {
                  setIndex(item.ind);
                }}
              >
                {item.name}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </div>

        <div
          className={`w-full transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
            tabIndex === 1 ? "border-green-900" : "hidden"
          }`}
        >
          <InvestingTable data={ipo} />
        </div>

        <div
          className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
            tabIndex === 2 ? "border-green-900" : "hidden"
          }`}
        >
          {" "}
          <InvestingTable data={ipoLocal} />{" "}
        </div>
        <div
          className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
            tabIndex === 3 ? "border-green-900" : "hidden"
          }`}
        >
          {" "}
          <InvestingTable data={ipoFE} />{" "}
        </div>
        <div
          className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
            tabIndex === 4 ? "border-green-900" : "hidden"
          }`}
        >
          {" "}
          <InvestingTable data={rightShare} />{" "}
        </div>
        <div
          className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
            tabIndex === 5 ? "border-green-900" : "hidden"
          }`}
        >
          {" "}
          <InvestingTable data={fpo} />
        </div>
        <div
          className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
            tabIndex === 6 ? "border-green-900" : "hidden"
          }`}
        >
          {" "}
          <InvestingTable data={mutualFunds} />
        </div>
        <div
          className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
            tabIndex === 7 ? "border-green-900" : "hidden"
          }`}
        >
          {" "}
          <InvestingTable data={debenture} />
        </div>
      </div>
    </div>
  );
};

export default LongTab;
