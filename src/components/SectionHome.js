import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllTrending,
  fetchTrending,
} from "../reducers/trendingNewsSlice";
import { Link } from "react-router-dom";
import { fetchWorldNews, selectAllWorldNews } from "../reducers/worldnewsSlice";
import { fetchSports, selectAllSports } from "../reducers/sportsSlice";
import { fetchTech, selectAllTech } from "../reducers/techSlice";
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
    <section className="posts-list container-fluid">
      <h2>
        <Link className="link" to="/Sections/Trending">
          Trending
        </Link>
      </h2>
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
    <section className="posts-list container-fluid">
      <h2>
        <Link className="link" to="/Sections/WorldNews">
          World News
        </Link>
      </h2>

      <div className="row justify-content-center">{content}</div>
    </section>
  );
};

export const SportsHome = () => {
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

  let sportsArr = sports.slice(0, 3);

  if (sportsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (sportsStatus === "succeeded") {
    content = sportsArr.map((sports) => (
      // <trendingExcerpt key={trending.id} trending={trending} />
      <ArticleHome key={sports.title} article={sports}></ArticleHome>
    ));
  } else if (sportsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list container-fluid">
      <h2>
        <Link className="link" to="/Sections/Sports">
          Sports
        </Link>
      </h2>

      <div className="row justify-content-center">{content}</div>
    </section>
  );
};

export const TechHome = () => {
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

  let techArr = tech.slice(0, 3);

  if (techStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (techStatus === "succeeded") {
    content = techArr.map((tech) => (
      // <trendingExcerpt key={trending.id} trending={trending} />
      <ArticleHome key={tech.title} article={tech}></ArticleHome>
    ));
  } else if (techStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list container-fluid">
      <h2>
        <Link className="link" to="/Sections/Tech">
          Tech
        </Link>
      </h2>
      <div className="row justify-content-center">{content}</div>
    </section>
  );
};
