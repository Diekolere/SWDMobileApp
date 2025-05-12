import React, { useState } from 'react';
import Eye from './Eye';
import { Link, useNavigate } from 'react-router-dom';

export default function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    const newErrors = { email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid:', { email, password });
      navigate('/home'); // Redirect only if valid
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#141414] via-[#141414] to-[#b05744]/30 min-h-screen flex items-center justify-center text-white">
      <div className="bg-[#1a1a1a] p-6 rounded-xl max-w-sm w-full shadow-lg">
        <p className='text-center text-4xl text-white flex justify-center mt-40'>
          Welcome Back <span className='mx-2'>👋🏾</span>
        </p>

        <form onSubmit={handleSubmit}>
          <label className='block text-base mb-2 mt-20 text-white'>Email Address</label>
          <input
            type="email"
            placeholder='Enter Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          <label className='text-base text-white mt-5 block'>Password</label>
          <Eye
            password={password}
            setPassword={setPassword}
            error={errors.password}
          />

          <div className="text-left text-base mb-4 mt-3">
            <Link to="/forgot-password" className="text-white-400 hover:text-white">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#EF5757] to-[#EF8758] text-white py-2 rounded-md font-medium hover:opacity-90"
          >
            <Link to="/home">
            Sign in
            </Link>
           
          </button>

          <p className="mt-4 text-center text-sm text-gray-400">
            I don't have an account, <Link to="/create-account" className="text-[#9D503E] hover:underline">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
