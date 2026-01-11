import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='p-3'>
      <form>
        <h1 className='mt-4 text-3xl font-semibold'>
          Forgot Password
        </h1>
        <div className='mt-20 flex gap-3 flex-col'>
          <p className='text-[15px]'>Please, enter your email address. You will receive a link to create a new password via email.</p>
          <label>Email</label><input className='bg-gray-200 rounded p-2 font-sm' type="text" placeholder='Enter email' />
          <Link to='/login' className='text-right mt-3 text-blue-400'>Back to login</Link>
          <button className='mt-10 bg-red-500 p-3 rounded-[50px] text-white'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword