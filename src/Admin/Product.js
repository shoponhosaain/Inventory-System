import React, { useState } from 'react';

const Product = () => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [date, setDate] = useState(""); // State for selected date

    // Function to format the date as "3/8/2024"
    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const month = dateObj.getMonth() + 1;
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        return `${month}/${day}/${year}`;
    };

    return (
        <>
            <div className="container p-0 radius bg-white">
                <div className="Header">
                    <div className="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
                        <h5 className="text-sm p-3 red font-bolt">Customer Dues Info</h5>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 pt-2 px-4 mt-2 pb-5">
                        <div className="wrap">
                            <form>
                                <div className="form-body">
                                    <legend className="mb-4">
                                        <i className="fa fa-user" /> User Information
                                    </legend>
                                    <label htmlFor="productName">Product Name</label>
                                    <input type="text" id="productName" name="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                                    <label htmlFor="category" className="mt-4">Category</label>
                                    <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                                    <label htmlFor="quantity" className="mt-4">Quantity</label>
                                    <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                                    <label htmlFor="price" className="mt-4">Price</label>
                                    <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                                    <label htmlFor="stock" className="mt-4">Stock</label>
                                    <input type="number" id="stock" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
                                    <label htmlFor="date" className="mt-4">Date</label>
                                    <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Display current state values */}
            <div className="container mt-3">
                <h4>Current State Values:</h4>
                <p>Product Name: {productName}</p>
                <p>Category: {category}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <p>Stock: {stock}</p>
                <p>Date: {formatDate(date)}</p> {/* Format the date */}
            </div>
        </>
    );
};

export default Product;
