import React from "react";
import Layout from "../Layout/Layout";
import Modal from "../Modal/Modal";
import usePostsContext from "../../post/context/hooks/usePostsContext";

const App: React.FC = () => {
  const { toggleModal, modal, modalText } = usePostsContext();

  return (
    <>
      {modal && <Modal action={() => toggleModal()} text={modalText} />}
      <Layout />
    </>
  );
};

export default App;
