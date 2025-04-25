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

    const { postsDtoData } = (await response.json()) as {
      postsDtoData: PostsDtoData;
    };

    const posts = mapPostsDtoToPosts(postsDtoData.posts);

    const postsData: PostsData = {
      posts: posts,
      postsTotal: postsDtoData.postsTotal,
    };

    return postsData;
  };
}

export default PostClient;
