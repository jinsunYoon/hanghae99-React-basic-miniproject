import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import card from "./module/card";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ card });
const enhancer = applyMiddleware(...middlewares)
const store = createStore(rootReducer, enhancer);

export default store;
