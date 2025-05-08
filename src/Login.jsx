import React from 'react'
import Eye from './Eye'
import {Link} from 'react-router-dom'
import CreateAccount from './CreateAccount'


export default function(){
    return(
      <div className="bg-gradient-to-tr from-[#141414] via-[#141414]  to-[#b05744]/30 min-h-screen flex items-center justify-center text-white">
         <div className="bg-[#1a1a1a] p-6 rounded-xl max-w-sm w-full shadow-lg">
        <div>
            <img src="" alt="" />
        </div>
        <div>
        <p className='text-center text-4xl text-white flex justify-center mt-40'>Welcome Back 
         <div className='mx-2'> 👋🏾</div>
         </p>
        </div>
        <form>
      <label className='block text-base mb-2 mt-20 text-white'>Email Address</label>
      <input type="email"
        placeholder='Enter Email address'
        className='w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
/>
  
<label  className='text-base text-white mt-5 block'>Password</label>       
    <Eye />
    <div className="text-left  text-base mb-4 mt-3">
      <a href="#" className="text-white-400 hover:text-white">Forgot password?</a>
    </div>
    <button className="w-full bg-gradient-to-r from-[#EF5757] to-[#EF8758] text-white py-2 rounded-md font-medium hover:opacity-90">
     <Link to="/home">
     Sign in
     </Link>
    </button>

    {/* <Link  to="/create-account">  */}
    <p className="mt-4 text-center text-sm text-gray-400">
      I don't have an account, <Link to="/create-account" className="text-[#9D503E] hover:underline">Create account</Link>
    </p>
    {/* </Link> */}
   
      </form>
      </div>
    </div>
    )
    
  }