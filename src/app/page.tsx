import ArticleSection from "@/components/articleSection";
import NewsHeadline from "@/components/newsHeadline";
import OpinionSection from "@/components/opinion";
import Article from "../types/Article";
import NewsBox from "@/components/newsBox";
import NewsSection from "@/components/newsSection";
import TipBox from "@/components/popular";
import PopularNewsSection from "@/components/popular";
import Newspara from "@/components/newsPara";
import Columnist from "@/components/coloumnist";
import WorldNewsSection from "@/components/worldNews";
import LifestyleArticleSection from "@/components/lifeStyleComponent";
import SideArticles from "@/components/sideArticle";
import NewsHead from "@/components/newsHead";

const article: Article = {
  title:
    "Ukraine Hits Moscow With Its Biggest Drone Attack, Hours Ahead of Talks",
  subtitle:
    "Russia said it had downed more than 300 drones just hours before the first high-level talks between Washington and Kyiv since a tense Oval Office meeting.Russia said it had downed more than 300 drones just hours before the first high-level talks between Washington and Kyiv since a tense Oval Office meeting.",
  readTime: 4,
};

const featuredArticles = [
  {
    title: "The Rise and Fall of the 'Napa Valley of Cannabis'",
    subtitle:
      "Pueblo, Colo., had high hopes for a marijuana boom. Now financial troubles plague the industry.",
    readTime: 8,
    comments: 29,
    imageUrl:
      "https://images.wsj.net/im-43970643?width=368&height=245&pixel_ratio=1.5",
  },
  {
    title: "Ozempic's New Frontier: The War On Aging",
    subtitle:
      "Scientists are exploring whether GLP-1 drugs could slow aging processes and prevent age-related diseases.",
    readTime: 6,
    comments: 42,
    imageUrl:
      "https://images.wsj.net/im-88059167?width=300&height=200&pixel_ratio=1.5",
  },
  {
    title:
      "Why the U.S. Keeps Losing to China in the Battle Over Critical Minerals",
    subtitle:
      "Syrah Resources thought its graphite mine in Mozambique would challenge China’s dominance in the global market, but then things started going off the rails",
    readTime: 8,
    comments: 29,
    imageUrl:
      "https://images.wsj.net/im-57864084?width=368&height=245&pixel_ratio=1.5",
  },
  {
    title: "ICE Arrest of Columbia Student Marks New Era of Campus Politics",
    subtitle:
      "President Trump says the arrest of Mahmoud Khalil is the first of many in the administration’s campaign to dismantle what it calls extreme leftist ideology on U.S. campuses.",
    readTime: 6,
    comments: 2237,
    imageUrl:
      "https://images.wsj.net/im-23743224?width=368&height=245&pixel_ratio=1.5",
  },
];

const articlesData = [
  {
    title:
      "He Built the Museum of Failure Into a Success. Now He Wants It to Flop.",
    imageUrl:
      "https://images.wsj.net/im-86049320?width=220&height=147&pixel_ratio=1.5",
    comments: "1",
    date: "March 11, 2025",
    readTime: "5 min read",
  },
  {
    title: "Canada’s New Leader Embodies Trump’s Least Favorite Things ",
    imageUrl:
      "https://images.wsj.net/im-12660632?width=220&height=147&pixel_ratio=1.5",
    comments: "6",
    date: "March 10, 2025",
    readTime: "4 min read",
  },
  {
    title: "Inside America’s Fluoride Rebellion",
    imageUrl:
      "https://images.wsj.net/im-07831904?width=220&height=147&pixel_ratio=1.5",
    comments: "450",
    date: "March 9, 2025",
    readTime: "7 min read",
  },
  {
    title:
      "He Built the Museum of Failure Into a Success. Now He Wants It to Flop.",
    imageUrl:
      "https://images.wsj.net/im-86049320?width=220&height=147&pixel_ratio=1.5",
    comments: "1",
    date: "March 11, 2025",
    readTime: "5 min read",
  },
];

const newsArticles = [
  {
    title:
      "Marco Rubio Says Talks in Saudi Arabia Key to Resuming Support for Ukraine",
    description:
      "Trump’s decision to stop military aid and reduce intelligence sharing has put pressure on Kyiv to negotiate.",
    time: "25 min ago",
    readTime: 5,
    subArticles: ["Zelensky’s High-Wire Act: Satisfying Ukrainians—and Trump"],
  },
  {
    title:
      "Why the U.S. Keeps Losing to China in the Battle Over Critical Minerals",
    description:
      "Syrah Resources thought its graphite mine in Mozambique would challenge China’s dominance in the global market, but then things started going off the rails.",
    image:
      "https://images.wsj.net/im-57864084?width=368&height=245&pixel_ratio=1.5",
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

const worldNewsData = {
  sectionTitle: "World",
  mainArticle: {
    id: "syria-kurdish",
    title:
      "Syria to Integrate U.S.-Backed Kurdish Militia Into Armed Forces in Win for New Leader",
    summary:
      "The agreement strengthens the government's effort to unify the country after sectarian killings inflamed tensions among minorities.",
    image:
      "https://images.wsj.net/im-98750252?width=608&height=405&pixel_ratio=1.5",
    slug: "syria-kurdish-militia-integration",
  },
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

const personalFinanceData = {
  sectionTitle: "Personal Finance",
  mainArticle: {
    id: "retirement-planning",
    title:
      "The Retirement-Savings Weapon Doctors and Lawyers Use to Build Wealth",
    summary:
      "Cash balance plans have exploded in popularity and now hold more than $1 trillion. of wealth.",
    image:
      "https://images.wsj.net/im-58227129?width=620&height=413&pixel_ratio=1.5",
    slug: "secure-retirement-savings",
  },
  sideArticles: [
    {
      id: "budgeting-tips",
      title: "5 Budgeting Tips to Save More Every Month",
      summary:
        "Learn how small financial changes can add up to big savings over time.",
      readTime: "4 min",
      slug: "budgeting-tips-saving",
    },
    {
      id: "investing-101",
      title: "Investing 101: A Beginner's Guide to Building Wealth",
      summary:
        "Understanding stocks, bonds, and mutual funds to create a profitable portfolio.",
      readTime: "6 min",
      isExclusive: true,
      slug: "investing-101-guide",
    },
  ],
};

const lifestyleArticles = [
  {
    id: 1,
    title: "My Daughter Was Dying. Could I Let Her Go?",
    subtitle:
      "In her debut memoir, Firstborn, Lauren Christensen must make a choice: continue with a pregnancy that could put her life at risk, or leave the state to terminate.",
    source: "WSJ. MAGAZINE",
    imageUrl:
      "https://images.wsj.net/im-13237841?width=288&height=192&pixel_ratio=1.5", //
    readTime: 7,
    slug: "daughter-dying-let-her-go",
  },
];

const realEstateData = {
  sectionTitle: "Real Estate",
  mainArticle: {
    id: "blackstone-debt-fund",
    title:
      "Exclusive | Blackstone Raises Largest Commercial Property Debt Fund With $8 Billion Haul",
    image:
      "https://images.wsj.net/im-80123332?width=220&height=147&pixel_ratio=1.5",
    slug: "blackstone-debt-fund",
  },
  sideArticles: [
    {
      id: "castle-home",
      title: "Making a Centuries-Old English Castle Feel More Like Home",
      slug: "castle-home",
    },
    {
      id: "kitchen-table-vs-island",
      title:
        "Why a Kitchen Table Beats an Island, According to People Who Made the Switch",
      slug: "kitchen-table-vs-island",
    },
  ],
};

const sportsData={
  sectionTitle:"Sports",
  mainArticle:{
    id:"the-blaffing-ball",
    title:"The Baffling Call That Decided a Champions League Shootout",
    image:"https://images.wsj.net/im-58700551?width=220&height=147&pixel_ratio=1.5",
    slug:"the-blaffing-ball"
  },
  sideArticles:[
    {
      id:"fall-in-love",
      title:"Why You Should Fall in Love With the Cleveland Cavaliers",
      slug:"fall-in-love"
    },
    {
      id:"commodity-in-baseball",
      title:"They’re the Most Valuable Commodity in Baseball—and They’re Hiding in the Bullpen",
      slug:"commodity-in-baseball"
    }
  ]
}

export default function Home() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-lg-8">
          <ArticleSection />
        </div>
        <div className="col-lg-4">
          <OpinionSection />
        </div>
      </div>
      <div className="row py-4 ">
        <div className="row">
          <div className="col-lg-4">
            <NewsHeadline {...article} />
          </div>
          <div className="col-lg-4">
            <NewsBox article={featuredArticles[0]} />
          </div>
          <div className="col-lg-4">
            <NewsBox article={featuredArticles[1]} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <NewsSection articles={newsArticles} />
        </div>
        <div className="col-lg-5">
          <NewsBox article={featuredArticles[2]} />
        </div>
        <div className="col-lg-4">
          <NewsSection articles={newsArticles} />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-lg-3">
          <NewsSection articles={newsArticles} />
        </div>
        <div className="col-lg-5">
          <NewsBox article={featuredArticles[3]} />
        </div>
        <div className="col-lg-4">
          <NewsHeadline {...article} />
        </div>
      </div>
      <div className="row">
        <div className="row col-lg-8">
          <div className="col-lg-6">
            <NewsHeadline {...article} />
          </div>

          <div className="col-lg-6">
            <NewsHeadline {...article} />
          </div>
          <div className="col-lg-6">
            <NewsHeadline {...article} />
          </div>
          <div className="col-lg-6">
            <NewsHeadline {...article} />
          </div>
        </div>
        <div className="col-lg-4">
          <PopularNewsSection popularNews={popularNewsData} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <Newspara articles={articlesData} />
        </div>

        <div className="col-lg-4">
          <PopularNewsSection popularNews={popularNewsData} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <Columnist columnists={columnistsData} />
        </div>

        <div className="col-lg-4">
          <PopularNewsSection popularNews={popularNewsData} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <NewsHeadline {...article} />
        </div>
        <div className="col-lg-6">
          <NewsHeadline {...article} />
        </div>
        <div className="col-lg-6">
          <NewsHeadline {...article} />
        </div>

        <div className="col-lg-6">
          <NewsBox article={featuredArticles[3]} />
        </div>
      </div>

      <div className="row news-container">
        <div className="col-lg-6 py-2 ">
          <WorldNewsSection
            sectionTitle={worldNewsData.sectionTitle}
            mainArticle={worldNewsData.mainArticle}
          />
        </div>
        <div className="col-lg-4 py-5">
          <LifestyleArticleSection
            sectionTitle="Lifestyle"
            articles={lifestyleArticles}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 py-2">
          <WorldNewsSection
            sectionTitle={personalFinanceData.sectionTitle}
            mainArticle={personalFinanceData.mainArticle}
          />
        </div>
        <div className="col-lg-4 py-5">
          <LifestyleArticleSection
            sectionTitle="Lifestyle"
            articles={lifestyleArticles}
          />
        </div>
      </div>
      <SideArticles articles={sideArticles} />
      <SideArticles articles={sideArticles} />
      <div className="row">
      <div className=" col-lg-6 rrr">
        <NewsHead
          sectionTitle={realEstateData.sectionTitle}
          mainArticle={realEstateData.mainArticle}
          sideArticles={realEstateData.sideArticles}
        />
      </div>
      <div className=" col-lg-6 rrr">
        <NewsHead
          sectionTitle={sportsData.sectionTitle}
          mainArticle={sportsData.mainArticle}
          sideArticles={sportsData.sideArticles}
        />
      </div>
      </div>

      <div className="row">
      <div className=" col-lg-6 rrr">
        <NewsHead
          sectionTitle={sportsData.sectionTitle}
          mainArticle={sportsData.mainArticle}
          sideArticles={sportsData.sideArticles}
        />
      </div>
      <div className=" col-lg-6 rrr">
        <NewsHead
          sectionTitle={realEstateData.sectionTitle}
          mainArticle={realEstateData.mainArticle}
          sideArticles={realEstateData.sideArticles}
        />
      </div>
      </div>


    </div>
  );
}
