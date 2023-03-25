import React from "react";

const Card = ({ children, title }) => {
  return (
    <div className="mb-4">
      <span className="text-sm text-gray-400 font-light">{title}</span>
      <div className="bg-white p-[15px] shadow-md ">
        {children}
      </div>
    </div>
  );
};

export default Card;
