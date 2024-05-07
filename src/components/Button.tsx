import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
import { cn } from "../../@/lib/utils";

type Props = {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  px?: string;
  white?: boolean | undefined;
};

export const Button = ({
  children,
  className,
  px,
  href,
  white,
  onClick,
}: Props) => {
  const classes = `${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${
    className && className
  }`;

  const spanClasses = "relative z-10";

  const renderButton: () => JSX.Element = () => (
    <button
      onClick={onClick}
      className={cn(
        "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ",
        classes
      )}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a
      onClick={onClick}
      href={href}
      className={cn(
        "button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ",
        classes
      )}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};
