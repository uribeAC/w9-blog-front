import { useState } from "react";
import { ModalContextStructure } from "../context/types";

const useModal = (): ModalContextStructure => {
  const [modal, setModal] = useState(true);
  const [modalText, setModalText] = useState<string>("");

  const toggleModal = () => setModal(!modal);

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
