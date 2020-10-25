import trendingNewsSlice from "./trendingNewsSlice";
import worldNewsSlice from "./worldnewsSlice";
import currentArticleSlice from "./currentArticleSlice";
import sportsSlice from "./sportsSlice";
import techSlice from "./techSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  trending: trendingNewsSlice,
  worldnews: worldNewsSlice,
  currentarticle: currentArticleSlice,
  tech: techSlice,
  sports: sportsSlice,
});

export default rootReducer;
