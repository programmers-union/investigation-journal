// components/NewsHeadline.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from '@/types/Article';
interface NewsHeadlineProps extends Article {}

const NewsHeadline: React.FC<NewsHeadlineProps> = ({ title, subtitle, readTime }) => {
  return (
    <div className="newsHeadlineContainer">
      <h2 className="headlineTitle">{title}</h2>
      <p className="headlineSubtitle">{subtitle}</p>
      <div className="readTime">
        <span className="readTimeIcon">&#9201;</span> {readTime}
      </div>
    </div>
  );
};

export default NewsHeadline;