import { useContext } from "react";
import PostsContextStructure from "../context/types";
import { PostsContext } from "../context/PostsContext";

const usePostsContext = (): PostsContextStructure => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("Missing context for Post provider");
  }

  return context;
};

export default usePostsContext;
