import React, { ComponentProps, PropsWithChildren } from "react";
import "./Button.css";

type AllButtonProps = ComponentProps<"button">;

interface ButtonProps extends AllButtonProps {
  classModifierName: string;
  action: () => void;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  classModifierName,
  action,
  ...buttonProps
}) => {
  return (
    <button
      type="button"
      className={`button button--${classModifierName}`}
      onClick={action}
      {...buttonProps}
    ></button>
  );
};

export default Button;
