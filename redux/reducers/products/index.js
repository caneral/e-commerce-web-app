import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  SORT_PRODUCTS,
} from "../../constants";

const initialState = {
  products: {
    data: [],
    loading: false,
    error: null,
  },
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        products: {
          data: [],
          loading: true,
          error: null,
        },
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: {
          data: action.data,
          loading: false,
          error: null,
        },
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        products: {
          data: null,
          loading: false,
          error: action.error,
        },
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        products: {
          data: action.data,
        },
      };

    default:
      return { ...state };
  }
};

export default products;
