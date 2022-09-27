import React from 'react';
import Landing from './Landing';
import Ministries from './Ministries';
import About from './About';
import {
    Routes,
    Route
   } from 'react-router-dom';
   

const Nav = () => {
  return (

    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Nav;
