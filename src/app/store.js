import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import rootReducer from "../features/counter/index";
import thunk from "redux-thunk";

export default configureStore({
  reducer: rootReducer,
  // middleware: [applyMiddleware(thunk)],
  // middleware: [applyMiddleware(thunk), getDefaultMiddleware()],
});
