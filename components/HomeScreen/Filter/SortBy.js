import Card from "@components/Card";
import { setSelectedSortType, sortProducts } from "@redux/actions/products";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SortOption from "./SortOption";

const SortBy = () => {
  const dispatch = useDispatch();
  const { selectedSortType } = useSelector((state) => state.products);

  useEffect(() => {
    if (selectedSortType) dispatch(sortProducts(selectedSortType));
  }, [selectedSortType, dispatch]);

  const data = [
    { value: "old-to-new", label: "Old to new" },
    { value: "new-to-old", label: "New to old" },
    { value: "price-hight-to-low", label: "Price hight to low" },
    { value: "price-low-to-high", label: "Price low to high" },
  ];

  return (
    <Card title="Sort By">
      {data.map((item) => (
        <SortOption
          key={item.value}
          value={item.value}
          label={item.label}
          onChange={() => dispatch(setSelectedSortType(item.value))}
        />
      ))}
    </Card>
  );
};

export default SortBy;
