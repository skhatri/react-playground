import { combineReducers } from "redux";
import { counterReducer } from "./counter_reducers";
import { fibnacciReducer } from "./fibonacci_reducers";
export const rootReducer = combineReducers({
  counter: counterReducer,
  fibonacci: fibnacciReducer,
});
