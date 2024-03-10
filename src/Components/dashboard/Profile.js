import React from "react";
import img from "../../assets/images/profile.png";
import { useAuth } from "../../contexts/AuthContexts";

const Profile = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <>
      <div className="col col-md-4 ms-md-5 mt-4 mt-md-0 bg-white radius height-100">
        <div className="profile  px-3">
          <div className="info  d-flex align-items-center">
            <div
              className="img rounded-pill bg-grey "
              style={{ width: 82, height: 48 }}
            >
              <img src={img} width="100%" className="rounded-pill" alt="" />
            </div>
            <div className="name  ms-3 mt-5">
              <h5 className="text-sm text-truncate  font-bolt mt-2 text-truncate">
                {user ? user.username : "Guest"}
              </h5>
            </div>
          </div>
          <div className="email  w-100 d-flex align-items-center mt-2">
            <p className="text-truncate text-md  font-bolt mt-5">
              Email: {user ? user.email : ""}
            </p>
            {user && (
              <button onClick={handleLogout} className="logout-btn ms-4 font mt-4">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
