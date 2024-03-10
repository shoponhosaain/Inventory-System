import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const TableMain = ({ value }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchMobile, setSearchMobile] = useState('');
  const [dateFilter, setDateFilter] = useState('all');

  const filteredByMobile = value.filter(val => val.customerPhone.includes(searchMobile));

  const filteredByDate = filteredByMobile.filter(val => {
    if (dateFilter === 'today') {
      const today = new Date().toLocaleDateString();
      return val.date === today;
    }
    if (dateFilter === 'week') {
      const today = new Date();
      const weekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
      const weekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
      const valDate = new Date(val.date);
      return valDate >= weekStart && valDate <= weekEnd;
    }
    if (dateFilter === 'month') {
      const today = new Date();
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      const valDate = new Date(val.date);
      return valDate >= monthStart && valDate <= monthEnd;
    }
    if (dateFilter === 'year') {
      const today = new Date().getFullYear();
      return new Date(val.date).getFullYear() === today;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredByDate.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredByDate.length);

  const handlePageChange = (page) => {
    const newStartIndex = (page - 1) * itemsPerPage;
    if (newStartIndex >= 0 && newStartIndex < filteredByDate.length) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="container p-0 radius bg-white mt-5">
        <div className="Header">
          <div className="heading d-flex justify-content-between  red-light-bg radius align-items-center px-4 py-1">
            <h5 className="text-sm red font-bolt">152 </h5>

            <div className="pagination d-flex align-items-center">
              <div className="input-group me-4">
                <input
                  type="text"
                  className="form-control border-none"
                  placeholder="Search by mobile"
                  aria-label="Search by mobile"
                  value={searchMobile}
                  onChange={(e) => setSearchMobile(e.target.value)}
                />
              </div>
              <select className="form-select me-4" aria-label="Date Filter" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>

              <p className="text-md font-bolt pt-2 me-2 mt-2">{currentPage}/{totalPages}</p>
              <div className="prev-arrow py-2 px-3 ms-3 bg-white radius" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                <BsArrowLeft />
              </div>
              <div className="next-arrow py-2 px-3 ms-3 bg-white radius" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table my-3">
        <thead>
          <tr>
            <th className="col-1">No</th>
            <th className="truncate">Product Name</th>
            <th className="truncate">Order Id</th>
            <th className="truncate">Customer Phone</th>
            <th className="truncate">Customer Name</th>
            <th className="truncate">Quantity</th>
            <th className="truncate">Total</th>
            <th className="truncate">Date</th>
            <th className="truncate">payment</th>
            <th className="truncate">Action</th>
          </tr>
        </thead>
        <tbody>
        {filteredByDate.slice(startIndex, endIndex).map((val, index) => (
  <tr key={index}>
    <td className="truncate">{startIndex + index + 1}</td>
    <td className="truncate">{val.productName}</td>
    <td className="truncate">{val.orderId}</td>
    <td className="truncate">{val.customerPhone}</td>
    <td className="truncate">{val.customerName}</td>
    <td className="truncate">{val.quantity}</td>
    <td className="truncate">{val.total}</td>
    <td className="truncate">{val.date}</td>
    <td className="truncate font-bolt red ">{val.paymentStatus === "0" ? "Due" : "Paid"}</td>
    <td className="truncate">
      {val.paymentStatus === "1" ? (
        <Link to={"/viewPaidCustomers/" + val.orderId}>
          <button className="logout-btn">View</button>
        </Link>
      ) : null}
    </td>
  </tr>
))}


        </tbody>
      </table>
    </>
  );
};

export default TableMain;
