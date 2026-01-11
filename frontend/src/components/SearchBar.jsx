import React, { useState } from 'react'

const SearchBar = () => {
  const toSearchDiv = document.getElementById("to-search-div")
  const searchBar = document.getElementById("search-bar")
  const [search, setSearch] = useState(false)
  return (
    <div className='sticky-searchbar h-[44px]'>
      {!search &&
        <div onClick={() => { setSearch(true) }} id='to-search-div' className={`  flex justify-between mt-5 p-1 items-center `}>
          <h1 className='text-[15px] font-semibold'>सामान खोजें !</h1>
          <img className='h-4' src="search-btn.png" alt="search" />
        </div>
      }
      {search &&
        <div className='flex bg-gray-100 justify-between mt-5 p-1 items-center '>
          <input id='search-bar' type='text' className=' w-[100%] h-[20px]  m-0 rounded-[8px] outline-none p-1 text-[15px]' />
          <img onClick={() => { setSearch(false) }} className='h-4 mr-[4px]' src="close.png" alt="search" />
        </div>
      }
    </div>
  )
}

export default SearchBar