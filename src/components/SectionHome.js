import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllTrending,
  fetchTrending,
} from "../reducers/trendingNewsSlice";
import { fetchWorldNews, selectAllWorldNews } from "../reducers/worldnewsSlice";
import ArticleHome from "./articlesHome";

export const TrendingHome = () => {
  const dispatch = useDispatch();
  const trending = useSelector(selectAllTrending);

  const trendingStatus = useSelector((state) => state.trending.status);
  const error = useSelector((state) => state.trending.error);

  useEffect(() => {
    if (trendingStatus === "idle") {
      dispatch(fetchTrending());
    }
  }, [trendingStatus, dispatch]);

  let content;

  let trendingArr = trending.slice(0, 3);

  if (trendingStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (trendingStatus === "succeeded") {
    content = trendingArr.map((trending) => (
      // <trendingExcerpt key={trending.id} trending={trending} />
      <ArticleHome key={trending.title} article={trending}></ArticleHome>
    ));
  } else if (trendingStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Trending</h2>
      <div className="row justify-content-center">{content}</div>
    </section>
  );
};

export const WorldNewsHome = () => {
  const dispatch = useDispatch();
  const worldnews = useSelector(selectAllWorldNews);

  const worldnewsStatus = useSelector((state) => state.worldnews.status);
  const error = useSelector((state) => state.worldnews.error);

  useEffect(() => {
    if (worldnewsStatus === "idle") {
      dispatch(fetchWorldNews());
    }
  }, [worldnewsStatus, dispatch]);

  let content;

  let worldnewsArr = worldnews.slice(0, 3);

  if (worldnewsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (worldnewsStatus === "succeeded") {
    content = worldnewsArr.map((worldnews) => (
      // <trendingExcerpt key={trending.id} trending={trending} />
      <ArticleHome key={worldnews.title} article={worldnews}></ArticleHome>
    ));
  } else if (worldnewsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>World News</h2>
      <div className="row justify-content-center">{content}</div>
    </section>
  );
};
