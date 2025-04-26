import React, { ComponentProps, PropsWithChildren } from "react";
import "./Button.css";

type AllButtonProps = ComponentProps<"button">;

interface ButtonProps extends AllButtonProps {
  classModifierName: string;
  text: string;
  action: () => void;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  classModifierName,
  text,
  action,
  ...button
}) => {
  return (
    <button
      type="button"
      className={`button button--${classModifierName}`}
      onClick={action}
      {...button}
    >
      {text}
    </button>
  );
};

export default Button;
