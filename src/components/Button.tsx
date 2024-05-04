import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

type Props = {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  px?: string;
  white?: boolean | undefined;
};

export const Button = ({ children, className, href, px, white }: Props) => {
  const classes = `${px || "px-7"} ${
    white ? "text-n-8" : "text-n-1"
  } ${className}`;

  const renderButton = () => (
    <button
      className={cn(
        "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ",
        classes
      )}
    >
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  return renderButton;
};
