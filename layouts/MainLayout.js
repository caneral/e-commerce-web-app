import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen mt-[50px]">
      <Header />
      <div className="flex w-full lg:container lg:mx-auto">
        <div className="w-full bg-red-400 ">{children}</div>
        <div className="w-1/3 bg-yellow-500">CartArea</div>
      </div>
    </div>
  );
};

export default MainLayout;
