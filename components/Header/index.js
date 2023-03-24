import React from "react";
import CartAndProfile from "./CartAndProfile";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="h-[50px] bg-[#2A59FE] fixed top-0 w-full">
      <div className="lg:container lg:mx-auto mx-4 h-full flex items-center">
        <div className="w-4/12  text-white font-extrabold text-2xl">
          Eteration
        </div>
        <div className="w-4/12 lg:w-full ">
          <SearchBar />
        </div>
        <div className="w-4/12">
          <CartAndProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
