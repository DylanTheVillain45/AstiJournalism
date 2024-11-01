import React from "react";
import ArticleThumbNail from "../components/ArticleThumbNail.jsx";
import BottomTab from "../components/BottomTab";
import Loading from "../components/Loading.jsx";
import useArticles from "../hooks/useArticle.js";

function Home() {
  const { articleData, loading, error } = useArticles();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="-z-50 bg-pink-50 w-full pt-16 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <h1 className="text-center text-4xl font-serif">
            Today's Top Stories
          </h1>
        </div>
        <div className="mt-12 columns-1 md:columns-2 xl:columns-3 px-10 mx-auto max-w-[450px] md:max-w-[900px] xl:max-w-[1200px] ">
  {articleData.map((article, index) => (
    <div key={index} className="break-inside-avoid mb-4 min-h-[200px]">
      <ArticleThumbNail
        id={article._id}
        title={article.title}
        author={article.author}
        img={article.image}
        likes={article.likes}
      />
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

export default Home;
