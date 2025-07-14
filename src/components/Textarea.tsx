import clsx from 'clsx';
import React from 'react'


interface InputProps {
      label: string;
      InputClass?: string;
      placeholder: string;
      rows: number;
}



const Textarea:React.FC<InputProps> = ({label,InputClass,placeholder,rows}) => {
const baseClass = 'w-full rounded-xl py-2 px-4 bg-[#F6F7F9] outline-none resize-none'

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor="textarea">{label}</label>
      <textarea id='textarea' className={clsx(baseClass,InputClass)} placeholder={placeholder} rows={rows} />
    </div>
  )

}

export default Textarea