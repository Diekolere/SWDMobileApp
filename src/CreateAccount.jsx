import React, { useState } from 'react';
import Eye from './Eye';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    referral: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(form.phone)) newErrors.phone = 'Enter a valid phone number';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.password.trim()) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed to next step
      console.log('Form submitted:', form);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#141414] via-[#141414] to-[#b05744]/30 min-h-screen flex items-center justify-center text-white">
      <div className="bg-[#1a1a1a] p-6 rounded-xl max-w-sm w-full shadow-lg">
        <div className="flex justify-between items-center text-sm mb-4">
          <button className="text-gray-400 hover:text-white">&larr; Back</button>
          <Link to="/Login" className="text-[#9d503E] hover:underline">Sign in instead</Link>
        </div>

        <h1 className="text-3xl font-Aeonik mb-6 pl-16">Create an account</h1>

        <form onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className='block text-base mb-2 text-white'>First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full px-4 py-2 bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <label className='block text-base mb-2 text-white'>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full px-4 py-2 bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Phone number */}
          <label className='block text-base mb-2 mt-4 text-white'>Phone number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full px-4 py-2 bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

          {/* Email */}
          <label className='block text-base mb-2 mt-4 text-white'>Email address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full px-4 py-2 bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          {/* Password */}
          <label className='block text-base mb-2 mt-4 text-white'>Create Password</label>
          <Eye password={form.password} setPassword={(val) => setForm({ ...form, password: val })} error={errors.password} />

          {/* Referral Code */}
          <label className='block text-base mb-2 mt-4 text-white'>Referral Code (Optional)</label>
          <input
            type="text"
            name="referral"
            value={form.referral}
            onChange={handleChange}
            placeholder="Enter Referral Code"
            className="w-full px-4 py-2 bg-[#2a2a2a] border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#EF5757] to-[#EF8758] text-white py-2 rounded-md font-medium hover:opacity-90 mb-4 mt-6"
          >
            <Link to="/verify">
            Next 
            </Link>
           
          </button>
        </form>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex h-1 w-full gap-2">
            <div className="w-1/2 bg-white rounded-l-full"></div>
            <div className="w-1/2 bg-[#2f231e] rounded-r-full"></div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-2">Account Information</p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
