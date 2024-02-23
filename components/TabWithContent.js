"use client";

import React, { useEffect, useState } from "react";
import { PiChartLineDownFill, PiChartLineUpBold } from "react-icons/pi";

export const TabWithContent = () => {
  const [tabIndex, setIndex] = useState(1);
  const [indices, setIndices] = useState([]);
  const [subIndices, setSubIndices] = useState([]);
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await fetch(
          "https://live.nepsesharehub.com/v1/nepselive/index"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setIndices(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await fetch(
          "https://live.nepsesharehub.com/v1/nepselive/sub-index"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setSubIndices(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData1();
    fetchData2();
  }, []);

  return (
    <>
      <div className="font-sans flex h-full items-center justify-center">
        <div className="w-full">
          <div className="mb-4 flex p-2 rounded-lg bg-gray-100 dark:bg-slate-900 shadow-md gap-1">
            <button
              type="button"
              onClick={() => {
                setIndex(1);
              }}
              className={`flex-1 text-md text-gray-600 dark:text-slate-300 pointer-events-auto  p-1  rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                tabIndex === 1 ? "bg-green-900 text-white" : ""
              }`}
            >
              Market Indices
            </button>
            <button
              type="button"
              onClick={() => {
                setIndex(2);
              }}
              className={`flex-1 text-md  text-gray-600 dark:text-slate-300 p-1 pointer-events-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                tabIndex === 2 ? "bg-green-900 text-white" : ""
              }`}
            >
              Sub Market Indices
            </button>
          </div>

          <div
            className={`w-full transition-all duration-300 p-4 rounded-lg shadow-md  shadow-white-500/50 border-l-4 ${
              tabIndex === 1 ? "border-green-900" : "hidden"
            }`}
          >
            <div className="w-full relative overflow-x-auto shadow-md shadow-white-500/50 sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      INDICES
                    </th>
                    <th scope="col" className="px-6 py-3">
                      VALUE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      CHANGE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      % CHANGE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      HIGH
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LOW
                    </th>
                  </tr>
                </thead>
                <tbody className="h-50 overflow-auto">
                  {indices?.map((item, index) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.index}
                      </th>
                      <td className="px-6 py-4">{item.currentValue}</td>
                      <td className="px-6 py-4 ">
                        <div className="flex gap-2 items-center">
                          {item.change < 0 ? (
                            <>
                              <div className="text-red-500">{item.change} </div>
                              <PiChartLineDownFill className="text-red-500" />
                            </>
                          ) : item.change > 0 ? (
                            <>
                              <div className="text-green-500">
                                {item.change}{" "}
                              </div>
                              <PiChartLineUpBold className="text-green-500" />
                            </>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="flex gap-2 items-center">
                          {item.perChange < 0 ? (
                            <>
                              <div className="text-red-500">
                                {item.perChange}{" "}
                              </div>
                              <PiChartLineDownFill className="text-red-500" />
                            </>
                          ) : item.perChange > 0 ? (
                            <>
                              <div className="text-green-500">
                                {item.change}{" "}
                              </div>
                              <PiChartLineUpBold className="text-green-500" />
                            </>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-6 py-4">{item.high ?? "-"}</td>
                      <td className="px-6 py-4">{item.low ?? "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            className={`transition-all duration-300 p-4 rounded-lg shadow-md border-l-4 ${
              tabIndex === 2 ? "border-green-900" : "hidden"
            }`}
          >
            <div className="w-full relative h-[400px] overflow-auto shadow-md sm:rounded-lg">
              <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      INDICES
                    </th>
                    <th scope="col" className="px-6 py-3">
                      VALUE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      CHANGE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      % CHANGE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      HIGH
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LOW
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subIndices?.map((item, index) => (
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.index}
                      </th>
                      <td className="px-6 py-4">{item.currentValue}</td>
                      <td className="px-6 py-4 ">
                        <div className="flex gap-2 items-center">
                          {item.change < 0 ? (
                            <>
                              <div className="text-red-500">{item.change} </div>
                              <PiChartLineDownFill className="text-red-500" />
                            </>
                          ) : item.change > 0 ? (
                            <>
                              <div className="text-green-500">
                                {item.change}{" "}
                              </div>
                              <PiChartLineUpBold className="text-green-500" />
                            </>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 items-center">
                          {item.perChange < 0 ? (
                            <>
                              <div className="text-red-500">
                                {item.perChange}{" "}
                              </div>
                              <PiChartLineDownFill className="text-red-500" />
                            </>
                          ) : item.perChange > 0 ? (
                            <>
                              <div className="text-green-500">
                                {item.perChange}{" "}
                              </div>
                              <PiChartLineUpBold className="text-green-500" />
                            </>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-6 py-4">{item.high ?? "-"}</td>
                      <td className="px-6 py-4">{item.low ?? "-"}</td>
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
