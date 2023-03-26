import storage from "redux-persist/lib/storage";

const persistCartConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["cart"],
};

const persist = {
  persistCartConfig,
};
export default persist;
