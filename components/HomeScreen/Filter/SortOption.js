import React from "react";

const SortOption = ({ value, label, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        className="form-radio h-4 w-4 hover:border-2 focus:ring-white"
        type="radio"
        name="sort-by"
        value={value}
        onChange={onChange}
      />
      <label htmlFor={value} className="ml-2 text-sm font-light text-gray-500">
        {label}
      </label>
    </div>
  );
};

export default SortOption;
