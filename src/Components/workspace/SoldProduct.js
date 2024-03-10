import React from 'react';

const SoldProduct = () => {
    return (
        <>
        <div className="container p-0 radius bg-white">
  <div className="heading  d-flex justify-content-between mt-5 red-light-bg radius align-items-center px-4 py-1">
    <h5 className="text-sm red font-bolt">Sold Product</h5>
    {/* pagination */}
    <div className="pagination d-flex align-items-center">
      {/* search */}
      <div className="input-group  me-4 ">
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
  <table className="table my-3">
    <thead>
      <tr style={{ padding: "1rem" }}>
        <th className="col-1">No</th>
        <th className="truncate">Product Name</th>
        <th className="truncate">Order Id</th>
        <th className="truncate">Customer Phone</th>
        <th className="truncate">Customer Name</th>
        <th className="truncate">Quantity</th>
        <th className="truncate">Total</th>
        <th className="truncate">Date</th>
        <th className="truncate">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="truncate">1</td>
        <td className="truncate">Lorem ipsum dolor sit amet.</td>
        <td className="truncate">0734</td>
        <td className="truncate">01642956206</td>
        <td className="truncate">md mamun</td>
        <td className="truncate">3</td>
        <td className="truncate">550 tk</td>
        <td className="truncate">2/12/2024</td>
        <td className="truncate">
          <button className="logout-btn">View</button>
        </td>
      </tr>
      <tr>
        <td className="truncate">1</td>
        <td className="truncate">Lorem ipsum dolor sit amet.</td>
        <td className="truncate">0734</td>
        <td className="truncate">01642956206</td>
        <td className="truncate">md mamun</td>
        <td className="truncate">3</td>
        <td className="truncate">550 tk</td>
        <td className="truncate">2/12/2024</td>
        <td className="truncate">
          <button className="logout-btn">View</button>
        </td>
      </tr>
      <tr>
        <td className="truncate">1</td>
        <td className="truncate">Lorem ipsum dolor sit amet.</td>
        <td className="truncate">0734</td>
        <td className="truncate">01642956206</td>
        <td className="truncate">md mamun</td>
        <td className="truncate">3</td>
        <td className="truncate">550 tk</td>
        <td className="truncate">2/12/2024</td>
        <td className="truncate">
          <button className="logout-btn">View</button>
        </td>
      </tr>
      <tr>
        <td className="truncate">1</td>
        <td className="truncate">Lorem ipsum dolor sit amet.</td>
        <td className="truncate">0734</td>
        <td className="truncate">01642956206</td>
        <td className="truncate">md mamun</td>
        <td className="truncate">3</td>
        <td className="truncate">550 tk</td>
        <td className="truncate">2/12/2024</td>
        <td className="truncate">
          <button className="logout-btn">View</button>
        </td>
      </tr>
      <tr>
        <td className="truncate">1</td>
        <td className="truncate">Lorem ipsum dolor sit amet.</td>
        <td className="truncate">0734</td>
        <td className="truncate">01642956206</td>
        <td className="truncate">md mamun</td>
        <td className="truncate">3</td>
        <td className="truncate">550 tk</td>
        <td className="truncate">2/12/2024</td>
        <td className="truncate">
          <button className="logout-btn">View</button>
        </td>
      </tr>
      <tr>
        <td className="truncate">1</td>
        <td className="truncate">Lorem ipsum dolor sit amet.</td>
        <td className="truncate">0734</td>
        <td className="truncate">01642956206</td>
        <td className="truncate">md mamun</td>
        <td className="truncate">3</td>
        <td className="truncate">550 tk</td>
        <td className="truncate">2/12/2024</td>
        <td className="truncate">
          <button className="logout-btn">View</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

        </>
    );
};

export default SoldProduct;