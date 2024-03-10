import React from 'react';
import Boiler from './../Components/layout/Boiler';
import WorkpaceContent from './../Components/workspace/WorkpaceContent';
import Header from './../Components/header/Header';
import productData from "../mockDatabase/Product.json"
import category from "../mockDatabase/category.json"
const Workspace = () => {
    return (
        <>
        <Header active={"active"}/>
        <Boiler>
       <WorkpaceContent data={productData} categories={category}/>
        </Boiler>

        </>
    );
};

export default Workspace;