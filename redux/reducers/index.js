import { combineReducers } from "redux";
import getUsersReducer from "./getUsersReducer";
import selectedUserReducer from "./selectedUserReducer";

const rootReducer = combineReducers({ getUsersReducer, selectedUserReducer });

export default rootReducer;
