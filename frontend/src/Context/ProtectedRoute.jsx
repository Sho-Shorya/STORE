import { Navigate, Outlet } from "react-router-dom";
import React, { Component } from 'react'

const ProtectedRoute = ({children}) => {
  const isAuth = localStorage.getItem("isAuth") === "true";
  return isAuth ? children : <Navigate to="/" />
};

export default ProtectedRoute