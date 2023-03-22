import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar';

const Root = () => (
  <div className='d-flex flex-column'>
    <NavBar />
    <Outlet className="mt-5"/>
  </div>
);

export default Root;
