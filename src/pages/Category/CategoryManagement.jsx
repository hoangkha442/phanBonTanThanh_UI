import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Switch, Modal } from 'antd';
import CategoryForm from './components/CategoryForm';
import CategoryFormAddNew from './components/CategoryFormAddNew';
import Swal from 'sweetalert2';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    { id: 1, code: 'CAT01', name: 'Danh mục 1', status: true },
    { id: 2, code: 'CAT02', name: 'Danh mục 2', status: true },
    { id: 3, code: 'CAT03', name: 'Danh mục 3', status: false },
    { id: 4, code: 'CAT04', name: 'Danh mục 4', status: true },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const showModal = (category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };

  const showAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleAddOk = () => {
    setIsAddModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsAddModalOpen(false);
    setCurrentCategory(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  const handleAddNewCategory = (newCategory) => {
    setCategories([...categories, { ...newCategory, id: categories.length + 1 }]);
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      text: "Bạn không thể hoàn nguyên nếu có sai xót!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận"
    }).then((result) => {
      if (result.isConfirmed) {
        setCategories(categories.filter(category => category.id !== id));
        Swal.fire({
          title: "Đã xóa thành công!",
          text: "Danh mục sản phẩm đã được xóa khỏi hệ thống.",
          icon: "success"
        });
      }
    });
  }

  const onChangeStatus = (checked, id) => {
    setCategories(categories.map(category => category.id === id ? { ...category, status: checked } : category));
    if (checked === false) {
        return Swal.fire({
          icon: "success",
          text: "Ẩn danh mục thành công!",
        });
      } else {
        return Swal.fire({
          icon: "success",
          text: "Kích hoạt danh mục thành công!",
        });
      }
  };

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">DANH MỤC</h1>
        <button 
          onClick={showAddModal}
          className="bg-green-500 text-white px-4 py-3 rounded-sm text-sm hover:bg-green-600 transition-all duration-300"
        >
          Tạo mới
        </button>
        <Modal title="Thêm danh mục mới" open={isAddModalOpen} onOk={handleAddOk} onCancel={handleCancel}>
          <CategoryFormAddNew handleAddNewCategory={handleAddNewCategory} handleCancel={handleCancel} />
        </Modal>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className='w-full'>
          <label className='text-sm'>Tìm kiếm:</label>
          <input 
            type="text" 
            className="mt-1 p-2 py-3 border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500" 
            placeholder="Tìm kiếm..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className='ml-4'>
          <label className='text-sm'>Hiển thị</label>
          <div className="text-right">
            <select className="mt-1 px-6 py-3 border-2 rounded-sm text-sm focus:outline-none focus:border-green-500">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className='bg-gray-100 text-left text-sm font-semibold text-gray-600'>
            <th className="py-4 px-4">#</th>
            <th className="py-4 px-4">MÃ DANH MỤC</th>
            <th className="py-4 px-4">TÊN DANH MỤC</th>
            <th className="py-4 px-4">TRẠNG THÁI</th>
            <th className="py-4 px-4">HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {filteredCategories.map((category, index) => (
            <tr key={category.id} className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-300">
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{index + 1}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{category.code}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{category.name}</td>
              <td className="py-3 px-4 text-center">
                <Switch checked={category.status} onChange={(checked) => onChangeStatus(checked, category.id)} />
              </td>
              <td className="py-3 px-4 flex justify-center space-x-2">
                <button type="primary" onClick={() => showModal(category)} className="bg-[#2ecc71] border border-[#2ecc71] text-white py-3 px-4 rounded-sm hover:bg-[#27ad60] transition-all duration-300">
                  <FaEdit />
                </button>
                <Modal title="Cập nhật thông tin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  {currentCategory && (
                    <CategoryForm category={currentCategory} handleChange={handleChange} handleCancel={handleCancel}/>
                  )}
                </Modal>
                <button className="bg-red-500 text-white py-3 px-4 rounded-sm hover:bg-red-600 transition-all duration-300" onClick={() => handleDelete(category.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">Hiển thị 1 đến {filteredCategories.length} của {categories.length} dữ liệu trong danh sách</span>
      </div>
      <div className="flex space-x-2 justify-center">
        <button className="p-2 rounded-md text-sm">&lt;&lt;</button>
        <button className="p-2 rounded-md text-sm">&lt;</button>
        <span className="p-2 bg-[#1abc9c] w-8 h-8 rounded-full leading-4 text-white text-center">1</span>
        <button className="p-2 rounded-md text-sm">&gt;</button>
        <button className="p-2 rounded-md text-sm">&gt;&gt;</button>
      </div>
    </div>
  );
};

export default CategoryManagement;
