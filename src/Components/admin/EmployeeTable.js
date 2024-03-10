import React from 'react';
import img from "../../assets/images/profile.png"
import { useAuth } from '../../contexts/AuthContexts'; // Import useAuth hook
import { Link } from 'react-router-dom';
import userdata from "../../mockDatabase/Users.json"; // Import user data
import DashboradCard from './../dashboard/DashboradCard';

const EmployeeTable = () => {
  const { logoutUser,admin } = useAuth(); // Get the logoutUser function from useAuth

  const handleLogout = () => {
    logoutUser(); // Call the logoutUser function when the logout button is clicked
  };

  return (
    <>
      <div className="container p-0">
        
        <div className="row mx-auto">
         
          
            <DashboradCard/>
         
          <div className="col col-md-4 ms-md-5 mt-4 mt-md-0 bg-white radius height-100">
            <div className="profile  px-3">
              <div className="info  d-flex align-items-center">
                <div
                  className="img rounded-pill bg-grey "
                  style={{ width: 82, height: 48 }}
                >
                  <img
                    src={img}
                    width="100%"
                    className="rounded-pill"
                    alt=""
                  />
                </div>
                <div className="name  ms-3 mt-5">
                  <h5 className="text-sm text-truncate  font-bolt mt-2 text-truncate">
                   {admin.username}
                  </h5>
                </div>
              </div>
              <div className="email  w-100 d-flex align-items-center mt-2">
                <p className="text-truncate text-md  font-bolt mt-5">
                  {" "}
                 {admin.email}
                </p>
                <button className="logout-btn ms-4 font mt-4" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="container bg-white mt-5 pb-5">
            <Link to={"/AddEmployee"}>
              <button style={{ float: "right" }} className="view-btn m-5">
                Add Employee
              </button>
            </Link>
            <table className="table my-3 mt-3">
              <thead>
                <tr style={{ padding: "1rem" }}>
                  <th className="col-1">No</th>
                  <th className="truncate">Employee Name</th>
                  <th className="truncate">UserId</th>
                  <th className="truncate">Email</th>
                  <th className="truncate">Password</th>
                  <th className="truncate">Mobile Phone</th>
                  <th className="truncate">Address</th>
                  <th className="truncate">Action</th>
                </tr>
              </thead>
              <tbody>
                {userdata.map((user, index) => (
                  <tr key={index}>
                    <td className="truncate">{index + 1}</td>
                    <td className="truncate">{user.username}</td>
                    <td className="truncate">{user.userid}</td>
                    <td className="truncate">{user.email}</td>
                    <td className="truncate">{user.password}</td>
                    <td className="truncate">{user.phone}</td>
                    <td className="truncate">{user.address}</td>
                    <td className="truncate"><button className='view-btn red-bg'>Remove</button> </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
