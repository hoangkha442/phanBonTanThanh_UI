import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Switch, Modal } from 'antd';
import EmployeeForm from './components/EmployeeForm';
import EmployeeFormAddNew from './components/EmployeeFormAddNew';
import Swal from 'sweetalert2';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Admin website', email: 'admin@gmail.com', phone: '0854858818', role: 'Quản trị viên', status: true, address: 'Address 1' },
    { id: 2, name: 'Quốc Nam', email: 'nam.197pm33932@vanlanguni.vn', phone: '0854858818', role: 'Quản trị viên', status: true, address: 'Address 2' },
    { id: 3, name: 'bé Minh', email: 'minh1321@gmail.com', phone: '0917278756', role: 'Nhân viên', status: false, address: '17/18 Hoàng Hoa Thám' },
    { id: 4, name: 'Nhật Minh', email: 'minh@gmail.com', phone: '0917278756', role: 'Quản trị viên', status: true, address: 'Address 4' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const showModal = (employee) => {
    setCurrentEmployee(employee);
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
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const handleAddNewEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
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
        Swal.fire({
          title: "Đã xóa thành công!",
          text: "Tài khoản đã được xóa khỏi hệ thống.",
          icon: "success"
        });
      }
    });
  }

  const onChange = (checked, id) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, status: checked } : emp));
    if (checked === false) {
      return Swal.fire({
        icon: "success",
        text: "Ẩn người dùng thành công!",
      });
    } else {
      return Swal.fire({
        icon: "success",
        text: "Kích hoạt người dùng thành công!",
      });
    }
  };

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">NHÂN VIÊN</h1>
        <button 
          onClick={showAddModal}
          className="bg-green-500 text-white px-4 py-3 rounded-sm text-sm hover:bg-green-600 transition-all duration-300"
        >
          Tạo mới
        </button>
        <Modal title="Thêm nhân viên mới" open={isAddModalOpen} onOk={handleAddOk} onCancel={handleCancel}>
          <EmployeeFormAddNew handleAddNewEmployee={handleAddNewEmployee} handleCancel={handleCancel} />
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
            <th className="py-4 px-4">TÊN NHÂN VIÊN</th>
            <th className="py-4 px-4">EMAIL</th>
            <th className="py-4 px-4">ĐIỆN THOẠI</th>
            <th className="py-4 px-4">VAI TRÒ</th>
            <th className="py-4 px-4">TRẠNG THÁI</th>
            <th className="py-4 px-4"></th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {filteredEmployees.map((employee, index) => (
            <tr key={employee.id} className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-300">
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{index + 1}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{employee.name}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{employee.email}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{employee.phone}</td>
              <td className="py-3 px-4 text-[15px] text-[#373a3c]">{employee.role}</td>
              <td className="py-3 px-4 text-start">
                <Switch checked={employee.status} onChange={(checked) => onChange(checked, employee.id)} />
              </td>
              <td className="py-3 px-4 flex justify-center space-x-2">
                <button type="primary" onClick={() => showModal(employee)} className="bg-[#2ecc71] border border-[#2ecc71] text-white py-3 px-4 rounded-sm hover:bg-[#27ad60] transition-all duration-300">
                  <FaEdit className='text-sm' />
                </button>
                <Modal title="Cập nhật thông tin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  {currentEmployee && (
                    <EmployeeForm employee={currentEmployee} handleChange={handleChange} handleCancel={handleCancel}/>
                  )}
                </Modal>
                <button className="bg-red-500 text-white py-3 px-4 rounded-sm hover:bg-red-600 transition-all duration-300" onClick={handleDelete}>
                  <FaTrashAlt className='text-sm'/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">Hiển thị 1 đến {filteredEmployees.length} của {employees.length} dữ liệu trong danh sách</span>
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

export default EmployeeManagement;
