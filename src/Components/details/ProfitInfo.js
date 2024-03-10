import React from 'react';

const ProfitInfo = () => {
    return (
      <>
      <div class="container p-0 radius bg-white">

<div class="Header">
    <div
      class="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1"
    >
      <h5 class="text-sm p-3 red font-bolt">Stock Info</h5>
    
    </div>
  </div>

  <div class="row justify-content-center p-5">
    <div class="col-md-6 table-container">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td class="font-bolt">Information</td>
            <td></td>
          </tr>
          <tr>
            <td >Product total</td>
            <td >344 items</td>
          </tr>
          <td >Net price</td>
            <td >34653 BDT</td>
         
          <tr>
              <td class="red font-bolt">total Dues</td>
              <td class="red font-bolt">54 BDT</td>
          </tr>

        </tbody>
        
      </table>
     
    </div>
  </div>
</div>
      </>
    );
};

export default ProfitInfo;