import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import AppFooter from './AppFooter';

export default function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet/>
        <AppFooter/>
    </div>
  )
}
