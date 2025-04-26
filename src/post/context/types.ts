import { Post, PostData } from "../types";

interface PostsContextStructure {
  posts: Post[];
  postsTotal: number;
  loadPostsByPage: (pageNumber?: number) => Promise<void>;
  createPost: (postData: PostData) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
}

export default PostsContextStructure;
