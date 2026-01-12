import React from 'react'
import { getProductLocally, setProductLocally } from '../utils/locatStorage'
const CartItems = () => {
  let products = getProductLocally('products')
  let totalProducts = products.length
  console.log(totalProducts);
  
  // let cart = products.map((e)=>{
  //   if (e.quantity>0){
  //     cart = cart + e
  //   }
  // })
  return (
    <div className=''>
      <table className='text-[18px] min-w-full border text-center'>
        <thead>
          <tr className='font-bold text-[18px] col-20px'>
            <td className='border p-1 px-2'>नाम</td>
            <td className='border p-1'>कंपनी/प्रकार</td>
            <td className='border p-1'>मात्रा</td>
            <td className='border p-1'>कीमत</td>
          </tr>
        </thead>
        <tbody>
          {Array.from({length:5 }).map((key, i) => (
          <tr className='border h-[10px]'>
            <td className='py-1'>A</td>
            <td className='py-1'>B</td>
            <td className='py-1'>C</td>
            <td className='py-1'>D</td>
            <td><button className=' bg-red-200 rounded-lg'>❌</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CartItems