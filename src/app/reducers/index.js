import { combineReducers } from "redux";
import { counterReducer } from "../../layout/general/reducers/counter_reducers";
import { fibnacciReducer } from "../../layout/general/reducers/fibonacci_reducers";

export const rootReducer = combineReducers({
  counter: counterReducer,
  fibonacci: fibnacciReducer,
});
