import { useState } from "react";
import { ModalContextStructure } from "../context/types";

const useModal = (): ModalContextStructure => {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const toggleModal = () => setModal((modal) => !modal);

  const activateModal = (text: string) => {
    setModalText(text);
    toggleModal();
  };

  return {
    modal,
    modalText,
    toggleModal,
    activateModal,
  };
};

export default useModal;
