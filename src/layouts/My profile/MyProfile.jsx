import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../Component/Home/Navber';
import Footer from '../../Component/Home/Footer';

export default function MyProfile() {
  return (
    <div>
        <Navber></Navber>
      {/* The outlet will render the child routes */}
 <div className='h-screen'>     <Outlet /></div>

      <Footer></Footer>
    </div>
  );
}

