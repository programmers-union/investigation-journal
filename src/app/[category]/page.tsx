import { Metadata } from "next";
import NewsBoxCat from "@/components/newsBoxCat";
import SmallNewsBox from "@/components/smallNewsBox";
import SideArticles from "@/components/sideArticle";
import Columnist from "@/components/coloumnist";
import PopularNewsSection from "@/components/popular";

// Define the article type
interface Article {
  title: string;
  description: string;
  imageUrl: string;
  timeAgo: string;
  readTime: string;
  slug: string;
  imageAlt?: string;
}

const articleData = {
  title: "Auto & Transport Roundup: Market Talk",
  description: "Find insight on Porsche, BMW, Daimler Truck and more, in the latest Market Talks covering Auto and Transport.",
  date: "March 15, 2025",
  readTime: "6 min read",
  imageUrl: "https://images.wsj.net/im-990865?width=300&height=200&pixel_ratio=1.5",
  imageAlt: "Car manufacturing assembly line",
  url: "/auto-transport/market-talk"
};

const sideArticles = [
  {
    id: "trump-envoy",
    title:
      "Trump Envoy Further Inflames Israel's Concerns About Direct Talks With Hamas",
    summary:
      "Adam Boehler suggested Hamas was willing to lay down its arms in exchange for a truce, in comments that frustrated some Israeli officials.",
    readTime: "7 min",
    slug: "trump-envoy-hamas-talks",
  },
  {
    id: "us-china-summit",
    title: "U.S., China Discuss a Trump-Xi Summit for June",
    summary:
      "Talks about a birthday summit, which are in the early stages, come as the Trump administration is ramping up tariffs against China.",
    readTime: "5 min",
    isExclusive: true,
    slug: "us-china-trump-xi-summit",
  },
];

const columnistsData = [
  {
    title:
      "The Most Liked Man in D.C. Might Be This Silver-Haired Russian Ready to Reset NHL History",
    author: "Jason Gay",
    authorImage: "https://images.wsj.net/im-738777/AM",
    authorSlug: "jason-gay",
  },
  {
    title: "Is Buying an eSIM for a Trip Abroad Worth the Hassle?",
    author: "Dawn Gilbertson",
    authorImage: "https://images.wsj.net/im-548480",
    authorSlug: "dawn-gilbertson",
  },
  {
    title: "Why America Now Eats a Crazy Number of Avocados",
    author: "Ben Cohen",
    authorImage: "https://images.wsj.net/im-555630/ba",
    authorSlug: "ben-cohen",
  },
];

const popularNewsData = [
  {
    id: 1,
    title: "The Latest Car Technology Is Starting to Drive People Nuts",
    imageUrl:
      "https://images.wsj.net/im-38800692?width=74&height=74&pixel_ratio=1.5",
    slug: "car-technology-driving-people-nuts",
  },
  {
    id: 2,
    title: "Russia Trots Out Its Newest Weapons in Ukraine: Horses",
    imageUrl:
      "https://images.wsj.net/im-65408548?width=74&height=74&pixel_ratio=1.5",
    slug: "russia-new-weapons-horses",
  },
  {
    id: 3,
    title:
      "The High-Pressure Tactics Attorney Gloria Allred Uses—On Her Own Clients",
    imageUrl:
      "https://images.wsj.net/im-40531606?width=74&height=74&pixel_ratio=1.5",
    slug: "gloria-allred-high-pressure-tactics",
  },
  {
    id: 4,
    title:
      "ICE Arrests Columbia Student Who Helped Lead Pro-Palestinian Protests",
    imageUrl:
      "https://images.wsj.net/im-49881607?width=74&height=74&pixel_ratio=1.5",
    slug: "gloria-allred-high-pressure-tactics",
  },
];
// Define metadata for SEO
export const metadata: Metadata = {
  title: "Business News & Analysis",
  description: "Latest business news, market analysis, and industry insights.",
};

// Fetch articles on the server (SSR)
async function fetchArticles(category: string): Promise<Article[]> {
  // In a real app, this would fetch from an API based on the category
  return [
    {
      title: "Tech, Media & Telecom Roundup: Market Talk",
      description: "Find insight on PagerDuty, Reddit, Ulta and more in the latest Market Talks covering Technology, Media and Telecom.",
      imageUrl: "https://images.wsj.net/im-04765069?width=610&height=407&pixel_ratio=1.5",
      timeAgo: "9 hours ago",
      readTime: "3 min read",
      slug: "tech-media-telecom-roundup",
      imageAlt: "Circuit board closeup"
    },


  ];
}

// Category page component
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const articles = await fetchArticles(category);
  
  // Transform the articles to match the BusinessCategoryPage component's expected format
  const formattedArticles = articles.map(article => ({
    id: article.slug,
    title: article.title,
    description: article.description,
    date: article.timeAgo,
    readTime: article.readTime,
    imageUrl: article.imageUrl,
    imageAlt: article.imageAlt || article.title,
    url: `/${category}/${article.slug}`
  }));

  return (
    <main className="container">
      <NewsBoxCat
        categoryTitle={category.charAt(0).toUpperCase() + category.slice(1)}
        featuredArticles={formattedArticles}
      />

      <div className="section-2">
      <SmallNewsBox 
        title={articleData.title}
        description={articleData.description}
        date={articleData.date}
        readTime={articleData.readTime}
        imageUrl={articleData.imageUrl}
        imageAlt={articleData.imageAlt}
        url={articleData.url}
      />
      </div>
      <div className="section-2">
      <SmallNewsBox 
        title={articleData.title}
        description={articleData.description}
        date={articleData.date}
        readTime={articleData.readTime}
        imageUrl={articleData.imageUrl}
        imageAlt={articleData.imageAlt}
        url={articleData.url}
      />
      </div>
      <div className="section-2">
      <SmallNewsBox 
        title={articleData.title}
        description={articleData.description}
        date={articleData.date}
        readTime={articleData.readTime}
        imageUrl={articleData.imageUrl}
        imageAlt={articleData.imageAlt}
        url={articleData.url}
      />
      </div>
      <div className="section-2">
      <SmallNewsBox 
        title={articleData.title}
        description={articleData.description}
        date={articleData.date}
        readTime={articleData.readTime}
        imageUrl={articleData.imageUrl}
        imageAlt={articleData.imageAlt}
        url={articleData.url}
      />
      </div>
      <div className="section-2">
      <SmallNewsBox 
        title={articleData.title}
        description={articleData.description}
        date={articleData.date}
        readTime={articleData.readTime}
        imageUrl={articleData.imageUrl}
        imageAlt={articleData.imageAlt}
        url={articleData.url}
      />
      </div>
       
      <SideArticles articles={sideArticles} />
      <SideArticles articles={sideArticles} />

      <div className="section-2">
      <SmallNewsBox 
        title={articleData.title}
        description={articleData.description}
        date={articleData.date}
        readTime={articleData.readTime}
        imageUrl={articleData.imageUrl}
        imageAlt={articleData.imageAlt}
        url={articleData.url}
      />
      </div>
      <div className="section-2">
      <SmallNewsBox 
        title={articleData.title}
        description={articleData.description}
        date={articleData.date}
        readTime={articleData.readTime}
        imageUrl={articleData.imageUrl}
        imageAlt={articleData.imageAlt}
        url={articleData.url}
      />
      </div>
      <div className="section-2">
      <SmallNewsBox 
        title={articleData.title}
        description={articleData.description}
        date={articleData.date}
        readTime={articleData.readTime}
        imageUrl={articleData.imageUrl}
        imageAlt={articleData.imageAlt}
        url={articleData.url}
      />
      </div>
      <div className="col-lg-8">
          <Columnist columnists={columnistsData} />
        </div>
        <PopularNewsSection popularNews={popularNewsData} />
      
    </main>
  );
}