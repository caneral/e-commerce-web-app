import { combineReducers } from "redux";
import products from "../reducers/products";
import persist from "./persists";
import { persistReducer } from "redux-persist";
import cart from "../reducers/cart";
import productReducer from "../reducers/product";

const rootReducer = combineReducers({
  products,
  productReducer,
  cart: persistReducer(persist.persistCartConfig, cart),
});

export default rootReducer;
