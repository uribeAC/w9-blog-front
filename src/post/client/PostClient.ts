import { mapPostsDtoToPosts } from "../dto/mappers";
import { PostClientStructure, PostsData, PostsDtoData } from "./types";

class PostClient implements PostClientStructure {
  private apiUrl = import.meta.env.VITE_API_URL;

  public getPosts = async (pageNumber?: number): Promise<PostsData> => {
    const fetchUrl = !pageNumber
      ? `${this.apiUrl}/posts`
      : `${this.apiUrl}/posts?page=${pageNumber}`;

    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error("Error fetching posts");
    }

    const { posts: postsDto, postsTotal } =
      (await response.json()) as PostsDtoData;

    const posts = mapPostsDtoToPosts(postsDto);

    const postsData: PostsData = {
      posts,
      postsTotal,
    };

    return postsData;
  };
}

export default PostClient;
