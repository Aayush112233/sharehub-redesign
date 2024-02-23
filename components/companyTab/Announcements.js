import Image from "next/image";
import React from "react";
import NoData from "../../assets/NoData.png";

const Announcements = () => {
  return (
    <>
      <div className="flex w-100 h-full flex-col justify-center items-center">
        <div className="text-center">
          <Image
            src={NoData}
            style={{ width: "auto", height: "150px", margin: "auto" }}
          />
          No Data Available
        </div>
      </div>
    </>
  );
};

export default Announcements;
