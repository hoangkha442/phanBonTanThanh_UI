import React from 'react';
import { Breadcrumb } from 'antd';
import CategoryManagement from './CategoryManagement';

export default function Categories() {
  return (
    <section>
        <div className="page-header">
            <p className='text-[#37474f] font-semibold mb-2'>Quản lý danh mục</p>
            <Breadcrumb
                items={[
                {
                    title: <a href="/">Home</a>,
                  },
                {
                    title: <p className='text-[#37474f] font-semibold text-[13.5px]'>Quản lý danh mục</p>,
                },
                ]}
            />
        </div>
        <CategoryManagement />
    </section>
  )
}
