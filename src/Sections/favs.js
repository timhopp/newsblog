import React, { Component} from "react";
import ArticleSec from "../components/articlesSec";
import { selectAllFavs } from "../reducers/currentArticleSlice";
import { currentFind, addToFav, getFavs } from "../reducers/currentArticleSlice";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
class Fav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // favs: []
    };
  }


  // const favs = useSelector(selectAllFavs);

  render() {
    return (
      <section className="posts-list">
        <h2>Favs</h2>
        this.props.favs.map((favs) => (
    <ArticleSec key={favs.title} article={favs}></ArticleSec>
      </section>
    ));
    );
  }
}

const mapStateToProps(state) {
  const favs = selectAllFavs(state);

  return {favs}
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    currentFind: (article) => dispatch(currentFind(article)),
    addToFav: (article) => dispatch(addToFav(article)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fav);
