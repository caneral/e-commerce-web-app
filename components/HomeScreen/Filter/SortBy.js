import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../../redux/actions/products";
import Card from "../../Card";

const SortBy = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) dispatch(sortProducts(selected));
  }, [selected, dispatch]);

  return (
    <Card title="Sort By">
      <div className="flex items-center mb-4">
        <input
          className="form-radio h-4 w-4 hover:border-2  focus:ring-white"
          type="radio"
          name="sort-by"
          value="old-to-new"
          onChange={() => setSelected("old-to-new")}
        />
        <label
          htmlFor="old-to-new"
          className="ml-2 text-sm font-light text-gray-500"
        >
          Old to new
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          className="form-radio h-4 w-4 hover:border-2  focus:ring-white"
          type="radio"
          name="sort-by"
          value="new-to-old"
          onChange={() => setSelected("new-to-old")}
        />
        <label
          htmlFor="new-to-old"
          className="ml-2 text-sm font-light text-gray-500"
        >
          New to old
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          className="form-radio h-4 w-4 hover:border-2  focus:ring-white"
          type="radio"
          name="sort-by"
          value="price-hight-to-low"
          onChange={() => setSelected("price-hight-to-low")}
        />
        <label
          htmlFor="price-hight-to-low"
          className="ml-2 text-sm font-light text-gray-500"
        >
          Price hight to low
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          className="form-radio h-4 w-4 hover:border-2  focus:ring-white"
          type="radio"
          name="sort-by"
          value="price-low-to-high"
          onChange={() => setSelected("price-low-to-hight")}
        />
        <label
          htmlFor="price-low-to-high"
          className="ml-2 text-sm font-light text-gray-500"
        >
          Price low to High
        </label>
      </div>
    </Card>
  );
};

export default SortBy;
