"use client";
import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState();
  const getNewsInfo = async () => {
    try {
      const response = await fetch(
        "https://arthakendra.com/api/v1/news/sharehub/stock-news?limit=6&companySymbol=HRL"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setNews(jsonData.data.content);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getNewsInfo();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {news?.map((item) => {
          return (
            <div className="min-height-[200px] w-full  relative items-center lg:w-6/12 xl:w-1/3 p-2">
              <div
                className={`h-full dark:bg-slate-900 shadow-lg rounded-lg p-4 space-y-4`}
              >
                <a href="#">
                  <img class="rounded-t-lg" src={item.image} alt="" />
                </a>
                <div class="p-5 h-full flex flex-col justify-between">
                  <div>
                    <a href="#">
                      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    </a>
                  </div>

                  <a
                    href="#"
                    style={{
                      width: "max-content",
                    }}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
