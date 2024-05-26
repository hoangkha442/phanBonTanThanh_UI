import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaUsers, FaChartLine, FaBox, FaDollarSign, FaExchangeAlt, FaFileInvoiceDollar, FaWarehouse, FaClipboardList, FaIndustry } from 'react-icons/fa';
import { message } from 'antd';
import Swal from 'sweetalert2';

const Sidebar = () => {
  const location = useLocation();
  const [isEmployeesOpen, setIsEmployeesOpen] = useState(false);
  const [isGoodsOpen, setIsGoodsOpen] = useState(false);
  const [isRevenueOpen, setIsRevenueOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const linkClass = (path) => {
    return `block px-4 py-2 rounded transition-all duration-300 text-sm font-semibold ${
      location.pathname === path ? 'bg-[#4c7031] bg-opacity-70' : 'hover:bg-[#4c7031] hover:bg-opacity-70'
    }`;
  };

  const employeesOrCustomersClass = () => {
    return location.pathname === '/employees' || location.pathname === '/customers' ? 'bg-[#4c7031] bg-opacity-70' : '';
  };

  const suppliersOrCategoriesOrProducts = () => {
    return location.pathname === '/suppliers' || location.pathname === '/categories' || location.pathname === '/products' ? 'bg-[#4c7031] bg-opacity-70' : '';
  };

  return (
    <div 
      className="fixed z-[10] w-[235px] h-full mt-14 top-0 bg-cover bg-center shadow-lg transition-all  duration-300 text-white overflow-hidden"
      style={{height: 'calc(100% - 3.5rem)', backgroundImage: "url('http://dnqt.net/Template/assets/images/Image-sidebar.jpg')" }}
    >
      <div style={{ backgroundImage: "linear-gradient(to bottom right, rgba(76, 112, 49, 0.8), rgba(76, 112, 49, 0.2))" }} className="absolute inset-0"></div>
      <div className="relative p-4 flex items-center gap-2 bg-[#4c7031]">
        <div className="rounded-full bg-gray-400 h-10 w-10 mb-2">
          <img src="http://dnqt.net/Template/assets/images/default-avatar.png" className='rounded-full' alt="" />
        </div>
        <div>
          <h1 className="text-sm font-bold">Admin website</h1>
          <p className="text-sm">Quản trị viên</p>
        </div>
      </div>
      <nav className="relative flex-1 px-2 py-4 space-y-2 overflow-y-auto">
        <div className="space-y-1">
          <p className="text-[#fff] px-4 py-2 text-[13px] font-semibold">QUẢN LÝ</p>
          {/* <Link onClick={() => { message.err('Tính năng chưa phát triển!') }} className={linkClass("/analytics")}>
            <FaChartLine className="inline-block mr-2 text-sm font-semibold" /> Phân tích thống kê
          </Link> */}
          <Link onClick={() => { Swal.fire({
          title: "Tính năng chưa phát triển!",
          text: "Tính năng sắp được phát triển.",
          icon: "warning"
        }); }} className={linkClass("/analytics")}>
            <FaChartLine className="inline-block mr-2 text-sm font-semibold" /> Phân tích thống kê
          </Link>
          <div >
          {/* className={`${isEmployeesOpen ? '' : 'h-9'}`} */}
            <button 
              className={`w-full text-left flex items-center px-4 py-2 h-9 hover:bg-green-800 rounded-lg transition-all duration-300 ${employeesOrCustomersClass()}`}
              onClick={() => { 
                setIsEmployeesOpen(!isEmployeesOpen)
                setIsProductsOpen(false)
               }}
            >
              <FaUser className="mr-2" /> <span className='text-sm font-semibold'>Quản lý nhân sự</span>
              <svg className={`ml-auto h-5 w-5 transform transition-transform ${isEmployeesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${isEmployeesOpen ? 'max-h-screen bg-[#4c7031] bg-opacity-70 rounded-lg py-4 px-2' : 'max-h-0'}`}>
              <Link to="/employees" className={linkClass("/employees")}>
                <FaUsers className="inline-block mr-2 text-sm font-semibold" /> Nhân viên
              </Link>
              <Link to="/customers" className={linkClass("/customers")}>
                <FaUser className="inline-block mr-2 text-sm font-semibold" /> Khách hàng
              </Link>
            </div>
          </div>
          <div>
            <button 
              className={`w-full text-left flex items-center px-4 py-2 hover:bg-green-800 rounded-lg transition-all duration-500 ${suppliersOrCategoriesOrProducts()}`}
              onClick={() => { 
                setIsProductsOpen(!isProductsOpen)
                setIsEmployeesOpen(false)
               }}
            >
              <FaBox className="mr-2" /> <span className='text-sm font-semibold'>Quản lý sản phẩm</span>
              <svg className={`ml-auto h-5 w-5 transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${isProductsOpen ? 'max-h-screen bg-[#4c7031] bg-opacity-70 rounded-lg py-4 px-2' : 'max-h-0'}`}>
              <Link to="/suppliers" className={linkClass("/suppliers")}>
                <FaIndustry className="inline-block mr-2 text-sm font-semibold" /> Nhà cung cấp
              </Link>
              <Link to="/categories" className={linkClass("/categories")}>
                <FaClipboardList className="inline-block mr-2 text-sm font-semibold" /> Danh mục sản phẩm
              </Link>
              <Link to="/products" className={linkClass("/products")}>
                <FaBox className="inline-block mr-2 text-sm font-semibold" /> Sản phẩm
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[#fff] px-4 py-2 text-[13px] font-semibold">KINH DOANH</p>
          <Link to="/sales" onClick={() => { 
            setIsEmployeesOpen(false)
            setIsProductsOpen(false)
           }} className={linkClass("/sales")}>
            <FaDollarSign className="inline-block mr-2" /> Bán hàng
          </Link>
          <Link to="/orders" onClick={() => { 
               setIsEmployeesOpen(false)
               setIsProductsOpen(false)
           }} className={linkClass("/orders")}>
            <FaFileInvoiceDollar className="inline-block mr-2" /> Đơn hàng
          </Link>
          {/* <div>
            <button 
              className="w-full text-left flex items-center px-4 py-2 hover:bg-green-800 rounded transition-all duration-300"
              onClick={() => setIsGoodsOpen(!isGoodsOpen)}
            >
              <FaWarehouse className="mr-2" /> <span className='text-sm font-semibold'>Quản lý hàng hóa</span>
              <svg className={`ml-auto h-5 w-5 transform transition-transform ${isGoodsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${isGoodsOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <Link to="/inventory" className={linkClass("/inventory")}>
                <FaBox className="inline-block mr-2" /> Inventory
              </Link>
            </div>
          </div> */}
          {/* <div>
            <button 
              className="w-full text-left flex items-center px-4 py-2 hover:bg-green-800 rounded transition-all duration-300"
              onClick={() => setIsRevenueOpen(!isRevenueOpen)}
            >
              <FaDollarSign className="mr-2" /> <span className='text-sm font-semibold'>Báo cáo doanh thu</span>
              <svg className={`ml-auto h-5 w-5 transform transition-transform ${isRevenueOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.72a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${isRevenueOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <Link to="/revenue" className={linkClass("/revenue")}>
                <FaFileInvoiceDollar className="inline-block mr-2" /> Revenue Report
              </Link>
            </div>
          </div> */}
        </div>
        {/* <div className="space-y-1">
          <p className="text-gray-300 px-4 py-2 text-xs">TÍN NĂNG</p>
          <Link to="/returns" className={linkClass("/returns")}>
            <FaExchangeAlt className="inline-block mr-2" /> Quản lý đổi trả
          </Link>
          <Link to="/debt" className={linkClass("/debt")}>
            <FaDollarSign className="inline-block mr-2" /> Quản lý công nợ
          </Link>
        </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
