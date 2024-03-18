import { combineReducers } from "redux";
import { authReducer } from "./auth";

//combine multiple reducers
const rootReducer = combineReducers({
  //user:authReducer,
  auth: authReducer,
});

export default rootReducer;
