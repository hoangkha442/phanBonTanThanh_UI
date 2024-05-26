import React, { useState } from 'react';

const SupplierFormAddNew = ({ handleAddNewSupplier, handleCancel }) => {
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bankName: '',
    bankAccount: '',
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier({ ...newSupplier, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddNewSupplier(newSupplier);
  };

  return (
    <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#373a3c]">
            Tên nhà cung cấp <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={newSupplier.name}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên nhà cung cấp"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={newSupplier.email}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập email"
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
            value={newSupplier.phone}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số điện thoại"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Địa chỉ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={newSupplier.address}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập địa chỉ"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Tên ngân hàng <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="bankName"
            value={newSupplier.bankName}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên ngân hàng"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Số tài khoản <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="bankAccount"
            value={newSupplier.bankAccount}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số tài khoản"
            required
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
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

export default SupplierFormAddNew;
