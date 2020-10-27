import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllTrending,
  fetchTrending,
} from "../reducers/trendingNewsSlice";
import { selectAllWorldNews, fetchWorldNews } from "../reducers/worldnewsSlice";
import { selectAllSports, fetchSports } from "../reducers/sportsSlice";
import { selectAllTech, fetchTech } from "../reducers/techSlice";
import { selectAllFavs } from "../reducers/currentArticleSlice";
import ArticleSec from "./articlesSec";

export const TrendingPage = () => {
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

  if (trendingStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (trendingStatus === "succeeded") {
    content = trending.map((trending) => (
      <ArticleSec key={trending.title} article={trending}></ArticleSec>
    ));
  } else if (trendingStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Trending</h2>
      {content}
    </section>
  );
};

export const WorldNewsPage = () => {
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

  if (worldnewsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (worldnewsStatus === "succeeded") {
    content = worldnews.map((worldnews) => (
      <ArticleSec key={worldnews.title} article={worldnews}></ArticleSec>
    ));
    // content = "worked";
  } else if (worldnewsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>World News</h2>
      {content}
    </section>
  );
};

export const SportsPage = () => {
  const dispatch = useDispatch();
  const sports = useSelector(selectAllSports);

  const sportsStatus = useSelector((state) => state.sports.status);
  const error = useSelector((state) => state.sports.error);

  useEffect(() => {
    if (sportsStatus === "idle") {
      dispatch(fetchSports());
    }
  }, [sportsStatus, dispatch]);

  let content;

  if (sportsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (sportsStatus === "succeeded") {
    content = sports.map((sports) => (
      <ArticleSec key={sports.title} article={sports}></ArticleSec>
    ));
  } else if (sportsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Sports</h2>
      {content}
    </section>
  );
};

export const TechPage = () => {
  const dispatch = useDispatch();
  const tech = useSelector(selectAllTech);

  const techStatus = useSelector((state) => state.tech.status);
  const error = useSelector((state) => state.tech.error);

  useEffect(() => {
    if (techStatus === "idle") {
      dispatch(fetchTech());
    }
  }, [techStatus, dispatch]);

  let content;

  if (techStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (techStatus === "succeeded") {
    content = tech.map((tech) => (
      <ArticleSec key={tech.title} article={tech}></ArticleSec>
    ));
  } else if (techStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Tech</h2>
      {content}
    </section>
  );
};

export const FavPage = () => {
  const favs = useSelector(selectAllFavs);

  let content = favs.map((favs) => (
    <ArticleSec key={favs.title} article={favs}></ArticleSec>
  ));

  return (
    <section className="posts-list">
      <h2>Favs</h2>
      {content}
    </section>
  );
};
