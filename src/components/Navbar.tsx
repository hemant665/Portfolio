import React from 'react'
import Button from '../components/Button'

const Navbar = () => {

const Navelements = ["Home", "About","Skills","Work","Contact"]


  return (
    <div className='flex justify-between items-center py-6 bg-amber-200'>
      <h1 className='font-semibold text-3xl'>Hemant Kumar</h1>
        <div>
          <ul className='flex gap-7'>
              {Navelements.map((item,indx) => (
                <li key={indx}> {item} </li>
              ))}
          </ul>
        </div>
        <Button value="Let's Talk" className='' />
    </div>
  )
}

export default Navbar