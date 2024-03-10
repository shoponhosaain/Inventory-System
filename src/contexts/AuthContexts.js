import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userData from "../mockDatabase/Users.json";
import adminData from "../mockDatabase/Admin.json";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate(); // Access navigate function
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem('admin');
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });
  const [error, setError] = useState("");
  
  const loginUser = (email, password) => {
    const loggedInUser = userData.find(user => user.email === email && user.password === password);

    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      setAdmin(null); // Reset admin state to null
      localStorage.removeItem('admin'); // Remove admin data from local storage
      setError("");
      navigate('/dashboard'); // Redirect to dashboard page after successful login
    } else {
      setError("Invalid email or password");
    }
  };

  const loginAdmin = (email, password) => {
    const loggedInAdmin = adminData.find(admin => admin.email === email && admin.password === password);

    if (loggedInAdmin) {
      setAdmin(loggedInAdmin);
      localStorage.setItem('admin', JSON.stringify(loggedInAdmin));
      setUser(null); // Reset user state to null
      localStorage.removeItem('user'); // Remove user data from local storage
      setError("");
      navigate('/AdminDashboard'); // Redirect to admin dashboard page after successful login
    } else {
      setError("Invalid email or password");
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/'); // Redirect to root route after user logout
  };

  const logoutAdmin = () => {
    setAdmin(null);
    localStorage.removeItem('admin');
    navigate('/admin'); // Redirect to admin login page after admin logout
  };

  return (
    <AuthContext.Provider value={{ user, admin, loginUser, loginAdmin, logoutUser, logoutAdmin, error }}>
      {children}
    </AuthContext.Provider>
  );
};
