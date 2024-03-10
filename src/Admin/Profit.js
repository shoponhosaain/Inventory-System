import React from 'react';
import AdminHeader from './../Components/admin/AdminHeader';
import Boiler from './../Components/layout/Boiler';
const Profit = () => {
    return (
        <>
          <AdminHeader/>
       <Boiler>
       <div className="container p-0 radius bg-white">
  <div className="Header">
    <div className="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
      <h5 className="text-sm p-3 red font-bolt">Stock Info</h5>
    </div>
  </div>
  <div className="row justify-content-center p-5">
    <div className="col-md-6 table-container">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="font-bolt">Information</td>
            <td />
          </tr>
          <tr>
            <td>Product total</td>
            <td>344 items</td>
          </tr>
          <tr>
            <td>Net Stock price</td>
            <td>34653 BDT</td>
          </tr>
          <tr>
            <td className="red font-bolt">total Profit</td>
            <td className="red font-bolt">54 BDT</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
</div>

       </Boiler>

       </>
    );
};

export default Profit;