import React from 'react'
// import { IoLogoReact } from "react-icons/io5";


interface cardProps {
      // Icon: ReactComponnt;
      title:string;
}

const ButtonCard:React.FC<cardProps> = ({title}) => {
  return (
    <div className='flex gap-2 py-2 px-3 rounded-2xl bg-white items-center justify-center text-sm shadow-xs shadow-blue-500'>
      {title}
    </div>
  )
}

export default ButtonCard