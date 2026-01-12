import React from 'react'
import {Link} from 'react-router-dom'
const userSignup = () => {
  return (
    <div>
      <form className='p-2'>
        <h1 className='mt-4 text-3xl font-semibold'>
          Sign Up
        </h1>
        <div className='mt-20 flex flex-col'>
          <label>Name</label><input className='bg-gray-200 rounded p-2 font-sm' type="text" placeholder='Enter email' />
          <label>Email</label><input className='bg-gray-200 rounded p-2 font-sm' type="email" placeholder='Enter email' />
          <label>Password</label><input className='bg-gray-200 rounded p-2 font-sm' type="password" placeholder='Enter Password' />
          <label>Confirm Password</label><input className='bg-gray-200 rounded p-2 font-sm' type="text" placeholder='Re-Enter Password' />
          <Link to='/' className='text-right mt-3 text-blue-400'>Already have an account?</Link>


          <button className='mt-10 bg-red-500 p-3 rounded-[50px] text-white'>Sign-up</button>
        </div>
      </form>
    </div>
  )
}

export default userSignup