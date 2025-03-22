// import  Article from "@/types/Article";
// import prisma from "@/lib/prisma";

// type Paths = {
//   category: string;
//   slug: string;
// };

// // should return all the categories with slug for static generation
// export async function getArticleSlugs(): Promise<Paths[]> {
//   const rtnList: Paths[] = [];
//   const allPost = (await prisma.article.findMany({where:{domain:"pressorahub.com"}})) as Article[];
//   allPost.forEach((article) => {
//     rtnList.push({
//       category: article.category.toLowerCase(),
//       slug: article.slug,
//     });
//   });
//   return rtnList;
// }

// export async function getAllCategories() {
//   const articles = await getAllArticles(); // Fetch all articles
//   const categories = [
//     ...new Set(articles.map((article) => article.category.toLowerCase())),
//   ];
//   return categories;
// }

// // find article by slug and return the article
// export async function getArticleBySlug(slug: string) {
//   const article = await prisma.article.findFirst({
//     where: {
//       slug: slug,
//       domain:"pressorahub.com"
//     },
//   });
//   return article;
// }

// // Return all the articles in a categories
// export async function getArticlesByCategory(
//   category: string
// ): Promise<Article[]> {
//   const categoryArticleList = await prisma.article.findMany({
//     where: {
//       category: category,
//       domain:"pressorahub.com"
//     },
    
//   });
//   return categoryArticleList as Article[];
// }


// // Return all the articles across all the categories
// export async function getAllArticles() : Promise<Article[]> {
//   const articles = await prisma.article.findMany({where:{domain:"pressorahub.com"}}) as Article[];
//   return articles;
// }

// // Return related articles from a article slug
// export async function getRelatedArticles(slug: string) {
//   console.log(slug)
//   const articles = getAllArticles();
//   return (await articles).slice(2,8)
  
// }