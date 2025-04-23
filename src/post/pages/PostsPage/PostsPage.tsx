import React from "react";
import PostsList from "../../components/PostsList/PostsList";
import { Post } from "../../types";
import "./PostsPage.css";

const PostsPage: React.FC = () => {
  const posts: Post[] = [];

  return (
    <>
      <header className="page-header">
        <h2 className="page-header__title">Posts</h2>
        <span className="page-header__counter">0 - 5 / 30</span>
      </header>
      <PostsList posts={posts} />
    </>
  );
};

export default PostsPage;
