import Image from "next/image";
import React from "react";
import ProfileIcon from "@assets/icons/Profile.svg";
import PortfeilIcon from "@assets/icons/Portfeil.svg";
import { useSelector } from "react-redux";

const CartAndProfile = () => {
  const { totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="md:flex hidden text-white w-full md:gap-4">
      <div className="flex items-center justify-center gap-2 w-full md:w-auto">
        <Image priority src={PortfeilIcon} alt="Portfeil Icon" />
        <div>{totalAmount} ₺</div>
      </div>
      <div className="flex items-center justify-center gap-2 w-full md:w-auto">
        <Image priority src={ProfileIcon} alt="Profile Icon" />
        <div>Caner</div>
      </div>
    </div>
  );
};

export default CartAndProfile;
