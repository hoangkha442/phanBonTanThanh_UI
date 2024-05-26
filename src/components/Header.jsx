import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import logoTT from '../asset/logoTT.png';
import avatarDefault from '../asset/default-avatar.png';
const Header = () => {
  return (
    <header className="bg-white fixed w-full top-0 left-0 z-10 min-h-14 overflow-hidden h-14" style={{
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)'
    }}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center px-6">
          <a href="" className='w-[145px] overflow-hidden'>
            <img src={logoTT} alt="Logo" className="object-cover w-full" />
          </a>
          <button className="text-green-800 text-2xl">
        </button>
        </div>
       
        {/* User Profile Section */}
        <div className="flex items-center space-x-2">
          <img src={avatarDefault} alt="Avatar" className="h-10 w-10 rounded-full mr-2" />
          <span className="text-[#2c3e50] text-sm">admin@gmail.com</span>
          <FiLogOut className="ml-2 text-[#2c3e50] cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
