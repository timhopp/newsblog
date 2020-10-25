import { selectCurrentArticle } from "../reducers/currentArticleSlice";
import { useSelector, useDispatch } from "react-redux";
import CurrentArticleComp from "../components/currentArticle";

export default function CurrentArticle() {
  const dispatch = useDispatch();
  const current = useSelector(selectCurrentArticle);

  // useEffect(() => {
  //     dispatch(fetchTrending());

  // }, [trendingStatus, dispatch]);

  return (
    <section className="posts-list">
      <CurrentArticleComp
        key={current.title}
        article={current}
      ></CurrentArticleComp>
    </section>
  );
}
