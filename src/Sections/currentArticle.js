import { selectCurrentArticle } from "../reducers/trendingNewsSlice";
import { useSelector, useDispatch } from "react-redux";
import ArticleSec from "../components/articlesSec";

export default function CurrentArticle() {
  const dispatch = useDispatch();
  const current = useSelector(selectCurrentArticle);

  // useEffect(() => {
  //     dispatch(fetchTrending());

  // }, [trendingStatus, dispatch]);

  return (
    <section className="posts-list">
      <h2>Trending</h2>
      <ArticleSec key={current.title} article={current}></ArticleSec>
    </section>
  );
}
