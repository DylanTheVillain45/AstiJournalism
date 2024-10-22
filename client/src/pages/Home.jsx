import React from "react";
import ArticleThumbNail from "../components/ArticleThumbNail.jsx";
import { articleData } from "../data/articleData.js";
import BottomTab from '../components/BottomTab';

function Home() {
  return (
    <div className="-z-50 bg-beige w-full pt-10">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <h1 className="text-center text-4xl font-serif">
            Today's Top Stories
          </h1>
        </div>
        <div className="mt-12 grid md:grid-cols-2 md:grid-rows-2 px-10 mx-auto max-w-[450px] md:max-w-[900px] gap-y-12 gap-x-12">
          {articleData.map((article, index) => (
            <ArticleThumbNail
              key={index}
              id={index}
              title={article.title}
              author={article.author}
              img={article.img}
            />
          ))}
        </div>
      </div>
      <BottomTab />
    </div>
  );
}

export default Home;
