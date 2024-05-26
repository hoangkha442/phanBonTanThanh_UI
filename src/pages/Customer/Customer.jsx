import React from 'react'
import { Breadcrumb } from 'antd';
export default function Customer() {
  return (
    <section>
        <div className="page-header">
            <p className='text-[#37474f] font-semibold mb-2'>Quản lý khách hàng</p>
            <Breadcrumb
                items={[
                {
                    title: <a href="">Home</a>,
                  },
                {
                    title: <p className='text-[#37474f] font-semibold text-[13.5px]'>Quản lí khách hàng</p>,
                },
                ]}
            />
        </div>
    </section>
  )
}
