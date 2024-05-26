import React, { useState } from 'react';

const ProductFormAddNew = ({ handleAddNewProduct, handleCancel }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    company: '',
    unit: '',
    stock: '',
    cashPrice: '',
    creditPrice: '',
    sold: '',
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddNewProduct(newProduct);
  };

  return (
    <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block text-sm text-[#373a3c]">
            Tên sản phẩm <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên sản phẩm"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Danh mục sản phẩm <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập danh mục sản phẩm"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Công ty <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={newProduct.company}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên công ty"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Đơn vị <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="unit"
            value={newProduct.unit}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập đơn vị"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Số lượng tồn <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số lượng tồn"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Giá tiền mặt <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="cashPrice"
            value={newProduct.cashPrice}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập giá tiền mặt"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Giá ghi nợ <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="creditPrice"
            value={newProduct.creditPrice}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập giá ghi nợ"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Đã bán <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="sold"
            value={newProduct.sold}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số lượng đã bán"
            required
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
          Thêm mới
        </button>
      </div>
    </form>
  );
};

export default ProductFormAddNew;
