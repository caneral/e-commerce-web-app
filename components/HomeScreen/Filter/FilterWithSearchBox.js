import Image from "next/image";
import React from "react";

import SearchIcon from "@assets/icons/Search.svg";
import Card from "@components/Card";

const FilterWithSearchBox = ({
  title,
  data,
  loading,
  handleCheckboxChange,
  handleSearchBoxChange,
}) => {
  return (
    <Card title={title}>
      <div>
        <div className="relative mb-4">
          <input
            className="bg-gray-100 w-full h-10 placeholder:font-light pl-[40px] outline-none"
            placeholder="Search"
            onChange={handleSearchBoxChange}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Image priority src={SearchIcon} alt="Search Icon" />
          </div>
        </div>
        <div className="overflow-scroll max-h-[105px]">
          {loading ? (
            <div>Loading...</div>
          ) : (
            data?.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <input
                  className="form-radio h-4 w-4 hover:border-2  focus:ring-white"
                  type="checkbox"
                  value={item.name}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor={item.name}
                  className="ml-2 text-sm font-light text-gray-500"
                >
                  {item.name}
                </label>
              </div>
            ))
          )}
        </div>
      </div>
    </Card>
  );
};

export default FilterWithSearchBox;
