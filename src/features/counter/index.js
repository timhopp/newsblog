import trendingNewsSlice from "./trendingNewsSlice";
import counterSlice from "./counterSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  trending: trendingNewsSlice,
  counter: counterSlice,
});

export default rootReducer;
