import React, { useState } from 'react';

const UploadCategory = () => {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setCategoryName("");
    };

    return (
        <>
            <div className="container p-0 radius bg-white">
                <div className="Header">
                    <div className="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
                        <h5 className="text-sm p-3 red font-bolt">Add Category</h5>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 pt-2 px-4 mt-2 pb-5">
                        <div className="wrap">
                            <form onSubmit={handleSubmit}>
                                <div className="form-body">
                                    <legend className="mb-4">
                                        <i className="fa fa-user" /> Category Information
                                    </legend>
                                    <label htmlFor="categoryName" >Category Name</label>
                                    <input  type="text" id="categoryName" name="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
                                </div>
                                <div className="form-footer bg-white">
                                    <button type="submit" className="view-btn">Add Category</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Display current state values */}
            <div className="container mt-3">
                <h4>Current Category Name:</h4>
                <p>{categoryName}</p>
            </div>
        </>
    );
};

export default UploadCategory ;

