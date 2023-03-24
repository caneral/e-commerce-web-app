import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen mt-[50px] pt-[26px] bg-[#F9F9F9]">
      <Header />
      <div className="flex w-full lg:container lg:mx-auto px-4">
        <div className=" w-9/12 ">{children}</div>
        <div className="w-3/12 bg-yellow-500">CartArea</div>
      </div>
    </div>
  );
};

export default MainLayout;
