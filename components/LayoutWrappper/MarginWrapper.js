import React from "react";

export default function MarginWidthWrapper({ children, isExpanded }) {
  return (
    <div
      className={`flex flex-col ${
        isExpanded ? "md:ml-[225px]" : "md:ml-[100px]"
      }  min-h-screen`}
      style={{ transition: "margin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         0.1s ease" }}
    >
      {children}
    </div>
  );
}
