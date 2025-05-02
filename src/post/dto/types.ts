import { Post } from "../types";

export type PostDto = Omit<
  Post,
  "id" | "detailImageUrl" | "previewTags" | "previewContent" | "publishDate"
> & { _id: string; publishDate: string };
