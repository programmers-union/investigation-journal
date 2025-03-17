// components/BusinessCategoryPage.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


// Define the article interface
interface FeaturedArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
}

// Define component props interface
interface NewsBoxCatPageProps {
  categoryTitle: string;
  featuredArticles: FeaturedArticle[];
}

const NewsBoxCat: React.FC<NewsBoxCatPageProps> = ({
  categoryTitle = "Business",
  featuredArticles = [],
}) => {
  return (
    <div className="container">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <h1 className="categoryHeading border-top border-bottom">{categoryTitle}</h1>
            <hr className="divider"/>
          </div>
        </div>
        
        {featuredArticles.map((article, index) => (
          <div className='roshin' key={article.id || index} >
            <div className="roshinwidth row mt-4 mb-4">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <Link href={article.url} passHref>
                  <div className="imageContainer-1">
                    <img
                      src={article.imageUrl}
                      alt={article.imageAlt}
                      width={610}
                      height={407}
                      className="image"
                    />
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 ms-4">
                <Link href={article.url} passHref>
                  <h2 className="title">{article.title}</h2>
                </Link>
                <p className="description">{article.description}</p>
                <div className="metaInfo">
                  <span className="date">{article.date}</span>
                  <span className="readTime">
                    <i className="bi bi-clock me-1"></i>
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
            {index < featuredArticles.length - 1 && <hr className="articleDivider" />}
      </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoxCat;