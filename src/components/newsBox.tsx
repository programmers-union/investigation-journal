// components/FeaturedNewsArticle.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from '@/types/Article';

interface FeaturedNewsArticleProps {
  article: Article;
}

const NewsBox: React.FC<FeaturedNewsArticleProps> = ({ article }) => {
  const { title, subtitle, readTime, comments, imageUrl } = article;
  console.log("article:",article);
  
  
  return (
    <div className="featured-article">
      {imageUrl && (
        <div className="featured-image-container">
          <img 
            src={imageUrl} 
            width={300}
            height={200}
            alt={title || "Featured article image"}
            className="featured-image"
          />
        </div>
      )}
      
      {title && <h2 className="featured-title">{title}</h2>}
      {subtitle && <p className="featured-subtitle">{subtitle}</p>}
      
      <div className="article-meta">
        {comments !== undefined && (
          <span className="comments-count">
            <i className="bi bi-chat"></i> {comments}
          </span>
        )}
        {readTime !== undefined && (
          <span className="read-time">
            <i className="bi bi-clock"></i> {readTime} min read
          </span>
        )}
      </div>
    </div>
  );
};

export default NewsBox;