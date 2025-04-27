import { useEffect } from "react";
import usePostsContext from "../../context/hooks/usePostsContext";
import PostForm from "../../components/PostForm/PostForm";
import "./AddPostPage.css";

const AddPostPage: React.FC = () => {
  const { postsTotal, loadPostsByPage, createPost } = usePostsContext();

  useEffect(() => {
    loadPostsByPage();
  }, [loadPostsByPage]);

  return (
    <>
      <header className="page-header">
        <h2 className="page-header__title">Crear nuevo post</h2>
        <span className="page-header__counter page-header__counter--hidden">
          posts totales: {postsTotal}
        </span>
      </header>
      <PostForm action={createPost} />
    </>
  );
};

export default AddPostPage;
