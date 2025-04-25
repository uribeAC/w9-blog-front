export interface PostDto {
  _id: string;
  publishDate: string;
  author: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  content: string;
}
