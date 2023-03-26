import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import SearchIcon from "../../public/assets/icons/Search.svg";
import { searchProduct } from "../../redux/actions/products";


const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <input
        className="lg:w-1/2  placeholder:text-lg placeholder:font-medium placeholder:text-black py-[9px] pl-[40px] outline-none"
        placeholder="Search"
        type="search"
        onChange={(event) => dispatch(searchProduct(event.target.value))}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <Image priority src={SearchIcon} alt="Search Icon" />
      </div>
    </div>
  );
};

export default SearchBar;
