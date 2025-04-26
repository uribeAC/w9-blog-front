import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import "@fontsource-variable/outfit/index.css";
import "./styles/styles.css";
import PostsContextProvider from "./post/context/PostsContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PostsContextProvider>
        <AppRouter />
      </PostsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
