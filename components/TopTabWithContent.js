"use client";

import React, { useEffect, useState } from "react";
import { PiChartLineDownFill, PiChartLineUpBold } from "react-icons/pi";

export const TopTabWithContent = () => {
  const [tabIndex, setIndex] = useState(1);
  const [topTurnOver, setTopTurnOver] = useState([]);
  const [topTraderShares, setTopTraderShares] = useState([]);
  const [topTransaction, setTopTransaction] = useState([]);
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);

  useEffect(() => {
    getTurnOver();
    getTraderShares();
    getTransaction();
    getGainers();
    getLosers();
  }, []);

  const getTurnOver = async () => {
    try {
      const response = await fetch(
        "https://live.nepsesharehub.com/v1/nepselive/top-turnover"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setTopTurnOver(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getTraderShares = async () => {
    try {
      const response = await fetch(
        "https://live.nepsesharehub.com/v1/nepselive/top-shares-traded"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setTopTraderShares(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getTransaction = async () => {
    try {
      const response = await fetch(
        "https://live.nepsesharehub.com/v1/nepselive/top-transactions"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setTopTransaction(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getGainers = async () => {
    try {
      const response = await fetch(
        "https://live.nepsesharehub.com/v1/nepselive/top-gainers"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setTopGainers(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getLosers = async () => {
    try {
      const response = await fetch(
        "https://live.nepsesharehub.com/v1/nepselive/top-losers"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setTopLosers(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="font-sans flex w-full h-full items-center">
        <div className="w-full">
          <div className="mb-4 flex p-2 bg-gray-100 dark:bg-slate-900 rounded-lg shadow-md gap-1">
            <button
              type="button"
              onClick={() => {
                setIndex(1);
              }}
              className={`flex-1 text-gray-600 dark:text-slate-300 p-1 text-md pointer-events-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                tabIndex === 1 ? "bg-green-900 text-white" : ""
              }`}
            >
              Top Turnover
            </button>
            <button
              type="button"
              onClick={() => {
                setIndex(2);
              }}
              className={`flex-1 text-gray-600 dark:text-slate-300 text-md pointer-events-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                tabIndex === 2 ? "bg-green-900 text-white" : ""
              }`}
            >
              Top Traded Shares
            </button>
            <button
              type="button"
              onClick={() => {
                setIndex(3);
              }}
              className={`flex-1 text-gray-600 dark:text-slate-300 text-md pointer-events-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                tabIndex === 3 ? "bg-green-900 text-white" : ""
              }`}
            >
              Top Transactions
            </button>
            <button
              type="button"
              onClick={() => {
                setIndex(4);
              }}
              className={`flex-1 text-gray-600 dark:text-slate-300 text-md pointer-events-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                tabIndex === 4 ? "bg-green-900 text-white" : ""
              }`}
            >
              Top Gainers
            </button>
            <button
              type="button"
              onClick={() => {
                setIndex(5);
              }}
              className={`flex-1 text-gray-600 dark:text-slate-300 text-md pointer-events-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                tabIndex === 5 ? "bg-green-900 text-white" : ""
              }`}
            >
              Top Losers
            </button>
          </div>

          <div
            className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
              tabIndex === 1 ? "border-green-900" : "hidden"
            }`}
          >
            <div className="w-full relative h-[400px] overflow-auto shadow-md sm:rounded-lg">
              <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Symbol
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Turnover
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LTP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topTurnOver?.map((item, index) => (
                    <tr className="odd:bg-gray-100 dark:bg-slate-900 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.symbol}
                      </th>
                      <td className="px-6 py-4">{item.turnover}</td>
                      <td className="px-6 py-4">{item.closingPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
              tabIndex === 2 ? "border-green-900" : "hidden"
            }`}
          >
            <div className="w-full relative h-[400px] overflow-auto shadow-md sm:rounded-lg">
              <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Symbol
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Top Traded
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LTP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topTraderShares?.map((item, index) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.symbol}
                      </th>
                      <td className="px-6 py-4">{item.shareTraded}</td>
                      <td className="px-6 py-4">{item.closingPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
              tabIndex === 3 ? "border-green-900" : "hidden"
            }`}
          >
            <div className="w-full relative h-[400px] overflow-auto shadow-md sm:rounded-lg">
              <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Symbol
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Transactions
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LTP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topTransaction?.map((item, index) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.symbol}
                      </th>
                      <td className="px-6 py-4">{item.totalTrades}</td>
                      <td className="px-6 py-4">{item.lastTradedPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
              tabIndex === 4 ? "border-green-900" : "hidden"
            }`}
          >
            <div className="w-full relative h-[400px] overflow-auto shadow-md sm:rounded-lg">
              <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Symbol
                    </th>
                    <th scope="col" className="px-6 py-3">
                      CH
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Change&#40;%&#41;
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LTP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topGainers?.map((item, index) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.symbol}
                      </th>
                      <td className="px-6 py-4">
                        <div className="text-green-500 flex gap-2 items-center">
                          {" "}
                          {item.pointChange?.toFixed(2)}{" "}
                          <PiChartLineUpBold className="text-green-500" />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-green-500 flex gap-2 items-center">
                          {" "}
                          {Math.round(item.percentageChange)}.00
                          <PiChartLineUpBold className="text-green-500" />
                        </div>
                      </td>
                      <td className="px-6 py-4">{item.ltp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className={`transition-all duration-300 bg-gray-100 dark:bg-slate-900 p-4 rounded-lg shadow-md border-l-4 ${
              tabIndex === 5 ? "border-green-900" : "hidden"
            }`}
          >
            <div className="w-full relative h-[400px] overflow-auto shadow-md sm:rounded-lg">
              <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Symbol
                    </th>
                    <th scope="col" className="px-6 py-3">
                      CH
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Change&#40;%&#41;
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LTP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topLosers?.map((item, index) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.symbol}
                      </th>
                      <td className="px-6 py-4">
                        <div className="text-red-500 flex gap-2 items-center">
                          {" "}
                          {item.pointChange?.toFixed(2)}{" "}
                          <PiChartLineUpBold className="text-red-500" />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-red-500 flex gap-2 items-center">
                          {" "}
                          {Math.round(item.percentageChange)}.00
                          <PiChartLineUpBold className="text-red-500" />
                        </div>
                      </td>
                      <td className="px-6 py-4">{item.ltp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
