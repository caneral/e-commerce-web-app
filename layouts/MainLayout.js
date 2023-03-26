import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Header from "../components/Header";
import { decreaseQuantity, increaseQuantity } from "../redux/actions/cart";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen mt-[50px] pt-[26px] bg-[#F9F9F9]">
      <Header />
      <div className="flex w-full lg:container lg:mx-auto px-4">
        <div className=" w-9/12 ">{children}</div>
        <div className="w-3/12">
          <Card title="Cart">
            <div className="max-h-64 overflow-scroll">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-2 mb-4">
                    <div className="w-1/2 flex-col">
                      <p className="text-sm font-light">{item.name}</p>
                      <p className="text-sm text-[#2A59FE]">{item.price}</p>
                    </div>
                    <div className="w-1/2 flex">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="h-8 w-8 rounded-l-md justify-center items-center flex bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-8 h-8 flex justify-center items-center bg-[#2A59FE] text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="h-8 w-8 rounded-r-md justify-center items-center flex bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>Cart is empty!</div>
              )}
            </div>
          </Card>
          <Card title="Checkout">
            <div className="mb-4">
              Total Price:{" "}
              <span className="text-[#2A59FE] font-bold">{totalAmount}₺</span>
            </div>
            <button className="bg-[#2A59FE] text-white w-full py-2 rounded">
              Checkout
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
