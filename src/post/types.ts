export interface Post {
  id: string;
  publishDate: Date;
  author: string;
  title: string;
  imageUrl: string;
  smallImageUrl?: string;
  detailImageUrl?: string;
  imageAlt: string;
  tags: string[];
  previewTags: string[];
  content: string;
  previewContent: string;
}

export type PostData = Omit<
  Post,
  | "id"
  | "publishDate"
  | "tags"
  | "imageAlt"
  | "previewContent"
  | "previewTags"
  | "smallImageUrl"
  | "detailImageUrl"
> & {
  publishDate?: string;
  imageAlt?: string;
  tags?: string;
  smallImage?: string;
};
