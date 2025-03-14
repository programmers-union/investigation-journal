import React from "react";
import Link from "next/link";

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  readTime?: string;
  isExclusive?: boolean;
  slug: string;
}

interface SideArticlesProps {
  articles?: NewsArticle[]; 
}

const SideArticles: React.FC<SideArticlesProps> = ({ articles = [] }) => {
  if (articles.length === 0) return null; 

  return (
    <div className="side-articles">
      {articles.map((article) => (
        <div key={article.id} className="side-article">
          {article.isExclusive && <span className="exclusive-badge">EXCLUSIVE</span>}
          
          <h3 className="article-title">
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </h3>
          
          <p className="article-summary">{article.summary}</p>
          
          {article.readTime && (
            <div className="read-time">
              <span className="clock-icon">⏱</span> {article.readTime} read
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideArticles;
