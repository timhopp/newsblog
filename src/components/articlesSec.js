import React from "react";
import articleStyle from "../styles/articles.module.css";
import { Link } from "react-router-dom";

export default function ArticleSec({ article }) {
  return (
    <a className="link" href={article.url}>
      <div className="row m-4 bg-light p-2 rounded">
        <div className="col-3">
          <img
            className={articleStyle.img}
            src={article.urlToImage}
            alt="img"
          ></img>
        </div>
        <div className="col-9">
          <b className="text-center" key={article.url}>
            {article.title}
          </b>
          <p>{article.description}</p>
        </div>
      </div>
    </a>
  );
}
