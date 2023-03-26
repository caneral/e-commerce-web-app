import Image from "next/image";
import React from "react";
import ProfileIcon from "../../public/assets/icons/Profile.svg";
import PortfeilIcon from "../../public/assets/icons/Portfeil.svg";
import { useSelector } from "react-redux";

const CartAndProfile = () => {
  const { totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="md:flex hidden text-white  w-full">
      <div className=" flex items-center justify-center gap-2  w-full">
        <Image priority src={PortfeilIcon} alt="Portfeil Icon" />
        <div>{totalAmount} ₺</div>
      </div>
      <div className="flex items-center justify-center gap-2 w-full">
        <Image priority src={ProfileIcon} alt="Profile Icon" />
        <div>Caner</div>
      </div>
    </div>
  );
};

export default CartAndProfile;
