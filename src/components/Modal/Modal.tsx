import React from "react";
import "./Modal.css";
import Button from "../Button/Button";

interface ModalProps {
  action: () => void;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ action, text }) => {
  return (
    <>
      <div className="modal-container" onClick={action}>
        <main className="modal">
          <h2 className="modal__text">{text}</h2>
          <Button action={action} text="X" classModifierName="modal" />
        </main>
      </div>
    </>
  );
};

export default Modal;
