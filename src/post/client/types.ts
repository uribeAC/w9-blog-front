import { Post } from "../types";

export interface PostClientStructure {
  getPosts: (pageNumber?: number) => Promise<Post[]>;
}
