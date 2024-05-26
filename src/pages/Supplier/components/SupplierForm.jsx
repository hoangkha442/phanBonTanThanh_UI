import React from 'react';

const SupplierForm = ({ supplier, handleChange, handleCancel }) => {
  return (
    <form className="space-y-6 mt-4">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#373a3c]">
            Tên nhà cung cấp <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={supplier.name}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên nhà cung cấp"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={supplier.email}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập email"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={supplier.phone}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Địa chỉ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={supplier.address}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập địa chỉ"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Tên ngân hàng <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="bankName"
            value={supplier.bankName}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên ngân hàng"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Số tài khoản <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="bankAccount"
            value={supplier.bankAccount}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số tài khoản"
          />
        </div>
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
          className="bg-[#1abc9c] text-white px-4 py-3 rounded-sm text-sm hover:bg-[#50ac9a] transition-all duration-300"
        >
          Cập nhật
        </button>
      </div>
    </form>
  );
};

export default SupplierForm;
