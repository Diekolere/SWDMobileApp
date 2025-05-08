import React from 'react';
import Eye from './Eye'
import {Link} from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div className="bg-gradient-to-tr from-[#141414] via-[#141414] to-[#b05744]/30 min-h-screen flex items-center justify-center text-white">
      <div className="bg-[#1a1a1a] p-6 rounded-xl max-w-sm w-full shadow-lg">
        {/* Top nav */}
        <div className="flex justify-between items-center text-sm mb-4">
          <button className="text-gray-400 hover:text-white">&larr; Back</button>
          <Link to="/Login" className="text-[#9d503E] hover:underline">Sign in instead</Link>
        </div>

        <h1 className="text-3xl font-Aeonik mb-6 pl-16">Create an account</h1>

        {/* First & Last name */}
        <div className='flex gap-25'>
        <label className='block text-base mb-2 mt-4 text-white'>First Name</label>
        <label className='block text-base mb-2 mt-4 text-white'> Last Name</label>
        </div>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-1/2 px-4 py-2  bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-1/2 px-4 py-2  bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          />
        </div>
    

        {/* Phone number */}
        <label className='block text-base mb-2 mt-4 text-white'>Phone number </label>
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full px-4 py-2 mb-4  bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
        />

        {/* Email */}
        <label className='block text-base mb-2 mt-1 text-white'>Email address </label>
        <input
          type="email"
          placeholder="Enter Email address"
          className="w-full px-4 py-2 mb-4  bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
        />

        {/* Password */}
        <label className='block text-base mb-2 mt-1 text-white'> Create Password  </label>
        <Eye />

        {/* Referral code */}
        <label className='block text-base mb-2 mt-1 text-white'> Referral Code (Optional) </label>
        <input
          type="text"
          placeholder="Enter Referral Code"
          className="w-full px-4 py-2 mb-4  bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
        />

        {/* Next button */}
        <button className="w-full  bg-gradient-to-r from-[#EF5757] to-[#EF8758] text-white py-2 rounded-md font-medium hover:opacity-90 mb-4">
          <Link to="/verify">Next </Link>
          
        </button>
       {/* Progress Bars and Label */}
<div className="mt-6">
  <div className="flex h-1 w-full gap-2">
    <div className="w-1/2 bg-white rounded-l-full"></div> {/* Left progress bar */}
    <div className="w-1/2 bg-[#2f231e] rounded-r-full"></div> {/* Right "empty" bar */}
  </div>
  <p className="text-center text-gray-400 text-xs mt-2">Account Information </p>
</div>
</div>
    </div>
  );
}; 
export default CreateAccount;
