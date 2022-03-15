import { createStore } from "redux";
import rootReducers from "./reducers/index";
const Store = createStore(rootReducers);
export default Store;
