import Image from "next/image";
import React from "react";
import SearchIcon from "../../public/assets/icons/Search.svg";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="lg:w-1/2 w-4/5 placeholder:text-lg placeholder:font-medium placeholder:text-black py-[9px] pl-[40px]"
        placeholder="Search"
        type="search"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <Image priority src={SearchIcon} alt="Search Icon" />
      </div>
    </div>
  );
};

export default SearchBar;
