import { useContext } from "react";
import PostsContextStructure from "../types";
import { PostsContext } from "../PostsContext";

const usePostsContext = (): PostsContextStructure => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("Missing context for Post provider");
  }

  return context;
};

export default usePostsContext;
