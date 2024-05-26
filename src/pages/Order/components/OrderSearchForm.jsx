import React from 'react';

const OrderSearchForm = ({ searchTerm, handleSearch }) => {
  return (
    <div className="flex justify-between items-center py-4">
    <div className='w-full'>
      <label className='text-sm'>Tìm kiếm:</label>
      <input 
        type="text" 
        className="mt-1 p-2 py-3 border-2 rounded-sm w-full text-sm focus:outline-none focus:border-green-500" 
        placeholder="Tìm kiếm..." 
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
    <div className='ml-4'>
      <label className='text-sm'>Hiển thị</label>
      <div className="text-right">
        <select className="mt-1 px-6 py-3 border-2 rounded-sm text-sm focus:outline-none focus:border-green-500">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
      </div>
    </div>
  </div>
  );
};

export default OrderSearchForm;
