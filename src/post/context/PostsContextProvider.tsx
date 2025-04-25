import { PropsWithChildren } from "react";
import { PostsContext } from "./PostsContext";
import PostsContextStructure from "./types";
import usePosts from "../hooks/usePosts";

const PostsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { loadPostsByPage, posts, postsTotal } = usePosts();

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
