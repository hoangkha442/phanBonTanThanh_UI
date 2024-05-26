import React from 'react'
import { Breadcrumb } from 'antd';
import EmployeeManagement from './EmployeeManagement';

export default function Employees() {
  return (
    <section>
        <div className="page-header">
            <p className='text-[#37474f] font-semibold mb-2'>Quản lý nhân viên</p>
            <Breadcrumb
                items={[
                {
                    title: <a href="">Home</a>,
                  },
                {
                    title: <p className='text-[#37474f] font-semibold text-[13.5px]'>Quản lí nhân viên</p>,
                },
                ]}
            />
        </div>
        <EmployeeManagement />
    </section>
  )
}
