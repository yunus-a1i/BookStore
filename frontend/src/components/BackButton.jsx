import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackButton = ({ destination = '/'}) => {
  return (
    <div className='flex'>
      <Link 
      to={destination}
      className='bg-gray-300 text-black px-3 py-2 my-2 rounded-lg w-fit hover:bg-gray-400/60'
        >
            <BsArrowLeft className='text-xl'/>
        </Link>
    </div>
  )
}

export default BackButton
