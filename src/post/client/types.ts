import { Post } from "../types";
import { PostDto } from "../dto/types";

export interface PostClientStructure {
  getPosts: (pageNumber?: number) => Promise<PostsData>;
}
export interface PostsDtoData {
  posts: PostDto[];
  postsTotal: number;
}

export interface PostsData {
  posts: Post[];
  postsTotal: number;
}
