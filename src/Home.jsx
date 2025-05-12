import React from 'react'
import { FaWallet, FaExchangeAlt, FaHistory } from 'react-icons/fa'
import { FaTh } from 'react-icons/fa';
import { FaHome,   FaUser, FaCog } from 'react-icons/fa';


export default function Home() {
  const [showBalance, setShowBalance] = React.useState(true);
const accountNumber = "8192017482";

const handleCopy = () => {
  navigator.clipboard.writeText(accountNumber);
  alert("Account number copied!");
};

  return (
    <div className="bg-gradient-to-tr from-[#141414] via-[#141414] to-[#b05744]/30 h-[750px] flex items-center justify-center text-white">
      <div className="relative bg-[#1a1a1a] p-6 rounded-xl max-w-sm w-full shadow-lg h-[740px] ">

        {/* White Card */}
        <div className="absolute top-0 left-0 right-0 w-full z-10 bg-white items-center justify-between px-4 py-2 rounded-b-xl shadow-md">
          {/* Welcome Section */}
          <div className="flex items-center justify-between px-4 py-2">
            {/* Left Icon */}
            <div className="p-2 rounded-full border border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            {/* Welcome Text */}
            <p className="text-sm text-black text-center">
              Welcome, <span className="font-medium">Sam 👋🏾</span>
            </p>

            {/* Right Icon */}
            <div className="p-2 rounded-full border border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          </div>

          {/* Wallet Info Card Section */}
<div className="flex justify-center mt-4">
  <div className="bg-gradient-to-r from-[#e94b6f] to-[#f59e4d] rounded-xl px-4 py-3 flex items-center justify-between w-full max-w-md text-white shadow-lg">
    {/* Left: Wallet Balance */}
    <div className="flex flex-col">
      <span className="text-xs text-white/70 font-medium">WALLET BALANCE</span>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-xl font-semibold">
          {showBalance ? 'NGN 50,000' : '•••••••'}
        </span>
        <button onClick={() => setShowBalance(!showBalance)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {showBalance ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.025 10.025 0 012.038-3.368M15 12a3 3 0 11-6 0 3 3 0 016 0zM3 3l18 18" />
            )}
          </svg>
        </button>
      </div>
      <span className="text-xs text-white/70 mt-1">Cashback <span className="text-white font-medium">₦341.20</span></span>
    </div>

    {/* Divider */}
    <div className="h-10 w-px bg-white/40 mx-3"></div>

    {/* Right: Moniepoint Info */}
    <div className="flex flex-col">
      <span className="text-xs font-medium">MONIEPOINT</span>
      <div className="flex items-center mt-1">
        <span className="font-semibold text-sm mr-2">{accountNumber}</span>
        <button onClick={handleCopy} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8l6 6v8a2 2 0 01-2 2h-2" />
          </svg>
        </button>
      </div>
      <span className="text-xs text-white/70 mt-1">Deposit Fee: ₦20</span>
    </div>
  </div>
</div>


          {/* Action Buttons */}
          <div className="mt-6 flex justify-between items-center">
            {/* Top up */}
            <div className="flex-1 flex flex-col items-center mb-3">
              <FaWallet className="h-5 w-5 text-gray-700" />
              <span className="text-sm text-gray-700">Top up</span>
            </div>

            <div className="w-px h-6 bg-gray-300"></div>

            {/* Transfer */}
            <div className="flex-1 flex flex-col items-center relative">
              <FaExchangeAlt className="h-5 w-5 text-gray-700" />
              <span className="text-sm text-gray-700 mb-4">Transfer</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded bg-gray-400 mt-1"></div>
            </div>

            <div className="w-px h-6 bg-gray-300"></div>

            {/* History */}
            <div className="flex-1 flex flex-col items-center">
              <FaHistory className="h-5 w-5 text-gray-700" />
              <span className="text-sm text-gray-700 mb-4">History</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-[17rem] z-20 relative">
          <p className="text-base mb-2">Quick Actions</p>
          <div className="grid grid-cols-4 gap-2 text-white">
            {[
              { label: 'Data', icon: '/images/ic_baseline-data-saver-off.png' },
              {
                label: 'Airtime',
                outerIcon: '/images/Vector (2).png',
                innerIcon: '/images/Vector (4).png',
                layered: true
              },
              {
                label: 'Showmax',
                sideBySideIcons: ['/images/Vector 31.png', '/images/Vector 32.png'],
                sideBySide: true
              },
              { label: 'Giftcards', icon: '/images/Credit_Card_01.png' },
              { label: 'Betting', icon: '/images/Group.png' },
              { label: 'Electricity', icon: '/images/Vector (5).png' },
              { label: 'TV/Cable', icon: '/images/Vector (1).png' },
              { label: 'E-Pin', icon: '/images/Vector.png' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#1f1f1f] p-3 rounded-lg shadow hover:scale-105 transition"
              >
                {item.sideBySide ? (
                  <div className="flex gap-0 mb-2">
                    {item.sideBySideIcons.map((src, i) => (
                      <img key={i} src={src} alt={`${item.label} icon ${i}`} className="h-6 w-3" />
                    ))}
                  </div>
                ) : item.layered ? (
                  <div className="relative w-5 h-5 mb-2">
                    <img
                      src={item.outerIcon}
                      alt={`${item.label} Outer`}
                      className="w-full h-full"
                    />
                    <img
                      src={item.innerIcon}
                      alt={`${item.label} Inner`}
                      className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ) : (
                  <img src={item.icon} alt={item.label} className="h-6 w-6 mb-2" />
                )}
                <span className="text-sm text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* News & Update Section */}
<div className="mt-10">
  {/* Header */}
  <div className="flex justify-between items-center mb-3 px-1">
    <h2 className="text-white text-base font-medium">News & Update</h2>
    <button className="text-red-400 text-sm">View all</button>
  </div>

  {/* Image Container */}
  <div className="relative rounded-xl overflow-hidden">
    <img
      src="/images/Frame 36592.png"
      alt="News update"
      className="w-full h-28 object-cover rounded-xl"
    />

    {/* Chat Icon Button */}
    <button className="absolute bottom-3 right-3 bg-[#FF5C5C] p-3 rounded-full shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="white"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.29-.963l-3.522.936a1 1 0 01-1.207-1.207l.935-3.522A9.77 9.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  </div>
</div>

{/* Bottom Navigation */}
<div className=" w-full max-w-sm mx-auto rounded-t-xl px-4 py-2 mt-2">
  <div className="flex justify-between items-center text-white text-xs">
    <div className="flex flex-col items-center text-white">
      <FaHome className="text-lg mb-1" />
      <span>Home</span>
    </div>
    <div className="flex flex-col items-center text-gray-500">
      <FaTh className="text-lg mb-1" />
      <span>Services</span>
    </div>
    <div className="flex flex-col items-center text-gray-500">
      <FaExchangeAlt className="text-lg mb-1" />
      <span>Statistic</span>
    </div>
    <div className="flex flex-col items-center text-gray-500">
      <FaUser className="text-lg mb-1" />
      <span>Referrals</span>
    </div>
    <div className="flex flex-col items-center text-gray-500">
      <FaCog className="text-lg mb-1" />
      <span>Settings</span>
    </div>
  </div>
</div>

        
      </div>
    </div>
  );
}


