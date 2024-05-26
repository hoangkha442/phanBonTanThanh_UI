import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Employees from './pages/Employees/Employees';
import MainLayout from './pages/MainLayout';
import Customer from './pages/Customer/Customer';
import Product from './pages/Product/Product';
import Suppliers from './pages/Supplier/Supplier';
import Category from './pages/Category/Category';
import Sales from './pages/Sale/Sale';
import Orders from './pages/Order/Order';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="customers" element={<Customer />} />
          <Route path="products" element={<Product />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="categories" element={<Category />} />
          <Route path="sales" element={<Sales />} />
          <Route path="orders" element={<Orders />} />

        </Route>
      </Routes>

    </Router>
  );
}

export default App;
