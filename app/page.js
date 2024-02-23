"use client";
import { TabWithContent } from "@/components/TabWithContent";
import { useEffect, useState } from "react";
import turnover from "../assets/turnover.png";
import capital from "../assets/capital.png";
import market from "../assets/market.png";
import scarp from "../assets/scarp.png";
import stock from "../assets/stock.png";
import transaction from "../assets/transaction.png";
import Image from "next/image";
import { TopTabWithContent } from "@/components/TopTabWithContent";
import LongTab from "@/components/LongTab";
import StockCharts from "@/components/Charts/StockChart";
export default function Home() {
  const [news, setNews] = useState([]);
  const [summary, setSummary] = useState([]);
  const [dividend, setDividend] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://arthakendra.com/api/v1/news/sharehub/stock-news?limit=8"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setNews(jsonData.data.content);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
    fetchDividend();
  }, []);

  const fetchDividend = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/data/api/v1/dividend?size=6&pageSize=6"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setDividend(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };

  const images = [turnover, stock, transaction, scarp, capital, market];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://live.nepsesharehub.com/v1/nepselive/market-summary"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setSummary(jsonData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once after initial render

  // Format date and time
  const formattedDateTime = currentTime.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const handleScroll = (e) => {
    console.log(e.target);
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      alert("i am bottom");
    }
  };
  return (
    <main>
      <div className="grid bg-gray-100 dark:bg-slate-900 grid-cols-12 gap-1">
        <div className="p-3 grid-cols-12 rounded  md:col-span-8 col-span-12">
          <div className="grid grid-cols-12 gap-3">
            <div className="p-3 grid-cols-12 rounded bg-white dark:bg-slate-800 col-span-12">
              <StockCharts />
            </div>
            <div className="grid-cols-12 block md:hidden rounded bg-white dark:bg-slate-800 col-span-12">
              <div className="flex w-full items-center justify-between">
                <div className="p-3 text-gray-600 dark:text-slate-300 mb-2 font-semibold text-lg">
                  Summary
                </div>
                <div className="text-sm text-gray-400 mr-2 ">
                  {formattedDateTime}
                </div>
              </div>

              <div className="flex flex-wrap">
                {summary?.map((itm, index) => (
                  <div
                    className="w-full relative items-center lg:w-6/12 xl:w-6/12 p-2"
                    key={index}
                  >
                    <div className="bg-white dark:bg-slate-900 shadow-lg rounded-lg p-4 space-y-4">
                      <div>
                        <div className=" w-full text-gray-600 dark:text-slate-300 text-xs text-end">
                          {itm.detail}
                        </div>
                        <div className="text-gray-600 dark:text-slate-300 text-md font-semibold text-end">
                          {itm.value}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[-5%] left-[1%]">
                      <div className="text-white p-2 text-center inline-flex items-center justify-center w-8 h-8 shadow-lg rounded-full bg-green-900">
                        <Image src={images[index]} alt={`Image ${index}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 grid-cols-12 rounded bg-white dark:bg-slate-800 col-span-12">
              <TabWithContent />
            </div>
            <div className="p-3 grid-cols-12 rounded bg-white dark:bg-slate-800 col-span-12">
              <TopTabWithContent />
            </div>
          </div>
        </div>

        <div className="p-3 text-center rounded md:col-span-4 col-span-12 ">
          <div className="grid-cols-12 hidden md:block rounded bg-white dark:bg-slate-800 col-span-12">
            <div className="flex w-full items-center justify-between">
              <div className="p-3 text-gray-600 dark:text-slate-300 mb-2 font-semibold text-lg">
                Summary
              </div>
              <div className="text-sm text-gray-400 mr-2 ">
                {formattedDateTime}
              </div>
            </div>

            <div className="flex flex-wrap">
              {summary?.map((itm, index) => (
                <div
                  className="w-full relative items-center lg:w-6/12 xl:w-6/12 p-2"
                  key={index}
                >
                  <div className="bg-white dark:bg-slate-900 shadow-lg rounded-lg p-4 space-y-4">
                    <div>
                      <div className=" w-full text-gray-600 dark:text-slate-300 text-xs text-end">
                        {itm.detail}
                      </div>
                      <div className="text-gray-600 dark:text-slate-300 text-md font-semibold text-end">
                        {itm.value}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[-5%] left-[1%]">
                    <div className="text-white p-2 text-center inline-flex items-center justify-center w-8 h-8 shadow-lg rounded-full bg-green-900">
                      <Image src={images[index]} alt={`Image ${index}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky hidden md:block top-0 bg-white dark:bg-slate-800 h-max mt-2 p-3">
            <div className="p-3 text-gray-600 dark:text-slate-300 font-semibold text-lg text-start">
              RECENT NEWS
            </div>
            {news?.map((item) => {
              return (
                <div>
                  <a
                    href="#"
                    style={{ textAlign: "left" }}
                    className="block w-full my-2 p-3 align-left bg-slate dark:bg-slate-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-l  font-bold tracking-tight text-gray-600 dark:text-slate-300 dark:text-white">
                      {item.title}
                    </h5>
                    <p className="font-normal text-gray-600 dark:text-slate-300">
                      {item.timeAgo}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid bg-gray-100 dark:bg-slate-900 grid-cols-12 gap-3">
        <div className=" w-full p-3 grid-cols-12 rounded col-span-12">
          <div className="p-3 text-gray-600 dark:text-slate-300 mb-2 font-semibold text-lg">
            Proposed Dividend
          </div>
          <div className="w-full relative h-[400px] overflow-auto shadow-md sm:rounded-lg">
            <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Symbol
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bonus &#40;%&#41;
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cash &#40;%&#41;
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total &#40;%&#41;
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fiscal Year
                  </th>
                </tr>
              </thead>
              <tbody>
                {dividend?.map((item, index) => (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.symbol}
                    </th>
                    <td className="px-6 py-4">{item.bonus}</td>
                    <td className="px-6 py-4">{item.cash}</td>
                    <td className="px-6 py-4">{item.total}</td>
                    <td className="px-6 py-4">{item.fiscalYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid bg-gray-100 dark:bg-slate-900 grid-cols-12 gap-3">
        <div className=" w-full p-3 grid-cols-12 rounded col-span-12">
          <div className="p-3 text-gray-600 dark:text-slate-300 font-semibold text-lg">
            Investment
          </div>
          <LongTab />
        </div>
        <div className=" w-full block md:hidden p-3 grid-cols-12 rounded col-span-12">
          <div className="sticky  top-0 bg-white dark:bg-slate-800 h-max mt-2 p-3">
            <div className="p-3 text-gray-600 dark:text-slate-300 font-semibold text-lg text-start">
              RECENT NEWS
            </div>
            {news?.map((item) => {
              return (
                <div>
                  <a
                    href="#"
                    style={{ textAlign: "left" }}
                    className="block w-full my-2 p-3 align-left bg-slate dark:bg-slate-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-l  font-bold tracking-tight text-gray-600 dark:text-slate-300 dark:text-white">
                      {item.title}
                    </h5>
                    <p className="font-normal text-gray-600 dark:text-slate-300">
                      {item.timeAgo}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
