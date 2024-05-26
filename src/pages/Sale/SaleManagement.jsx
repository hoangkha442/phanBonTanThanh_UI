import React, { useState } from 'react';
import SaleForm from './components/SaleForm';
import OrderTable from './components/OrderTable';

const SaleManagement = () => {
  const [sale, setSale] = useState({
    customerName: '',
    customerPhone: '',
    customerCode: '',
    orderCount: 0,
    outstandingDebt: 0,
    productName: '',
    productCode: '',
    unitPriceCash: '',
    unitPriceCredit: '',
    quantity: 1,
    unit: '',
    stockQuantity: '',
    totalCash: '',
    totalCredit: '',
    notes: ''
  });

  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSale({ ...sale, [name]: value });
  };

  const handleAddSale = (e) => {
    e.preventDefault();
    const newOrder = { ...sale, id: orders.length + 1 };
    setOrders([...orders, newOrder]);
    handleReset();
  };

  const handleReset = () => {
    setSale({
      customerName: '',
      customerPhone: '',
      customerCode: '',
      orderCount: 0,
      outstandingDebt: 0,
      productName: '',
      productCode: '',
      unitPriceCash: '',
      unitPriceCredit: '',
      quantity: 1,
      unit: '',
      stockQuantity: '',
      totalCash: '',
      totalCredit: '',
      notes: ''
    });
  };

  const handleViewHistory = () => {
    console.log('Viewing purchase history for:', sale.customerName);
    // Handle the logic to view purchase history
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
    <div className="container mx-auto mt-8 p-6 bg-[#e4f4f1] rounded-lg" style={{borderTop: '3px solid #8CDDCD', boxShadow: '0 2px 1px rgba(0, 0, 0, 0.05)'}}>
      <h1 className="text-2xl font-semibold pb-4 border-b border-gray-200">Tạo mới đơn hàng</h1>
      <SaleForm
        sale={sale}
        handleChange={handleChange}
        handleAddSale={handleAddSale}
        handleReset={handleReset}
        handleViewHistory={handleViewHistory}
      />
    </div>
    <OrderTable orders={orders} searchTerm={searchTerm} handleSearch={handleSearch} />
    </>
  );
};

export default SaleManagement;
