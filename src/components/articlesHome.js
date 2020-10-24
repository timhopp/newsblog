import React from "react";

// Article Component For Home Page
export default function ArticleHome({ article }) {
  return (
    <div className="col-3 m-2 bg-light p-3 rounded">
      <div className="">
        <img src={article.urlToImage}></img>
      </div>

      <div className="">
        <b className="text-center" key={article.url}>
          {article.title}
        </b>
        <p>{article.description}</p>
      </div>
    </div>
  );
}
