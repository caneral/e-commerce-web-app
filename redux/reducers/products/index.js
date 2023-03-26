import {
  FILTER_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  SEARCH_BRAND,
  SEARCH_MODEL,
  SEARCH_PRODUCTS,
  SET_SELECTED_BRANDS,
  SET_SELECTED_MODELS,
  SET_SELECTED_SORT_TYPE,
  SORT_PRODUCTS,
} from "../../constants";

const initialState = {
  products: {
    data: [],
    brands: [],
    models: [],
    loading: true,
    error: null,
  },
  searchProductTerm: null,
  searchBrandTerm: null,
  searchModelTerm: null,
  selectedBrands: [],
  filteredBrands: [],
  filteredModels: [],
  selectedModels: [],
  selectedSortType: null,
  filteredProducts: [],
  isFiltered: false,
  deneme:'caner'
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        products: {
          data: [],
          error: null,
          ...state.products,
        },
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: {
          data: action.data,
          brands: action.brands,
          models: action.models,
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
        filteredProducts: action.data,
      };
    case SET_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands: action.data,
        isFiltered:
          action.data.length > 0 ||
          state.selectedModels.length > 0 ||
          state.searchProductTerm,
      };
    case SET_SELECTED_MODELS:
      return {
        ...state,
        selectedModels: action.data,
        isFiltered:
          action.data.length > 0 ||
          state.selectedBrands.length > 0 ||
          state.searchProductTerm,
      };
    case SEARCH_BRAND:
      return {
        ...state,
        filteredBrands: action.data,
        searchBrandTerm: action.searchBrandTerm,
      };
    case SEARCH_MODEL:
      return {
        ...state,
        filteredModels: action.data,
        searchModelTerm: action.searchModelTerm,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.filteredProducts,
      };
    case SET_SELECTED_SORT_TYPE:
      return { ...state, selectedSortType: action.data };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchProductTerm: action.data,
        isFiltered:
          action.data ||
          state.selectedBrands.length > 0 ||
          state.selectedModels.length > 0,
      };
    default:
      return { ...state };
  }
};

export default products;
