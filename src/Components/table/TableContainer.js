import React from 'react';

const TableContainer = () => {
    return (
        <>
        <div class="Header">
  <div class="heading  d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
      <h5 class="text-sm red font-bolt">Sold Product</h5>

      <div class="pagination d-flex align-items-center">

        <div class="input-group  me-4 ">
          <input type="text" class="form-control border-none" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          
        </div>

          <p class="text-md font-bolt pt-2 me-2 mt-2">1/10</p>
          <div class="prev-arrow py-2 px-3 ms-3 bg-white radius">
              <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div class="next-arrow py-2 px-3 ms-3 bg-white radius">
              <i class="fa-solid fa-arrow-right"></i>
          </div>
      </div>
     
  </div>
</div>
        </>
    );
};

export default TableContainer;