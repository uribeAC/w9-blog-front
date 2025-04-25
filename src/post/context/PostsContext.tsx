import { createContext } from "react";
import PostsContextStructure from "./types";

export const PostsContext = createContext<PostsContextStructure | null>(null);

PostsContext.displayName = "PostsContext";
