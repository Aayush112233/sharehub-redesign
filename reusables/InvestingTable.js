import React from "react";
import { HiSearchCircle } from "react-icons/hi";
import Image from "next/image";
import NoData from "../assets/NoData.png";

const InvestingTable = ({ data }) => {
  const formatDate = (dateString) => {
    // Convert the input date string to a Date object
    const date = new Date(dateString);

    // Extract year, month, and day from the date object
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
    const day = ("0" + date.getDate()).slice(-2);

    // Return the formatted date string in the desired format (YYYY-MM-DD)
    return `${year}-${month}-02`;
  };
  const formatNumberWithCommas = (number) => {
    // Convert number to string and split into integer and decimal parts
    const parts = number.toString().split(".");

    // Add commas to integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // If there's a decimal part, add it back
    return parts.join(".");
  };

  return (
    <div className="w-full relative h-[400px] min-h-[400px]  overflow-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Symbol
            </th>
            <th scope="col" className="px-6 py-3">
              Company
            </th>
            <th scope="col" className="px-6 py-3">
              Units
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Opening Date
            </th>
            <th scope="col" className="px-6 py-3">
              Closing Date
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              View
            </th>
          </tr>
        </thead>
        <tbody className="w-full h-50 overflow-auto">
          {data.length === 0 ? (
            <tr>
              <td colSpan={"8"}>
                <Image
                  src={NoData}
                  style={{ width: "auto", height: "150px", margin: "auto" }}
                />
                <div className="font-medium text-gray-900 mx-auto text-center">No Data Available</div>
                
              </td>
            </tr>
          ) : (
            data?.map((item, index) => (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.symbol}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">
                  {formatNumberWithCommas(item.units)}
                </td>

                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{formatDate(item.openingDate)}</td>
                <td className="px-6 py-4">{formatDate(item.closingDate)}</td>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4 flex gap-2 items-center">
                  View <HiSearchCircle fontSize={'20px'}/>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvestingTable;
