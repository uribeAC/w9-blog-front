import { PostDto } from "../context/dto/types";

export interface PostClientStructure {
  getPosts: (pageNumber?: number) => Promise<PostDto[]>;
}
