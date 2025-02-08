// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user: { email, role }
  const navigate = useNavigate();

  // For simplicity, password must be "password"
  const login = (email, password) => {
    if (password !== 'password') {
      return { error: 'Invalid password' };
    }
    const lowerEmail = email.toLowerCase();
    let role = null;
    if (lowerEmail.includes('super-admin')) {
      role = 'super';
    } else if (lowerEmail.includes('sub-admin')) {
      role = 'sub';
    } else if (lowerEmail.includes('secretary')) {
      role = 'secretary';
    } else {
      return { error: 'Invalid email for dashboard access.' };
    }
    const loggedInUser = { email, role };
    setUser(loggedInUser);
    return { success: true, user: loggedInUser };
  };

  const logout = () => {
    setUser(null);
    navigate('/signin');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
