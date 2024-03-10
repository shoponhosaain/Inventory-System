import React from 'react';
import { useParams } from 'react-router';
import orderData from "../../mockDatabase/order.json";

const CustomerDetails = () => {
    const { id } = useParams();

    // Find the order with the given ID
    const order = orderData.find(order => order.orderId === id);

    if (!order) {
        return <div>No order found for the provided ID</div>;
    }

    return (
        <div className="container p-0 radius bg-white">
            <div className="Header">
                <div className="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
                    <h5 className="text-sm p-3 red font-bolt">Customer info</h5>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-md-6 table-container">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="font-bolt">Information</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Customer Name</td>
                                <td>{order.customerName}</td>
                            </tr>
                            <tr>
                                <td>Customer Phone</td>
                                <td>{order.customerPhone}</td>
                            </tr>
                            <tr>
                                <td>Total Price</td>
                                <td>{order.total} BDT</td>
                            </tr>
                            <tr>
                                <td>Product Id</td>
                                <td>{order.productId}</td>
                            </tr>
                            <tr>
                                <td>Product Price</td>
                                <td>{order.productPrice} BDT</td>
                            </tr>
                            <tr>
                                <td>Product Quantity</td>
                                <td>{order.quantity} </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="logout-btn mt-3">View Bill</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;
