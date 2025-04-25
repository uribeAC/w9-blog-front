import { Post } from "../types";
import { PostDto } from "./types";

export const mapPostsDtoToPosts = (postsDto: PostDto[]): Post[] => {
  const posts = postsDto.map<Post>(({ _id, publishDate, ...postDto }) => ({
    ...postDto,
    id: _id,
    publishDate: new Date(publishDate),
  }));

  return posts;
};
