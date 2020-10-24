import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import trendingReducer from "../features/counter/trendingNewsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    trending: trendingReducer,
  },
});
