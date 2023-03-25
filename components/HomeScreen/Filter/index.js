import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchBrand,
  searchModel,
  setSelectedBrands,
  setSelectedModels,
} from "../../../redux/actions/products";
import FilterWithSearchBox from "./FilterWithSearchBox";
import SortBy from "./SortBy";

const Filter = () => {
  const dispatch = useDispatch();

  const {
    products,
    filteredBrands,
    filteredModels,
    searchBrandTerm,
    searchModelTerm,
  } = useSelector((state) => state.products);
  const { brands, models } = products;

  const brandData = filteredBrands && searchBrandTerm ? filteredBrands : brands;
  const modelData = filteredModels && searchModelTerm ? filteredModels : models;

  return (
    <div className="w-4/12 pr-8">
      <SortBy />
      <FilterWithSearchBox
        title="Brands"
        data={brandData}
        handleSearchBoxChange={(event) =>
          dispatch(searchBrand(event.target.value))
        }
        handleCheckboxChange={(event) =>
          dispatch(setSelectedBrands(event.target.value, event.target.checked))
        }
      />
      <FilterWithSearchBox
        title="Model"
        data={modelData}
        handleSearchBoxChange={(event) =>
          dispatch(searchModel(event.target.value))
        }
        handleCheckboxChange={(event) =>
          dispatch(setSelectedModels(event.target.value, event.target.checked))
        }
      />
    </div>
  );
};

export default Filter;
