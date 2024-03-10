import React from 'react';
import AdminHeader from './../Components/admin/AdminHeader';
import Boiler from './../Components/layout/Boiler';
import BoxPagination from './../Components/layout/BoxPagination';
import OrderTable from './OrderTable';
import data from "../mockDatabase/order.json"
const AllOrders = () => {
    return (
        <>
        <AdminHeader/>
       <Boiler>
        <div className='container'>
        <OrderTable value={data}/>
        </div>
           
        
       </Boiler>
        </>
    );
};

export default AllOrders;