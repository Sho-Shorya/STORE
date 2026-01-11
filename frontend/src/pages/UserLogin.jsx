import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import ForgotPassword from './ForgotPassword';

const userLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    
  }

  return (
    <div className='p-3'>
      <form onSubmit={submitHandler}>
        <h1 className='mt-4 text-3xl font-semibold'>
        Login
      </h1>
      <div className='mt-25 flex flex-col'>
        <label>Email</label><input onChange={(e)=>{setEmail(e.target.value)}} value={email} className='bg-gray-200 rounded p-2 font-sm' type="email" placeholder='Enter email' />
        <label>Password</label><input onChange={(e)=>{setPassword(e.target.value)}} value={password} className='bg-gray-200 rounded p-2 font-sm' type="password" placeholder='Password' />

        <Link to='/forgotPassword' className='text-right mt-3 text-blue-400'>Forgot your Password ?</Link>

        <button className='mt-15 bg-red-500 p-3 rounded-[50px] text-white'>LOGIN</button>
        <Link to='/signup' className='flex items-center justify-center mt-1 bg-gray-200 p-3 rounded-[50px] text-black'>Sign-up</Link>
      </div>
      </form>
    </div>
  )
}

export default userLogin