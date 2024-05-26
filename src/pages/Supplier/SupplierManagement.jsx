import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Switch, Modal } from 'antd';
import SupplierForm from './components/SupplierForm';
import SupplierFormAddNew from './components/SupplierFormAddNew';
import Swal from 'sweetalert2';

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'Supplier 1', email: 'supplier1@gmail.com', phone: '0854858818', status: true, address: 'Address 1', bankName: 'Bank 1', bankAccount: '123456789' },
    { id: 2, name: 'Supplier 2', email: 'supplier2@gmail.com', phone: '0854858818', status: true, address: 'Address 2', bankName: 'Bank 2', bankAccount: '987654321' },
    { id: 3, name: 'Supplier 3', email: 'supplier3@gmail.com', phone: '0917278756', status: false, address: 'Address 3', bankName: 'Bank 3', bankAccount: '456123789' },
    { id: 4, name: 'Supplier 4', email: 'supplier4@gmail.com', phone: '0917278756', status: true, address: 'Address 4', bankName: 'Bank 4', bankAccount: '789321456' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState(null);

  const showModal = (supplier) => {
    setCurrentSupplier(supplier);
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
    setCurrentSupplier(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentSupplier({ ...currentSupplier, [name]: value });
  };

  const handleAddNewSupplier = (newSupplier) => {
    setSuppliers([...suppliers, { ...newSupplier, id: suppliers.length + 1 }]);
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      text: "Bạn không thể hoàn nguyên nếu có sai xót!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Đã xóa thành công!",
          text: "Nhà cung cấp đã được xóa khỏi hệ thống.",
          icon: "success"
        });
      }
    });
  }

  const onChange = (checked, id) => {
    setSuppliers(suppliers.map(sup => sup.id === id ? { ...sup, status: checked } : sup));
    if (checked === false) {
      return Swal.fire({
        icon: "success",
        text: "Ẩn nhà cung cấp thành công!",
      });
    } else {
      return Swal.fire({
        icon: "success",
        text: "Kích hoạt nhà cung cấp thành công!",
      });
    }
  };

  const filteredSuppliers = suppliers.filter(supplier => 
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">NHÀ CUNG CẤP</h1>
        <button 
          onClick={showAddModal}
          className="bg-green-500 text-white px-4 py-3 rounded-sm text-sm hover:bg-green-600 transition-all duration-300"
        >
          Tạo mới
        </button>
        <Modal title="Thêm nhà cung cấp mới" open={isAddModalOpen} onOk={handleAddOk} onCancel={handleCancel}>
          <SupplierFormAddNew handleAddNewSupplier={handleAddNewSupplier} handleCancel={handleCancel} />
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
            <th className="py-4 px-4">TÊN NHÀ CUNG CẤP</th>
            <th className="py-4 px-4">EMAIL</th>
            <th className="py-4 px-4">ĐIỆN THOẠI</th>
            <th className="py-4 px-4">ĐỊA CHỈ</th>
            <th className="py-4 px-4">TÊN NGÂN HÀNG</th>
            <th className="py-4 px-4">SỐ TÀI KHOẢN</th>
            <th className="py-4 px-4">TRẠNG THÁI</th>
            <th className="py-4 px-4"></th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {filteredSuppliers.map((supplier, index) => (
            <tr key={supplier.id} className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-300">
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{index + 1}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{supplier.name}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{supplier.email}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{supplier.phone}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{supplier.address}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{supplier.bankName}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{supplier.bankAccount}</td>
              <td className="py-3 px-4 text-center">
                <Switch checked={supplier.status} onChange={(checked) => onChange(checked, supplier.id)} />
              </td>
              <td className="py-3 px-4 flex justify-center space-x-2">
                <button type="primary" onClick={() => showModal(supplier)} className="bg-[#2ecc71] border border-[#2ecc71] text-white py-3 px-4 rounded-sm hover:bg-[#27ad60] transition-all duration-300">
                  <FaEdit />
                </button>
                <Modal title="Cập nhật thông tin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  {currentSupplier && (
                    <SupplierForm supplier={currentSupplier} handleChange={handleChange} handleCancel={handleCancel}/>
                  )}
                </Modal>
                <button className="bg-red-500 text-white py-3 px-4 rounded-sm hover:bg-red-600 transition-all duration-300" onClick={handleDelete}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">Hiển thị 1 đến {filteredSuppliers.length} của {suppliers.length} dữ liệu trong danh sách</span>
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

export default SupplierManagement;
