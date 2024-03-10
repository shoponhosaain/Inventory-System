import React from 'react';
import AdminHeader from './../Components/admin/AdminHeader';
import Boiler from './../Components/layout/Boiler';
import DueList from './../Components/due/DueList';
const AdminDue = () => {
    return (
       <>
       <AdminHeader/>
      <Boiler>
        <DueList/>
      </Boiler>
       </>
    );
};

export default AdminDue;