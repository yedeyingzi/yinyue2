import { createStore } from "redux";
// import { createStore } from "redux";
import reducers from "../store/reducers";
console.log(reducers);
var store = createStore(reducers);
console.log(store);
export default store;
