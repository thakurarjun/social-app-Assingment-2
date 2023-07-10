import React from 'react'
import { getFromLocalStorage } from '../helpers'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {

    const encodedToken  = getFromLocalStorage("token");
    const foundUser = getFromLocalStorage('user');
  return foundUser || Object.keys(getFromLocalStorage('user')).length ? <Outlet /> : <Navigate to="/login" />
};
  


export default PrivateRoute;