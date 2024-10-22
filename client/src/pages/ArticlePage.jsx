import React from "react";
import { useParams } from "react-router-dom";
import { articleData } from "../data/articleData";
import BottomTab from "../components/BottomTab";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articleData[id]
  
  if (!article) {
    return (
      <h2 className="mt-8 text-center text-3xl underline ">
        Article Not Found!
      </h2>
    );
  }

  return (
    <>
      <div
        className="relative bg-cover bg-center py-16 min-h-[75vh]"
        style={{
          backgroundImage: `url(${article.img}), url('../assets/JournalismLogo.png')`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative z-20 max-w-[400px] md:max-w-[540px] rounded-md bg-beige mx-auto mb-8 pt-4 pb-2 px-4 font-serif">
          <h1 className="font-bold text-3xl text-center capitalize  tracking-wider">{article.title}</h1>
          <p className="mt-4 text-center text-slate-700">{article.author}</p>
        </div>
        <div className="relative z-20 rounded-md whitespace-pre-wrap indent-8 max-w-[500px] sm:max-w-[600px] md:max-w-[800px] mx-auto text-justify leading-8 text-lg font-serif px-8 py-6 bg-beige">
          {article.text}
        </div>
        <div>
          {article.data}
        </div>
      </div>
      <div className="-mt-12">
        <BottomTab />
      </div>
    </>
  );
};

export default ArticlePage;
