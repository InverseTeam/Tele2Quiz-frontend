import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
// import LeftBar from '../LeftBar/LeftBar';
import { useAuth } from '../hooks/useAuth';

// import "./Layout.scss";

const Layout = () => {
  const auth = useAuth();
  // const auth = true;

  return auth ? (
    <div className='w-screen h-screen overflow-auto flex flex-col'>
      {/* <LeftBar /> */}
      <Header/>
      <Outlet />
    </div>
  ) : (
    <Navigate to='login' />
  );
};

export default Layout;
