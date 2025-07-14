import clsx from 'clsx';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


interface ButtonsProps {
  value: string;
  type?: 'button' | "submit" ;
  variant?: 'rounded' | 'fullRounded';
  arrow?: boolean;
  className?: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



const Button:React.FC<ButtonsProps> = ({
  value,
  type = 'button',
  variant = 'rounded',
  className= '',
  arrow = false,
  onclick,
}) => {

  const BaseStyle = 'text-white flex items-center gap-2 text-lg py-1 px-4 rounded-lg bg-blue-500 cursor-pointer ease-out transition-all duration-200';  

  const varientStyle = {
    rounded : '',
    fullRounded: ''
  }

  return (
    <button 
      aria-label='hello'
      type={type}
      onClick={onclick}
      arrow

      className={clsx(BaseStyle,className, varientStyle[variant])}>{value} {arrow && <FaArrowRight />}</button>
  )
}

export default Button