import { useEffect } from "react";
import usePostsContext from "../../hooks/usePostsContext";
import "./AddPostPage.css";
import PostForm from "../../components/PostForm/PostForm";

const AddPostPage: React.FC = () => {
  const { postsTotal, loadPostsByPage } = usePostsContext();

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
      <PostForm />
    </>
  );
};

export default AddPostPage;
