import { createContext } from "react";
import { ContextStructure } from "./types";

export const PostsContext = createContext<ContextStructure | null>(null);

PostsContext.displayName = "PostsContext";
