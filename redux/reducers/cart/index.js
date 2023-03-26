import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../../constants";

const initialState = {
  cart: [],
  totalAmount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.cart, totalAmount: action.totalAmount };
    case INCREASE_QUANTITY:
      return { ...state, cart: action.cart, totalAmount: action.totalAmount };
    case DECREASE_QUANTITY:
      return { ...state, cart: action.cart, totalAmount: action.totalAmount };
    default:
      return { ...state };
  }
};

export default cart;
