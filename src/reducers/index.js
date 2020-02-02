import { combineReducers } from "redux";
import navReducer from './navReducer';
import audioReducer from './audioReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
    viewState: viewReducer,
    // apiState: apiReducer,
    audioState: audioReducer,
    navState: navReducer,
});

export default rootReducer;
