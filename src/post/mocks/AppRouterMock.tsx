import React from "react";
import { Navigate, Route, Routes } from "react-router";
import PostsPage from "../pages/PostsPage/PostsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import AddPostPage from "../pages/AddPostPage/AddPostPage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";

const AppRouterMock: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/posts" />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/add-post" element={<AddPostPage />} />
      <Route path="/post/:id" element={<PostDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouterMock;
