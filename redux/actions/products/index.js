import productApi from "../../../api";
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
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

export default getProducts;
