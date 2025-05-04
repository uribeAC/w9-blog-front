import React from "react";
import Button from "../Button/Button";
import "./Modal.css";

interface ModalProps {
  action: () => void;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ action, text }) => {
  return (
    <>
      <button
        className="modal-background"
        onClick={action}
        aria-label="cerrar modal"
      />
      <main className="modal">
        <h2 className="modal__text">{text}</h2>
        <Button
          action={action}
          classModifierName="modal"
          aria-label="cerrar modal"
        >
          X
        </Button>
      </main>
    </>
  );
};

export default Modal;
