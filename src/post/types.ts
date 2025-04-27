export interface Post {
  id: string;
  publishDate: Date;
  author: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  previewTags: string[];
  content: string;
  previewContent: string;
}

export type PostData = Omit<
  Post,
  "id" | "publishDate" | "tags" | "imageAlt" | "previewContent" | "previewTags"
> & {
  publishDate?: string;
  imageAlt?: string;
  tags?: string[];
};
