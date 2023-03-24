import React from "react";
import CartAndProfile from "./CartAndProfile";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="h-[50px] bg-[#2A59FE] fixed top-0 w-full">
      <div className="lg:container lg:mx-auto px-4 h-full flex items-center">
        <div className="w-3/12 lg:lg:w-3/12 text-white font-extrabold text-2xl ">
          Eteration
        </div>
        <div className="w-6/12 lg:w-6/12 ">
          <SearchBar />
        </div>
        <div className="w-3/12 lg:lg:w-3/12 ">
          <CartAndProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
