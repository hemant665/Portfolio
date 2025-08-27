import clsx from "clsx";
import React, { Children } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";


interface ButtonsProps {
  children?: React.ReactNode;
  value?: string;
  type?: "button" | "submit";
  variant?: "effects" | "simple";
  arrow?: boolean;
  send?:boolean;
  className?: string;
  isDisable?: boolean;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonsProps> = ({
  children,
  value,
  type = "button",
  variant = "simple",
  className = "",
  arrow = false,
  send = false,
  isDisable,
  onclick,
}) => {
  const BaseStyle =
    "flex items-center gap-2 py-1 px-5 rounded-lg group cursor-pointer bg-[#1C45E3] ease-out transition-all duration-200  shadow-md";

  const varientStyle = {
    simple: "hover:-translate-y-1 text-[#1C45E3]",
    effects: "rounded-3xl hover:bg-[#4030D9] hover:-translate-y-1 hover:gap-3",
  };

  return (
    <button
      aria-label="hello"
      type={type}
      onClick={onclick}
      className={clsx(BaseStyle, className, varientStyle[variant])}
      disabled={isDisable}
    >
      {value} {Children && children} {arrow && <FaArrowRight className="hover:translate:x-2" /> } {send && <RiSendPlaneFill />} 
    </button>
  );
};

export default Button;
