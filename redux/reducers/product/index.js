import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
} from "../../constants";

const initialState = {
  product: {
    data: [],
    loading: true,
    error: null,
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_START:
      return { ...state, product: { loading: true, data: [], error: null } };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: { loading: false, data: action.data, error: null },
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        product: { ...state.product, loading: false, error: action.error },
      };
    default:
      return { ...state };
  }
};

export default productReducer;
