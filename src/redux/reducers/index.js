
import { combineReducers} from "@reduxjs/toolkit";
import authUser from "./authSlice"

const rootReducer = combineReducers({
    authUser
});

export default rootReducer;