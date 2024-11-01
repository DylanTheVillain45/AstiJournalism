import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticle";
import Loading from "../components/Loading";
import axios from "axios";

const ArticlePage = () => {
  const { id } = useParams();
  const { articleData, loading, error } = useArticles();

  // Find the article using the ID. This is a derived value.
  const article = articleData.find((article) => article._id === id);

  // Define likeCount state here
  const [likeCount, setLikeCount] = useState(article ? article.likes : 0); // Initialize based on article

  useEffect(() => {
    if (article) {
      setLikeCount(article.likes); // Update likeCount when article changes
    }
  }, [article]); // Runs when article changes

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return (
      <h2 className="mt-8 text-center text-3xl underline ">
        Article Not Found!
      </h2>
    );
  }

  const handleLike = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/articles/${id}/like`
      );
      if (response.status === 200) {
        // Update like count based on the response from the server
        setLikeCount(response.data.likes);
      }
    } catch (error) {
      console.error(
        "Error liking article:",
        error.response ? error.response.data : error
      );
    }
  };
  return (
    <>
      <div className="relative pt-12 pb-16 min-h-[75vh] bg-pink-50">
        <img
          src={article.image}
          alt=""
          className="w-96 mx-auto mb-8 border-black border-2 rounded-xl drop-shadow-xl"
        />
        <div className="relative z-20 max-w-[400px] md:max-w-[540px] mx-auto font-serif">
          <h1 className="font-bold text-3xl text-center capitalize tracking-wider">
            {article.title}
          </h1>
          <p className="mt-4 text-center text-slate-700">{article.author}</p>
          <div className="flex items-center justify-center gap-8 mt-4 text-2xl capitalize">
            <div className="border-2 px-4 py-2 rounded-full border-slate-600">
              likes: {likeCount}
            </div>
            <div
              className="border-2 px-4 py-2 rounded-full border-slate-600 hover:bg-slate-600 hover:text-pink-50 transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={handleLike}
            >
              like 👍
            </div>
          </div>
        </div>
        <hr className="border-[1.5px] border-black w-[80vw] mx-auto my-8" />
        <div className="relative z-20 rounded-md whitespace-pre-wrap indent-8 max-w-[500px] sm:max-w-[600px] md:max-w-[800px] mx-auto text-justify leading-10 text-md md:text-xl font-serif px-8">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={index} className="indent-8 mt-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div>{article.data}</div>
      </div>
    </>
  );
};

export default ArticlePage;
