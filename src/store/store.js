import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mode from "./modeSlice";

const combinReducer = combineReducers({
	mode,
});

const store = configureStore({
	reducer: combinReducer,
});

export default store;
