// components/WorldNewsSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  image?: string;
  readTime?: string;
  isExclusive?: boolean;
  slug: string;
}

interface WorldNewsSectionProps {
  sectionTitle?: string;
  mainArticle?: NewsArticle;
  sideArticles?: NewsArticle[];
}

const WorldNewsSection: React.FC<WorldNewsSectionProps> = ({ 
  sectionTitle = "News", 
  mainArticle, 
  sideArticles = [] 
}) => {
  return (
    <section className="world-news-section">
      <div className="section-header">
        {sectionTitle && <h2 className="section-title">{sectionTitle}</h2>}
        <Link href="/world" className="view-all-link">
          View All <span className="arrow">›</span>
        </Link>
      </div>

      <div className="">
        {/* Render only if mainArticle exists */}
        {mainArticle && (
          <div className="main-article">
            {mainArticle.image && (
              <div className="main-article-image">
                <Link href={`/article/${mainArticle.slug}`}>
                  <img 
                    src={mainArticle.image} 
                    alt={mainArticle.title} 
                    width={600}
                    height={400}
                    className="img-fluid"
                  />
                </Link>
              </div>
            )}
            
            <div className="main-article-content">
              <h3 className="article-title">
                <Link href={`/article/${mainArticle.slug}`}>
                  {mainArticle.title}
                </Link>
              </h3>
              <p className="article-summary">{mainArticle.summary}</p>
              {mainArticle.readTime && (
                <div className="read-time">
                  <span className="clock-icon">⏱</span> {mainArticle.readTime} read
                </div>
              )}
            </div>
          </div>

          
        )}


      </div>
    </section>
  );
};


export default WorldNewsSection;