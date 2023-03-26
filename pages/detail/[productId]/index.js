import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Card/index";
import addToCart from "../../../redux/actions/cart";
import getProduct from "../../../redux/actions/product";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { productId } = query;

  const { product } = useSelector((state) => state.productReducer);
  const { data, loading, error } = product;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Card>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3">
        <div className="lg:w-1/2 flex justify-center lg:h-full mb-4">
          <Image
            src={data?.image}
            width={640}
            height={480}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-8">
            <h1 className="font-bold">{data.name}</h1>
            <span className="font-bold text-primary">{data.price}</span>
          </div>
          <button
            type="button"
            className="bg-primary w-full text-white py-2 rounded mb-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <p className="text-sm">{data.description}</p>
        </div>
      </div>
    </Card>
  );
};

ProductDetail.layout = "Main";
export default ProductDetail;
