"use client";

import React, { useEffect, useState } from "react";
import NoData from "../../assets/NoData.png";
import Image from "next/image";
import Datepicker from "react-tailwindcss-datepicker";
import { PiChartLineDownFill, PiChartLineUpBold } from "react-icons/pi";
import Pagination from "@/reusables/Pagination";

const PriceHistory = () => {
  const [priceHistory, setPriceHistory] = useState();

  const [config, setConfig] = useState({
    pageSize: 10,
    symbol: "HRL",
    page: 1,
    totalPage: null,
  });
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const getPriceHistoryInfo = async () => {
    try {
      const response = await fetch(
        `https://arthakendra.com/data/api/v1/price-history?pageSize=${
          config.pageSize
        }&symbol=${config.symbol}&page=${config.page}${
          value.startDate ? "&from=" + value.startDate : ""
        }${value.endDate ? "&to=" + value.endDate : ""}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setPriceHistory(jsonData.data.content);
      setConfig((prevConfig) => ({
        ...prevConfig,
        totalPage: jsonData.data.totalItems,
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPriceHistoryInfo();
  }, []);

  useEffect(() => {
    getPriceHistoryInfo();
  }, [config]);

  const paginate = (pageNumber) =>
    setConfig((prevConfig) => ({
      ...prevConfig,
      page: pageNumber,
    }));

  console.log("COnfig", config);
  return (
    <>
      <div className="p-1 mb-1 text-gray-600 dark:text-slate-300 font-semibold text-lg">
        Price History
      </div>
      <div class="flex md:flex-row flex-col md:items-center items-start items-start h-fit w-full border-[3px] border-white dark:border-slate-900 justify-between rounded-t-2xl bg-white dark:bg-slate-900 px-4 pt-4 shadow-2xl shadow-gray-100  dark:shadow-none">
        <div className="flex flex-col">
          <div className="text-sm text-gray-500">Select a data range</div>
          <div className="border border-gray-400 rounded w-[300px]">
            <Datepicker
              value={value}
              onChange={handleValueChange}
              showShortcuts={true}
              popperProps={{
                positionFixed: true // use this to make the popper position: fixed
              }}
            />
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500">Row Per Page</div>
          <select
            id="small"
            onChange={(e) => {
              setConfig((prevConfig) => ({
                ...prevConfig,
                pageSize: e.target.value,
              }));
            }}
            value={config.pageSize}
            class="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>
      <div class="relative overflow-x-auto border-[3px] rounded-b-lg border-white dark:border-slate-900">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-slate-900 dark:bg-gray-700 dark:text-gray-400">
            <tr role="row">
              <th scope="col" class="px-6 py-1">
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Date
                </div>
              </th>
              <th scope="col" class="px-6 py-1">
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  High
                </div>
              </th>
              <th scope="col" class="px-6 py-1">
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Low
                </div>
              </th>
              <th scope="col" class="px-6 py-1">
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Open
                </div>
              </th>
              <th scope="col" class="px-6 py-1">
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Close
                </div>
              </th>
              <th scope="col" class="px-6 py-1">
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Volume
                </div>
              </th>
              <th scope="col" class="px-6 py-1">
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Change
                </div>
              </th>
              <th scope="col" class="px-6 py-1">
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  % Change
                </div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" class="px-4">
            {priceHistory?.length === 0 ? (
              <tr>
                <td colSpan={"8"}>
                  <Image
                    src={NoData}
                    style={{ width: "auto", height: "150px", margin: "auto" }}
                  />
                  <div className="font-medium text-gray-900 mx-auto text-center">
                    No Data Available
                  </div>
                </td>
              </tr>
            ) : (
              priceHistory?.map((item) => (
                <tr role="row">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <p class="text-sm font-medium text-navy-700 dark:text-white">
                        {item.date}
                      </p>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-md font-medium text-gray-600 dark:text-white">
                      {item.high}
                    </p>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-md font-medium text-gray-600 dark:text-white">
                      {item.low}
                    </p>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-md font-medium text-gray-600 dark:text-white">
                      {item.open}
                    </p>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-md font-medium text-gray-600 dark:text-white">
                      {item.close}
                    </p>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-md font-medium text-gray-600 dark:text-white">
                      {item.volume}
                    </p>
                  </td>
                  <td class="px-6 py-4">
                    <div className="flex gap-2 items-center">
                      {item.change < 0 ? (
                        <>
                          <div className="text-red-500">{item.change} </div>
                          <PiChartLineDownFill className="text-red-500" />
                        </>
                      ) : item.change > 0 ? (
                        <>
                          <div className="text-green-500">{item.change} </div>
                          <PiChartLineUpBold className="text-green-500" />
                        </>
                      ) : null}
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div className="flex gap-2 items-center">
                      {item.changePercent < 0 ? (
                        <>
                          <div className="text-red-500">
                            {item.changePercent}{" "}
                          </div>
                          <PiChartLineDownFill className="text-red-500" />
                        </>
                      ) : item.changePercent > 0 ? (
                        <>
                          <div className="text-green-500">
                            {item.changePercent}{" "}
                          </div>
                          <PiChartLineUpBold className="text-green-500" />
                        </>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        postsPerPage={config.pageSize}
        totalPosts={config.totalPage}
        paginate={paginate}
        currentSelected={config.page}
      />
    </>
  );
};

export default PriceHistory;
