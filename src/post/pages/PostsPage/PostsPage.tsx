import React, { useEffect } from "react";
import PostsList from "../../components/PostsList/PostsList";
import { useParams } from "react-router";
import usePostsContext from "../../hooks/usePostsContext";
import Pagination from "../../../components/Pagination/Pagination";
import "./PostsPage.css";

const PostsPage: React.FC = () => {
  const { loadPostsByPage, posts, postsTotal } = usePostsContext();
  const { page } = useParams<{ page: string }>();

  const pageNumber = !page ? 1 : Number(page);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    loadPostsByPage(pageNumber);
  }, [loadPostsByPage, pageNumber]);

  return (
    <>
      <header className="page-header">
        <h2 className="page-header__title">Posts</h2>
        <span className="page-header__counter">
          {posts.length} / {postsTotal}
        </span>
      </header>
      <PostsList posts={posts} />
      <Pagination postsTotal={postsTotal} currentPage={pageNumber} />
    </>
  );
};

export default PostsPage;
