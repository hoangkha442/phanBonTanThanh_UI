import React from 'react';

const ProductForm = ({ product, handleChange, handleCancel }) => {
  return (
    <form className="space-y-6 mt-4">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block text-sm text-[#373a3c]">
            Tên sản phẩm <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Danh mục sản phẩm <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập danh mục sản phẩm"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Công ty <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={product.company}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên công ty"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Đơn vị <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="unit"
            value={product.unit}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập đơn vị"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Số lượng tồn <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số lượng tồn"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Giá tiền mặt <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="cashPrice"
            value={product.cashPrice}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập giá tiền mặt"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Giá ghi nợ <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="creditPrice"
            value={product.creditPrice}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập giá ghi nợ"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Đã bán <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="sold"
            value={product.sold}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập số lượng đã bán"
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

export default ProductForm;
