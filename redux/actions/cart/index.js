import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "../../constants";

const addToCart = (product) => async (dispatch, getState) => {
  const state = getState().cart;
  const { cart, totalAmount } = state;

  const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  if (existingItemIndex !== -1) {
    const updatedCartItems = [...cart];
    updatedCartItems[existingItemIndex].quantity++;

    dispatch({
      type: ADD_TO_CART,
      cart: updatedCartItems,
      totalAmount: totalAmount + Number(product.price),
    });
  } else {
    const newCartItem = {
      ...product,
      quantity: 1,
    };
    dispatch({
      type: ADD_TO_CART,
      cart: [...cart, newCartItem],
      totalAmount: totalAmount + Number(product.price),
    });
  }
};

export const increaseQuantity = (productId) => async (dispatch, getState) => {
  const state = getState().cart;
  const { cart, totalAmount } = state;

  const increasedCartItems = cart.map((item) => {
    if (item.id === productId) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });

  dispatch({
    type: INCREASE_QUANTITY,
    cart: increasedCartItems,
    totalAmount:
      totalAmount +
      Number(increasedCartItems.find((item) => item.id === productId).price),
  });
};

export const decreaseQuantity = (productId) => async (dispatch, getState) => {
  const state = getState().cart;
  const { cart, totalAmount } = state;

  const targetItem = cart.find((item) => item.id === productId);
  if (targetItem.quantity === 1) {
    const updatedCartItems = cart.filter((item) => item.id !== productId);
    dispatch({
      type: DECREASE_QUANTITY,
      cart: updatedCartItems,
      totalAmount: totalAmount - Number(targetItem.price),
    });
  } else {
    const decreasedCartItems = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    dispatch({
      type: DECREASE_QUANTITY,
      cart: decreasedCartItems,
      totalAmount: totalAmount - Number(targetItem.price),
    });
  }
};

export default addToCart;
