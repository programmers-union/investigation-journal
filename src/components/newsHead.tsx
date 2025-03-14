import React from "react";

interface NewsArticle {
  id: string;
  title: string;
  summary?: string;
  image?: string;
  slug: string;
}

interface NewsHeadProps {
  sectionTitle?: string;
  mainArticle?: NewsArticle;
  sideArticles?: NewsArticle[];
}

const NewsHead: React.FC<NewsHeadProps> = ({
  sectionTitle = "Real Estate",
  mainArticle = {
    id: "1",
    title: "Exclusive | Compass in Talks to Buy Warren Buffett's Real-Estate Brokerage Unit",
    image: "/images/real-estate-sign.jpg",
    slug: "compass-talks-buy-buffett-real-estate"
  },
  sideArticles = [
    {
      id: "2",
      title: "Exclusive | A $60 Million Condo Sale Sets a Record for Downtown Manhattan",
      slug: "60-million-condo-record-downtown-manhattan"
    },
    {
      id: "3",
      title: "They Brought 'White Lotus' Home With a $4 Million Renovation in Miami",
      slug: "white-lotus-home-renovation-miami"
    }
  ]
}) => {
  return (
    <div className="container-fluid px-0">
      {/* Section Header with View All */}
      <div className="row border-bottom border-top py-3">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h2 className="m-0 fw-bold fs-4">{sectionTitle}</h2>
          <a href="#" className="text-decoration-none text-primary fw-bold">
            View All <span>&rsaquo;</span>
          </a>
        </div>
      </div>

      {/* Main Article */}
      {mainArticle && (
        <div className="row border-bottom py-3">
          <div className="col-12 d-flex">
            <div className="col-4">
              {mainArticle.image && (
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </div>
            <div className="col-8 ps-3">
              <h3 className="fw-bold fs-5">{mainArticle.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Side Articles */}
      {sideArticles.map((article, index) => (
        <div key={article.id} className="row border-bottom py-3">
          <div className="col-12">
            <h3 className="fw-bold fs-5">{article.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsHead;