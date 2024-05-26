import React from 'react';
import { Modal } from 'antd';

const OrderDetailModal = ({ isVisible, handleClose, orderDetails }) => {
  if (!orderDetails) return null;

  return (
    <Modal
      title={`Chi tiết ${orderDetails.orderCode}`}
      visible={isVisible}
      onCancel={handleClose}
      footer={null}
      width={800}
    >
      <div className="px-6 py-4">
        <p className="mb-4"><strong>Nhân viên bán:</strong> {orderDetails.sellerName}</p>
        <p className="mb-4"><strong>Số ĐT:</strong> {orderDetails.sellerPhone}</p>
        <p className="mb-4"><strong>Ngày tạo đơn:</strong> {orderDetails.creationDate}</p>
        <p className="mb-4"><strong>Mã khách hàng:</strong> {orderDetails.customerCode}</p>
        <p className="mb-4"><strong>Người mua:</strong> {orderDetails.customerName}</p>
        <p className="mb-4"><strong>Số ĐT:</strong> {orderDetails.customerPhone}</p>

        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600 w-full">
              <th className="py-2 px-4">STT</th>
              <th className="py-2 px-4">MÃ SẢN PHẨM</th>
              <th className="py-2 px-4">TÊN SẢN PHẨM</th>
              <th className="py-2 px-4">SỐ LƯỢNG</th>
              <th className="py-2 px-4">ĐƠN GIÁ</th>
              <th className="py-2 px-4">THÀNH TIỀN</th>
              <th className="py-2 px-4">GHI CHÚ</th>
              <th className="py-2 px-4">NGÀY THỰC HIỆN</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.products && orderDetails.products.map((product, index) => (
              <tr key={product.id} className="border-t border-gray-200 hover:bg-gray-50 transition-all duration-300">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{product.code}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.quantity}</td>
                <td className="py-2 px-4">{product.unitPrice}</td>
                <td className="py-2 px-4">{product.totalPrice}</td>
                <td className="py-2 px-4">{product.notes}</td>
                <td className="py-2 px-4">{product.executionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mb-4"><strong>Hình thức:</strong> {orderDetails.paymentMethod}</p>
        <div className="border border-gray-300 rounded p-4">
          <p><strong>Thành tiền:</strong> {orderDetails.totalAmount} VNĐ</p>
          <p><strong>Đã thanh toán:</strong> {orderDetails.paidAmount} VNĐ</p>
          <p><strong>Đã trả nợ:</strong> {orderDetails.debtPaid} VNĐ</p>
          <p><strong>Còn nợ:</strong> {orderDetails.remainingDebt} VNĐ</p>
        </div>
        <p className="mt-4"><strong>Nợ cũ trước lúc {orderDetails.creationDate} là:</strong> {orderDetails.previousDebt} VNĐ</p>
      </div>
    </Modal>
  );
};

export default OrderDetailModal;
