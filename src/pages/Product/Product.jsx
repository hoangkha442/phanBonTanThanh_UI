import React from 'react';
import { Breadcrumb } from 'antd';
import ProductManagement from './ProductManagement';

export default function Products() {
  return (
    <section>
        <div className="page-header">
            <p className='text-[#37474f] font-semibold mb-2'>Quản lý sản phẩm</p>
            <Breadcrumb
                items={[
                {
                    title: <a href="/">Home</a>,
                  },
                {
                    title: <p className='text-[#37474f] font-semibold text-[13.5px]'>Quản lý sản phẩm</p>,
                },
                ]}
            />
        </div>
        <ProductManagement />
    </section>
  );
}
