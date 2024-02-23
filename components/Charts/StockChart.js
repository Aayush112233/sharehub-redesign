"use client";
import React, { useState, useEffect, useRef } from "react";
import LineChart from "echarts-for-react";

const StockCharts = () => {
  const [info, setInfo] = useState([]);
  const [dropValue, setDropValue] = useState("value");
  const [duration, setDuration] = useState("1D");
  const [graphData, setGraphData] = useState([]);
  const [mainGraphData, setMainGraphData] = useState([]);
  const [largest, setLargest] = useState([]);
  const [smallest, setSmallest] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    if (duration === "1D") {
      refineData(info.graphData);
    } else {
      getGraphData(duration);
    }
  }, [duration]);

  const getGraphData = async (item) => {
    try {
      const response = await fetch(
        `https://arthakendra.com/data/api/v1/price-history/graph/nepse?time=${item}&queryKey=nepseIndexChart`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setMainGraphData(jsonData.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const findLargestAndSmallest = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return { largest: undefined, smallest: undefined };
    }

    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      } else if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }

    setSmallest(smallest);
    setLargest(largest);
  };

  const refineData = async (data) => {
    const refineArray = [];

    await data?.forEach((item) => refineArray.push(item[1]));

    setGraphData(refineArray);
    findLargestAndSmallest(refineArray);
  };

  const getInfo = async () => {
    try {
      const response = await fetch(
        "https://live.nepsesharehub.com/v1/nepselive/nepse-widget-data"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setInfo(jsonData);
      refineData(jsonData.graphData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const extractValues = (criteria) => {
    var values = [];
    for (var i = 0; i < mainGraphData?.length; i++) {
      values.push(mainGraphData[i][criteria]);
    }
    return values;
  };

  // Function to handle button click
  const handleButtonClick = (criteria) => {
    var values = extractValues(criteria);
    setGraphData(values);
    findLargestAndSmallest(values);
  };

  useEffect(() => {
    console.log(dropValue);
    if (dropValue === "value") {
      handleButtonClick("value");
    } else if (dropValue === "turnover") {
      handleButtonClick("turnover");
    } else if (dropValue === "sharesTraded") {
      handleButtonClick("sharesTraded");
    }
    // handleButtonClick("date");
  }, [dropValue, mainGraphData]);

  const options = {
    aspectRatio: 1,
    tooltip: {
      trigger: "axis",
    },
    grid: { top: 20, right: 60, bottom: 120, left: 20 },
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: "value",  
      position: "right",
      max: largest,
      min: smallest,
      axisLabel: {
        inside: false,
        margin: 10,
        fontSize: 10,
      },
    },
    series: [
      {
        type: "line",
        areaStyle: {
          color: "rgb(51,102,153,0.5)",
        },
        lineStyle: {
          width: 2,
          color: "rgb(51,102,153,1)",
        },
        top: 0, left: 0,
        right: 0, bottom: 0,
        boundingCoords: [[-180, 90], [180, -90]],
        data: graphData,
      },
    ],
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

  const durationButtons = ["1D", "1W", "1M", "6M", "1Y", "5Y", "All"];

  return (
    <>
      <div className="w-full h-[400px]">
        <div className="w-full flex justify-between items-center">
          <div>
            <div className="text-lg text-gray-600 dark:text-slate-300 font-bold">
              Nepse Index
            </div>
            <div className="text-lg text-red-500">
              {info.nepseValue}
              {info.change}
              {info.percentChange}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-sm text-gray-400 text-end mr-1">
              {formattedDateTime(info.marketTime)}
            </div>
            <div className="text-sm text-gray-400 text-end mr-1">
              {info.turnOver}
            </div>
            {info.isMarketOpen ? (
              <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-green-700 bg-green-100 border border-green-300 ">
                <div class="text-md font-normal leading-none max-w-full flex-initial">
                  Open
                </div>
              </div>
            ) : (
              <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-red-100 bg-red-700 border border-red-700 ">
                <div class="text-md font-normal leading-none max-w-full flex-initial">
                  Closed
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            {durationButtons.map((item) => (
              <button
                type="button"
                name="1D"
                onClick={() => {
                  setDuration(item);
                }}
                class={`px-2 py-1.5 text-sm ${
                  duration === item
                    ? "bg-green-800 text-gray-100"
                    : "dark:text-gray-100 text-gray-700 hover:text-gray-100"
                } font-medium text-center rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:hover:bg-green-700 dark:focus:ring-green-800`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={`relative  ${duration != "1D" ? "flex" : "hidden"}`}>
            <form class="max-w-sm mx-auto">
              <select
                id="countries"
                class="bg-gray-50 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                onChange={(e) => {
                  setDropValue(e.target.value);
                }}
              >
                <option value="value" selected>
                  Value
                </option>
                <option value="turnover">Turnover</option>
                <option value="sharesTraded">Sharetrades</option>
              </select>
            </form>
          </div>
        </div>
        <LineChart
          option={options}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </>
  );
};

export default StockCharts;
