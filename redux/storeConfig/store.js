import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);