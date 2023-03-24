import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/HomeScreen/Product";
import getProducts from "../redux/actions/products";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { data, loading, error } = products;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="flex">
      <div className="w-4/12 ">Filter Area</div>
      <div className="w-8/12 flex flex-wrap gap-[15px]">
        {data?.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

Home.layout = "Main";
export default Home;
