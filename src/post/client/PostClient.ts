import { Post } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPosts = async (): Promise<Post[]> => {
    const response = await fetch(`${this.apiUrl}/posts`);

    const { posts } = (await response.json()) as { posts: Post[] };

    return posts;
  };
}

export default PostClient;
