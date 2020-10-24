import React from "react";
// @ts-ignore
// import utilStyles from "../styles/utils.module.css";

// Article Component For Section Pages
export default function ArticleSec({ article }) {
  return (
    <div className="row m-4 bg-light p-2 rounded">
      <div className="col-3">
        <img src={article.urlToImage}></img>
      </div>
      <div className="col-9">
        <b className="text-center" key={article.url}>
          {article.title}
        </b>
        <p>{article.description}</p>
      </div>
    </div>
  );
}
