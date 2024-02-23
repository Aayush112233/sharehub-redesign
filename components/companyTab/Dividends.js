"use client";

import React, { useEffect, useState } from "react";
import NoData from "../../assets/NoData.png";
import Image from "next/image";
import Datepicker from "react-tailwindcss-datepicker";

const Dividends = () => {
  const [dividend, setDevidend] = useState();
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const getNewsDividendInfo = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/dividend?pageSize=50&symbol=HRL"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setDevidend(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getNewsDividendInfo();
  }, []);

  return (
    <>
      <div className="p-3 text-gray-600 dark:text-slate-300 mb-2 font-semibold text-lg">
        Dividends History
      </div>
      <div class="flex md:flex-row flex-col h-fit w-full md:items-center items-start justify-between rounded-t-2xl bg-white dark:bg-slate-900 px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100  dark:shadow-none">
        <div className="border border-gray-400 rounded w-[300px]">
          <Datepicker
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
          />
        </div>
        <div>
          <div className="text-sm text-gray-500">Row Per Page</div>
          <select
            id="small"
            class="w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
      <div class="w-full bg-gray-100 dark:bg-slate-800 overflow-x-scroll px-4 md:overflow-x-hidden">
        <table role="table" class="w-full min-w-[500px] min-h-[400px] overflow-auto">
          <thead>
            <tr role="row">
              <th
                colspan="1"
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Fiscal Year
                </div>
              </th>
              <th
                colspan="1"
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Bonus
                </div>
              </th>
              <th
                colspan="1"
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Cash
                </div>
              </th>
              <th
                colspan="1"
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Total
                </div>
              </th>
              <th
                colspan="1"
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Book Close Date
                </div>
              </th>
              <th
                colspan="1"
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Agm Date
                </div>
              </th>
              <th
                colspan="1"
                role="columnheader"
                title="Toggle SortBy"
                style={{ cursor: "pointer" }}
              >
                <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 dark:text-slate-300 sm:text-xs lg:text-xs">
                  Listing Date
                </div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" class="px-4">
            {dividend?.length === 0 ? (
              <tr>
                <td colSpan={"7"}>
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
              <tr role="row">
                <td class="py-3 text-sm" role="cell">
                  <div class="flex items-center gap-2">
                    <div class="h-[30px] w-[30px] rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2244&amp;q=80"
                        class="h-full w-full rounded-full"
                        alt=""
                      />
                    </div>
                    <p class="text-sm font-medium text-navy-700 dark:text-white">
                      @maddison_c21
                    </p>
                  </div>
                </td>
                <td class="py-3 text-sm" role="cell">
                  <p class="text-md font-medium text-gray-600 dark:text-white">
                    9821
                  </p>
                </td>
                <td class="py-3 text-sm" role="cell">
                  <div class="mx-2 flex font-bold">
                    <div class="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                      <div
                        class="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dividends;
