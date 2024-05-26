import React from 'react';
import { Breadcrumb } from 'antd';
import SupplierManagement from './SupplierManagement';

export default function Suppliers() {
  return (
    <section>
        <div className="page-header">
            <p className='text-[#37474f] font-semibold mb-2'>Quản lý nhà cung cấp</p>
            <Breadcrumb
                items={[
                {
                    title: <a href="/">Home</a>,
                  },
                {
                    title: <p className='text-[#37474f] font-semibold text-[13.5px]'>Quản lý nhà cung cấp</p>,
                },
                ]}
            />
        </div>
        <SupplierManagement />
    </section>
  )
}
