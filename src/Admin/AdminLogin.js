import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContexts';
import { useNavigate } from 'react-router';


const AdminLogin = () => {
  const { loginAdmin, error, admin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    loginAdmin(email, password);
    // Reset fields after submitting the form
    setEmail("");
    setPassword("");
  };

 
    // If user data doesn't exist, render login form
    return (
      <>
        <div className=" position-relative border">
          <div className="login-form">
            <h3 className="text-center my-5 font-bolt">Inventory System (admin) </h3>
            <form onSubmit={onSubmit}>
              {/* Email input */}
              <div data-mdb-input-init="" className="form-outline mb-4">
                <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" id="form2Example1" className="form-control" />
                <label
                  className="form-label mt-2 font-bolt"
                  htmlFor="form2Example1"
                >
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div data-mdb-input-init="" className="form-outline mb-4">
                <input
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                  type="password"
                  id="form2Example2"
                  className="form-control"
                />
                <label
                  className="form-label mt-2 font-bolt"
                  htmlFor="form2Example2"
                >
                  Password
                </label>
              </div>
              {/* Submit button */}
              <button
                data-mdb-ripple-init=""
                type="submit"
                className="btn btn-primary btn-block mb-4"
              >
                Sign in
              </button>
              
              {/* Error message */}
              {error && <div className="text-danger">{error}</div>}
              {/* Login message */}
              {loginMessage && <div className="text-success">{loginMessage}</div>}
              {/* Register buttons */}
              <div className="text-center mt-5">
                <p className="font-bolt prime-color">
                  Please Fill the form Correctly
                </p>
                <p>By Login You can Go to the Dashboard:</p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  
};

export default AdminLogin;
