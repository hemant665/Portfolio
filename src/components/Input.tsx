import clsx from 'clsx';
import React from 'react'


interface InputProps {
      label: string;
      InputClass?: string;
      placeholder: string;
      type: 'text' | 'email';
}

const Input:React.FC<InputProps> = ({label,InputClass,placeholder,type}) => {

const baseClass = 'w-full rounded-xl py-5 px-5 bg-[#F6F7F9] outline-none'

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor="input">{label}</label>
      <input type={type} id='input' className={clsx(baseClass,InputClass)} placeholder={placeholder} />
    </div>
  )
}

export default Input