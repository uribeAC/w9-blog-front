import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { Post } from "../types";
import { PostsContext } from "./PostsContext";
import PostClient from "../client/PostClient";
import PostsContextStructure from "./types";
import { PostDto } from "./dto/types";
import { mapPostsDtoToPosts } from "./dto/mappers";

const PostsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsTotal, setPostsTotal] = useState<number>(0);

  const postClient = useMemo(() => new PostClient(), []);

  const loadPostsByPage = useCallback(
    async (pageNumber?: number): Promise<void> => {
      const postsDto: PostDto[] = await postClient.getPosts(pageNumber);

      const posts = mapPostsDtoToPosts(postsDto);

      const postsTotal = posts.length;

      setPosts(posts);
      setPostsTotal(postsTotal);
    },
    [postClient],
  );

  const postsContextValue: PostsContextStructure = {
    posts,
    postsTotal,
    loadPostsByPage,
  };

  return (
    <PostsContext.Provider value={postsContextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
