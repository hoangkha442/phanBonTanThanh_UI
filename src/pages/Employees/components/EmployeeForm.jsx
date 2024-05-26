import React from 'react';

const EmployeeForm = ({ employee, handleChange, handleCancel }) => {
  return (
    <form className="space-y-6 mt-4">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block text-sm  text-[#373a3c]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            className="border-2 rounded-sm bg-gray-200 w-full text-sm focus:outline-none focus:border-gray-100 px-4 py-3"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Chức vụ <span className="text-red-500">*</span>
          </label>
          <select
            name="role"
            value={employee.role}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
          >
            <option value="Nhân viên">Nhân viên</option>
            <option value="Quản trị viên">Quản trị viên</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-[#373a3c]">
          Địa chỉ <span className="text-red-500">*</span>
        </label>
        <textarea
          name="address"
          value={employee.address}
          onChange={handleChange}
          className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
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
          Cập nhật
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
