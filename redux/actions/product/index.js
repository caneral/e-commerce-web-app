import productApi from "../../../api";
import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
} from "../../constants";

const getProduct = (productId) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_START,
  });

  await productApi.get
    .getProduct(productId)
    .then((response) => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        data: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCT_FAIL,
        error,
      });
    });
};

export default getProduct;
