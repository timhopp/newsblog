import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// omit other imports
import { selectAllTrending, fetchTrending } from "./trendingNewsSlice";
import ArticleSec from "../../components/articlesSec";

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
    // Sort posts in reverse chronological order by datetime string
    // const orderedTrending = trending
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date))

    content = trending.map((trending) => (
      // <trendingExcerpt key={trending.id} trending={trending} />
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
