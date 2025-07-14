import React from 'react'
import { IoLogoReact } from "react-icons/io5";


interface cardProps {
      Icon: ReactComponnt;
      title:string;
}

const ButtonCard:React.FC<cardProps> = ({Icon,title}) => {
  return (
    <div className='flex gap-2 py-1 px-3 rounded-2xl bg-white items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.20)]'>
      {/* <div className='text-lg '>
            <Icon className='text-sky-600 '/>
      </div> */}
      <div className='text-lg '>
            <IoLogoReact className='text-sky-600 '/>
      </div>

      <h2>React</h2>
    </div>
  )
}

export default ButtonCard