import trendingNewsSlice from "./trendingNewsSlice";
import worldNewsSlice from "./worldnewsSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  trending: trendingNewsSlice,
  world: worldNewsSlice,
});

export default rootReducer;
