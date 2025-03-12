import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';

type NewsItem = {
  title: string;
  description: string;
  time?: string;
  readTime?: string | number;
  subArticles?: string[];
  image?: string;
};


type Props = {
  articles: NewsItem[];
};

export default function NewsSection({ articles}: Props) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="container news-section">
      {/* Left Section */}
      <div className="">
        {articles[0] && (
          <>
            <h2 className="title">{articles[0].title}</h2>
            <p className="description">{articles[0].description}</p>
            <div className="meta-data">
              {articles[0].time && (
                <span className="time">{articles[0].time}</span>
              )}
              {articles[0].readTime && (
                <span className="read-time">
                  {articles[0].readTime} min read
                </span>
              )}
            </div>
            {articles[0].subArticles && (
              <ul className="sub-articles">
                {articles[0].subArticles.map((article, index) => (
                  <li key={index}>
                    <strong>{article}</strong>
                  </li>
                ))}
              </ul>
            )}

          </>
        )}
      </div>
    </div>
  );
}
