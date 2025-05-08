import { useRef } from 'react';
import {Link} from 'react-router-dom'

const VerifyEmail = () => {
  const inputs = useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value)) {
      e.target.value = value;
      if (index < 5) {
        inputs.current[index + 1].focus();
      }
    } else {
      e.target.value = '';
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (e.target.value === '') {
        if (index > 0) {
          inputs.current[index - 1].focus();
        }
      } else {
        e.target.value = '';
      }
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#141414] via-[#141414] to-[#b05744]/40 min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#141414] p-6 rounded-xl max-w-sm w-full text-white shadow-lg">
        <button className="text-sm text-white mb-4">&larr; Back</button>
        <h2 className="text-xl font-semibold mb-2 mt-15 -tracking[-0.2em]">Verify your email</h2>
        <p className="text-sm text-gray-300 mb-6 mt-4 -tracking[-0.2em]">
          Please enter the OTP sent to <br />
          <span className="text-white font-medium">tolu.ab19@gmail.com</span>
        </p>

        {/* OTP Boxes with Divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {/* First 3 boxes */}
          {[0, 1, 2].map((i) => (
            <input
              key={i}
              type="password"
              maxLength={1}
              ref={(el) => (inputs.current[i] = el)}
              onInput={(e) => handleInput(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-10 h-12 rounded-md bg-[#1a1513] border border-[#333] text-center text-lg text-white focus:outline-none focus:ring-2 focus:ring-[#9D503E]"
            />
          ))}

          {/* Divider */}
          <div className="w-6 h-1 bg-white rounded-full mx-1"></div>

          {/* Last 3 boxes */}
          {[3, 4, 5].map((i) => (
            <input
              key={i}
              type="password"
              maxLength={1}
              ref={(el) => (inputs.current[i] = el)}
              onInput={(e) => handleInput(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-10 h-12 rounded-md bg-[#1a1513] border border-[#333] text-center text-lg text-white focus:outline-none focus:ring-2 focus:ring-[#9D503E]"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button className="w-full py-2 rounded mt-50 bg-gradient-to-r from-[#EF5757] to-[#EF8758] text-white font-medium">
         <Link to="/home">
         Verify email
         </Link>
        </button>

        {/* Progress Bar and Label */}
        <div className="mt-6">
        <div className="flex h-1 w-full gap-2">
        <div className="w-1/2 bg-white rounded-l-full"></div>
          <div className="w-1/2 bg-white rounded-r-full"></div>
  </div>
          <p className="text-center text-sm text-gray-400 mt-4">Email verification</p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
