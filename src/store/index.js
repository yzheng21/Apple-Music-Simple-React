import { createStore } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware } from "redux";

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default store;
