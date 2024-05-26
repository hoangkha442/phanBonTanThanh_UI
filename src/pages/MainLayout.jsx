import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <>
    <Header />
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="ml-auto mt-[3.5rem] p-6 bg-[#e9e9e9]" style={{width: 'calc(100% - 235px)' }}>
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default MainLayout;
