import { useEffect, useState } from "react";

const useArticles = () => {
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5050/articles");
        if (!response.ok) {
          throw new Error("Network response failure");
        }
        const data = await response.json();
        setArticleData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);


  return { articleData, loading, error };
};

export default useArticles