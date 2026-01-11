import React from 'react'
import Navigation from '../components/Navigation'

const Recent = () => {
  return (
    <div className='p-3 mt-4'>
      <div className='text-gray-700 text-center text-[30px] font-extrabold'>
        मेरा पुराना हिसाब </div>
      <div className='flex flex-col justify-center items-center h-[100px] w-full bg-gray-400 mt-5 text-white rounded '>
        <img className='mb-[5px] h-[50px] invert-100' src="history.png" alt="" />
        <h1>अभी कोई भी पुराना हिसाब ऑनलाइन दर्ज नहीं है...</h1>
      </div>
      <Navigation />
    </div>
  )
}

export default Recent