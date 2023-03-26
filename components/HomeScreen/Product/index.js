import addToCart from "@redux/actions/cart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

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
      className="bg-white w-full md:w-[180px] p-[10px] overflow-hidden flex flex-col"
    >
      <Image
        className="mb-[15px] w-full md:w-[180px]"
        src={image}
        width={640}
        height={480}
        alt={name}
      />
      <div className="flex-grow flex flex-col justify-center">
        <p className="text-primary text-sm mb-[15px]">{price} ₺</p>
        <p className="mb-[15px] line-clamp-1">{name}</p>
        <button
          type="button"
          onClick={handleAddToCart}
          className="bg-primary text-white w-full py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default Product;
