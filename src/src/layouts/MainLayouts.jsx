import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import {Outlet} from 'react-router-dom'

const MainLayouts = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Outlet/>
      
    </div>
  );
};

export default MainLayouts;