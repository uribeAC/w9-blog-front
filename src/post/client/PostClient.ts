import { PostDto } from "../context/dto/types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPosts = async (pageNumber?: number): Promise<PostDto[]> => {
    const fetchUrl = !pageNumber
      ? `${this.apiUrl}/posts`
      : `${this.apiUrl}/posts?page=${pageNumber}`;

    const response = await fetch(fetchUrl);

    const { posts } = (await response.json()) as { posts: PostDto[] };

    return posts;
  };
}

export default PostClient;
