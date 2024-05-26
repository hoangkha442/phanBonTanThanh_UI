import React from 'react';
import { Breadcrumb } from 'antd';
import SaleManagement from './SaleManagement';

const Sales = () => {
  return (
    <section>
      <div className="page-header mb-4">
        <p className='text-[#37474f] font-semibold mb-2'>Quản lý bán hàng</p>
        <Breadcrumb
          items={[
            {
              title: <a href="">Home</a>,
            },
            {
              title: <p className='text-[#37474f] font-semibold text-[13.5px]'>Quản lý bán hàng</p>,
            },
          ]}
        />
      </div>
      <SaleManagement />
    </section>
  );
};

export default Sales;
