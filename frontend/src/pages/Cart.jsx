import React from 'react'
import Navigation from '../components/Navigation'
import SearchBar from '../components/SearchBar'
import HomeItems from '../components/HomeItems'
import CartItems from '../components/CartItems'

const Cart = ({ products }) => {
  return (
    <div className='p-3 mt-4'>
      <div className='sticky-searchbar'>
        <h1 className='text-gray-700 text-center text-[30px] font-extrabold'>आज का ऑर्डर</h1>
        
        <br/>
        
      </div>
      
      <CartItems />
      <Navigation />
    </div>
  )
}

export default Cart