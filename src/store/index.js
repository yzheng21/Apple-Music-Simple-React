import { createStore } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { applyMiddleware } from "redux";

const store = createStore(
    rootReducer,
    devToolsEnhancer(),
    applyMiddleware(thunkMiddleware)
);

export default store;
