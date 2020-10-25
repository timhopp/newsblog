import React from "react";
import articleStyle from "../styles/articles.module.css";
// @ts-ignore
// import utilStyles from "../styles/utils.module.css";

// Article Component For Section Pages
export default function CurrentArticleComp({ article }) {
  return (
    <div className="row m-4 bg-light p-2 rounded justify-content-center">
      <div className="row">
        <img
          className={articleStyle.currentImg}
          src={article.urlToImage}
          alt="img"
        ></img>
      </div>
      <div className="row justify-content-center">
        <h3 className="text-center" key={article.url}>
          {article.title}
        </h3>
        <b>{article.description}</b>
        <p>{article.content}</p>
      </div>
    </div>
  );
}
