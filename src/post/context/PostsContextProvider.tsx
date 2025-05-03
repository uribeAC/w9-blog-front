import { PropsWithChildren } from "react";
import { PostsContext } from "./PostsContext";
import { ContextStructure } from "./types";
import usePosts from "../hooks/usePosts";
import useModal from "../hooks/useModal";

const PostsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    loadPostsByPage,
    posts,
    postsTotal,
    createPost,
    deletePost,
    loadPostById,
  } = usePosts();

  const { activateModal, modal, modalText, toggleModal } = useModal();

  const postsContextValue: ContextStructure = {
    posts,
    postsTotal,
    loadPostsByPage,
    createPost,
    deletePost,
    loadPostById,
    activateModal,
    modal,
    modalText,
    toggleModal,
  };

  return (
    <PostsContext.Provider value={postsContextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
