import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Filter from "../components/HomeScreen/Filter";
import Product from "../components/HomeScreen/Product";
import getProducts from "../redux/actions/products";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { data, loading, error } = products;

  const itemsPerPage = 12;

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="flex">
      <Filter />
      <div className="w-8/12">
        <div className="flex flex-wrap gap-[15px]">
          {currentItems?.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>

        <div className="flex justify-center my-4 ">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="flex gap-[12px] text-gray-600  items-center"
            activeClassName="bg-white px-3 rounded-md py-1 text-[#2A59FE] shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

Home.layout = "Main";
export default Home;
