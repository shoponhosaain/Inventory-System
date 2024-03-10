import React from 'react';

import productData from "../mockDatabase/Product.json"
import category from "../mockDatabase/category.json"
import Boiler from './../Components/layout/Boiler';
import AdminHeader from '../Components/admin/AdminHeader';
import WorkpaceContent from '../Components/workspace/WorkpaceContent';
import { Link } from 'react-router-dom';
const AddProduct = () => {
  const button= <div className='d-flex justify-content-end my-4'>
  <Link to={"/UploadProduct"}><button style={{ float: "right" }} className="view-btn mx-3">
        Add Product
      </button></Link>
      <Link to={"/UploadCatgeory"}><button style={{ float: "right" }} className="view-btn">
        Add Category
      </button></Link>
  </div>
    return (
        <>
        <AdminHeader/>
        <Boiler>
          
        
       <WorkpaceContent data={productData} categories={category} buttons={button}/>
      
        </Boiler>
        </>
    );
};

export default AddProduct;