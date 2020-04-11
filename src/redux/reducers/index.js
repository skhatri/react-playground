import { combineReducers } from "redux";
import { counterReducer } from "./counter_reducers";

export const rootReducer = combineReducers({ counter: counterReducer });
