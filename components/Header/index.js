import Link from "next/link";
import React from "react";
import CartAndProfile from "./CartAndProfile";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-primary fixed top-0 w-full z-30">
      <div className="container mx-auto px-4 h-16 md:h-16 lg:h-16 flex items-center justify-between">
        <div className="w-3/12">
          <Link
            href="/"
            className="text-white font-extrabold text-xl md:text-2xl lg:text-3xl"
          >
            Eteration
          </Link>
        </div>
        <div className="flex-1 md:w-6/12 ml-4 md:ml-0">
          <SearchBar />
        </div>
        <div className="w-3/12 flex items-center">
          <CartAndProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;
