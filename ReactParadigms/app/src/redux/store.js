import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { cakeReducer } from "./cake/cakeReducer";

export const store = createStore(cakeReducer)
