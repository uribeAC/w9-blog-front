import { Post } from "../types";

interface PostsContextStructure {
  posts: Post[];
  postsTotal: number;
  loadPostsByPage: (pageNumber?: number) => Promise<void>;
}

export default PostsContextStructure;
