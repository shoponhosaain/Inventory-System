import React from "react";

const EmployeeTable = () => {
  return (
    <>
      <div class="container bg-white mt-5 pb-5">
        <button style={{ float: "right" }} className="view-btn m-5">
          Add Employye
        </button>

        <table class="table my-3 mt-3">
          <thead>
            <tr>
              <th class="col-1">No</th>
              <th class="truncate">Employee Name</th>
              <th class="truncate">Email</th>
              <th class="truncate">Password</th>
              <th class="truncate">Mobile Phone</th>
              <th class="truncate">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="truncate">1</td>
              <td class="truncate">md mamun</td>
              <td class="truncate">hshopn14@gmail.com</td>
              <td class="truncate">01642956206</td>
              <td class="truncate">Kamrangirchar Dahaka</td>
              <td class="truncate">
                <button class="logout-btn">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeTable;
