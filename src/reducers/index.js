import { combineReducers } from "redux";
import navReducer from './navReducer';

const rootReducer = combineReducers({
    navState: navReducer,
});

export default rootReducer;
