import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import User from '../pages/User';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Explore from '../pages/Explore';
import Bookmarks from '../pages/Bookmarks';
import Posts from '../pages/Posts';
import Mockman from '../pages/Mocckman';
import { useDispatch } from 'react-redux';
import { getFromLocalStorage } from '../helpers';
import { useEffect } from 'react';
import { loginSuccess } from '../redux/reducers/authSlice';
import PrivateRoute from './privateRoute';



const Navigation = () => {
  const dispatch = useDispatch();
  const encoddedToken = getFromLocalStorage("token");
  const foundUser = getFromLocalStorage("user");

  useEffect(() => {
    if (Object.keys(getFromLocalStorage('user')).length) {
      dispatch(
        loginSuccess({
          encoddedToken,
          foundUser,
        }),
      );
    }
  }, [encoddedToken]);
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/user/:userId" element={<User />} />
       <Route path="/explore" element={<Explore />} />
       <Route path="/bookmark" element={<Bookmarks />} />
       <Route path="/posts/:postId" element={<Posts />} />
       <Route path="/mockman" element={<Mockman />} />
      </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      
      
    </Routes>
  )
}

export default Navigation;