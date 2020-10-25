import React, { Component } from "react";
import ArticleStyles from "../styles/articles.module.css";
import { currentFind } from "../reducers/currentArticleSlice";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// connect(mapDispatchToProps)

// Article Component For Home Page
class ArticleHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link
        onClick={() => this.props.currentFind(this.props.article)}
        className="link col-3 m-2 bg-light p-3 rounded"
        to="/Sections/CurrentArticle"
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
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    currentFind: (article) => dispatch(currentFind(article)),
  };
};

export default connect(undefined, mapDispatchToProps)(ArticleHome);
// export default ArticleHome
