import productApi from "../../../api";
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

const getUniqueItemsWithId = (items, idPrefix) => {
  const uniqueItems = [...new Set(items)];
  return uniqueItems.map((item, index) => ({
    id: `${idPrefix}-${index + 1}`,
    name: item,
  }));
};

const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_START });
  await productApi.get
    .getProducts()
    .then((response) => {
      const brandsWithId = getUniqueItemsWithId(
        response.data.map((item) => item.brand),
        "brand"
      );
      const modelsWithId = getUniqueItemsWithId(
        response.data.map((item) => item.model),
        "model"
      );

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        data: response.data,
        brands: brandsWithId,
        models: modelsWithId,
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
  const { products, filteredProducts, isFiltered } = state;
  const { data } = products;

  let sortedData;

  const currentProducts = isFiltered ? filteredProducts : data;

  switch (sortBy) {
    case "old-to-new":
      sortedData = currentProducts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA.getTime() - dateB.getTime();
      });
      break;
    case "new-to-old":
      sortedData = currentProducts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });
      break;
    case "price-hight-to-low":
      sortedData = currentProducts.sort((a, b) => b.price - a.price);
      break;
    case "price-low-to-high":
      sortedData = currentProducts.sort((a, b) => a.price - b.price);
      break;
    default:
      sortedData = currentProducts;
  }

  dispatch({
    type: SORT_PRODUCTS,
    data: sortedData,
  });
};

export const setSelectedBrands =
  (brand, checked) => async (dispatch, getState) => {
    const state = getState().products;
    const { selectedBrands } = state;

    let data = selectedBrands;

    if (checked) {
      data = [...selectedBrands, brand];
    } else {
      data = selectedBrands.filter((item) => item !== brand);
    }

    dispatch({
      type: SET_SELECTED_BRANDS,
      data,
    });
    dispatch(filterProducts());
  };

export const searchBrand = (searchTerm) => async (dispatch, getState) => {
  const state = getState().products;
  const { brands } = state.products;
  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  dispatch({
    type: SEARCH_BRAND,
    data: filteredBrands,
    searchBrandTerm: searchTerm,
  });
};

export const searchModel = (searchTerm) => async (dispatch, getState) => {
  const state = getState().products;
  const { models } = state.products;
  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  dispatch({
    type: SEARCH_MODEL,
    data: filteredModels,
    searchModelTerm: searchTerm,
  });
};

export const searchProduct = (searchTerm) => async (dispatch) => {
  await dispatch({
    type: SEARCH_PRODUCTS,
    data: searchTerm,
  });

  dispatch(filterProducts());
};

export const setSelectedModels =
  (model, checked) => async (dispatch, getState) => {
    const state = getState().products;
    const { selectedModels } = state;

    let data = selectedModels;

    if (checked) {
      data = [...selectedModels, model];
    } else {
      data = selectedModels.filter((item) => item !== model);
    }

    dispatch({
      type: SET_SELECTED_MODELS,
      data,
    });
    dispatch(filterProducts());
  };

export const filterProducts = () => async (dispatch, getState) => {
  const {
    products: {
      products: { data },
      selectedBrands,
      selectedModels,
      searchProductTerm,
      selectedSortType,
    },
  } = getState();

  const lowerCaseBrands = selectedBrands.map((brand) => brand.toLowerCase());
  const lowerCaseModels = selectedModels.map((model) => model.toLowerCase());

  const filteredData = data.filter(({ name, brand, model }) => {
    const lowerCaseName = name.toLowerCase();
    const lowerCaseBrand = brand.toLowerCase();
    const lowerCaseModel = model.toLowerCase();

    return (
      lowerCaseName.includes(searchProductTerm.toLowerCase()) &&
      (lowerCaseBrands.length === 0 ||
        lowerCaseBrands.includes(lowerCaseBrand)) &&
      (lowerCaseModels.length === 0 || lowerCaseModels.includes(lowerCaseModel))
    );
  });

  dispatch({
    type: FILTER_PRODUCTS,
    filteredProducts: filteredData,
  });

  if (selectedSortType) {
    dispatch(sortProducts(selectedSortType));
  }
};

export const setSelectedSortType = (sortType) => async (dispatch) => {
  dispatch({
    type: SET_SELECTED_SORT_TYPE,
    data: sortType,
  });
};

export default getProducts;
