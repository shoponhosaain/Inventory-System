import React, { useState, useEffect } from 'react';
import "../../assets/css/checkout.css";
import ProductData from "../../mockDatabase/Product.json";
import { useAuth } from '../../contexts/AuthContexts';

const CheckOut = ({ productId }) => {
    const { user } = useAuth();
    const [customerName, setCustomerName] = useState('');
    const [phone, setPhone] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [paymentStatus, setPaymentStatus] = useState(0); // Default payment status to 0
    const [uploadDate, setUploadDate] = useState('');
    const [total, setTotal] = useState(0);
    const [paymentAmount, setPaymentAmount] = useState('');

    // Find the product with the matching productId
    const product = ProductData.find(item => item.productId === productId);

    useEffect(() => {
        calculateTotal();
    }, [quantity, product]);

    const handleEnableDue = (e) => {
        e.preventDefault();
        setPaymentStatus(1);
    };

    const handleDisableDue = (e) => {
        e.preventDefault();
        setPaymentStatus(0);
        setPaymentAmount(''); // Clear payment amount when due is disabled
    };

    const handlePaymentAmountChange = (e) => {
        setPaymentAmount(e.target.value);
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        // Perform checkout action here
    };

    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    const calculateTotal = () => {
        const calculatedTotal = product ? quantity * product.price : 0;
        setTotal(calculatedTotal);
    };

    return (
        <>
            <div className="container p-0 radius bg-white">
                <div className="Header">
                    <div className="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
                        <h5 className="text-sm p-3 red font-bolt">Checkout</h5>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 pt-2 px-4 mt-2 pb-5">
                        <div className="wrap">
                            <form onSubmit={handleCheckout}>
                                <div className="form-body">
                                    <legend className="mb-4">
                                        <i className="fa fa-user" /> User Information
                                    </legend>
                                    <label htmlFor="fname">Customer Name</label>
                                    <input type="text" id="fname" name="fname" required value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                                    <label htmlFor="phone" className="mt-4">
                                        Phone
                                    </label>
                                    <input type="number" id="phone" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <label htmlFor="quantity" className="mt-4">
                                        Quantity
                                    </label>
                                    <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min="1" required />
                                    <label htmlFor="uploadDate" className="mt-4">
                                        Upload Date
                                    </label>
                                    <input type="date" id="uploadDate" name="uploadDate" value={uploadDate} onChange={(e) => setUploadDate(e.target.value)} required />
                                    <div className="due">
                                        <div className="input-group mt-4">
                                            <label htmlFor="total" className="mt-0">
                                                Total
                                            </label>
                                            <input
                                                type="text"
                                                id="total"
                                                name="total"
                                                value={total}
                                                disabled={!paymentStatus}
                                            />
                                        </div>
                                        <div className="input-group mt-4">
                                            <label htmlFor="paymentAmount" className="mt-0">
                                                Payment Amount
                                            </label>
                                            <input
                                                type="text"
                                                id="paymentAmount"
                                                name="paymentAmount"
                                                value={paymentAmount}
                                                onChange={handlePaymentAmountChange}
                                                disabled={paymentStatus === 0}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="view-btn my-3"
                                            onClick={handleDisableDue}
                                        >
                                            Disable Due
                                        </button>
                                        <button
                                            type="button"
                                            className="view-btn red-bg my-3 ms-4"
                                            onClick={handleEnableDue}
                                        >
                                            Enable Due
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="form-footer bg-white">
                            <button type="submit" className="view-btn">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Customer Name: {customerName}</p>
                <p>Phone: {phone}</p>
                <p>Quantity: {quantity}</p>
                <p>Upload Date: {formattedDate(uploadDate)}</p>
                <p>Total: {total}</p>
                <p>Due Status: {paymentStatus}</p>
                <p>User Id: {user.userid}</p>
                <p>User name: {user.username}</p>
                <p>total due: {user.username}</p>
                {paymentAmount && <p>Payment Amount: {paymentAmount} tatal due {total - paymentAmount }</p>}
            </div>
        </>
    );
};

export default CheckOut;
