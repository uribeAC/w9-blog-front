import { Post } from "../types";
import { PostDto } from "./types";

export const mapPostsDtoToPosts = (postsDto: PostDto[]): Post[] => {
  const posts = postsDto.map<Post>((postDto) => mapPostDtoToPost(postDto));

  return posts;
};

export const mapPostDtoToPost = ({
  _id,
  publishDate,
  ...postDto
}: PostDto): Post => {
  const post: Post = {
    ...postDto,
    id: _id,
    publishDate: new Date(publishDate),
  };

  return post;
};
