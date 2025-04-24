import React from "react";
import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PostsPage from "../post/pages/PostsPage/PostsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/posts" />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
