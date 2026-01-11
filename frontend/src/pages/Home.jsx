import React, { useState, useEffect } from 'react'
import HomeItems from '../components/HomeItems'
import Navigation from '../components/Navigation'
import SearchBar from '../components/SearchBar'

const Home = ({addToCart,products}) => {
  
  return (
    <div className='p-3 mt-4 relative'>
      <div>
        <div className='text-gray-700 text-center text-[30px] font-extrabold'>छाबड़ा स्टोर</div>
      </div>
      <div className='sticky-searchbar py-[1px]'>
        <SearchBar /> 
        <div id='recent-items' className='mb-[10px] mt-[10px] text-[15px] flex overflow-auto'>
          <h1 className='px-3 py-1 bg-red-600 rounded-[20px] flex justify-center items-center text-white mr-[5px]'>
            भुजिया</h1>
          <h1 className='px-3 py-1 bg-red-600 rounded-[20px] flex justify-center items-center text-white mr-[5px]'>
            चीनी</h1>
          <h1 className='px-3 py-1 bg-red-600 rounded-[20px] flex justify-center items-center text-white mr-[5px]'>
            नमक</h1>
          <h1 className='px-3 py-1 bg-red-600 rounded-[20px] flex justify-center items-center text-white mr-[5px]'>
            चिप्स</h1>
          <h1 className='px-3 py-1 bg-red-600 rounded-[20px] flex justify-center items-center text-white mr-[5px]'>
            कुरकुरे</h1>
          <h1 className='px-3 py-1 bg-red-600 rounded-[20px] flex justify-center items-center text-white mr-[5px]'>
            बिस्कुट</h1>
          <h1 className='px-3 py-1 bg-red-600 rounded-[20px] flex justify-center items-center text-white mr-[5px]'>
            बिस्कुट</h1>
        </div>
      </div>
      <HomeItems addToCart={addToCart} products={products}/>
      <Navigation />
    </div >
  )
}

export default Home