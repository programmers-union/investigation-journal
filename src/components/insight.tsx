import React from "react";

// Define TypeScript interfaces for the data structures
interface NewsArticle {
  id: string;
  title: string;
  image: string;
  slug: string;
}

interface NewsProvider {
  name: string;
  logo: string;
}

interface RealEstateInsightsProps {
  sectionTitle: string;
  articles: NewsArticle[];
  provider?: NewsProvider;
}

const RealEstateInsights: React.FC<RealEstateInsightsProps> = ({
  sectionTitle,
  articles,
  provider
}) => {
  return (
    <div className="container-fluid px-0 mt-4 mb-5">
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h2 className="m-0 section-title">{sectionTitle}</h2>
          {provider && (
            <div className="provider-info">
              Content provided by 
              <img 
                src={provider.logo} 
                alt={provider.name} 
                className="ms-2 provider-logo" 
                height="20" 
              />
            </div>
          )}
        </div>
      </div>

      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-6 mb-4">
            <a href={`/article/${article.slug}`} className="text-decoration-none text-dark">
              <div className="d-flex article-item">
                <div className="article-image me-3">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="img-fluid" 
                    width="120" 
                  />
                </div>
                <div className="article-content">
                  <h3 className="fs-5 fw-bold mb-0">{article.title}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstateInsights;