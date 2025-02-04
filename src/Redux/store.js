import rootReducer from "./Reducer";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

let store = createStore(rootReducer,applyMiddleware(thunk));
export default store;