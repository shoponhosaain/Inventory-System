import React, { useState } from 'react';
import orders from "../../mockDatabase/order.json";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const DueList = () => {
  const [searchPhone, setSearchPhone] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
    setSearchDate('');
  };

  const filterOrdersByDate = (orderDate) => {
    if (!dateFilter) return true;

    const today = new Date();
    const orderDateObj = new Date(orderDate);
    const filterType = dateFilter.toLowerCase();

    if (filterType === 'today') {
      return orderDateObj.toDateString() === today.toDateString();
    } else if (filterType === 'month') {
      return orderDateObj.getMonth() === today.getMonth();
    } else if (filterType === 'week') {
      const todayWeek = today.getDay();
      const orderDateWeek = orderDateObj.getDay();
      const diff = today.getDate() - todayWeek + (todayWeek === 0 ? -6 : 1);
      const startOfWeek = new Date(today.setDate(diff));
      const endOfWeek = new Date(today.setDate(today.getDate() + 6));
      return orderDateObj >= startOfWeek && orderDateObj <= endOfWeek;
    } else if (filterType === 'year') {
      return orderDateObj.getFullYear() === today.getFullYear();
    }
  };

  return (
    <div className="container p-0 radius bg-white">
      <div className="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
        <h5 className="text-sm red font-bolt">Total Dues</h5>
        <div className="pagination d-flex align-items-center">
          <div className="input-group me-4">
            <input type="text" className="form-control border-none" placeholder="Search phone" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setSearchPhone(e.target.value)} />
          </div>
          <select className="form-select me-4" value={dateFilter} onChange={handleDateFilterChange}>
            <option value="">All Dates</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <p className="text-md font-bolt pt-2 me-2 mt-2">{currentPage}/{Math.ceil(orders.length / ordersPerPage)}</p>
          <div className="prev-arrow py-2 px-3 ms-3 bg-white radius" onClick={() => setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)}>
          <BsArrowLeft />
          </div>
          <div className="next-arrow py-2 px-3 ms-3 bg-white radius" onClick={() => setCurrentPage(currentPage === Math.ceil(orders.length / ordersPerPage) ? currentPage : currentPage + 1)}>
          <BsArrowRight />
          </div>
        </div>
      </div>

      <table className="table my-3">
        <thead>
          <tr>
            <th className="col-1">No</th>
            <th className="truncate">Product Name</th>
            <th className="truncate font-bolt red">Total Due</th>
            <th className="truncate">Customer Phone</th>
            <th className="truncate">Customer Name</th>
            <th className="truncate">Quantity</th>
            <th className="truncate">Total Price</th>
            <th className="truncate">Date</th>
            <th className="truncate">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.filter(order => {
            if (searchPhone === "") {
              return filterOrdersByDate(order.date);
            } else if (order.customerPhone.includes(searchPhone)) {
              return filterOrdersByDate(order.date);
            }
          }).map((order, index) => (
            <tr key={index}>
              <td className="truncate">{order.orderId}</td>
              <td className="truncate">{order.productName}</td>
              <td className="truncate font-bolt red">{order.due}</td>
              <td className="truncate">{order.customerPhone}</td>
              <td className="truncate">{order.customerName}</td>
              <td className="truncate">{order.quantity}</td>
              <td className="truncate">{order.total}</td>
              <td className="truncate">{order.date}</td>
              <td className="truncate"><button className="logout-btn red-bg">delete</button></td>
            </tr>
          ))}

<tr >
              <td className="truncate"></td>
              <td className="truncate"></td>
              <td className="truncate font-bolt red">5654 BDT</td>
              <td className="truncate"></td>
              <td className="truncate"></td>
              <td className="truncate"></td>
              <td className="truncate"></td>
              <td className="truncate"></td>
              <td className="truncate"></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DueList;
