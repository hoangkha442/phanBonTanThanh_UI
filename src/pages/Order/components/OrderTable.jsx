import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import OrderDetailModal from './OrderDetailModal';

const OrderTable = ({ orders, searchTerm, handleSearch }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter(order =>
    order.orderCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600 w-full">
              <th className="py-4 px-4">STT</th >
                            <th className="py-4 px-4">MÃ ĐƠN HÀNG</th>
              <th className="py-4 px-4">MÃ KHÁCH HÀNG</th>
              <th className="py-4 px-4">TÊN KHÁCH HÀNG</th>
              <th className="py-4 px-4">SỐ ĐIỆN THOẠI</th>
              <th className="py-4 px-4">TỔNG GIÁ TRỊ</th>
              <th className="py-4 px-4">PHƯƠNG THỨC</th>
              <th className="py-4 px-4">GHI CHÚ</th>
              <th className="py-4 px-4">NGÀY GIAO DỊCH</th>
              <th className="py-4 px-4">HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr key={order.id} className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-300">
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{index + 1}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.orderCode}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.customerCode}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.customerName}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.customerPhone}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.totalValue}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">
                    <span className={order.paymentMethod === 'Đã thanh toán' ? 'text-green-500' : 'text-red-500'}>
                      {order.paymentMethod}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.notes}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.transactionDate}</td>
                  <td className="py-3 px-4 flex justify-center space-x-2">
                    <button
                      className="bg-blue-500 text-white py-3 px-4 rounded-sm hover:bg-blue-600 transition-all duration-300"
                      onClick={() => handleViewDetails(order)}
                    >
                      <FaInfoCircle className="text-sm" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="py-3 px-4 text-center text-[#373a3c]">Không tìm thấy dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Hiển thị 1 đến {filteredOrders.length} của {orders.length} dữ liệu trong danh sách
        </span>
      </div>
        <div className="flex space-x-2 justify-center">
          <button className="p-2 rounded-md text-sm">&lt;&lt;</button>
          <button className="p-2 rounded-md text-sm">&lt;</button>
          <span className="p-2 bg-[#1abc9c] w-8 h-8 rounded-full leading-4 text-white text-center">1</span>
          <button className="p-2 rounded-md text-sm">&gt;</button>
          <button className="p-2 rounded-md text-sm">&gt;&gt;</button>
        </div>
      {selectedOrder && (
        <OrderDetailModal
          isVisible={isModalVisible}
          handleClose={handleCloseModal}
          orderDetails={selectedOrder}
        />
      )}
    </div>
  );
};

export default OrderTable;
