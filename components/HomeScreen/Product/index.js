import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import addToCart from "../../../redux/actions/cart";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { name, image, price, id } = product;

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <Link
      href={`detail/${id}`}
      className="bg-white w-[180px] p-[10px] overflow-hidden"
    >
      <Image
        className="mb-[15px]"
        src={image}
        width={640}
        height={480}
        alt={name}
      />

      <div>
        <p className="text-[#2A59FE] text-sm mb-[15px]">{price} ₺</p>
        <p className="mb-[15px] line-clamp-1">{name}</p>
      </div>
      <button
        type="button"
        onClick={handleAddToCart}
        className="bg-[#2A59FE] text-white w-full py-2 px-4 rounded  "
      >
        Add to Cart
      </button>
    </Link>
  );
};

export default Product;
