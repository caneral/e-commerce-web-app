import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product }) => {
  const { name, image, price, id } = product;
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
        onClick={(e) => e.preventDefault()}
        className="bg-[#2A59FE] text-white w-full py-2 px-4 rounded  "
      >
        Add to Cart
      </button>
    </Link>
  );
};

export default Product;
