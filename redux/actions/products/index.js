import productApi from "../../../api";
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  SORT_PRODUCTS,
} from "../../constants";

const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START });
  await productApi.get
    .getProducts()
    .then((response) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        data: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCTS_FAIL,
        error: error,
      });
    });
};

export const sortProducts = (sortBy) => async (dispatch, getState) => {
  const state = getState().products;
  const { products } = state;
  const { data } = products;

  let sortedData;

  switch (sortBy) {
    case "old-to-new":
      sortedData = data.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        console.log(dateA.getTime() - dateB.getTime());
        return dateA.getTime() - dateB.getTime();
      });
      // console.log("SortedData:", sortedData);
      break;
    case "new-to-old":
      sortedData = data.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
      break;
    case "price-hight-to-low":
      sortedData = data.sort((a, b) => b.price - a.price);
      break;
    case "price-low-to-hight":
      sortedData = data.sort((a, b) => a.price - b.price);
      break;
    default:
      sortedData = data;
  }

  dispatch({
    type: SORT_PRODUCTS,
    data: sortedData,
  });
};

export default getProducts;
