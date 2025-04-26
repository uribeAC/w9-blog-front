import React, { useEffect } from "react";
import PostsList from "../../components/PostsList/PostsList";
import usePostsContext from "../../hooks/usePostsContext";
import "./PostsPage.css";

const PostsPage: React.FC = () => {
  const { loadPostsByPage, posts, postsTotal } = usePostsContext();

  useEffect(() => {
    loadPostsByPage();
  }, [loadPostsByPage]);

  return (
    <>
      <header className="page-header">
        <h2 className="page-header__title">Posts</h2>
        <span className="page-header__counter">
          {posts.length} / {postsTotal}
        </span>
      </header>
      <PostsList posts={posts} />
    </>
  );
};

export default PostsPage;
