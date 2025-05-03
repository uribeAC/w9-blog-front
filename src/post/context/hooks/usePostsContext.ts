import { useContext } from "react";
import { ContextStructure } from "../types";
import { PostsContext } from "../PostsContext";

const usePostsContext = (): ContextStructure => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("Missing context for Post provider");
  }

  return context;
};

export default usePostsContext;
