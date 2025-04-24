import { mapPostsDtoToPosts } from "../context/dto/mappers";
import { PostDto } from "../context/dto/types";
import { Post } from "../types";
import { PostClientStructure } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPosts = async (pageNumber?: number): Promise<Post[]> => {
    const fetchUrl = !pageNumber
      ? `${this.apiUrl}/posts`
      : `${this.apiUrl}/posts?page=${pageNumber}`;

    const response = await fetch(fetchUrl);

    const { posts: postsDto } = (await response.json()) as { posts: PostDto[] };

    const posts = mapPostsDtoToPosts(postsDto);

    return posts;
  };
}

export default PostClient;
