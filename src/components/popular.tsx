
// components/PopularNewsSection.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


interface PopularNewsItem {
  id: number;
  title: string;
  imageUrl: string;
  slug: string;
}

interface PopularNewsSectionProps {
  popularNews: PopularNewsItem[];
}

const PopularNewsSection: React.FC<PopularNewsSectionProps> = ({ popularNews }) => {
  return (
    <div className="popular-news-section">
      {/* <div className="tip-box">
        <div className="tip-content">
          <div className="envelope-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7L12 14L2 7" />
            </svg>
          </div>
          <div className="tip-text">
            <div className="tip-title">Got a tip for us?</div>
            <div className="tip-subtitle">Here's how to submit</div>
          </div>
        </div>
      </div> */}
      
      <hr className="divider border bottom border-black" />
      
      
      
      <div className="popular-news-list">
        {popularNews.map((newsItem) => (
          <Link href={`/news/${newsItem.slug}`} key={newsItem.id} className="popular-news-item">
            <div className="popular-news-content">
              <h3 className="popular-news-title">{newsItem.title}</h3>
            </div>
            <div className="popular-news-image">
              <img src={newsItem.imageUrl} alt={newsItem.title} className="news-thumb" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularNewsSection;