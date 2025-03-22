import ArticleSection from "@/components/articleSection";
import NewsHeadline from "@/components/newsHeadline";
import OpinionSection from "@/components/opinion";
import Article from "../types/Article";
import NewsBox from "@/components/newsBox";
import NewsSection from "@/components/newsSection";
import PopularNewsSection from "@/components/popular";
import Newspara from "@/components/newsPara";
import Columnist from "@/components/coloumnist";
import WorldNewsSection from "@/components/worldNews";
import LifestyleArticleSection from "@/components/lifeStyleComponent";
import SideArticles from "@/components/sideArticle";
import NewsHead from "@/components/newsHead";
import RealEstateInsights from "@/components/insight";


const article = {
  title:
    "National Amnesty for Convertible Blank Firing Guns: An Effort at Public Safety",
  subtitle:
    "Law enforcement authorities throughout the United Kingdom have announced a national amnesty campaign targeting specific models of blank-firing guns that can be easily modified to discharge live ammunition. This initiative aims to remove potentially dangerous weapons from circulation in response to alarming data indicating that criminal groups are increasingly obtaining these firearms for lethal intent. Four brands of Turkish-made top-venting blank firers (TVBFs) are specifically targeted under the amnesty: Retay, Ekol, Ceonic, and Blow. These models are distinct from traditional blank-firing weapons due to their ease of modification. Testing by the National Crime Agency (NCA) revealed that these guns can be turned into functioning firearms capable of firing live rounds using basic home tools without specialized technical skills.",
  
};

const article1 = {
  title:
    "2024 AML Highlights and Priorities for 2025: A Global Overview",
  subtitle:
    "As 2024 draws to a close, the global fight against money laundering has seen significant advancements, with major jurisdictions and international bodies strengthening their anti-money laundering (AML) frameworks. The United States, United Kingdom, European Union, and the Financial Action Task Force (FATF) have all implemented critical reforms, while the conclusion of the 2024 electoral cycle has introduced new political dynamics that could shape AML priorities in 2025. Below, we examine the key developments of 2024 and the challenges ahead.",
  
};
const article2 = {
  title:
    "Recent Developments in Cryptocurrency Regulation and Enforcement: A Shift in U.S. Policy",
  subtitle:
    "The opening months of 2025 have seen significant developments in the regulation and enforcement of cryptocurrency in the United States, signaling a dramatic shift in the federal government’s approach. The Trump Administration has taken steps to relax oversight of the crypto markets, while private litigation and isolated enforcement actions continue to shape the industry. Below is a concise breakdown of the key events, their implications, and what lies ahead.",
  
};
const article3 = {
  title:
    " A Turning Point in Global Bribery and Corruption Enforcement",
  subtitle:
    "Global law firm Hogan Lovells has released its Bribery & Corruption Outlook for 2025, shedding light on evolving enforcement trends and regulatory shifts worldwide. The report identifies 2025 as a pivotal year for anti-corruption efforts, driven by political changes, technological advancements, and new legal frameworks. With jurisdictions like the U.S., UK, and EU introducing significant reforms, corporations face heightened compliance challenges and an increasingly complex enforcement landscape.",
  
};
const article4 = {
  title:
    "White Collar and Enforcement Outlook 2025: DOJ’s Shifting Priorities and Supreme Court Cases to Watch",
  subtitle:
    "As 2025 unfolds, the U.S. Department of Justice (DOJ) under Attorney General Pam Bondi has unveiled a sweeping overhaul of its enforcement priorities, focusing on national security, transnational crime, and immigration. Simultaneously, two high-profile cases before the U.S. Supreme Court—Kousisis v. United States and Thompson v. United States—could redefine the scope of federal fraud statutes, with significant implications for white-collar crime enforcement. This report examines the DOJ’s new directives, the dissolution of key task forces, and the potential impact of pending Supreme Court rulings.",
  
};
const article5 = {
  title:
    "Synthetic Drugs in Latin America and the Caribbean: Key Findings from the INCB",
  subtitle:
    "The International Narcotics Control Board (INCB) has released its latest reports, highlighting the rapid proliferation of synthetic drugs and their transformative impact on illicit markets worldwide. Published on March 4, the reports underscore how synthetic drug producers exploit legal loopholes and adapt manufacturing methods to evade authorities, enabling the mass production of substances like methamphetamine, fentanyl, MDMA, and various synthetic cocktails. This evolution has led to increasingly complex drug markets, characterized by a surge in new psychoactive substances (NPS), “designer” precursors, and innovative drug combinations that fall outside international regulations.",
  
};
const article6 = {
  title:
    "Operation Mille: A Coordinated Crackdown on Organized Crime in the South West",
  subtitle:
    "In a sweeping effort to dismantle organized crime networks involved in the illegal drug trade, police forces across the South West of England launched Operation Mille, a multi-agency initiative that resulted in the seizure of thousands of cannabis plants, numerous arrests, and the disruption of criminal operations. The operation, which involved officers from Avon and Somerset, Wiltshire, Gloucestershire, Devon and Cornwall, Dorset, and the South West Regional Organised Crime Unit, underscores the growing threat posed by organized crime groups (OCGs) and their exploitation of vulnerable individuals.",
  
};
const article7 = {
  title:
    "Brockton Man Sentenced to 30 Months for Defrauding Takeda Pharmaceutical of $2.3 Million",
  subtitle:
    "A Massachusetts man has been sentenced to 30 months in federal prison for orchestrating a sophisticated scheme to defraud Takeda Pharmaceutical Company Limited (Takeda) of 1.9 million condominium in Boston’s Seaport District. Montronde’s girlfriend, Priya Bhambi, a former senior employee at Takeda, was also implicated in the scheme and sentenced to 46 months in prison.",
  
};
const article8 = {
  title:
    "Major Cannabis Network Denounced: £1.7 million drug seizure across Sussex",
  subtitle:
    "Police have detained seventeen people and seized cannabis plants worth almost £1.7 million in a broad sweep-through investigation on illegal narcotics activities around Sussex. Targeting 19 separate sites around the county, the synchronized searches reflect one of the most important anti-drug operations in the area in recent years.One of the most significant findings came at an industrial property on Maple Road in Eastbourne, where investigators found 500 cannabis plants—almost thirty percent of all the seizures. This site emphasizes the industrial-scale operation authorities were fighting against.What we have seen are not small-scale personal grows, but professional setups meant for maximum yield and profit, said a police spokesman who asked to remain anonymous due to the ongoing nature of the inquiry. The advanced equipment, scale of production, and distribution systems in place indicate organized criminal involvement.",
  
};
const featuredArticles = [
  {
    title: "Dominican National Extradited to U.S. for Murder, Narcotics, and Firearms Charges in Failed Warehouse Robbery",
    subtitle:
      "A high-profile extradition case has brought Marco Tulio Fernandez-Rodriguez, a 24-year-old Dominican national, to the United States to face charges related to a violent attempted robbery in Mount Vernon, New York.",
    readTime: 8,
    comments: 29,
    source:'WSJ magazine',
    imageUrl:
      "https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2024-09/aaecb4f9a499b990399f02a497e0900a_l_92f07057b0f26831f4353a81a66b608c.jpg",
  },
  {
    title: "Eight Alleged Members and Associates of the “GoodFellas” Gang Indicted on Federal Racketeering Charges",
    subtitle:
      "Eight alleged members and associates of the Atlanta-based street gang GoodFellas have been indicted on federal racketeering charges, including Attempted Murder in Aid of Racketeering and Aggravated Assault with a Deadly Weapon in Aid of Racketeering.",
    readTime: 6,
    
    imageUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/150408105255-hatton-garden-heist.jpg?q=w_3000,h_2000,x_0,y_0,c_fill",
  },
  {
    title:
      "Georgian Organized Crime Boss and Associates Sentenced for Extortion Offenses",
    subtitle: "Acting U.S. Attorney Matthew Podolsky announced the sentencing of four individuals linked to a Georgian organized crime group for extortion offenses. The group, led by Vazha Gabadadze, a high-ranking member of the vor v zakone criminal hierarchy, engaged in violent threats and intimidation to extort money from a victim. The case highlights the international reach of organized crime and the collaborative efforts of U.S. law enforcement to bring such criminals to justice.",
    
    imageUrl:
      "https://civil.ge/wp-content/uploads/2020/12/MIASCREENGRAB1230.png",
  },
  {
    title: "U.S. Supreme Court Removes Hurdle to Anti-Money Laundering Law, but Enforcement Remains on Hold",
    subtitle:
      "The U.S. Supreme Court recently declined to block enforcement of the Corporate Transparency Act (CTA), a key anti-money laundering law requiring businesses to disclose their beneficial owners. However, the law remains temporarily suspended due to conflicting lower court rulings, leaving its ultimate fate in the hands of the Trump administration.",
    readTime: 6,
   
    imageUrl:
      "https://www.reuters.com/resizer/v2/UMZRPZ4S4FPQXNSPW7GK735LWQ.jpg?auth=5424209f4b745006015e2b12cbc2a1981600b3ae14d10a12ae1f6b56f154833b",
  },
  {
    title: "Atlanta Gang Trial Concludes with Acquittals for Remaining Defendants",
    subtitle:
      "The long-running gang and racketeering trial in Atlanta, which once included rapper Young Thug, concluded Tuesday with a jury acquitting the last two defendants of murder and gang-related charges. This marked the end of Georgia's longest criminal trial, a major court battle over alleged gang activity connected to the music industry.",
    readTime: 6,
   
    imageUrl:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2024-11/241122-Young-Thug-ch-1352-fbd852.jpg",
  },
  
];

const articlesData = [
  {
    title:
      "Darién Gap Migration Reversal: AGC's Smuggling Empire Takes Economic Hit",
    imageUrl:
      "https://i0.wp.com/insightcrime.org/wp-content/uploads/2023/11/descarga-1.jpg?resize=350%2C200&quality=100&ssl=1",
    comments: "1",
    date: "March 11, 2025",
    readTime: "5 min read",
  },
  {
    title: "Healthcare Providers and Laboratory Marketers Settle $1.9M Kickback Allegations ",
    imageUrl:
      "https://mednetconcepts.com/mednetconnect/wp-content/uploads/2020/01/stethoscope-legal-MNC-796x445.jpg",
    comments: "6",
    date: "March 10, 2025",
    readTime: "4 min read",
  },
  {
    title: "Former CEO of Subprime Auto Lender Sentenced to Four Years in Prison for $67 Million Fraud Schemes",
    imageUrl:
      "https://s3-rd-prod.chicagobusiness.com/styles/1024x512/s3/obi-pixel7propix-aZKJEvydrNM-unsplash%20%281%29.jpg",
    comments: "450",
    date: "March 9, 2025",
    readTime: "7 min read",
  },
  {
    title:
      "Two Men Accused of Embezzling $1.4 Million from St. Louis County Restaurant",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeMrxAjdZy7B3vCsR1x02_z1QyZm-wzi8pg&s",
    comments: "1",
    date: "March 11, 2025",
    readTime: "5 min read",
  },
];

const newsArticles = [
  {
    title:
      "Grimsby Man Jailed in Big Drug Operation Inside the £100,000 Cannabis Network",
    description:
      "With his pivotal involvement in a sophisticated narcotics operation valued at more than £100,000, 39-year-old Grimsby resident Adam Cooledge has been sentenced to six years in jail, severely undermining organized crime in North East Lincolnshire.",
 
    readTime: 5,
    subArticles: ["Living on Crowle Drive in Grimsby, Cooledge eventually entered a guilty plea to three major charges: cocaine, diamorphine, and cannabis manufacturing conspiracy"],
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

const newsArticles2 = [
  {
    title:
      "James LaForte Sentenced to 11½ Years for RICO Conspiracy, Obstruction, and Retaliation in Par Funding Fraud Case",
    description:
      "James LaForte, 48, of New York, NY, has been sentenced to 137 months (11½ years) in prison for his role in a sprawling criminal enterprise tied to the fraudulent investment scheme known as Par Funding. LaForte, who served as an enforcer for the operation, was also ordered to pay $2.5 million in restitution and will face three years of supervised release, including 12 months of home confinement.",
   
    readTime: 5,
    
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
const newsArticles3 = [
  {
    title:
      "OCC Announces Enforcement Actions for February 2025: A Detailed Overview",
    description:
      "The Office of the Comptroller of the Currency (OCC) has unveiled a series of enforcement actions against national banks, federal savings associations, and individuals affiliated with these institutions. These measures, announced in February 2025, aim to address unsafe or unsound banking practices, violations of law, and breaches of fiduciary duty. The OCC also introduced updates to its enforcement action search tool, enhancing transparency and accessibility for the public. Below is a structured breakdown of the key actions, individuals involved, and their implications.",
    
    readTime: 5,
    
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
const newsArticles4 = [
  {
    title:
      "Nigerian Citizen Pleads Guilty to Bank Fraud and Money Laundering Conspiracies, Causing Over $1.7 Million in Losses",
    description:
      "David Daniyan, a Nigerian citizen who has lived in the U.S. under multiple aliases since the 1990s, admitted to his role in a sophisticated bank fraud and money laundering operation led by Oluwaseun Adekoya",
    
    readTime: 5,
    
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
    title: "Polish Man with Horror Obsession Convicted of Murdering Pensioner",
    imageUrl:
      "https://static.standard.co.uk/2025/03/10/15/10150637-5e312ba3-8286-4eda-8121-81abbad2e45d.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000",
    slug: "polish-man-horror-obsession-murder-conviction",
  },
  {
    id: 2,
    title: "Tommy Robinson loses bid to bring legal challenge over prison segregation ",
    imageUrl:
      "data:image/jpeg;base64,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",
    slug: "tommy-robinson-prison-segregation-legal-challenge",
  },
  {
    id: 3,
    title:
      "Stephen Lawrence Killer ‘Accepts Involvement’ in Attack, Parole Board Reveals",
    imageUrl:
      "https://static.standard.co.uk/2025/03/20/22/1db16107887723e25f83c32f718d3c1fY29udGVudHNlYXJjaGFwaSwxNzQyNTkyMzE3-2.69032574.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000",
    slug: "stephen-lawrence-killer-admits-involvement-parole",
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
  sectionTitle: "Cyber Crimes",
  mainArticle: {
    id: "syria-kurdish",
    title:
      "Technology-Enabled Crime: The £1.3 Million Keyless Car Theft Operation",
    summary:
      "Two men have been sentenced to prison for orchestrating a sophisticated keyless car theft scheme worth £1.3 million, highlighting the evolving nature of vehicle theft in the digital age. Jack Reid, 22, and Connor Jones, 25, were jailed this week at Chelmsford Crown Court after pleading guilty to burglary and conspiracy to steal motor vehicles across several English counties.",
    image:
      "https://i.dailymail.co.uk/1s/2025/02/28/19/95702885-0-image-a-4_1740771252081.jpg",
    slug: "syria-kurdish-militia-integration",
  },
};

const sideArticles = [
  {
    id: "100m-cocaine-smuggling-cornwall-fishing-boat",
    title:
      "Cornwall: Men Found Guilty of £100m Cocaine Fishing Boat Plot",
    summary:
      "In a landmark case highlighting the reach of international drug trafficking, three men have been found guilty of orchestrating a £100 million cocaine smuggling operation using a fishing boat off the coast of Cornwall. The plot, which involved transporting over a ton of cocaine from South America to the UK, was uncovered following a coordinated investigation by the National Crime Agency (NCA) and Border Force. The case sheds light on the sophisticated methods employed by organized crime groups to smuggle drugs into the country and the challenges faced by law enforcement in disrupting these networks.",
    readTime: "7 min",
    slug: "100m-cocaine-smuggling-cornwall-fishing-boat",
  },
  {
    id: "grindr-gang-jailed-midlands-assaults-robberies",
    title: "Gang Jailed After Using Grindr Dating App to Assault and Rob Victims in the Midlands",
    summary:
      "A criminal gang that exploited the dating app Grindr to target, assault, and rob victims across the Midlands has been sentenced to a combined total of over 50 years in prison. The group, which operated between 2020 and 2022, lured men to locations under the guise of romantic encounters before violently robbing them. The case has raised concerns about the safety of online dating platforms and highlighted the need for greater awareness and vigilance among users. The investigation, led by West Midlands Police, uncovered a pattern of predatory behavior that left victims traumatized and financially devastated.",
    readTime: "5 min",
    isExclusive: true,
    slug: "grindr-gang-jailed-midlands-assaults-robberiest",
  },
];

const personalFinanceData = {
  sectionTitle: "Vilont Crimes",
  mainArticle: {
    id: "retirement-planning",
    title:
      "Violent Crime in Scotland Surges to Highest Level in Seven Years",
    summary:
      "Scotland has witnessed a significant rise in violent crime, reaching its highest level in seven years, according to recent data released by the Scottish Government. The figures, which cover the period from 2022 to 2023, reveal a troubling upward trend in offenses such as assault, robbery, and homicide, sparking concerns among law enforcement, policymakers, and communities. This surge in violent crime underscores the growing challenges faced by authorities in tackling organized crime, gang-related violence, and social inequalities that contribute to criminal behavior.",
    image:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/AD4A/production/_108926344_gettyimages-157402733.jpg.webp",
    slug: "secure-retirement-savings",
  },
 
};

const lifestyleArticles = [
  {
    id: 1,
    title: "Cosa Nostra Evolution in Sicily: Technology Meets Tradition",
   
    subtitle:
      "Italian officials issued 181 arrest warrants across four districts of Palermo in a sweeping operation that concluded on Tuesday, targeting Sicily's Cosa Nostra. The primary objective was to prevent the Mafia from rebuilding its cupola, the governing body. However, the investigation has revealed something far more complex: a criminal organization torn between its legendary past and an uncertain future, attempting to adapt to modern reality while preserving its traditional power structures.",
    source: "WSJ. MAGAZINE",
    imageUrl:
      "https://s.yimg.com/ny/api/res/1.2/Z01lpWJxtxNMSr5LQCKlKw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/fox_news_text_979/f58f1ef905eb9b00483b1481aa05d9f7", //
    readTime: 7,
    slug: "daughter-dying-let-her-go",
  },
];

const lifestyleArticles2 = [
  {
    id: 1,
    title: "NCA Warns of Money Laundering Linked to People Smuggling",
    subtitle:
      "The National Crime Agency (NCA) has issued a stark warning about the growing connection between money laundering and people smuggling networks operating in the UK. According to a recent report, criminal gangs are increasingly using sophisticated financial systems to launder profits from their illicit activities, making it harder for authorities to track and disrupt their operations. This alarming trend highlights the evolving tactics of organized crime groups and underscores the need for enhanced cross-agency collaboration to combat these intertwined threats.",
      source: "WSJ. MAGAZINE",
    
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpf7fQEEjX9UC_z_2WmcFl7gz7tqsHAPxBQ&s", 
    readTime: 7,
    slug: "daughter-dying-let-her-go",
  },
];

const humanTraffickData = {
  sectionTitle: "Human Trafficking",
  mainArticle: {
    id: "florida-investigates-andrew-tate-human-trafficking",
    title:
      "Florida Opens Criminal Investigation into Andrew Tate and Brother Tristan",
    image:
      "https://images.ctfassets.net/pjshm78m9jt4/3hCLT8sVp3t11dEmFQ28ep/b6083426a4884722a9865db15dcabf09/AP25058658180136.jpg?fm=avif&fit=fill&w=830&h=467&q=80",
    slug: "florida-investigates-andrew-tate-human-trafficking",
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

const extortionRacketeeringData
={
  sectionTitle:"Extortion and Racketeering",
  mainArticle:{
    id:"uk-kids-targeted-sextortion-criminals",
    title:"Children in UK as Young as 11 Targeted by Sextortion Criminals, Data Reveals",
    image:"https://i.guim.co.uk/img/media/31bc4db3586d4e9b5700fa5992b753d68e512c4f/0_576_8640_5184/master/8640.jpg?width=620&dpr=2&s=none&crop=none",
    slug:"uk-kids-targeted-sextortion-criminals"
  },

}

const cyberCrimeData = {
  sectionTitle: "Cyber Crime",
  mainArticle: {
    id: "uk-warns-quantum-hackers-cybersecurity-threat",
    title:
      "UK Cybersecurity Agency Warns Over Risk of Quantum Hackers",
    image:
      "https://i.guim.co.uk/img/media/6951203ead30f3218ee1c5b13c35cf57f7ecb4e9/0_282_5300_3182/master/5300.jpg?width=620&dpr=2&s=none&crop=none",
    slug: "uk-warns-quantum-hackers-cybersecurity-threat",
  },
  
};

const organizedCrimeData
={
  sectionTitle:"Organized Crime",
  mainArticle:{
    id:"mother-cocaine-family-uk-most-wanted",
    title:"Mother in Cocaine-Dealing Family Placed on Most Wanted List After Going on the Run",
    image:"https://static.independent.co.uk/2024/08/08/16/Lynne-Leyson-split.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp",
    slug:"mother-cocaine-family-uk-most-wanted"
  },

}




export default function Home() {
  return (
    <div className="container">

      <div className="row ">
      <div className="col-lg-3 py-5">
          <NewsSection articles={newsArticles} />
        </div>
        <div className="col-lg-6">
          <ArticleSection />
        </div>

        <div className="col-lg-3 px-3">
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
          <NewsSection articles={newsArticles2} />
        </div>
        <div className="col-lg-5">
          <NewsBox article={featuredArticles[2]} />
        </div>
        <div className="col-lg-4">
          <NewsSection articles={newsArticles3} />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-lg-3">
          <NewsSection articles={newsArticles4} />
        </div>
        <div className="col-lg-5">
          <NewsBox article={featuredArticles[3]} />
        </div>
        <div className="col-lg-4">
          <NewsHeadline {...article1} />
        </div>
      </div>
      <div className="row">
        <div className="row col-lg-8">
          <div className="col-lg-6 px-2">
            <NewsHeadline {...article2} />
          </div>

          <div className="col-lg-6">
            <NewsHeadline {...article3} />
          </div>
          <div className="col-lg-6">
            <NewsHeadline {...article4} />
          </div>
          <div className="col-lg-6">
            <NewsHeadline {...article5} />
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

        <div className="col-lg-4 ">
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
          <NewsHeadline {...article6} />
        </div>
        <div className="col-lg-6">
          <NewsHeadline {...article7} />
        </div>
        <div className="col-lg-6">
          <NewsHeadline {...article8} />
        </div>

        <div className="col-lg-6">
          <NewsBox article={featuredArticles[4]} />
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

      <div className="row news-container">
        <div className="col-lg-6 py-2">
          <WorldNewsSection
            sectionTitle={personalFinanceData.sectionTitle}
            mainArticle={personalFinanceData.mainArticle}
          />
        </div>
        <div className="col-lg-4 py-5">
          <LifestyleArticleSection
            sectionTitle="Lifestyle"
            articles={lifestyleArticles2}
          />
        </div>
      </div>
      <SideArticles articles={sideArticles} />
     
      <div className="row">
      <div className=" col-lg-6 rrr">
        <NewsHead
          sectionTitle={humanTraffickData.sectionTitle}
          mainArticle={humanTraffickData.mainArticle}
          sideArticles={humanTraffickData.sideArticles}
        />
      </div>
      <div className=" col-lg-6 rrr">
        <NewsHead
          sectionTitle={extortionRacketeeringData.sectionTitle}
          mainArticle={extortionRacketeeringData.mainArticle}
         
          
        />
      </div>
      </div>

      <div className="row">
      <div className=" col-lg-6 rrr">
        <NewsHead
          sectionTitle={organizedCrimeData.sectionTitle}
          mainArticle={organizedCrimeData.mainArticle}
          
        />
      </div>
      <div className=" col-lg-6 rrr">
        <NewsHead
          sectionTitle={cyberCrimeData.sectionTitle}
          mainArticle={cyberCrimeData.mainArticle}
          
        />
      </div>
      </div>

      {/* <RealEstateInsights 
        sectionTitle={celebrityNews.sectionTitle}
        articles={celebrityNews.articles}
        provider={celebrityNews.provider}
      /> */}
      
      {/* Market trends section without provider logo */}
      {/* <RealEstateInsights 
        sectionTitle={marketTrends.sectionTitle}
        articles={marketTrends.articles}
      /> */}


    </div>
  );
}
