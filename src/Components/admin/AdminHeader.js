import React from "react";
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <>
      <header>
        <nav>
          <div class="buttons container my-4">
            <Link to={"/AdminDashboard"}><button class="button-nav me-2">Dashbaod</button></Link>
            <Link to={"/AllOrders"}><button class="button-nav me-2">All Orders</button></Link>
            <Link to={"/Stock"}><button class="button-nav me-2">stock</button></Link>
            <Link to={"/AllDue"}><button class="button-nav me-2">All due</button></Link>
            <Link to={"/Profite"}><button class="button-nav me-2">Profit</button></Link>
            <Link to={"/AddProduct"}><button class="button-nav me-2">Add Product</button></Link>
            
          </div>
        </nav>
      </header>
    </>
  );
};

export default AdminHeader;
