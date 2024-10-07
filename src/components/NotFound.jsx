import React from 'react'
import notFound from '../assets/images/notfound.svg';

const NotFound = () => {
  return (
    <div>
        <img src={notFound} alt="" className='flex justify-center self-center ml-[150px] p-10 w-[1000px] h-[500px]'/>
    </div>
  )
}

export default NotFound
