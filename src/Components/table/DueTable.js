import React from 'react';

const DueTable = () => {
    return (
        <>
                      <table class="table my-3">
                <thead>
                  <tr>
                    <th class="col-1">No</th>
                    <th class="truncate">Product Name</th>
                    <th class="truncate font-bolt red">Total due</th>
                    <th class="truncate">Customer Phone</th>
                    <th class="truncate">Customer Name</th>
                    <th class="truncate">Quantity</th>
                    <th class="truncate">Total</th>
                    <th class="truncate">Date</th>
                    <th class="truncate">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="truncate">1</td>
                    <td class="truncate">Lorem ipsum dolor sit amet.</td>
                    <td class="truncate font-bolt red">300 BDT</td>
                    <td class="truncate">01642956206</td>
                    <td class="truncate">md mamun</td>
                    <td class="truncate">3</td>
                    <td class="truncate">550 tk</td>
                    <td class="truncate">2/12/2024</td>
                    <td class="truncate"><button class="logout-btn red-bg">Clear due</button></td>
                  </tr>
  
  
    
                  <tr>
                      <td class="truncate"></td>
                      <td class="truncate"></td>
                      <td class="truncate font-bolt red">3430 BDT</td>
                      <td class="truncate"></td>
                      <td class="truncate"></td>
                      <td class="truncate"></td>
                      <td class="truncate"></td>
                      <td class="truncate"></td>
                      <td class="truncate"></td>
                    </tr>
                </tbody>
              </table>
        </>
    );
};

export default DueTable;