import React from "react";

const ProductTable = () => {
  return (
    <>
      <div className="container p-0 radius bg-white">
        <div className="Header">
          <div className="heading d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
            <h5 className="text-sm red font-bolt">435 Products</h5>
            {/* pagination */}
            <div className="pagination d-flex align-items-center">
              {/* search */}
              <div className="input-group me-4">
                <input
                  type="text"
                  className="form-control border-none"
                  placeholder="Search here"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
              {/* search */}
              <p className="text-md font-bolt pt-2 me-2 mt-2">1/10</p>
              <div className="prev-arrow py-2 px-3 ms-3 bg-white radius">
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div className="next-arrow py-2 px-3 ms-3 bg-white radius">
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
            {/* pagination */}
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="category my-3">
              <button className="category-btn border-none radius-sm font-bolt mb-2 white mx-2">
                Shirt
              </button>
              <button className="category-btn border-none radius-sm font-bolt my-2 white mx-2">
                Pant
              </button>
              <button className="category-btn border-none radius-sm font-bolt my-2 white mx-2">
                Watches
              </button>
              <button className="category-btn border-none radius-sm font-bolt my-2 white mx-2">
                Shirt
              </button>
              <button className="category-btn border-none radius-sm font-bolt my-2 white mx-2">
                Shirt
              </button>
            </div>
          </div>
          <div className="col-9 mx-auto">
            <table className="table-2 my-3">
              <tbody>
                <tr style={{ padding: "1rem" }}>
                  <th className="col-1">No</th>
                  <th className="truncate">Product Name</th>
                  <th className="truncate">Product Id</th>
                  <th className="truncate">Price</th>
                  <th className="truncate">In Stock</th>
                  <th className="truncate">Upload Date</th>
                  <th className="truncate">Action</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="truncate">1</td>
                  <td className="truncate">Lorem ipsum dolor sit amet.</td>
                  <td className="truncate">4734</td>
                  <td className="truncate">520 BDT</td>
                  <td className="truncate">50 items</td>
                  <td className="truncate">2/12/2024</td>
                  <td className="truncate">
                    <button className="logout-btn">Sell</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
