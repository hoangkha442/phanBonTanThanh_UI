import React from 'react';

const CategoryForm = ({ category, handleChange, handleCancel }) => {
  return (
    <form className="space-y-6 mt-4">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#373a3c]">
            Mã danh mục <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="code"
            value={category.code}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập mã danh mục"
          />
        </div>
        <div>
          <label className="block text-sm text-[#373a3c]">
            Tên danh mục <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3"
            placeholder="Nhập tên danh mục"
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

export default CategoryForm;
