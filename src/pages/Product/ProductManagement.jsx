import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Switch, Modal } from 'antd';
import ProductForm from './components/ProductForm';
import ProductFormAddNew from './components/ProductFormAddNew';
import Swal from 'sweetalert2';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm 1', category: 'Danh mục 1', company: 'Công ty 1', unit: 'Cái', stock: 100, cashPrice: 100000, creditPrice: 120000, sold: 50, status: true },
    { id: 2, name: 'Sản phẩm 2', category: 'Danh mục 2', company: 'Công ty 2', unit: 'Cái', stock: 150, cashPrice: 150000, creditPrice: 170000, sold: 80, status: true },
    // More products
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const showModal = (product) => {
    setCurrentProduct(product);
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
    setCurrentProduct(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleAddNewProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
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
        setProducts(products.filter(product => product.id !== id));
        Swal.fire({
          title: "Đã xóa thành công!",
          text: "Sản phẩm đã được xóa khỏi hệ thống.",
          icon: "success"
        });
      }
    });
  };

  const onChangeStatus = (checked, id) => {
    setProducts(products.map(product => product.id === id ? { ...product, status: checked } : product));
    if (checked === false) {
      return Swal.fire({
        icon: "success",
        text: "Ẩn sản phẩm thành công!",
      });
    } else {
      return Swal.fire({
        icon: "success",
        text: "Kích hoạt sản phẩm thành công!",
      });
    }
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">SẢN PHẨM</h1>
        <button 
          onClick={showAddModal}
          className="bg-green-500 text-white px-4 py-3 rounded-sm text-sm hover:bg-green-600 transition-all duration-300"
        >
          Tạo mới
        </button>
        <Modal title="Thêm sản phẩm mới" open={isAddModalOpen} onOk={handleAddOk} onCancel={handleCancel}>
          <ProductFormAddNew handleAddNewProduct={handleAddNewProduct} handleCancel={handleCancel} />
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className='bg-gray-100 text-left text-sm font-semibold text-gray-600 w-full'>
              <th className="py-4 px-4 w-32 whitespace-nowrap">#</th>
              <th className="py-4 px-4 w-80 whitespace-nowrap">TÊN SẢN PHẨM</th>
              <th className="py-4 px-4 w-80 whitespace-nowrap">DANH MỤC</th>
              <th className="py-4 px-4 w-96 whitespace-nowrap">CÔNG TY</th>
              <th className="py-4 px-4 w-32 whitespace-nowrap">ĐƠN VỊ</th>
              <th className="py-4 px-4 w-40 whitespace-nowrap">SỐ LƯỢNG TỒN</th>
              <th className="py-4 px-4 w-40 whitespace-nowrap">GIÁ TIỀN MẶT</th>
              <th className="py-4 px-4 w-40 whitespace-nowrap">GIÁ GHI NỢ</th>
              <th className="py-4 px-4 w-40 whitespace-nowrap">ĐÃ BÁN</th>
              <th className="py-4 px-4 w-32 whitespace-nowrap">TRẠNG THÁI</th>
              <th className="py-4 px-4 w-80 whitespace-nowrap">HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredProducts.map((product, index) => (
              <tr key={product.id} className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-300">
                <td className="py-3 px-4 text-[15px] text-[#373a3c]">{index + 1}</td>
                <td className="py-3 px-4 text-[15px] text-[#373a3c] whitespace-nowrap">{product.name}</td>
                <td className="py-3 px-4 text-[15px] text-[#373a3c] whitespace-nowrap">{product.category}</td>
                <td className="py-3 px-4 text-[15px] text-[#373a3c] whitespace-nowrap">{product.company}</td>
                <td className="py-3 px-4 text-[15px] text-[#373a3c] whitespace-nowrap">{product.unit}</td>
                <td className="py-3 px-4 text-[15px] text-[#373a3c] whitespace-nowrap">{product.stock}</td>
                <td className="py-3 px-4 text-[15px] text-[#373a3c] whitespace-nowrap">{product.cashPrice}</td>
                <td className="py-3 px-4 text-[15px] text-[#373a3c] whitespace-nowrap">{product.creditPrice}</td>
                <td className="py-3 px-4 text-[15px] text-[#373a3c] whitespace-nowrap">{product.sold}</td>
                <td className="py-3 px-4 text-center">
                  <Switch checked={product.status} onChange={(checked) => onChangeStatus(checked, product.id)} />
                </td>
                <td className="py-3 px-4 flex justify-center space-x-2 whitespace-nowrap">
                  <button type="primary" onClick={() => showModal(product)} className="bg-[#2ecc71] border border-[#2ecc71] text-white py-3 px-4 rounded-sm hover:bg-[#27ad60] transition-all duration-300">
                    <FaEdit className='text-sm' />
                  </button>
                  <Modal title="Cập nhật thông tin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    {currentProduct && (
                      <ProductForm product={currentProduct} handleChange={handleChange} handleCancel={handleCancel}/>
                    )}
                  </Modal>
                  <button className="bg-red-500 text-white py-3 px-4 rounded-sm hover:bg-red-600 transition-all duration-300" onClick={() => handleDelete(product.id)}>
                    <FaTrashAlt className='text-sm'/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">Hiển thị 1 đến {filteredProducts.length} của {products.length} dữ liệu trong danh sách</span>
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

export default ProductManagement;
