// components/NewsArticle.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the interface for a single article
interface Article {
  imageUrl: string;
  title: string;
  comments: string;
  date: string;
  readTime: string;
}

// Define the interface for the component props
interface NewsParaProps {
  articles: Article[];
}

const Newspara: React.FC<NewsParaProps> = ({ articles }) => {
  return (
    <div className="container my-5">
      {articles.map((article, index) => (
        <div key={index} className="row news-article mb-5">
          <div className="col-md-4 col-lg-3">
            <div className="article-image-container">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="img-fluid news-image"
              />
            </div>
          </div>
          <div className="col-md-8 col-lg-9">
            <h2 className="article-title fw-bold mb-3">{article.title}</h2>
            <div className="article-meta d-flex align-items-center mb-2">
              <div className="comments me-3">
                <i className="bi bi-chat-left"></i> {article.comments}
              </div>
              <div className="date me-3">
                {article.date}
              </div>
              <div className="read-time">
                <i className="bi bi-clock"></i> {article.readTime}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Newspara;