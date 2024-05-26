import React from 'react';

const SaleForm = ({ sale, handleChange, handleAddSale, handleReset, handleViewHistory }) => {
  return (
    <form className="space-y-6 mt-4" onSubmit={handleAddSale}>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tên khách hàng <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="customerName"
            value={sale.customerName}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1"
            placeholder="Chọn khách hàng"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Chọn sản phẩm <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="productName"
            value={sale.productName}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1"
            placeholder="Chọn sản phẩm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Số lượng sản phẩm <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <input
              type="number"
              name="quantity"
              value={sale.quantity}
              onChange={handleChange}
              className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1"
              required
            />
            <select
              name="unit"
              value={sale.unit}
              onChange={handleChange}
              className="border-2 rounded-sm text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1 ml-2"
            >
              <option value="Cái">Cái</option>
              <option value="Kg">Kg</option>
              <option value="Bộ">Bộ</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="customerPhone"
            value={sale.customerPhone}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1"
            placeholder="Số điện thoại khách hàng"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mã sản phẩm <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="productCode"
            value={sale.productCode}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1 bg-gray-100"
            placeholder="Mã sản phẩm"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Thành tiền (Tiền mặt):
          </label>
          <input
            type="text"
            name="totalCash"
            value={sale.totalCash}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1 bg-gray-100"
            placeholder="Tổng"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mã khách hàng
          </label>
          <input
            type="text"
            name="customerCode"
            value={sale.customerCode}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1 bg-gray-100"
            placeholder="Mã khách hàng"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Số lượng tồn
          </label>
          <input
            type="text"
            name="stockQuantity"
            value={sale.stockQuantity}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1 bg-gray-100"
            placeholder="Số lượng tồn"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Thành tiền (Ghi nợ):
          </label>
          <input
            type="text"
            name="totalCredit"
            value={sale.totalCredit}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1 bg-gray-100"
            placeholder="Tổng"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Số lần mua hàng
          </label>
          <input
            type="number"
            name="orderCount"
            value={sale.orderCount}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1 bg-gray-100"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Giá bán (Tiền mặt):
          </label>
          <input
            type="number"
            name="unitPriceCash"
            value={sale.unitPriceCash}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1"
            placeholder="Đơn giá bán"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ghi chú
          </label>
          <input
            type="text"
            name="notes"
            value={sale.notes}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1"
            placeholder="Ghi chú"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tồn nợ
          </label>
          <input
            type="number"
            name="outstandingDebt"
            value={sale.outstandingDebt}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1 bg-gray-100"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Giá bán (Ghi nợ):
          </label>
          <input
            type="number"
            name="unitPriceCredit"
            value={sale.unitPriceCredit}
            onChange={handleChange}
            className="border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500 px-4 py-3 mt-1"
            placeholder="Đơn giá bán"
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          className="bg-[#6c757d] text-white px-4 py-3 rounded-sm text-sm hover:bg-[#626a71] transition-all duration-300"
          onClick={handleReset}
        >
          Làm mới
        </button>
        <button
          type="submit"
          className="bg-[#1abc9c] text-white px-4 py-3 rounded-sm text-sm hover:bg-blue-600 transition-all duration-300"
        >
          Thêm
        </button>
        {sale.customerName && (
          <button
            type="button"
            className="bg-[#007bff] text-white px-4 py-3 rounded-sm text-sm hover:bg-[#0069d9] transition-all duration-300"
            onClick={handleViewHistory}
          >
            Xem lịch sử mua hàng
          </button>
        )}
      </div>
    </form>
  );
};

export default SaleForm;
