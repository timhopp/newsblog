import trendingNewsSlice from "./trendingNewsSlice";
import worldNewsSlice from "./worldnewsSlice";
import currentArticleSlice from "./currentArticleSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  trending: trendingNewsSlice,
  worldnews: worldNewsSlice,
  currentarticle: currentArticleSlice,
});

export default rootReducer;
