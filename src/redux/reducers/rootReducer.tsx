import { combineReducers } from "redux";
import ratesReducer from "./ratesReducer";

const rootReducer = combineReducers({
  data: ratesReducer,
});
export default rootReducer;
