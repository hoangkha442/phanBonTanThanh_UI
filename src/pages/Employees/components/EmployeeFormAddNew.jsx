import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EmployeeFormAddNew = ({ handleAddNewEmployee, handleCancel }) => {
  const [newEmployee, setNewEmployee] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: 'Quản trị viên',
    phone: '',
    address: '',
    status: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEmployee.password !== newEmployee.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    handleAddNewEmployee(newEmployee);
  };

  return (
    <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block text-sm text-[#373a3c]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={newEmployee.email}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập địa chỉ email"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Chức vụ <span className="text-red-500">*</span>
          </label>
          <select
            name="role"
            value={newEmployee.role}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            required
          >
            <option value="Nhân viên">Nhân viên</option>
            <option value="Quản trị viên">Quản trị viên</option>
          </select>
        </div>
        <div className="relative">
          <label className="block text-sm text-[#373a3c]">
            Mật khẩu <span className="text-red-500">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={newEmployee.password}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập mật khẩu"
            required
          />
          <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 cursor-pointer">
            {showPassword ? <FaEyeSlash className='opacity-80 text-base'/> : <FaEye className='opacity-80 text-base'/>}
          </span>
        </div>  
        <div className="relative">
          <label className="block text-sm text-[#373a3c]">
            Nhập Lại Mật khẩu <span className="text-red-500">*</span>
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={newEmployee.confirmPassword}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập lại mật khẩu"
            required
          />
          <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-9 cursor-pointer">
            {showConfirmPassword ? <FaEyeSlash className='opacity-80 text-base'/> : <FaEye className='opacity-80 text-base'/>}
          </span>
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập họ và tên"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={newEmployee.phone}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số điện thoại"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-[#373a3c]">
          Địa chỉ <span className="text-red-500">*</span>
        </label>
        <textarea
          name="address"
          value={newEmployee.address}
          onChange={handleChange}
          className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
          placeholder="Nhập địa chỉ"
          required
        />
      </div>
      <div className="flex items-center justify-end gap-3 border-t pt-6">
        <button 
          type="button" 
          className="bg-[#6c757d] text-white px-4 py-3 rounded-sm text-sm hover:bg-[#626a71] transition-all duration-300"
          onClick={handleCancel}
        >
          Hủy bỏ
        </button>
        <button 
          type="submit" 
          className="bg-[#1abc9c] text-white px-4 py-3 rounded-sm text-sm hover:bg-blue-600 transition-all duration-300"
        >
          Thêm mới
        </button>
      </div>
    </form>
  );
};

export default EmployeeFormAddNew;
