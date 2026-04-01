import React from "react";

const TitleBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="border-2 border-gray-200 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#f68967] font-bold">
      {children}
    </h1>
  );
};

export default TitleBox;
