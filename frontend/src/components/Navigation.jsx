import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='flex justify-around items-center bg-red-600 text-[15px] text-white h-[70px] fixed left-0 right-0 bottom-0'>
      <Link to='/'>
        <div className='  flex flex-col items-center'>
          <img className=' mb-[5px] h-4 invert-100' src="home.png" alt="" />
          <h1 classn>
नया ऑर्डर</h1>
        </div>
      </Link>
      <Link to='/cart'>
        <div className=' flex flex-col items-center'>
          <img className='mb-[5px] h-4 invert-100' src="shopping-bag.png" alt="" />
          <h1>
आज का ऑर्डर</h1>
        </div>
      </Link>
      <Link to='/recent'>
        <div className=' flex flex-col items-center'>
          <img className='mb-[5px] h-4 invert-100' src="history.png" alt="" />
          <h1>

पुराना हिसाब</h1>
        </div>
      </Link>
      
    </div>
  )
}

export default Navigation