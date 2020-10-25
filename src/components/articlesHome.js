import React, { Component } from "react";
import ArticleStyles from "../styles/articles.module.css";
import currentFind from "../reducers/trendingNewsSlice";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

// connect(mapDispatchToProps)

// Article Component For Home Page
class ArticleHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // setCurrentArticle(){
  //   this.props.store.dispatch(setCurrentArticle())
  // }

  render() {
    return (
      <a
        // onClick={this.props.setCurrentArticle(this.props.article.title)}
        className="col-3 m-2 bg-light p-3 rounded"
        href="/Sections/Articles/currentArticle"
      >
        <div className="">
          <img
            className={ArticleStyles.img}
            src={this.props.article.urlToImage}
            alt="img"
          ></img>
        </div>

        <div className="">
          <b className="text-center" key={this.props.article.url}>
            {this.props.article.title}
          </b>
          <p>{this.props.article.description}</p>
        </div>
      </a>
    );
  }
}

const mapDispatchToProps = (dispatch, aprop) => ({
  // setCurrentArticle: () => dispatch(currentFind(aprop.title)),
});

export default connect(mapDispatchToProps)(ArticleHome);
// export default ArticleHome
