import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";

const appState = {};

const middlewares = [thunk];
const store = createStore(
  rootReducer,
  appState,
  applyMiddleware(...middlewares)
);

export default store;
