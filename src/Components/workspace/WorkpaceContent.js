import React, { useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const WorkpaceContent = ({ data, categories,buttons }) => {
    // Convert categories object into an array of strings
    const categoriesArray = Object.values(categories).map(category => category.category);
    
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredData.length / itemsPerPage)));
    };

    const filteredData = data.filter(product => {
        const categoryMatch = !selectedCategory || product.category === selectedCategory;
        const searchMatch = product.productName.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && searchMatch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <div className="container p-0 radius bg-white">
                <div className="Header">
                    <div className="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
                        <h5 className="text-sm red font-bolt">Category</h5>
                   
                        <div className="pagination d-flex align-items-center">
                            <div className="input-group me-4">
                                <input
                                    type="text"
                                    className="form-control border-none"
                                    placeholder="Search here"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <p className="text-md font-bolt pt-2 me-2 mt-2">{currentPage}/{Math.ceil(filteredData.length / itemsPerPage)}</p>
                            <div className="prev-arrow py-2 px-3 ms-3 bg-white radius" onClick={handlePrevPage}>
                                <BsArrowLeft />
                            </div>
                            <div className="next-arrow py-2 px-3 ms-3 bg-white radius" onClick={handleNextPage}>
                                <BsArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="category my-3">
                            <select
                                className="form-select border-none"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="">All</option>
                                {categoriesArray.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <div className="col-9 mx-auto">
                    {buttons}
                        <table className="table-2 my-3">
                            
                            <thead>
                                <tr>
                                    <th className="col-1">No</th>
                                    <th className="truncate">Product Name</th>
                                    <th className="truncate">Product Id</th>
                                    <th className="truncate">Price</th>
                                    <th className="truncate">In Stock</th>
                                    <th className="truncate">Upload Date</th>
                                    <th className="truncate">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((product, index) => (
                                    <tr key={index}>
                                        <td className="truncate">{index + 1}</td>
                                        <td className="truncate">{product.productName}</td>
                                        <td className="truncate">{product.productId}</td>
                                        <td className="truncate">{product.price}</td>
                                        <td className="truncate">{product.stock}</td>
                                        <td className="truncate">{product.uploadDate}</td>
                                        <td className="truncate"><Link to={"/checkoutPage/"+product.productId}><button className="logout-btn">Sell</button></Link> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkpaceContent;
