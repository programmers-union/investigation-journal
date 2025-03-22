// components/LifestyleArticle.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

interface LifestyleArticleItem {
  id: number;
  title: string;
  subtitle: string;
  source: string;
  imageUrl: string;
  readTime: number;
  slug: string;
}

interface LifestyleArticleSectionProps {
  sectionTitle?: string;
  articles: LifestyleArticleItem[];
}

const LifestyleArticleSection: React.FC<LifestyleArticleSectionProps> = ({ 
  sectionTitle, 
  articles 
}) => {
  return (
    <div className="lifestyle-section">

      
      <div className="lifestyle-articles">
        {articles.map((article) => (
          <div key={article.id} className="lifestyle-article">
            <Link href={`/article/${article.slug}`} className="article-link">
              <div className="article-image-container">
                <img src={article.imageUrl} alt={article.title} className="article-image" />
              </div>
              
              <div className="article-source">{article.source}</div>
              
              <h3 className="article-title">{article.title}</h3>
              
              <p className="article-subtitle">{article.subtitle}</p>
              
              <div className="article-read-time">
                <i className="bi bi-clock"></i> {article.readTime} min read
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleArticleSection;