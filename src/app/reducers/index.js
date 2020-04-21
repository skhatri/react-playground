import { combineReducers } from "redux";
import { counterReducer } from "../../layout/general/reducers/counter_reducers";
import { fibnacciReducer } from "../../layout/general/reducers/fibonacci_reducers";
import { signinReducer } from "../../layout/user/reducers/signin_reducers";
import { changePasswordReducer} from "../../layout/user/reducers/changepw_reducers";

export const rootReducer = combineReducers({
  counter: counterReducer,
  fibonacci: fibnacciReducer,
  signin: signinReducer,
  changepw: changePasswordReducer,
});
