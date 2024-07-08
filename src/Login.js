import React from 'react'
import Axios from 'axios'


import {useState} from 'react'
import { useNavigate,NavLink } from 'react-router-dom'

function Login() {
  const [email,setEmail]=useState('')
  const [otp,setOtp]=useState('')
  const[textemail,setTextemail]=useState('')

  const navigate=useNavigate()
  const handlersubmit=async (e)=>{
    e.preventDefault()
    try {
      const response = await Axios.post('http://localhost:8080/api/login', { email, otp },{withCredentials:true});
      console.log('Response:', response.data.textemail);
      setTextemail(response.data.textemail)
     
      navigate('/user/profile')
    
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.textemail);
    }
   }
    
  
  return (
    <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6"  method="POST" onSubmit={handlersubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input type="email" value={email} onChange={(e)=>{
          e.preventDefault()
          setEmail(e.target.value)
        }}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900">OTP</label>
         
        </div>
        <div className="mt-2">
          <input  type="text" value={otp} onChange={(e)=>{
          e.preventDefault()
          setOtp(e.target.value)
        }}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
    <NavLink to='/api/register'className="text-indigo-800 font-medium ml-36 text-1xl m-6 p-3">Create One! </NavLink>

  <h2 className="text-center mt-3">{textemail}</h2>
  </div>
</div>
    </div>
  )
}
  
export default Login
