import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const BoxPagination = ({children,title}) => {
  return (
    <>
      <div class="container p-0 radius bg-white mt-5">
        <div class="Header">
          <div class="heading d-flex justify-content-between  red-light-bg radius align-items-center px-4 py-1">
            <h5 class="text-sm red font-bolt">152 {title}</h5>

            <div class="pagination d-flex align-items-center">
              <div class="input-group me-4">
                <input
                  type="text"
                  class="form-control border-none"
                  placeholder="Search here"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>

              <p class="text-md font-bolt pt-2 me-2 mt-2">1/10</p>
              <div class="prev-arrow py-2 px-3 ms-3 bg-white radius">
              <BsArrowLeft />
              </div>
              <div class="next-arrow py-2 px-3 ms-3 bg-white radius">
              <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default BoxPagination;
