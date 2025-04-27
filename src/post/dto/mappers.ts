import { Post } from "../types";
import { PostDto } from "./types";

export const mapPostsDtoToPosts = (postsDto: PostDto[]): Post[] => {
  const posts = postsDto.map<Post>((postDto) => mapPostDtoToPost(postDto));

  return posts;
};

export const mapPostDtoToPost = ({
  _id,
  publishDate,
  content,
  tags,
  ...postDto
}: PostDto): Post => {
  const previewContent = content.split(" ").slice(0, 100).join(" ");
  const previewTags = tags.slice(0, 3);

  const post: Post = {
    ...postDto,
    previewContent,
    previewTags,
    tags,
    content,
    id: _id,
    publishDate: new Date(publishDate),
  };

  return post;
};
