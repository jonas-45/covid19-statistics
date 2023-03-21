import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar';

const Root = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
);

export default Root;
