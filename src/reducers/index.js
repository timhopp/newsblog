import trendingNewsSlice from "./trendingNewsSlice";
import worldNewsSlice from "./worldNewsSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  trending: trendingNewsSlice,
  world: worldNewsSlice,
});

export default rootReducer;
