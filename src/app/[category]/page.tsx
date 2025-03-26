import { Metadata } from "next";
import NewsBoxCat from "@/components/newsBoxCat";
import SmallNewsBox from "@/components/smallNewsBox";
import SideArticles from "@/components/sideArticle";
import Columnist from "@/components/coloumnist";
import PopularNewsSection from "@/components/popular";
import cybercrimeData from '@/data/cybercrimeData.json'
import organizedCrimeData from '@/data/organizedCrimeData.json'
import criminalPsychologyData from '@/data/criminalPsychologyData.json'
import truecrimeStoriesData from    '@/data/truecrimeStoriesData.json'
import violentCrimeData from '@/data/violentCrimeData.json';
import drugTraffickingCrimeData from '@/data/drugTraffickingCrimeData.json';
import moneyLaunderingData from '@/data/moneyLaunderingData.json';
import extortionAndRacketeeringData from '@/data/extortionAndRacketeeringData.json';

// Define the article type
interface Article {
  title: string;
  description: string;
  imageUrl: string;
  timeAgo: string;
  readTime: string;
  slug: string;
  imageAlt?: string;
  date:string;
  url:string;
}

type Datatype = {
  articleData:Article
  
}



// Define metadata for SEO
export const metadata: Metadata = {
  title: "Business News & Analysis",
  description: "Latest business news, market analysis, and industry insights.",
};

// Fetch articles on the server (SSR)
function fetchArticles(category: string): any {
  if(category==='cybercrime'){
    return cybercrimeData
  }
  if(category === 'organized-crime'){
    return organizedCrimeData
  }
  if(category === 'criminal-psychology'){
    return criminalPsychologyData
  }
  if(category==='true-crime-stories'){
    return truecrimeStoriesData
  }
  if(category==='violent-crimes'){
    return violentCrimeData;
  }
  if(category==='drug-trafficking'){
    return drugTraffickingCrimeData;
  }
  if(category==='money-laundering'){
    return moneyLaunderingData;
  }
  if(category==='extortion-and-racketeering'){
    return extortionAndRacketeeringData;
  }
}

// Category page component
export default async function CategoryPage({ params }: { params: Promise<{ category: string } >}) {
  const { category } = await params;
  console.log("params:", params);
  console.log("category:", category);

  // Fetch articles based on the category
  const data = await fetchArticles(category);

  // Determine which dataset to use based on the category
  

  // Transform the articles to match the BusinessCategoryPage component's expected format
  // const formattedArticles = articles.map(article => ({
  //   id: article.slug,
  //   title: article.title,
  //   description: article.description,
  //   date: article.timeAgo,
  //   readTime: article.readTime,
  //   imageUrl: article.imageUrl,
  //   imageAlt: article.imageAlt || article.title,
  //   url: `/${category}/${article.slug}`
  // }));

  return (
    <main className="container">
      <NewsBoxCat
        categoryTitle={category.charAt(0).toUpperCase() + category.slice(1)}
        featuredArticles={data.featuredArticlesData}
      />
      
        <div className="section-2">
          {data.articleData.map((item:any)=>
          (<SmallNewsBox 
            title={item.title}
            description={item.description}
            date={item.date}
            readTime={item.readTime}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            url={item.url}
          />))}
        </div>
        <div className="row">
          <div className="col-lg-12 px-2">
          <SideArticles articles={data.sideArticles} />
          </div>
          {/* <div className="col-lg-6 px-2">
          <SideArticles articles={data.sideArticles} />
          </div> */}
        </div>

        <div className="row">
          <div className="col-lg-6">
          <Columnist columnists={data.columnistsData} />
          </div>
          <div className="col-lg-6">
          <Columnist columnists={data.columnistsData} />
          </div>
        </div>
       
       <div className="row">
        <div className="col-lg-6 px-2 ">
        <PopularNewsSection popularNews={data.popularNewsData} />
        </div>
        <div className="col-lg-6">
        <PopularNewsSection popularNews={data.popularNewsData} />
        </div>
       </div>
      
      
    </main>
  );
}