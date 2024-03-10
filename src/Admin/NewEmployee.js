import React, { useState } from 'react';

const NewEmployee = () => {
    // State to manage input values
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        number: '',
        password: '',
        address: ''
    });

    // Function to handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission, you can add validation if needed
        // For now, we'll just log the form data
        console.log(formData);
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
                            <form onSubmit={handleSubmit}>
                                <div className="form-body">
                                    <legend className=" mb-4">
                                        <i className="fa fa-user" /> User Information
                                    </legend>
                                    <label htmlFor="userName">User Name</label>
                                    <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
                                    <label htmlFor="email" className="mt-4">Email</label>
                                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                    <label htmlFor="number" className="mt-4">Number</label>
                                    <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} required />
                                    <label htmlFor="password" className="mt-4">Password</label>
                                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                    <label htmlFor="address" className="mt-4">Address</label>
                                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                                </div>
                                <div className="form-footer bg-white">
                                    <button type="submit" className="view-btn">Add Employee</button>
                                </div>
                            </form>
                        </div>
                        {/* Display entered data */}
                        <div className="mt-4">
                            <h5>Entered Information:</h5>
                            <p>User Name: {formData.userName}</p>
                            <p>Email: {formData.email}</p>
                            <p>Number: {formData.number}</p>
                            <p>Password: {formData.password}</p>
                            <p>Address: {formData.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewEmployee;
