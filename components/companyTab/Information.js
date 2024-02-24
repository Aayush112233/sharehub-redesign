"use client";
import React, { useEffect, useState } from "react";
import CompanyStockCharts from "../Charts/CompanyStockChart";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

const Information = () => {
  const [todayInfo, setTodayInfo] = useState({});
  const [generalInfo, setGeneralInfo] = useState({});
  const [performanceValue, setPerformanceValue] = useState({});

  const getTodayInfo = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/stock-price/todays-price/HRL"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setTodayInfo(jsonData.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getGeneralInfo = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/security/general-info/HRL"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setGeneralInfo(jsonData.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPerformanceValue = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/fundamental/performance-values/HRL"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setPerformanceValue(jsonData.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodayInfo();
    getGeneralInfo();
    getPerformanceValue();
  }, []);

  const checkSign = (number) => {
    if (number > 0) {
      return true;
    } else if (number < 0) {
      return false;
    }
  };

  const formatNumber = (number) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formattedDateTime = (item) => {
    const date = new Date(item);
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return formattedDate;
  };

  return (
    <>
      <div className="flex flex-wrap">
        {" "}
        <div className="w-full relative items-center lg:w-6/12 xl:w-1/5 p-2">
          <div
            className={`${
              checkSign(todayInfo.ltp) ? "bg-green-100" : "bg-red-100"
            } dark:bg-slate-900 shadow-lg rounded-lg p-4 space-y-4`}
          >
            <div className="flex justify-between">
              {checkSign(todayInfo.ltp) ? (
                <BsGraphUpArrow fontSize={"40px"} color="green" />
              ) : (
                <BsGraphDownArrow fontSize={"40px"} color="red" />
              )}
              <div>
                <div className="text-gray-600 dark:text-slate-300 text-md font-semibold text-end">
                  LTP
                </div>
                <div className=" w-full text-gray-600 dark:text-slate-300 text-xs text-end">
                  {todayInfo.ltp}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative items-center lg:w-6/12 xl:w-1/5 p-2">
          <div
            className={`${
              checkSign(todayInfo.change) ? "bg-green-100" : "bg-red-100"
            } dark:bg-slate-900 shadow-lg rounded-lg p-4 space-y-4`}
          >
            <div className="flex justify-between">
              {checkSign(todayInfo.change) ? (
                <BsGraphUpArrow fontSize={"40px"} color="green" />
              ) : (
                <BsGraphDownArrow fontSize={"40px"} color="red" />
              )}
              <div>
                <div className="text-gray-600 dark:text-slate-300 text-md font-semibold text-end">
                  Change
                </div>
                <div className=" w-full text-gray-600 dark:text-slate-300 text-xs text-end">
                  {todayInfo.change}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative items-center lg:w-6/12 xl:w-1/5 p-2">
          <div
            className={`${
              checkSign(todayInfo.changePercent) ? "bg-green-100" : "bg-red-100"
            } dark:bg-slate-900 shadow-lg rounded-lg p-4 space-y-4`}
          >
            <div className="flex justify-between">
              {checkSign(todayInfo.changePercent) ? (
                <BsGraphUpArrow fontSize={"40px"} color="green" />
              ) : (
                <BsGraphDownArrow fontSize={"40px"} color="red" />
              )}
              <div>
                <div className="text-gray-600 dark:text-slate-300 text-md font-semibold text-end">
                  &#40;%&#41; Change
                </div>
                <div className=" w-full text-gray-600 dark:text-slate-300 text-xs text-end">
                  {todayInfo.changePercent}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative items-center lg:w-6/12 xl:w-1/5 p-2">
          <div
            className={`${
              checkSign(todayInfo.lowPrice) ? "bg-green-100" : "bg-red-100"
            } dark:bg-slate-900 shadow-lg rounded-lg p-4 space-y-4`}
          >
            <div className="flex justify-between">
              {checkSign(todayInfo.lowPrice) ? (
                <BsGraphUpArrow fontSize={"40px"} color="green" />
              ) : (
                <BsGraphDownArrow fontSize={"40px"} color="red" />
              )}
              <div>
                <div className="text-gray-600 dark:text-slate-300 text-md font-semibold text-end">
                  Low
                </div>
                <div className=" w-full text-gray-600 dark:text-slate-300 text-xs text-end">
                  {todayInfo.lowPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative items-center lg:w-6/12 xl:w-1/5 p-2">
          <div
            className={`${
              checkSign(todayInfo.highPrice) ? "bg-green-100" : "bg-red-100"
            } dark:bg-slate-900 shadow-lg rounded-lg p-4 space-y-4`}
          >
            <div className="flex justify-between">
              {checkSign(todayInfo.highPrice) ? (
                <BsGraphUpArrow fontSize={"40px"} color="green" />
              ) : (
                <BsGraphDownArrow fontSize={"40px"} color="red" />
              )}
              <div>
                <div className="text-gray-600 dark:text-slate-300 text-md font-semibold text-end">
                  High
                </div>
                <div className=" w-full text-gray-600 dark:text-slate-300 text-xs text-end">
                  {todayInfo.highPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="p-3 grid-cols-12 rounded bg-white dark:bg-slate-800 md:col-span-8 col-span-12">
          <CompanyStockCharts />
        </div>
        <div className="p-3 grid-cols-12 rounded bg-white dark:bg-slate-800 md:col-span-4 col-span-12">
          <div className=" mb-2 text-gray-600 dark:text-slate-300 font-semibold text-lg">
            Summary
          </div>
          <div class="px-2 flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          LTP
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.ltp}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Business Date
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.businessDate}
                        </td>
                      </tr>

                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Open Price
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.openPrice}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          High Price
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.highPrice}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Low Price
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.lowPrice}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Total Traded Quantity
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {formatNumber(todayInfo.totalTradedQuantity)}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Total Traded
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {formatNumber(todayInfo.totalTradedValue)}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Previous Close
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.previousDayClosePrice}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Total Trades
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.totalTrades}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Last Updated
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.lastUpdatedTime}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 grid-cols-12 rounded bg-white dark:bg-slate-800 col-span-12 md:col-span-4">
          <div className="mb-2 text-gray-600 dark:text-slate-300 font-semibold text-lg">
            General Information
          </div>
          <div class="px-2 flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Symbol
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {generalInfo.symbol}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Market Cap
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {formatNumber(generalInfo.marketCap)}
                        </td>
                      </tr>

                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Face Value
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {generalInfo.faceValue}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          52 High
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {generalInfo.fiftyTwoWeekHigh}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          52 Low
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {generalInfo.fiftyTwoWeekLow}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Paid Capital
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {generalInfo.fiftyTwoWeekLow}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Listed Share
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {formatNumber(generalInfo.listedShares)}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Public Share
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {formatNumber(generalInfo.publicShares)}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Promotor
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {formatNumber(generalInfo.promoterShares)}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Listed Date
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {formattedDateTime(generalInfo.listingDate)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 grid-cols-12 rounded bg-white dark:bg-slate-800 col-span-12 md:col-span-5">
          <div className="mb-2 text-gray-600 dark:text-slate-300 font-semibold text-lg">
            Company General Information
          </div>
          <div class="px-2 flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Share Registrar
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          NMB Capital Limited
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Website
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          https://jeevanbikasmf.com/
                        </td>
                      </tr>

                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Email
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          info@jeevanbikasmf.com
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Contact No.
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          21-442662
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Head Office
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Katahari-2, Morang
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Management Head
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Mr. Sanjaya Kumar Mandal
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Promoter Holding
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          67.00%
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Public Holding
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          33.00%
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Promotor
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {todayInfo.totalTrades}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Government Holding
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Foreign Ownership
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 grid-cols-12 rounded bg-white dark:bg-slate-800 col-span-12 md:col-span-3 sticky h-max top-0 ">
          <div className="mb-2 text-gray-600 dark:text-slate-300 font-semibold text-lg ">
            Performance Value
          </div>
          <div class="px-2 flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          1 Year Yield
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {performanceValue.oneYearYield}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          EPS
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {performanceValue.eps}
                        </td>
                      </tr>

                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          Book Value
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {performanceValue.bookValue}
                        </td>
                      </tr>
                      <tr>
                        <td class="py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          PBV
                        </td>
                        <td class="py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {performanceValue.pricePerBookValue}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
