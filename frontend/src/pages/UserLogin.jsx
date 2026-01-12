import React,{ useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from './ForgotPassword';

const userLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const submitHandler = (e)=>{
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || []
    console.log(JSON.stringify(users));
    const matchedUser = users.find((user)=>{
      return (
        user.email === email.trim() && user.password === password.trim()
      )
    }) 
    
    if(matchedUser){
      localStorage.setItem("isAuth","true");
      localStorage.setItem("loggedInUser",JSON.stringify(matchedUser));
      navigate("/home");
    }
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

        <button type='submit' className='mt-15 text-center bg-red-500 p-3 rounded-[50px] text-white'>LOGIN</button>
        <Link to='/signup' className='flex items-center justify-center mt-1 bg-gray-200 p-3 rounded-[50px] text-black'>Sign-up</Link>
      </div>
      </form>
    </div>
  )
}

export default userLogin