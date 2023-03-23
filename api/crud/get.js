import api from "../api";
import endpoints from "../constants/endpoints";

const get = {
  getProducts: () => {
    const url = `${endpoints.products}`;
    return api.get(url);
  },
  getProduct: (id) => {
    const url = `${endpoints.products}/${id}`;
    return api.get(url);
  },
};

export default get;
