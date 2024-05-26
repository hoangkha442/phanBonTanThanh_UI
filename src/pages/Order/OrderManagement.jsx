import React, { useState } from 'react';
import OrderSearchForm from './components/OrderSearchForm';
import OrderTable from './components/OrderTable';


const OrderManagement = () => {
    const [orders, setOrders] = useState([
        {
          id: 1,
          orderCode: 'MDH-260524-003',
          customerCode: 'MKH-270523100425132',
          customerName: 'ong 9',
          customerPhone: '0983753825',
          totalValue: '300,000',
          paymentMethod: 'Ghi nợ',
          notes: '',
          transactionDate: '06:16 - 26/05/2024',
          sellerName: 'Admin website',
          sellerPhone: '0854858818',
          creationDate: '06:16 - 26/05/2024',
          previousDebt: '2,066,507,200 VNĐ',
          totalAmount: '300,000 VNĐ',
          paidAmount: '0 VNĐ',
          debtPaid: '0 VNĐ',
          remainingDebt: '300,000 VNĐ',
          products: [
            {
              id: 1,
              code: 'MSP-300523100435254',
              name: 'Dzosuper 10 SL Thuốc trừ cỏ đậu',
              quantity: 2,
              unitPrice: '60,000 VNĐ/chai',
              totalPrice: '120,000 VNĐ',
              notes: '',
              executionDate: '06:16 - 26/05/2024',
            },
            {
              id: 2,
              code: 'MSP-291023103108535',
              name: 'Q 7 thuốc trừ cỏ 1l',
              quantity: 3,
              unitPrice: '60,000 VNĐ/chai',
              totalPrice: '180,000 VNĐ',
              notes: '',
              executionDate: '06:16 - 26/05/2024',
            },
          ],
        },
        {
          id: 2,
          orderCode: 'MDH-260524-002',
          customerCode: 'MKH-020623080945',
          customerName: 'quảng',
          customerPhone: '0909569871',
          totalValue: '2,580,000',
          paymentMethod: 'Ghi nợ',
          notes: '',
          transactionDate: '06:15 - 26/05/2024',
          sellerName: 'Admin website',
          sellerPhone: '0854858818',
          creationDate: '06:15 - 26/05/2024',
          previousDebt: '1,500,000,000 VNĐ',
          totalAmount: '2,580,000 VNĐ',
          paidAmount: '0 VNĐ',
          debtPaid: '0 VNĐ',
          remainingDebt: '2,580,000 VNĐ',
          products: [
            {
              id: 1,
              code: 'MSP-100523100435255',
              name: 'Thuốc trừ sâu 500ml',
              quantity: 5,
              unitPrice: '120,000 VNĐ/chai',
              totalPrice: '600,000 VNĐ',
              notes: '',
              executionDate: '06:15 - 26/05/2024',
            },
            {
              id: 2,
              code: 'MSP-110523100435256',
              name: 'Phân bón lá 1kg',
              quantity: 20,
              unitPrice: '99,000 VNĐ/kg',
              totalPrice: '1,980,000 VNĐ',
              notes: '',
              executionDate: '06:15 - 26/05/2024',
            },
          ],
        },
        {
          id: 3,
          orderCode: 'MDH-260524-001',
          customerCode: 'MKH-260523100430051',
          customerName: 'út thanh',
          customerPhone: '0989199884',
          totalValue: '540,000',
          paymentMethod: 'Đã thanh toán',
          notes: '',
          transactionDate: '01:00 - 26/05/2024',
          sellerName: 'Admin website',
          sellerPhone: '0854858818',
          creationDate: '01:00 - 26/05/2024',
          previousDebt: '0 VNĐ',
          totalAmount: '540,000 VNĐ',
          paidAmount: '540,000 VNĐ',
          debtPaid: '0 VNĐ',
          remainingDebt: '0 VNĐ',
          products: [
            {
              id: 1,
              code: 'MSP-100523100435257',
              name: 'Hạt giống rau 50g',
              quantity: 10,
              unitPrice: '20,000 VNĐ/gói',
              totalPrice: '200,000 VNĐ',
              notes: '',
              executionDate: '01:00 - 26/05/2024',
            },
            {
              id: 2,
              code: 'MSP-120523100435258',
              name: 'Thuốc trừ cỏ 1l',
              quantity: 5,
              unitPrice: '68,000 VNĐ/chai',
              totalPrice: '340,000 VNĐ',
              notes: '',
              executionDate: '01:00 - 26/05/2024',
            },
          ],
        },
        {
          id: 4,
          orderCode: 'MDH-250524-004',
          customerCode: 'MKH-270523100425132',
          customerName: 'ong 9',
          customerPhone: '0983753825',
          totalValue: '4,765,000',
          paymentMethod: 'Ghi nợ',
          notes: '',
          transactionDate: '17:23 - 25/05/2024',
          sellerName: 'Admin website',
          sellerPhone: '0854858818',
          creationDate: '17:23 - 25/05/2024',
          previousDebt: '2,000,000,000 VNĐ',
          totalAmount: '4,765,000 VNĐ',
          paidAmount: '0 VNĐ',
          debtPaid: '0 VNĐ',
          remainingDebt: '4,765,000 VNĐ',
          products: [
            {
              id: 1,
              code: 'MSP-130523100435259',
              name: 'Phân bón vi sinh 50kg',
              quantity: 10,
              unitPrice: '200,000 VNĐ/bao',
              totalPrice: '2,000,000 VNĐ',
              notes: '',
              executionDate: '17:23 - 25/05/2024',
            },
            {
              id: 2,
              code: 'MSP-140523100435260',
              name: 'Máy bơm nước 2HP',
              quantity: 1,
              unitPrice: '2,765,000 VNĐ',
              totalPrice: '2,765,000 VNĐ',
              notes: '',
              executionDate: '17:23 - 25/05/2024',
            },
          ],
        },
        {
          id: 5,
          orderCode: 'MDH-250524-003',
          customerCode: 'MKH-010623150805',
          customerName: 'tùng(bào cỏ)',
          customerPhone: '0962455992',
          totalValue: '2,185,000',
          paymentMethod: 'Ghi nợ',
          notes: '',
          transactionDate: '16:31 - 25/05/2024',
          sellerName: 'Admin website',
          sellerPhone: '0854858818',
          creationDate: '16:31 - 25/05/2024',
          previousDebt: '3,000,000,000 VNĐ',
          totalAmount: '2,185,000 VNĐ',
          paidAmount: '0 VNĐ',
          debtPaid: '0 VNĐ',
          remainingDebt: '2,185,000 VNĐ',
          products: [
            {
              id: 1,
              code: 'MSP-150523100435261',
              name: 'Cây giống xoài 1m',
              quantity: 10,
              unitPrice: '100,000 VNĐ/cây',
              totalPrice: '1,000,000 VNĐ',
              notes: '',
              executionDate: '16:31 - 25/05/2024',
            },
            {
              id: 2,
              code: 'MSP-160523100435262',
              name: 'Bạt phủ đất 200m2',
              quantity: 2,
              unitPrice: '592,500 VNĐ/cuộn',
              totalPrice: '1,185,000 VNĐ',
              notes: '',
              executionDate: '16:31 - 25/05/2024',
            },
          ],
        },
        // Add more orders as needed...
      ]);
      
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold pb-4 border-b border-gray-200">Quản lý đơn hàng</h1>
      <OrderSearchForm searchTerm={searchTerm} handleSearch={handleSearch} />
      <OrderTable orders={orders} searchTerm={searchTerm} handleSearch={handleSearch} />
    </div>
  );
};

export default OrderManagement;
