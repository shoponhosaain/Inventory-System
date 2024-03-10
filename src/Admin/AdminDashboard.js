import React from 'react';
import Boiler from '../Components/layout/Boiler';
import AdminHeader from './../Components/admin/AdminHeader';
import EmployeeTable from './../Components/admin/EmployeeTable';




const AdminDashboard = () => {
    return (
      <>
      <AdminHeader/>
      
     <EmployeeTable/>
      

      </>
    );
};

export default AdminDashboard;