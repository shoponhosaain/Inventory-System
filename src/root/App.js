import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesmanLogin from '../User/SalesmanLogin';
import { AuthProvider } from '../contexts/AuthContexts';
import Dashboard from './../User/Dashboard';
import Fourzerofore from "../User/404";
import CheckoutPage from './../User/CheckoutPage';
import DueCustomerInfo from './../User/DueCustomerInfo';
import Dues from './../User/Dues';
import ViewPaidCustomer from './../User/ViewPaidCustomer';
import PrintBill from './../User/PrintBill';
import Workspace from './../User/Workspace';
import AdminDashboard from '../Admin/AdminDashboard';
import AdminLogin from '../Admin/AdminLogin';
import AllOrders from './../Admin/AllOrders';
import AdminDue from '../Admin/AdminDue';
import Stock from './../Admin/Stock';
import Profit from './../Admin/Profit';
import AddProduct from './../Admin/AddProduct';
import NewEmployee from '../Admin/NewEmployee';
import Product from './../Admin/Product';
import UploadCategory from '../Admin/UploadCategory';
function App() {
  return (
   
    <Router>
       <AuthProvider>
      <Routes>
      <Route path="/UploadCatgeory" element={<UploadCategory/>} />
      <Route path="/UploadProduct" element={<Product/>} />
      <Route path="/AddEmployee" element={<NewEmployee/>} />
      <Route path="/AddProduct" element={<AddProduct/>} />
      <Route path="/Profite" element={<Profit/>} />
      <Route path="/AllDue" element={<AdminDue/>} />
      <Route path="/Stock" element={<Stock/>} />
      <Route path="/AllOrders" element={<AllOrders/>} />
      <Route path="/AdminDashboard" element={<AdminDashboard/>} />
      <Route path="/Admin" element={<AdminLogin/>} />
        <Route path="/" element={<SalesmanLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Fourzerofore />} />
        <Route path="/checkoutPage/:id" element={<CheckoutPage />} />
        <Route path="/dueCustomerInfo" element={<DueCustomerInfo />} />
        <Route path="/dues" element={<Dues/>} />
        <Route path="/printBill:id" element={<PrintBill />} />
        <Route path="/viewPaidCustomers/:id" element={<ViewPaidCustomer />} />
        <Route path="/workspace" element={<Workspace />} />
        
      </Routes>
      </AuthProvider>
    </Router>
   
  );
}


export default App;
