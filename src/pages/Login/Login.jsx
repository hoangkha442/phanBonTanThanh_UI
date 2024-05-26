import React from 'react';

const Login = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: "url('http://dnqt.net/Template/assets/images/auth/img-auth-big.jpg')" }}
    >
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="bg-white bg-opacity-60 p-1 rounded-lg mb-6 w-[40%]">
          <img src="http://dnqt.net/Template/assets/images/logoTT.png" alt="Phân Bón Tấn Thành Logo" className="h-full object-cover mx-auto"/>
        </div>
        <div className="bg-white px-10 py-12 rounded-lg shadow-lg w-10/12">
          <h2 className="text-[#4c7031] text-2xl font-semibold text-center mb-4 uppercase">Đăng Nhập</h2>
          <form>
            <div className="mb-4 border-t pt-4">
              <input 
                className="w-full p-3 border-2 text-sm border-gray-300 focus:outline-none focus:border-green-500" 
                type="email" 
                id="email" 
                placeholder="Địa chỉ email" 
              />
            </div>
            <div className="mb-4">
              <input 
                className="w-full p-3 border-2 text-sm border-gray-300 focus:outline-none focus:border-green-500" 
                type="password" 
                id="password" 
                placeholder="Mật khẩu" 
              />
            </div>
            <div className="my-5 flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="mr-2 leading-tight w-4 h-4 text-[#1abc9c] bg-gray-100 border-gray-300 rounded focus:ring-2"
              />
              <label htmlFor="remember" className="text-gray-600 text-sm">Ghi nhớ đăng nhập.</label>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#1abc9c] text-white p-3 hover:bg-green-600 transition duration-200 text-sm mb-3 mt-2"
            >
              Đăng nhập
            </button>
          </form>
          <div className="mt-4 text-center border-t pt-4 text-[#868e96]">
            <a href="#" className="hover:underline text-[15px]">Quên mật khẩu?</a> 
            <a href="#" className="text-black opacity-90 hover:underline font-semibold text-[15px]"> Tạo mật khẩu mới</a>
          </div>
          <div className="mt-4 text-center text-[#868e96] border-t pt-4 text-sm">
            <p className="text-gray-700 font-semibold opacity-90">Dành cho khách hàng</p>
            <p className="text-sm mt-1">Tra cứu đơn hàng tại <a href="#" className="text-black text-sm font-semibold hover:underline">đây</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;