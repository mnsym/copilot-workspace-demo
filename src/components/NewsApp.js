import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/api/news');
      setArticles(result.data.items);
    };
    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>
            <a href={article.link}>{article.title}</a>
          </h2>
          <p>{article.contentSnippet}</p>
          <p>{format(new Date(article.pubDate), 'yyyy/MM/dd HH:mm:ss')}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsApp;
