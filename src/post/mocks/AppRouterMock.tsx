import React from "react";
import { Route, Routes } from "react-router";
import PostsPage from "../pages/PostsPage/PostsPage";
import AddPostPage from "../pages/AddPostPage/AddPostPage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";

const AppRouterMock: React.FC = () => {
  return (
    <Routes>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/add-post" element={<AddPostPage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
    </Routes>
  );
};

export default AppRouterMock;
