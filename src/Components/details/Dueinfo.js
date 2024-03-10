import React from 'react';

const Dueinfo = () => {
    return (
        <>
         <div class="row justify-content-center p-5">
          <div class="col-md-6 table-container">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td class="font-bolt">Information</td>
                  <td></td>
                </tr>
                <tr>
                  <td >Customer Name</td>
                  <td >Shakawat shopon</td>
                </tr>
                <td >Customer Phone</td>
                  <td >01642956206</td>
                <tr>
                    <td >Total Price</td>
                    <td >206 BDT</td>
                </tr>
                <tr>
                    <td >Product Id</td>
                    <td >2987368</td>
                </tr>
                <tr>
                    <td >Product Price</td>
                    <td >876 BDT</td>
                </tr>
                <tr>
                    <td >Product Quantity</td>
                    <td >5 BDT</td>
                </tr>
                <tr>
                    <td class="red font-bolt">total Dues</td>
                    <td class="red font-bolt">54 BDT</td>
                </tr>

              </tbody>
              
            </table>
            <button class="logout-btn mt-3">View Bill</button>
            <button class="logout-btn mt-3 ms-3">Paid</button>
          </div>
        </div>
        </>
    );
};

export default Dueinfo;