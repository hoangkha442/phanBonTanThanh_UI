import React from 'react';
import { Breadcrumb } from 'antd';
import OrderManagement from './OrderManagement';

const Orders = () => {
  return (
    <section>
      <div className="page-header mb-4">
        <p className='text-[#37474f] font-semibold mb-2'>Quản lý đơn hàng</p>
        <Breadcrumb
          items={[
            {
              title: <a href="">Home</a>,
            },
            {
              title: <p className='text-[#37474f] font-semibold text-[13.5px]'>Quản lý đơn hàng</p>,
            },
          ]}
        />
      </div>
      <OrderManagement />
    </section>
  );
};

export default Orders;
