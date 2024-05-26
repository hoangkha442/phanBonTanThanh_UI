import React from 'react';

const OrderTable = ({ orders, searchTerm, handleSearch }) => {
  const filteredOrders = orders.filter(order =>
    order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.productCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-8 bg-white p-6" style={{borderTop: '3px solid #8CDDCD', boxShadow: '0 2px 1px rgba(0, 0, 0, 0.05)'}}>
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
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600 w-full">
              <th className="py-4 px-4">STT</th>
              <th className="py-4 px-4">MÃ SẢN PHẨM</th>
              <th className="py-4 px-4">TÊN SẢN PHẨM</th>
              <th className="py-4 px-4">GIÁ TIỀN MẶT</th>
              <th className="py-4 px-4">GIÁ GHI NỢ</th>
              <th className="py-4 px-4">SỐ LƯỢNG</th>
              <th className="py-4 px-4">TỔNG TIỀN MẶT</th>
              <th className="py-4 px-4">TỔNG TIỀN GHI NỢ</th>
              <th className="py-4 px-4">GHI CHÚ</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr key={order.id} className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-300">
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{index + 1}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.productCode}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.productName}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.unitPriceCash}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.unitPriceCredit}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.quantity}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.totalCash}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.totalCredit}</td>
                  <td className="py-3 px-4 text-[15px] text-[#373a3c]">{order.notes}</td>
                </tr>
              ))
            ) : (
              <tr className='pt-4'>
                <td colSpan="9" className="py-6 px-4 text-center bg-[#fcf3cf] text-[#7d6608]">Không tìm thấy dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-600">
          Hiển thị 1 đến {filteredOrders.length} của {orders.length} dữ liệu trong danh sách
        </span>
        <div className="flex space-x-2 justify-center">
          <button className="p-2 rounded-md text-sm">&lt;&lt;</button>
          <button className="p-2 rounded-md text-sm">&lt;</button>
          <span className="p-2 bg-[#1abc9c] w-8 h-8 rounded-full leading-4 text-white text-center">1</span>
          <button className="p-2 rounded-md text-sm">&gt;</button>
          <button className="p-2 rounded-md text-sm">&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
