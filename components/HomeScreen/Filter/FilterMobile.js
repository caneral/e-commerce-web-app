import React, { useState } from "react";
import Filter from ".";

const FilterMobile = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <div className="block lg:hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Filters</h2>
        <button
          type="button"
          onClick={toggleFilter}
          className="text-primary font-medium"
        >
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>
      {isFilterOpen && <Filter />}
    </div>
  );
};

export default FilterMobile;
