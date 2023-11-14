// components/Layout.jsx

import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">

        <main>{children}</main>

      </div>
      <Footer />
    </div>
  );
};

export default Layout;
