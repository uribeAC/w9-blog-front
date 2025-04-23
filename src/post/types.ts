export interface Post {
  _id: string;
  publishDate: Date;
  author: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  content: string;
}
