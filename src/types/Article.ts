export default interface Article {
    id?: number;
  slug?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  category?: string;
  image_url?: string;
  publish_date?: string;
  subtitle?:string;
  readTime?:number;
  content?: string;      
  seo_title?: string;
  seo_description?: string;
  comments?:number
}