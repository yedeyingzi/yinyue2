import { combineReducers } from "redux";
import n from "../component/home/reducers";

var reducers = combineReducers({
  node: n,
});
export default reducers;
