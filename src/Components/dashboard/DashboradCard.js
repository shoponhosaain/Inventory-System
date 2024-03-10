import React from "react";
import { BsBoxSeamFill } from "react-icons/bs";
import { BsBoxes } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

const DashboradCard = () => {
  return (
    <>
      <div className="col col-md-7">
        <div className="row mx-auto bg-white justify-content-center">
          <div
            className="col prime-light-bg  mb- col-md-3 radius text-center my-5 mx-3"
            style={{ padding: 27 }}
          >
            <BsBoxSeamFill className="text-xxxl my-2 prime-color" />
            <h5 className="text-md font-bolt my-2 prime-color text-truncate">
              50 items
            </h5>
            <p className="prime-color">In Stock</p>
          </div>
          <div
            className="col orange-light-bg  mb- col-md-3 radius text-center my-5 mx-3"
            style={{ padding: 27 }}
          >
            <BsBoxes className="text-xxxl my-2 orange"/>
            <h5 className="text-md font-bolt my-2 orange text-truncate">
              50 items
            </h5>
            <p className="orange">In Stock</p>
          </div>
          <div
            className="col red-light-bg mb- col-md-3 radius text-center my-5 mx-3"
            style={{ padding: 27 }}
          >
           <MdAttachMoney className="text-xxxl my-2 red"/>
            <h5 className="text-md font-bolt my-2 red text-truncate">
              50 items
            </h5>
            <p className="red">In Stock</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboradCard;
