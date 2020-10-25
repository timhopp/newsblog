import { selectCurrentArticle } from "../reducers/currentArticleSlice";
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
      <ArticleSec key={current.title} article={current}></ArticleSec>
    </section>
  );
}
